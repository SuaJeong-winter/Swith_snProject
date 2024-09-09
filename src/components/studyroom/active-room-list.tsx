'use client'

import Link from 'next/link'
import ThinkingFace from '~/assets/studyRoom/thinkingFace.svg'
import WavingHand from '~/assets/studyRoom/wavingHand.svg'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Skeleton } from '../ui/skeleton'
import StudyCard from '~/components/searchstudy/study-card'
import useStudyroomController from '~/hooks/useStudyroomController'
import { useCallback, useEffect, useState } from 'react'

interface ActiveStudyRoomListProps {
  studyroomList: string[]
}

export default function ActiveStudyRoomList({
  studyroomList,
}: ActiveStudyRoomListProps) {
  const { loading, onGetStudy } = useStudyroomController()
  const [studies, setStudies] = useState<any[]>([])
  const fetchStudies = useCallback(async () => {
    const studyData = await Promise.all(
      studyroomList.map(async (studyId) => {
        const study = await onGetStudy(studyId)
        return study || null
      }),
    )
    setStudies(studyData.filter((study) => study !== null))
  }, [])

  useEffect(() => {
    fetchStudies()
  }, [studyroomList])

  return (
    <section className="mb-14 bg-[#f6f6f6]">
      <section>
        <h1 className="p-4 text-lg font-bold">스터디룸</h1>
        <section>
          {/* 스터디 리스트 */}
          <div className="flex flex-col gap-2 px-3 pb-4">
            {loading && (
              <div className="flex flex-col gap-3">
                <Skeleton className="h-[150px] w-full rounded-sm bg-slate-200" />
                <Skeleton className="h-[150px] w-full rounded-sm bg-slate-200" />
                <Skeleton className="h-[150px] w-full rounded-sm bg-slate-200" />
              </div>
            )}
            {studies.map((study: any) => (
              <Link href={`studyroom/${study.id}`} key={study.id}>
                <StudyCard
                  title={study.title}
                  types={study['recruit_type']}
                  tags={study.tags}
                  startdate={study['start_date']}
                  enddate={study['end_date']}
                  key={study.id}
                  studyId={study.id}
                />
              </Link>
            ))}
          </div>
        </section>
        <p className="p-4 font-bold text-meetie-gray-90">
          다른 스터디룸을 탐색해 볼까요?
        </p>
        <section className="flex flex-col gap-2 p-3">
          <Card className="p-2">
            <div className="flex justify-between">
              <section>
                <CardHeader className="pr-0">
                  <CardDescription>
                    밋티의 맞춤형 스터디를 탐색해 보세요!
                  </CardDescription>
                  <CardTitle className="text-lg font-bold text-black">
                    스터디 탐색하기
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="/search">
                    <button className="rounded-lg bg-meetie-blue-1 p-2 font-bold text-[#4A5999]">
                      바로가기
                    </button>
                  </Link>
                </CardContent>
              </section>
              <section className="pt-7 transition-opacity duration-500">
                <ThinkingFace />
              </section>
            </div>
          </Card>
          <Link href="/create">
            <Card className="bg-meetie-blue-1 p-2 transition-opacity duration-500">
              <div className="flex justify-between">
                <section>
                  <CardHeader>
                    <CardDescription>
                      찾으시는 스터디룸이 없으신가요?
                    </CardDescription>
                    <CardTitle className="text-sm font-bold text-black">
                      쉽고 빠른 스터디룸 개설하기
                    </CardTitle>
                  </CardHeader>
                </section>
                <section className="pr-5 pt-2">
                  <WavingHand />
                </section>
              </div>
            </Card>
          </Link>
        </section>
      </section>
    </section>
  )
}
