import MpProfile from '~/assets/mp_profile.svg'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'
import { StudyHeaderNoText } from '~/components/studycreate/study-header'

import { createClient } from '~/utils/supabase/client'
import { useEffect, useState } from 'react'

type TotalInputProps = {
  recruit_type: string[]
  title: string
  goal: string
  info: string
  curriculum: string
  max_member: number
  tags: string[]
}

const supabase = createClient()

export default function TotalInput({
  recruit_type,
  title,
  goal,
  info,
  curriculum,
  max_member,
  tags,
}: TotalInputProps) {
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()

      if (error) {
      } else {
        setSession(session)
      }
    }

    fetchSession()
  }, [])

  const applynum: number = 1
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <StudyHeaderNoText />
      <div className="px-3">
        <div className="flex flex-row items-center space-x-4 space-y-2 pt-[60px]">
          <h2 className="text-lg font-bold"> {title}</h2>
          <Button
            className="m-8 w-[60px] rounded-3xl"
            variant="outline"
            size="sm"
          >
            D-12
          </Button>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-1">
          {tags.map((tag, index) => (
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
            <p>{session?.user?.email || '알 수 없는 사용자'}</p>
            {/* <p className="text-sm">{recruit_type}</p> */}
            <div className="flex flex-row">
              {recruit_type.map((recruit, index) => (
                <p key={index} className="text-sm">
                  {recruit}
                  {index < recruit_type.length - 1 && ` |${'\u00A0'}`}
                </p>
              ))}
            </div>

            <p className="text-sm">작성일 2024.08.13 09:41</p>
          </div>
        </div>
      </div>

      <div className="mt-[10px] h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="px-3">
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">스터디 주제</h2>
          <h2 className="font-medium">{title}</h2>
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">스터디 목표</h2>
          <h2 className="font-medium">{goal}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 소개</h2>
          <h2 className="font-medium">{info}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">진행방식과 커리큘럼</h2>
          <h2 className="font-medium">{curriculum}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 인원</h2>
          <h2 className="font-medium">{max_member}명</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 기간</h2>
          <h2 className="font-medium">2024.07.26~2024.08.31</h2>
        </div>
        <div className="space-y-2 px-[120px] pt-8">
          <Link href="established ">
            <p className="text-meetie-blue-4 underline">스터디 마감하기</p>
          </Link>
        </div>

        <div className="space-y-2 pt-20"></div>
      </div>

      <div className="fixed bottom-0 flex h-[100px] w-[375px] items-center justify-center space-x-4 bg-white">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">
              {max_member - applynum}명
            </span>
            / {max_member}명
          </p>
        </div>
        {applynum === 0 ? (
          <Button className="border-1 w-[240px] border-solid bg-gray-400">
            아직 대기 인원이 없습니다
          </Button>
        ) : (
          <Link href="/waiting">
            <Button className="border-1 w-60 flex-[2] border-solid">
              대기중인 요청 확인
            </Button>
          </Link>
        )}
        {/* if (applynum===0)
      {
        <Button className="border-1 w-60 flex-[2] border-solid">
          아직 대기 인원이 없습니다
        </Button>
      }
      else
      {
        <Link href="/apply">
          <Button className="border-1 w-60 flex-[2] border-solid">
            스터디 신청하기
          </Button>
        </Link>
      } */}
      </div>
    </section>
  )
}
