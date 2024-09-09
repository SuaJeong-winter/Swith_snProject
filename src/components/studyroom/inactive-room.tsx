'use client'

import Link from 'next/link'
import ThinkingFace from '~/assets/studyRoom/thinkingFace.svg'
import WavingHand from '~/assets/studyRoom/wavingHand.svg'
import StudyCard from '~/components/searchstudy/study-card'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import useStudysController from '~/hooks/useStudysController'
import { Skeleton } from '~/components/ui/skeleton'

export default function InactiveStudyRoom() {
  const { loading, studys } = useStudysController()

  return (
    <section className="bg-[#f6f6f6]">
      <section>
        <h1 className="p-4 text-lg font-bold">스터디룸</h1>
        <p className="pl-4 text-lg font-bold">
          아직 스터디룸이
          <br />
          존재하지 않아요!
        </p>
        <p className="p-4 text-meetie-gray-40">
          원하는 스터디룸을 탐색해 볼까요?
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
      <section className="p-3">
        <h1 className="mb-6 mt-3 pl-1 text-lg font-bold">
          지금 떠오르고 있는
          <br />
          스터디룸
        </h1>
        {/* 스터디 리스트 */}
        <div className="flex flex-col gap-2 pb-16">
          {loading && (
            <div className="flex flex-col gap-3">
              <Skeleton className="h-[150px] w-full rounded-xl bg-slate-200" />
              <Skeleton className="h-[150px] w-full rounded-xl bg-slate-200" />
            </div>
          )}
          {studys.slice(0, 4).map((study) => (
            <Link href={`apply/${study.id}`} key={study.id}>
              <StudyCard
                title={study.title}
                types={study['recruit_type']}
                tags={study.tags}
                startdate={study['start_date']}
                enddate={study['end_date']}
                studyId={study.id}
                key={study.id}
                studyId={study.id}
              />
            </Link>
          ))}
        </div>
      </section>
    </section>
  )
}
