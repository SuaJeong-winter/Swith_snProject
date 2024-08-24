'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import AssignmentItem from './assignment-item'
import WeekMonthCalendar from './week-month-calendar'

export default function AssignmentList() {
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), 'M월 d일 EEEE', { locale: ko }),
  )
  return (
    <>
      <section className="bg-background">
        <div>
          <h1 className="px-4 py-2 text-lg font-bold">✏️ {selectedDate}</h1>
          <p className="pb-4 pl-4 text-sm text-meetie-gray-60">
            과제 인증을 완료한 팀원들을 확인해 보세요
          </p>
          {/* 최신순 정렬 필터 추가해야함 */}
        </div>
        <WeekMonthCalendar
          category="assignment"
          onSelectDate={setSelectedDate}
        />
        <ul className="border-t-1 border-meetie-gray-20">
          <AssignmentItem />
          <AssignmentItem />
          <AssignmentItem />
        </ul>
      </section>
    </>
  )
}
