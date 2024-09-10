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
import { useEffect, useState } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import useAssignmentController from '~/hooks/useAssignmentController'
import { countAssignments } from '~/apis/assignment-rls'
import useStudyroomController, {
  StudyDto,
} from '~/hooks/useStudyroomController'

export default function TaskDeadline() {
  const [remainingTimes, setRemainingTimes] = useState<string[]>([])
  const [isDoneAssignment, setIsDoneAssignment] = useState<boolean[]>([])
  const [countAssignment, setCountAssignment] = useState<number[]>([])

  const currentPath = usePathname()
  const params = useParams()
  const router = useRouter()
  const studyId = params.studyId

  const { todayAssignment, onGetTodayAssignment, onCheckDoneAssignment } =
    useAssignmentController()
  const { studyData, onGetStudy } = useStudyroomController()

  // 마감 직전 과제 제출 여부 확인
  const checkAssignmentsDone = async () => {
    const results = await Promise.all(
      todayAssignment.map((item) => onCheckDoneAssignment(item.id)),
    )
    setIsDoneAssignment(results)
  }

  // 마감 직전 과제 제출 인원 확인
  const countAssignmentsSubmit = async () => {
    const results = await Promise.all(
      todayAssignment.map((item) => countAssignments(item.id)),
    )
    setCountAssignment(results)
  }

  // 과제 제출 마감까지 얼마 남았는지 업데이트 (hh:mm)
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

  useEffect(() => {
    if (onGetTodayAssignment) {
      onGetTodayAssignment(studyId)
    }
    if (onGetStudy) {
      onGetStudy(studyId)
    }
  }, [studyId])

  useEffect(() => {
    // 초기 실행
    updateRemainingTimes()
    checkAssignmentsDone()
    countAssignmentsSubmit()

    // 1분마다 갱신
    const intervalId = setInterval(updateRemainingTimes, 60000)
    // 컴포넌트가 언마운트될 때 interval을 정리
    return () => clearInterval(intervalId)
  }, [todayAssignment])

  const handleButtonClick = (
    item: {
      deadline: Date
      description: string | null
      id: string
      study_id: string
      verificationMethod: string | null
    },
    index: number,
  ) => {
    if (!isDoneAssignment[index]) {
      router.push(
        `${currentPath}/assignment/${item.id}?description=${item.description}&method=${item.verificationMethod}`,
      )
    }
  }

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
                    {countAssignment[index] !== 0 ? (
                      <div className="text-sm font-medium">
                        <span className="pl-2 text-meetie-blue-4">
                          {countAssignment[index]}명의 팀원
                        </span>
                        이 수행했어요! 👏
                      </div>
                    ) : (
                      <div className="text-sm font-medium">
                        <span className="pl-2 text-meetie-blue-4">첫번째</span>
                        로 과제를 인증해 보세요!🔥
                      </div>
                    )}

                    <Badge variant="secondary" className="ml-2 h-6 w-fit">
                      <Alram className="mr-2" />
                      마감까지 {remainingTimes[index]}
                    </Badge>
                    {studyData && (
                      <div className="absolute right-8 top-10 h-12 w-12">
                        <CircularProgressbar
                          value={
                            (countAssignment[index] / studyData.member.length) *
                            100
                          }
                          text={`${(countAssignment[index] / studyData.member.length) * 100}%`}
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
                    )}
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full"
                      disabled={isDoneAssignment[index] ? true : false}
                      onClick={() => handleButtonClick(item, index)}
                    >
                      {isDoneAssignment[index] ? '인증 완료' : '인증하기'}
                    </Button>
                  </CardContent>
                </Card>
              ),
          )
        )}
      </div>
    </section>
  )
}
