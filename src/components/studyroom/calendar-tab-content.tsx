'use client'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import WeekMonthCalendar from './week-month-calendar'
import { useState } from 'react'
import { format } from 'date-fns'

export default function StudyroomCalendar() {
  interface Data {
    description: string
    verificationMethod?: string
    place?: string
    // 실제 deadline의 타입은 Date 객체가 될 것
    deadline: string
  }

  const data: Data[] = [
    {
      description: '딥다이브 1장 읽기',
      verificationMethod: '사진 찍기',
      deadline: 'Mon Aug 26 2024 00:00:00 GMT+0900 (한국 표준시)',
    },
    {
      description: '딥다이브 2장 읽기',
      verificationMethod: '마지막장 사진 찍기',
      deadline: 'Mon Sep 2 2024 21:00:00 GMT+0900 (한국 표준시)',
    },
    {
      description: '킥오프 미팅',
      place: '줌',
      deadline: 'Tue Aug 26 2024 21:30:00 GMT+0900 (한국 표준시)',
    },
    {
      description: '2번째 밋업',
      place: '줌',
      deadline: 'Tue Aug 27 2024 08:40:00 GMT+0900 (한국 표준시)',
    },
  ]
  const [formattedDate, setFormattedDate] = useState<string>(
    format(new Date(), 'yyyy.MM.dd'),
  )
  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline)

    // 시간을 12시간제로 변환
    let hours = date.getHours()
    const minutes = date.getMinutes()

    // AM/PM 결정
    const ampm = hours >= 12 ? 'PM' : 'AM'

    // 12시간제로 변환
    hours = hours % 12

    // 두 자리수로 포맷
    const formattedHours = hours < 10 ? '0' + hours : hours
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes

    // 최종 포맷팅
    return `${ampm} ${formattedHours}:${formattedMinutes}`
  }

  const renderSelectedDateContents = () => {
    const contents = data.filter((item) => {
      const formattedDeadline = format(new Date(item.deadline), 'yyyy.MM.dd')
      return formattedDeadline === formattedDate
    })

    return (
      <>
        {contents.length ? (
          <div className="flex flex-col gap-2 bg-[#f9f9f9] px-4 pb-6 pt-4">
            {contents.map((content, index) => (
              <Card key={index}>
                <div className="flex items-center">
                  <div className="ml-4 text-center">
                    {formatDeadline(content.deadline)}
                  </div>
                  <CardHeader>
                    <CardTitle>{content.description}</CardTitle>
                    <CardDescription>
                      {content.verificationMethod
                        ? content.verificationMethod
                        : content.place}
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2 bg-[#f9f9f9] px-4 pb-6 pt-4">
            <Card>
              <div className="flex items-center">
                <CardHeader>
                  <CardDescription>
                    선택한 날짜에 일정 혹은 과제가 없습니다
                  </CardDescription>
                </CardHeader>
              </div>
            </Card>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      {/* 헤더 */}
      <section>
        <h1 className="px-4 py-2 text-lg font-bold">🤙 팀원과의 약속</h1>
        <p className="pb-4 pl-4 text-sm text-meetie-gray-60">
          이번 주 일정 및 과제를 확인해 보세요
        </p>
      </section>
      <section>
        {/* 캘린더 영역 */}
        <WeekMonthCalendar
          category="calendar"
          onSelectDate={setFormattedDate}
        />
        {/* 해당 일자의 일정 영역 */}
        {renderSelectedDateContents()}
      </section>
    </>
  )
}
