'use client'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import Alram from '~/assets/icon_alarm.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useParams, usePathname } from 'next/navigation'
import useAssignmentController from '~/hooks/useAssignmentController'

export default function TaskDeadline() {
  interface Data {
    id: number
    description: string
    verificationMethod?: string
    // 실제 deadline의 타입은 Date 객체가 될 것
    deadline: string
  }
  // api : 당일의 과제 데이터만 받아올 것
  const data: Data[] = [
    {
      id: 1,
      description: '넥스트 프로젝트 초기 설정',
      verificationMethod: '스크린샷 업로드',
      deadline: 'Mon Aug 31 2024 18:00:00 GMT+0900 (한국 표준시)',
    },
    {
      id: 2,
      description: '딥다이브 2장 읽기',
      verificationMethod: '마지막장 사진 찍기',
      deadline: 'Mon Aug 31 2024 21:00:00 GMT+0900 (한국 표준시)',
    },
  ]

  const [remainingTimes, setRemainingTimes] = useState<string[]>([])
  const currentPath = usePathname()
  const params = useParams()
  const studyId = params.studyId

  const { todayAssignment, onGetTodayAssignment } = useAssignmentController()

  useEffect(() => {
    if (onGetTodayAssignment) {
      onGetTodayAssignment(studyId)
    }
    const updateRemainingTimes = () => {
      const now = new Date()
      const updatedTimes = todayAssignment.map((item) => {
        const deadline = new Date(item.deadline)
        const timeDifference = deadline.getTime() - now.getTime()

        if (timeDifference > 0) {
          const totalMinutes = Math.floor(timeDifference / (1000 * 60)) // 밀리초를 분으로 변환
          const hours = Math.floor(totalMinutes / 60) // 총 분을 시간으로 변환
          const minutes = totalMinutes % 60 // 나머지 분

          return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
        } else {
          return '00:00' // 시간이 지나면 00:00으로 표시
        }
      })

      // 이전 상태와 비교하여 동일하면 상태를 업데이트하지 않음
      setRemainingTimes((prevTimes) => {
        const hasChanged = updatedTimes.some(
          (time, index) => time !== prevTimes[index],
        )
        return hasChanged ? updatedTimes : prevTimes
      })
    }
    // 초기 실행
    updateRemainingTimes()
    // 1분마다 갱신
    const intervalId = setInterval(updateRemainingTimes, 60000)
    // 컴포넌트가 언마운트될 때 interval을 정리
    return () => clearInterval(intervalId)
  }, [todayAssignment, studyId])

  return (
    <section className="bg-background px-3 pt-5">
      <div className="flex items-center justify-between">
        <h2 className="mb-3 text-xl font-bold">🚨마감 직전 과제</h2>
      </div>
      <div className="flex flex-col gap-5">
        {todayAssignment.length === 0 ||
        todayAssignment.every(
          (_, index) => remainingTimes[index] === '00:00',
        ) ? (
          <div className="px-4 pb-2">
            <Card>
              <CardHeader>
                <CardDescription>오늘 인증할 과제가 없어요 😊</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          todayAssignment.map(
            (item, index) =>
              remainingTimes[index] !== '00:00' && (
                <Card key={index}>
                  <CardHeader className="relative">
                    <CardTitle className="mb-1">{item.description}</CardTitle>
                    <div className="text-sm font-medium">
                      <span className="pl-2 text-meetie-blue-4">
                        3명의 팀원
                      </span>
                      이 수행했어요! 👏
                    </div>
                    <Badge variant="secondary" className="ml-2 h-6 w-fit">
                      <Alram className="mr-2" />
                      마감까지 {remainingTimes[index]}
                    </Badge>
                    <div className="absolute right-8 top-10 h-12 w-12">
                      <CircularProgressbar
                        value={60}
                        text={`${60}%`}
                        strokeWidth={10}
                        styles={buildStyles({
                          textSize: '24px',
                          textColor: 'hsl(257 98% 57%)',
                          pathColor: 'hsl(257 98% 57%)',
                          trailColor: 'hsl(0 0% 90%)',
                          strokeLinecap: 'butt',
                        })}
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={{
                        pathname: `${currentPath}/assignment/${item.id}`,
                        query: {
                          description: item.description,
                          method: item.verificationMethod,
                        },
                      }}
                    >
                      <Button className="w-full">인증하기</Button>
                    </Link>
                  </CardContent>
                </Card>
              ),
          )
        )}
      </div>
    </section>
  )
}
