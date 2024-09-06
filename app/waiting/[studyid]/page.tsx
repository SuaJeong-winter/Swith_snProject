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

  const [applynum, setApplynum] = useState(1)
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

            // Study 테이블에서 기존 applied_member 가져오기
            const { data: studyData, error: studyError } = await supabase
              .from('Study')
              .select('applied_member')
              .eq('id', params.studyid)
              .single()

            if (studyError) {
              console.log('Study 가져오기 에러', studyError)
              // setLoading(false)
              // return
            }
            // 기존 applied_member 배열에 새로운 user_id 추가
            const existingAppliedMembers = studyData?.applied_member || []
            const newUserIds = memberData.map((member) => member.user_id)
            console.log('New User IDs:', newUserIds)

            // 중복 허용하여 배열 합치기 (정상작동하면 삭제)
            const updatedAppliedMembers = [
              ...existingAppliedMembers,
              ...newUserIds,
            ]

            // 중복을 방지하기 위해 Set을 사용하여 유니크한 값만 추가(정상 작동하면 추가)
            // const updatedAppliedMembers = Array.from(
            //   new Set([...existingAppliedMembers, ...newUserIds])
            // )

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

  // =========================================================

  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      {/* 토스터 메시지 */}
      <StudyHeader href="search" />

      <div className="mt-[70px] h-1 w-[375px] border-transparent bg-slate-200"></div>
      <div className="mt-6 space-y-4 px-3">
        {studyApplyData.map((applicant) => {
          // user_id와 매칭되는 profile 데이터 찾기
          const matchedProfile = profileData.find(
            (p) => p.id === applicant.user_id,
          ) // profile 변수명을 matchedProfile로 변경

          return (
            <div key={applicant.user_id}>
              <div className="h-[180px] space-y-1 rounded-md border-[2px] border-solid border-gray-200 p-2">
                <div className="mt-[8px] flex h-[70px] flex-row items-center justify-start space-x-2">
                  <Link href={`${applicant.user_id}/open-profile`}>
                    <MpProfile />
                  </Link>
                  <div className="text-base text-black">
                    <p className="text-base">
                      {matchedProfile.username || '이름 없음'}
                    </p>
                    <p className="text-sm">
                      {matchedProfile.job_type || '직업 정보 없음'}
                    </p>
                    <p className="text-xs">스터디 8회</p>
                  </div>

                  <div className="h-[30px] space-x-2 pl-[70px]">
                    <Button className="h-[30px] w-[60px] rounded-2xl bg-gray-300 text-xs text-black">
                      거절
                    </Button>
                    <Button className="h-[30px] w-[60px] rounded-2xl text-xs">
                      수락
                    </Button>
                  </div>
                </div>
                <p className="text-sm">
                  {applicant.introduce || '소개가 없습니다'}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      {/* <div className="mt-6 space-y-4 px-3">
        {studyApplyData.map((applicant) => 
        (
          <div key={applicant.user_id}>
            <div>2024년 06월 07일</div>
            <div className="h-[180px] space-y-1 rounded-md border-[2px] border-solid border-gray-200 p-2">
              <div className="mt-[8px] flex h-[70px] flex-row items-center justify-start space-x-2">
                <Link href={`${applicant.user_id}/open-profile`}>
                  <MpProfile />
                </Link>
                <div className="text-base text-black">
                  <p className="text-base">{profile?.name}</p>
                  <p className="text-sm">{profile?.job_type}</p>
                  <p className="text-xs">스터디 8회</p>
                </div>

                <div className="h-[30px] space-x-2 pl-[70px]">
                  <Button
                    className="h-[30px] w-[60px] rounded-2xl bg-gray-300 text-xs text-black"
                    // onClick={() => onReject(user.user_id)}
                  >
                    거절
                  </Button>
                  <Button
                    className="h-[30px] w-[60px] rounded-2xl text-xs"
                    // onClick={() => onAccept(user.user_id)}
                  >
                    수락
                  </Button>
                </div>
              </div>
              <p className="text-sm">
                {applicant.introduce || '소개가 없습니다'}
              </p>
              <div className="grid h-[10px] grid-cols-4 gap-1 text-xs">

              </div>
            </div>
          </div>
        )
        )}
      </div> */}
    </section>
  )
}
