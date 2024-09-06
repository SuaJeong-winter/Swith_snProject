import MpProfile from '~/assets/mp_profile.svg'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'
import { StudyHeaderNoText } from '~/components/studycreate/study-header'

import { createClient } from '~/utils/supabase/client'
import { useEffect, useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog'
import { getProfile } from '~/apis/user-rls'
import useUserController from '~/hooks/useUserController'

type TotalInputProps = {
  id: string
  recruit_type: string[]
  title: string
  goal: string
  info: string
  curriculum: string
  start_date: Date
  regular_days: string
  regular_time: string
  max_member: number
  tags: string[]
}

const supabase = createClient()

export default function TotalInput({
  id,
  recruit_type,
  title,
  goal,
  info,
  curriculum,
  start_date,
  regular_days,
  regular_time,
  max_member,
  tags,
}: TotalInputProps) {
  const [studyData, setStudyData] = useState<any>(null)
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const { user } = useUserController()
  const [userData] = user

  const startDate = new Date(studyData?.start_date || start_date) // 스터디 시작일
  const currentDate = new Date() // 현재 시간
  const diffInMilliseconds = startDate.getTime() - currentDate.getTime()
  const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24)) // D-Day 계산

  console.log('현재 날짜:', currentDate)
  console.log('스터디 시작일:', startDate)
  console.log('D-Day 차이:', diffInDays)

  useEffect(() => {
    const fetchStudyData = async () => {
      const { data, error } = await supabase
        .from('Study')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Error fetching study data:', error)
      } else {
        setStudyData(data)
        setLoading(false)
        console.log('start_date:', data.start_date) // Log start_date
        console.log('writing_datetime:', data.writing_datetime) // Log writing_datetime
      }
    }
    fetchStudyData()
  }, [id])

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
          {diffInDays == 0 ? (
            <Button
              className="m-8 w-[50px] rounded-3xl"
              variant="outline"
              size="sm"
            >
              D-Day
            </Button>
          ) : (
            <Button
              className="m-8 w-[50px] rounded-3xl"
              variant="outline"
              size="sm"
            >
              D-{diffInDays}
            </Button>
          )}
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
          <MpProfile />
          <div className="text-base text-black">
            {/* <p>김서희</p> */}
            <p>{userData?.username}</p>
            {/* supabase에서 값 가져오기  */}
            {/* <p className="text-sm">{recruit_type}</p> */}
            <div className="flex flex-row">
              {studyData.recruit_type.map((recruit: string, index: number) => (
                <p key={index} className="text-sm">
                  {recruit}
                  {index < studyData.recruit_type.length - 1 && ` |${'\u00A0'}`}
                </p>
              ))}
            </div>
            {/* <p>작성일</p> */}

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
            매주 {studyData.regular_days} {studyData.regular_time.slice(0, 5)}
          </h2>
        </div>

        <div className="space-y-2 pt-20"></div>
      </div>
      <div className="fixed bottom-0 flex h-[100px] w-[375px] items-center justify-center space-x-4 bg-white">
        {/* <Button className="w-[200px]">스터디 등록하기</Button> */}
        <AlertDialog>
          <AlertDialogTrigger
            className="h-[50px] w-[200px] whitespace-nowrap rounded-lg font-semibold text-white"
            style={{ background: '#6326FD' }}
          >
            스터디 등록하기
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                스터디가 정상적으로 등록되었습니다!{' '}
              </AlertDialogTitle>
              <AlertDialogDescription>
                확인 버튼을 눌러 탐색 페이지로 이동합니다
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="w-[100px]">취소</AlertDialogCancel>
              <Link href="/search">
                <AlertDialogAction className="w-[100px]">
                  확인
                </AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  )
}
