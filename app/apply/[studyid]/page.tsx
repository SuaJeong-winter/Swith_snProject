'use client'

import Link from 'next/link'
import MpProfile from '~/assets/mp_profile.svg'
import { StudyHeaderNoText } from '~/components/studycreate/study-header'
import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'
import { useEffect, useState } from 'react'
import { createClient } from '~/utils/supabase/client'
import { useRouter } from 'next/router'
const supabase = createClient()

export default function ApplyIntroPage({
  params,
}: {
  params: { studyid: string }
}) {
  const [studyData, setStudyData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchStudyData = async () => {
      const { data, error } = await supabase
        .from('Study')
        .select('*')
        .eq('id', params.studyid)
        .single()

      if (error) {
        console.error('Error fetching study data:', error)
      } else {
        setStudyData(data)
      }
      setLoading(false)
    }

    fetchStudyData()
  }, [params.studyid])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!studyData) {
    return <p>Study not found</p>
  }

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
          <MpProfile />
          <div className="text-base text-black">
            <p>{studyData.owner}</p>
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
          <h2 className="font-medium">2024.08.26~2024.09.24</h2>
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
        <Link href={`/apply/${params.studyid}/application`}>
          <Button className="border-1 w-60 flex-[2] border-solid">
            스터디 신청하기
          </Button>
        </Link>
      </div>
    </section>
  )
}
