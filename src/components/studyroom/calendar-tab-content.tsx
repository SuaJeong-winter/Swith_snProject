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
import useAssignmentController from '~/hooks/useAssignmentController'
import useMeetupController from '~/hooks/useMeetupController'

export default function StudyroomCalendar() {
  const { assignment, onGetAssignmentCalendar } = useAssignmentController()
  const { meetup, onGetMeetupCalendar } = useMeetupController()

  const [formattedDate, setFormattedDate] = useState(
    format(new Date(), 'yyyy.MM.dd'),
  )
  const formatDeadline = (deadline: Date) => {
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
    const weeklyAssignment = assignment.filter((item) => {
      const formattedDeadline = format(new Date(item.deadline), 'yyyy.MM.dd')
      return formattedDeadline === formattedDate
    })
    const weeklyMeetup = meetup.filter((item) => {
      const formattedSchedule = format(new Date(item.schedule), 'yyyy.MM.dd')
      return formattedSchedule === formattedDate
    })

    return (
      <section className="bg-[#f9f9f9] pb-2">
        {weeklyMeetup.length || weeklyAssignment.length ? (
          <>
            {weeklyAssignment.length > 0 && (
              <div className="flex flex-col gap-2 px-4 pb-2">
                {weeklyAssignment.map((content, index) => (
                  <Card key={index} className="border border-meetie-blue-3">
                    <div className="flex items-center">
                      <div className="ml-4 min-w-[70px] text-center">
                        {formatDeadline(content.deadline)}
                      </div>
                      <CardHeader>
                        <CardTitle className="line-clamp-1">
                          {content.description}
                        </CardTitle>
                        <CardDescription className="line-clamp-1">
                          {content.verificationMethod}
                        </CardDescription>
                      </CardHeader>
                    </div>
                  </Card>
                ))}
              </div>
            )}
            {weeklyMeetup.length > 0 && (
              <div className="flex flex-col gap-2 px-4 pb-2">
                {weeklyMeetup.map((content, index) => (
                  <Card key={index}>
                    <div className="flex items-center">
                      <div className="ml-4 text-center">
                        {formatDeadline(content.schedule)}
                      </div>
                      <CardHeader>
                        <CardTitle>{content.description}</CardTitle>
                        <CardDescription>{content.place}</CardDescription>
                      </CardHeader>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="px-4 pb-2">
            <Card>
              <CardHeader>
                <CardDescription>
                  선택한 날짜에 일정 혹은 과제가 없어요 😊
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )}
      </section>
    )
  }

  return (
    <>
      {/* 헤더 */}
      <section>
        <h1 className="px-4 py-2 text-lg font-bold">🤙 팀원과의 약속</h1>
        <p className="pb-4 pl-4 text-sm text-meetie-gray-60">
          이번 주 과제 및 일정을 확인해 보세요
        </p>
      </section>
      <section>
        {/* 캘린더 영역 */}
        <WeekMonthCalendar
          category="calendar"
          onSelectDate={setFormattedDate}
          handleWeeklyMeetup={onGetMeetupCalendar}
          handleWeeklyAssignment={onGetAssignmentCalendar}
        />
        {/* 해당 일자의 일정 영역 */}
        {renderSelectedDateContents()}
      </section>
    </>
  )
}
