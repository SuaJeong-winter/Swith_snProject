'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar } from '~/components/ui/calendar'
import { startOfWeek, format, addDays, isSameDay } from 'date-fns'
import { ko } from 'date-fns/locale'
import AddIcon from '~/assets/icon_add.svg'
import CalendarIcon from '~/assets/icon_calendar.svg'
import { useParams } from 'next/navigation'

interface WeekMonthCalendarProps {
  category: 'calendar' | 'assignment'
  onSelectDate: any
  handleWeeklyMeetup?: (date: Date, studyId: string | string[]) => Promise<void>
  handleWeeklyAssignment?: (
    date: Date,
    studyId: string | string[],
  ) => Promise<void>
}

export default function WeekMonthCalendar({
  category,
  onSelectDate,
  handleWeeklyMeetup,
  handleWeeklyAssignment,
}: WeekMonthCalendarProps) {
  const [isMonthView, setIsMonthView] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [clickedDate, setClickedDate] = useState('')

  const handleDateClick = (date: string) => {
    onSelectDate(date)
    setClickedDate(date)
  }

  const toggleView = () => {
    setIsMonthView(!isMonthView)
  }

  const getWeekDays = (date: any) => {
    const start = startOfWeek(date, { weekStartsOn: 0 })
    return Array.from({ length: 7 }, (_, i) => addDays(start, i))
  }

  const renderWeekView = () => {
    const days = getWeekDays(selectedDate)
    return (
      <div className="flex justify-center space-x-3">
        {days.map((day) => {
          const isToday = isSameDay(day, new Date())
          let isClickedDay = true

          if (selectedDate) {
            isClickedDay =
              clickedDate === format(day, 'yyyy.MM.dd') ||
              clickedDate === format(day, 'M월 d일 EEEE', { locale: ko })
          }
          return (
            <div
              key={day}
              className="flex flex-col items-center justify-center text-center"
            >
              <div
                className={`text-sm font-semibold ${
                  isToday ? 'text-meetie-blue-4' : 'text-meetie-gray-40'
                }`}
              >
                {format(day, 'EEE', { locale: ko })}
              </div>
              <div
                onClick={() =>
                  handleDateClick(
                    category === 'calendar'
                      ? format(day, 'yyyy.MM.dd')
                      : format(day, 'M월 d일 EEEE', { locale: ko }),
                  )
                }
                className={`mt-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full active:bg-meetie-blue-2 ${
                  isToday
                    ? 'border-2 border-meetie-blue-4'
                    : 'border border-meetie-gray-20'
                } ${isClickedDay ? 'bg-meetie-blue-2' : 'bg-[#f4f4f4]'}`}
              >
                {format(day, 'd')}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const getMonthYear = (date: any) => {
    return format(date, 'MMMM', { locale: ko })
  }

  const params = useParams()
  const studyId = params.studyId

  useEffect(() => {
    if (selectedDate && handleWeeklyMeetup && handleWeeklyAssignment) {
      handleWeeklyMeetup(selectedDate, studyId)
      handleWeeklyAssignment(selectedDate, studyId)
    }
  }, [selectedDate, studyId])

  return (
    <div className="bg-[#f9f9f9] py-4">
      {category === 'calendar' ? (
        <div className="flex justify-between px-4 pb-4">
          <div className="text-lg font-semibold">
            {getMonthYear(selectedDate)}
          </div>
          {/* + / 캘린더 아이콘 */}
          <div className="flex gap-1">
            <Link href={`/studyroom/${studyId}/calendarAdd`}>
              <AddIcon />
            </Link>
            <button onClick={toggleView}>
              <CalendarIcon />
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
      {/* 캘린더 영역 */}
      {isMonthView ? (
        <div className="flex items-center justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              if (date) {
                setSelectedDate(date)
              }
            }}
            locale={ko}
            weekStartsOn={0}
          />
        </div>
      ) : (
        renderWeekView()
      )}
    </div>
  )
}
