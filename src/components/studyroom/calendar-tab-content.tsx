'use client'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import WeekMonthCalendar from './week-month-calendar'

export default function StudyroomCalendar() {
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
        <WeekMonthCalendar category="calendar" onSelectDate={() => {}} />
        {/* 해당 일자의 일정 영역 */}
        <div className="flex flex-col gap-2 bg-[#f9f9f9] px-4 pb-6 pt-4">
          <Card>
            <div className="flex items-center">
              <div className="ml-4 text-center">AM 00:00</div>
              <CardHeader>
                <CardTitle>회의</CardTitle>
                <CardDescription>2024.08.16 00:00</CardDescription>
              </CardHeader>
            </div>
          </Card>
          <Card>
            <div className="flex items-center">
              <div className="ml-4 text-center">PM 06:30</div>
              <CardHeader>
                <CardTitle>과제 제출</CardTitle>
                <CardDescription>2024.08.16 18:30</CardDescription>
              </CardHeader>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
