'use client'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import AssignmentItem from './assignment-item'
import WeekMonthCalendar from './week-month-calendar'
import { Skeleton } from '../ui/skeleton'
import useAssignmentController from '~/hooks/useAssignmentController'

export default function AssignmentList() {
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), 'M월 d일 EEEE', { locale: ko }),
  )

  const { loading, assignmentSubmitList, onGetAssignmentSubmitList } =
    useAssignmentController()

  const renderSelectedDateContents = () => {
    const weeklySubmitAssignment = assignmentSubmitList.filter((item) => {
      const formattedWritingTime = format(
        new Date(item.writing_datetime),
        'M월 d일 EEEE',
        { locale: ko },
      )
      return formattedWritingTime === selectedDate
    })

    return (
      <ul className="border-t-1 border-meetie-gray-20">
        {loading && (
          <div className="flex flex-col items-center gap-3">
            <Skeleton className="h-[150px] w-[350px] bg-meetie-gray-20" />
            <Skeleton className="h-[150px] w-[350px] bg-meetie-gray-20" />
            <Skeleton className="h-[150px] w-[350px] bg-meetie-gray-20" />
          </div>
        )}
        {weeklySubmitAssignment.length === 0 && (
          <div className="flex h-60 items-center justify-center bg-background">
            <div className="text-sm text-meetie-gray-60">
              아직 제출된 과제가 없습니다!
            </div>
          </div>
        )}
        {weeklySubmitAssignment.map((item) => (
          <AssignmentItem
            key={item.id}
            desc={item.desc}
            image={item.image}
            writing_datetime={item.writing_datetime}
            user_id={item.user_id}
            assignment_id={item.assignment_id}
          />
        ))}
      </ul>
    )
  }
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
          handleWeeklySubmitAssignment={onGetAssignmentSubmitList}
        />
        {renderSelectedDateContents()}
      </section>
    </>
  )
}
