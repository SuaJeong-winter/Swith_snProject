import React, { useState } from 'react'
import Calendar from 'react-calendar'
import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  format,
  addDays,
  isToday,
} from 'date-fns'
import { ko } from 'date-fns/locale'
import 'react-calendar/dist/Calendar.css'
import CalendarIcon from '~/assets/icon_calendar.svg'

export default function StudyroomCalendar() {
  const [isMonthView, setIsMonthView] = useState(false)
  const [date, setDate] = useState(new Date())

  const toggleView = () => {
    setIsMonthView(!isMonthView)
  }

  const getWeekRange = (date: Date) => {
    const start = startOfWeek(date, { weekStartsOn: 1 })
    const end = endOfWeek(date, { weekStartsOn: 1 })
    return { start, end }
  }

  const renderWeekView = () => {
    const { start, end } = getWeekRange(date)
    const days = []
    for (let i = 0; i <= 6; i++) {
      const day = addDays(start, i)
      const isCurrentDay = isToday(day)
      days.push(
        <div
          key={i}
          className="mx-1 flex flex-col items-center justify-center pl-1 text-center text-sm"
        >
          <div
            className={`${
              isCurrentDay ? 'text-meetie-blue-4' : 'text-meetie-gray-40'
            }`}
          >
            {format(day, 'EEE', { locale: ko })}
          </div>{' '}
          <div
            className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f4] ${
              isCurrentDay
                ? 'border-2 border-meetie-blue-4'
                : 'border border-meetie-gray-20'
            }`}
          >
            {format(day, 'd')}
          </div>
        </div>,
      )
    }
    return <div className="week-view flex">{days}</div>
  }
  const getMonthYear = (date: Date) => {
    return format(date, 'MMMM', { locale: ko })
  }

  // 날짜 변경 핸들러
  const handleDateChange = (newDate: any) => {
    setDate(newDate)
  }

  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="text-lg font-semibold">{getMonthYear(date)}</div>
        <button onClick={toggleView}>
          {isMonthView ? (
            <span className="text-sm">이번 주 보기</span>
          ) : (
            <CalendarIcon />
          )}
        </button>
      </div>
      {isMonthView ? (
        <Calendar value={date} onChange={handleDateChange} className="ml-2" />
      ) : (
        renderWeekView()
      )}
    </div>
  )
}
