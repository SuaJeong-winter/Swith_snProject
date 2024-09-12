'use client'

import { useToast } from '~/components/ui/use-toast'
import { Toaster } from '~/components/ui/toaster'

import IconBell from '~/assets/createStudy/icon_bell.svg'
import MpProfile from '~/assets/mp_profile.svg'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import StudyHeader from '~/components/studycreate/study-header'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { createClient } from '~/utils/supabase/client'
import { Chip } from '~/components/ui/chip'
import { match } from 'assert'
import BottomNavBar from '~/components/common/bottom-nav-bar'
const supabase = createClient()

export default function WaitingListPage({
  params,
}: {
  params: { studyid: string }
}) {
  const { toast } = useToast()
  //supabase에 데이터 연결
  const [studyApplyData, setStudyApplyData] = useState<any[]>([])
  const [profileData, setProfileData] = useState<any[]>([])

  const [applynum, setApplynum] = useState(0) //신청자
  const [maxMember, setMaxMember] = useState(0)
  const [acceptedMembers, setAcceptedMembers] = useState<string[]>([]) //수락된 인원 수
  // const [loading, setLoading] = useState(false)

  // ========================================
  useEffect(() => {
    const memberListData = async () => {
      // setLoading(true)
      try {
        const { data: memberData, error: memberError } = await supabase
          .from('Study-apply')
          .select('*')
          .eq('study_id', params.studyid)

        if (memberError) {
          console.log('Member error', memberError)
          // setLoading(false)
        } else {
          if (memberData && memberData.length > 0) {
            console.log('Study-apply 데이터', memberData)
            setStudyApplyData(memberData)
            setApplynum(memberData.length)

            // Study 테이블에서 기존 applied_member 가져오기
            const { data: studyData, error: studyError } = await supabase
              .from('Study')
              .select('applied_member,max_member,member')
              .eq('id', params.studyid)
              .single()

            if (studyError) {
              console.log('Study 가져오기 에러', studyError)
              // setLoading(false)
              // return
            }
            // 기존 applied_member 배열에 새로운 user_id 추가
            setMaxMember(studyData?.max_member || 0) // max_member 상태에 저장
            setAcceptedMembers(studyData?.member || []) // 수락된 멤버 목록 저장
            console.log('Max Member:', studyData?.max_member)
            const existingAppliedMembers = studyData?.applied_member || []
            const newUserIds = memberData.map((member) => member.user_id)
            console.log('New User IDs:', newUserIds)

            // 중복 허용하여 배열 합치기 (정상작동하면 삭제)
            // const updatedAppliedMembers = [
            //   ...existingAppliedMembers,
            //   ...newUserIds,
            // ]

            // 중복을 방지하기 위해 Set을 사용하여 유니크한 값만 추가(정상 작동하면 추가)
            const updatedAppliedMembers = Array.from(
              new Set([...existingAppliedMembers, ...newUserIds]),
            )

            // Study 테이블의 applied_member 컬럼 업데이트
            const { error: updateError } = await supabase
              .from('Study')
              .update({ applied_member: updatedAppliedMembers }) // uuid[] 배열로 업데이트
              .eq('id', params.studyid)

            if (updateError) {
              console.log('Study 업데이트 에러', updateError)
            } else {
              console.log('applied_member 업데이트 성공')

              const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .in('id', updatedAppliedMembers) // applied_member 배열의 UUID와 일치하는 profiles 데이터 가져오기

              if (profileError) {
                console.log('프로필 데이터 가져오기 에러', profileError)
              } else {
                console.log('Profiles 데이터', profileData) // profiles 데이터를 콘솔에 출력
                setProfileData(profileData) // 가져온 프로필 데이터를 상태에 저장
              }
            }
          } else {
            console.log('해당 study_id에 대한 데이터가 없다')
          }
        }
      } catch (error) {
        console.error('Error', error)
      }
    }

    memberListData()
  }, [params.studyid]) // 의존성 배열이 비어있으므로, 이 효과는 컴포넌트가 처음 렌더링될 때 한 번만 실행

  const handleCloseStudy = async () => {
    try {
      const { error } = await supabase
        .from('Study')
        .update({ status: true })
        .eq('id', params.studyid)

      if (error) {
        console.error('스터디 상태 업데이트 오류:', error)
        return
      }

      console.log('스터디 상태가 마감으로 업데이트되었습니다.')
    } catch (error) {
      console.error('handleCloseStudy 오류:', error)
    }
  }

  // 수락과 거절
  const onAccept = async (user_id: string) => {
    if (remainingSlots === 0) {
      toast({
        description: (
          <div className="flex items-center">
            <IconBell />
            <span>참여 가능한 인원이 없습니다</span>
          </div>
        ),
        style: {
          background: 'gray-300',
          width: '300px',
          height: '30px',
          marginBottom: '10px',
        },
      })

      return // 더 이상 수락하지 않도록 함수 종료
    }

    try {
      const { data: studyData, error: studyError } = await supabase
        .from('Study')
        .select('member, applied_member')
        .eq('id', params.studyid)
        .single()

      if (!studyError) {
        if (studyData.member.includes(user_id)) {
          toast({
            description: (
              <div className="flex items-center">
                <IconBell />
                <span>이미 수락된 멤버입니다</span>
              </div>
            ),
            style: {
              background: 'gray-300',
              width: '300px',
              height: '30px',
              marginBottom: '5px',
            },
          })
          return // 이미 수락된 경우 함수 종료
        }

        const updatedMembers = [...(studyData.member || []), user_id]

        // applied_member 배열에서 user_id 제거
        const updatedAppliedMembers = studyData.applied_member.filter(
          (id: string) => id !== user_id,
        )

        const { error: updateError } = await supabase
          .from('Study')
          .update({
            member: updatedMembers,
            applied_member: updatedAppliedMembers,
          })
          .eq('id', params.studyid)

        if (!updateError) {
          const { error: statusUpdateError } = await supabase
            .from('Study-apply')
            .update({ status: '수락됨' })
            .eq('study_id', params.studyid)
            .eq('user_id', user_id)

          if (!statusUpdateError) {
            setAcceptedMembers(updatedMembers) // 수락된 멤버 목록 업데이트

            // 신청자 제거
            setStudyApplyData((prevData) =>
              prevData.filter((applicant) => applicant.user_id !== user_id),
            )

            console.log('User accepted:', user_id)
          }
        }
      }
    } catch (error) {
      console.error('Error in onAccept:', error)
    }
  }

  // 전체 수락
  const onAcceptAll = async () => {
    if (studyApplyData.length + acceptedMembers.length > maxMember) {
      toast({
        description: (
          <div className="flex items-center">
            <IconBell />
            <span>신청자가 수락 가능 인원을 초과합니다</span>
          </div>
        ),
        style: {
          background: 'gray-300',
          width: '300px',
          height: '30px',
          marginBottom: '10px',
        },
      })
      return // 수락 중단
    }
    try {
      const { data: studyData, error: studyError } = await supabase
        .from('Study')
        .select('member, applied_member, max_member')
        .eq('id', params.studyid)
        .single()

      if (!studyError) {
        const newMembers = [
          ...(studyData.member || []),
          ...studyApplyData.map((user) => user.user_id),
        ]

        const updatedAppliedMembers = studyData.applied_member.filter(
          (id: string) => !studyApplyData.some((user) => user.user_id === id),
        )

        const { error: updateError } = await supabase
          .from('Study')
          .update({ member: newMembers, applied_member: updatedAppliedMembers })
          .eq('id', params.studyid)

        if (!updateError) {
          const userIds = studyApplyData.map((user) => user.user_id)

          const { error: statusUpdateError } = await supabase
            .from('Study-apply')
            .update({ status: '수락됨' })
            .in('user_id', userIds)
            .eq('study_id', params.studyid)

          if (!statusUpdateError) {
            setAcceptedMembers(newMembers)
            setStudyApplyData([])
          }
        }
      }
    } catch (error) {
      console.error('Error in handleAcceptAll:', error)
    }
  }

  // 거절 함수
  const onReject = async (user_id: string) => {
    try {
      // Study 테이블에서 applied_member 업데이트 (삭제)
      const { data: studyData, error: studyError } = await supabase
        .from('Study')
        .select('applied_member') // applied_member 가져오기
        .eq('id', params.studyid)
        .single()

      if (studyError) {
        console.error('Error fetching study data:', studyError)
        return
      }

      // applied_member 배열에서 user_id 제거
      const updatedAppliedMembers = studyData.applied_member.filter(
        (id: string) => id !== user_id,
      )

      // Study 테이블 업데이트
      const { error: updateError } = await supabase
        .from('Study')
        .update({ applied_member: updatedAppliedMembers }) // applied_member 업데이트
        .eq('id', params.studyid)

      if (updateError) {
        console.error('Error updating Study table:', updateError)
        return
      }

      // Study-apply 테이블에서 status를 '거절됨'로 업데이트
      const { error: statusUpdateError } = await supabase
        .from('Study-apply')
        .update({ status: '거절됨' })
        .eq('study_id', params.studyid)
        .eq('user_id', user_id)

      if (statusUpdateError) {
        console.error('Error updating status to "거절됨":', statusUpdateError)
        return
      }

      // 화면에서 신청자 제거
      setStudyApplyData((prevData) =>
        prevData.filter((applicant) => applicant.user_id !== user_id),
      )

      console.log('User rejected:', user_id)
    } catch (error) {
      console.error('Error in onReject:', error)
    }
  }

  const remainingSlots = maxMember - acceptedMembers.length

  // =========================================================

  return (
    <>
      <section className="flex min-h-dvh flex-col bg-white pb-[100px]">
        <div className="fixed bottom-[120px] mx-[50px] -translate-x-1/2 transform">
          <Toaster />
        </div>
        <StudyHeader href={`/apply/${params.studyid}`} />

        <div className="mt-[70px] h-1 w-[375px] border-transparent bg-slate-200"></div>
        <div className="mt-6 space-y-2 px-3">
          {studyApplyData.map((applicant) => {
            console.log('신청자', applicant)
            // user_id와 매칭되는 profile 데이터 찾기
            const matchedProfile = profileData.find(
              (p) => p.id === applicant.user_id,
            ) // profile 변수명을 matchedProfile로 변경

            return (
              <div key={applicant.user_id}>
                <div className="flex h-full flex-col space-y-3 rounded-md border-[2px] border-solid border-gray-200 bg-white">
                  <div className="flex h-[70px] items-center space-x-4 p-2">
                    <div className="flex-[0.2]">
                      <Link href={`/open-profile/${applicant.user_id}`}>
                        {matchedProfile?.profile_img ? (
                          <Image
                            src={matchedProfile.profile_img} // profile_img가 있는 경우
                            alt="프로필 이미지"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        ) : (
                          <MpProfile /> // profile_img가 없을 경우 기본 이미지
                        )}
                      </Link>
                    </div>
                    <div className="flex-[0.5] text-base text-black">
                      <p className="text-base">
                        {matchedProfile?.username || '이름 없음'}
                      </p>
                      <p className="text-sm">
                        {matchedProfile?.job_type || '직업 정보 없음'}
                      </p>
                      {/* <p className="text-xs">스터디 8회</p> */}
                    </div>

                    <div className="h-[30px] flex-[0.8] space-x-2 pl-[10px]">
                      <Button
                        className="h-[30px] w-[60px] rounded-2xl bg-gray-300 text-xs text-black"
                        onClick={() => onReject(applicant.user_id)}
                      >
                        거절
                      </Button>
                      <Button
                        className="h-[30px] w-[60px] rounded-2xl text-xs"
                        onClick={() => onAccept(applicant.user_id)}
                      >
                        수락
                      </Button>
                    </div>
                  </div>
                  <p className="px-3 text-sm">
                    {applicant.introduce || '소개가 없습니다'}
                  </p>
                  <div className="mt-3 grid grid-cols-4 gap-1 p-3">
                    {(matchedProfile?.study_style || []).map(
                      (style: string, index: number) => (
                        <Chip
                          key={index}
                          className="border-transparent bg-meetie-blue-1 text-xs"
                        >
                          {style}
                        </Chip>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="fixed bottom-[60px] flex h-[70px] w-[375px] items-center justify-center space-x-1 bg-white px-[20px]">
          <div>
            <p>참여 가능 인원</p>
            <p>
              <span className="text-meetie-blue-4">{remainingSlots}명 </span>/
              {maxMember}명
            </p>
          </div>
          {remainingSlots != 0 ? (
            <Button
              className="w-60 flex-[2] rounded-md border border-solid"
              onClick={onAcceptAll}
            >
              전체 수락하기
            </Button>
          ) : (
            <Link href={`/${params.studyid}/established`}>
              <Button
                className="w-60 flex-[2] rounded-md border border-solid"
                onClick={handleCloseStudy}
              >
                스터디 마감하기
              </Button>
            </Link>
          )}
        </div>
      </section>
      <BottomNavBar />
    </>
  )
}
