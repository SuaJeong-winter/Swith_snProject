'use client'

import Link from 'next/link'
import MpProfile from '~/assets/mp_profile.svg'
import { StudyHeaderNoText } from '~/components/studycreate/study-header'
import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'
import { useEffect, useState } from 'react'
import { createClient } from '~/utils/supabase/client'
import { useRouter } from 'next/router'
import { getUser } from '~/apis/user-rls'
import Image from 'next/image'
const supabase = createClient()

export default function ApplyPage({ params }: { params: { studyid: string } }) {
  const [studyData, setStudyData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [username, setUsername] = useState<string | null>(null) // username
  const [userimg, setUserImg] = useState<string | null>(null) // user프로필
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null)

  const LogInUser = async () => {
    const user = await getUser()
    console.log(user)
    if (user) {
      setLoggedInUser(user.id)
    } else {
      console.log('no user data found')
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await LogInUser()
        // Study 테이블에서 데이터를 가져옵니다.
        const { data: studyData, error: studyError } = await supabase
          .from('Study')
          .select('*')
          .eq('id', params.studyid)
          .single()

        if (studyError) {
          console.error('Error fetching study data:', studyError)
          return
        }

        // profiles 테이블에서 owner와 일치하는 id가 있는지 확인합니다.
        if (studyData && studyData.owner) {
          const { data: profileData, error: profileError } = await supabase
            .from('profiles') // Assuming the profiles table name is "profiles"
            .select('id,username,profile_img')
            .eq('id', studyData.owner)
            .single()

          if (profileError) {
            console.error('Error fetching profile data:', profileError)
          } else {
            // owner와 profiles.id가 일치하는 경우 true 출력
            if (profileData) {
              console.log(profileData.username)
              setUsername(profileData.username) // 상태에 username 저장
              setUserImg(profileData.profile_img)
            }
          }
        }

        setStudyData(studyData)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.studyid])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!studyData) {
    return <p>Study not found</p>
  }

  const applynum: number = 1

  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <StudyHeaderNoText />
      <div className="px-3">
        <div className="flex flex-row items-center space-x-4 space-y-2 pt-[60px]">
          <h2 className="text-lg font-bold"> {studyData.title}</h2>
          <Button
            className="m-8 w-[60px] rounded-3xl"
            variant="outline"
            size="sm"
          >
            D-12
          </Button>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1">
          {studyData.tags.map((tag: string, index: number) => (
            <Chip
              key={index}
              className="border-transparent bg-meetie-blue-1 text-xs"
            >
              {tag}
            </Chip>
          ))}
        </div>
        <div className="space mt-[10px] flex h-[70px] flex-row items-center justify-start space-x-2">
          <Image
            style={{ borderRadius: 50 }}
            width={56}
            height={56}
            src={userimg}
            alt="프로필 이미지"
          />
          <div className="text-base text-black">
            <p>{username}</p>
            {/* <p>작성일 {new Date(studyData.writing_datetime).toLocaleDateString()}</p> */}

            <p className="text-sm text-gray-500">
              작성일{' '}
              {new Intl.DateTimeFormat('ko-KR', {
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hourCycle: 'h23',
              }).format(new Date(studyData.writing_datetime))}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[10px] h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="px-3">
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">스터디 주제</h2>
          <h2 className="font-medium">{studyData.title}</h2>
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">스터디 목표</h2>
          <h2 className="font-medium">{studyData.goal}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 소개</h2>
          <h2 className="font-medium">{studyData.info}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">진행방식과 커리큘럼</h2>
          <h2 className="font-medium">{studyData.curriculum}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 인원</h2>
          <h2 className="font-medium">{studyData.max_member}명</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 기간</h2>
          <h2 className="font-medium">
            {studyData.start_date}~{studyData.end_date}
            <br />
            매주 {studyData.regular_days} {studyData.regular_time}
          </h2>
        </div>
        <div className="space-y-2 pt-20"></div>
      </div>
      <div className="fixed bottom-0 flex h-[100px] w-[375px] items-center justify-center space-x-4 bg-white">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">
              {studyData.max_member - studyData.member.length}명
            </span>
            / {studyData.max_member}명
          </p>
        </div>
        {/* 로그인한 사람과 owner의 아이디를 비교 */}
        {loggedInUser === studyData.owner ? (
          <Link href={`/waiting/${params.studyid}`}>
            <Button className="border-1 w-60 flex-[2] border-solid">
              대기중인 요청 확인
            </Button>
          </Link>
        ) : (
          // studyData.max_member - studyData.member.length === 0 ? (
          //   <Button className="border-1 w-[240px] border-solid bg-gray-400">
          //     아직 대기 인원이 없습니다
          //   </Button>
          // ) : (
          //   <Link href={`/waiting/${params.studyid}`}>
          //     <Button className="border-1 w-60 flex-[2] border-solid">
          //       대기중인 요청 확인
          //     </Button>
          //   </Link>
          // )
          <Link href={`/apply/${params.studyid}/application`}>
            <Button className="border-1 w-60 flex-[2] border-solid">
              스터디 신청하기
            </Button>
          </Link>
        )}
        {/* user_id: user?.id, // 현재 로그인된 사용자의 ID */}
      </div>
    </section>
  )
}
