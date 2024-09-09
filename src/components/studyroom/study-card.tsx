'use client'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'
import ArrowBtn from '~/assets/studyRoom/arrowBtn.svg'
import { useParams } from 'next/navigation'
import useStudyroomController from '~/hooks/useStudyroomController'
import { useEffect, useMemo, useState } from 'react'
import { differenceInDays, startOfToday } from 'date-fns'
import Link from 'next/link'

interface Study {
  id: string
  title: string
  recruit_type: string[]
  member: string[]
  end_date: Date
}

export default function StudyCard({ studies }: { studies: any[] }) {
  const { loading } = useStudyroomController()
  const params = useParams()
  const studyId = params.studyId
  const [currentStudy, setCurrentStudy] = useState<Study | null>(null)

  const getRemainingDays = (endDate: Date) => {
    const today = startOfToday() // 자정 기준 오늘 날짜
    return differenceInDays(endDate, today)
  }

  useEffect(() => {
    if (!loading && studies.length > 0) {
      setCurrentStudy(studies.find((study) => study.id === studyId))
    }
  }, [studies, studyId, loading])

  return (
    <section className="bg-meetie-blue-1 p-2">
      <Card className="p-2">
        <section>
          <CardHeader>
            <div className="flex">
              {/* 스터디 목록 Drawer */}
              <Drawer>
                <DrawerTrigger>
                  <ArrowBtn />
                </DrawerTrigger>
                <DrawerContent className="mx-auto w-[375px]">
                  <DrawerHeader>
                    <DrawerTitle className="flex justify-center">
                      <p>
                        진행 중인 스터디
                        <span className="ml-2 text-meetie-blue-3">
                          {studies.length}
                        </span>
                      </p>
                    </DrawerTitle>
                    <DrawerDescription>
                      <p className="text-center">
                        이동하려는 스터디룸을 선택해 주세요.
                      </p>
                      <div className="my-2 rounded-md bg-background">
                        {studies.map((study) => (
                          <Link href={`/studyroom/${study.id}`} key={study.id}>
                            <div className="mt-1 cursor-pointer rounded-md border-2 border-gray-200 px-6 py-2">
                              <div className="text-lg font-medium">
                                {study.title}
                              </div>
                              <div className="text-sm">
                                {study.recruit_type.join(', ')} | 멤버{' '}
                                {study.member.length} | D-
                                {getRemainingDays(study.end_date)}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
              {/* 현재 스터디룸 설명 카드 */}
              {currentStudy && (
                <div className="ml-4 grow">
                  <CardTitle className="text-lg font-bold text-black">
                    {currentStudy.title}
                  </CardTitle>
                  <div className="flex justify-between">
                    <CardDescription>
                      {currentStudy.recruit_type.join(', ')} | 멤버{' '}
                      {currentStudy.member.length}
                    </CardDescription>
                    <div className="rounded-full border border-meetie-blue-4 px-1 text-xs font-semibold text-meetie-blue-4">
                      D-{getRemainingDays(currentStudy.end_date)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardHeader>
        </section>
      </Card>
    </section>
  )
}
