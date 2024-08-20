import React, { useState } from 'react'
import Link from 'next/link'
import { Calendar } from '~/components/ui/calendar'
import { startOfWeek, format, addDays, isSameDay } from 'date-fns'
import { ko } from 'date-fns/locale'
import 'react-calendar/dist/Calendar.css'
import AddIcon from '~/assets/icon_add.svg'
import CalendarIcon from '~/assets/icon_calendar.svg'

export default function StudyroomCalendar() {
  const [isMonthView, setIsMonthView] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

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
                className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f4f4] ${
                  isToday
                    ? 'border-2 border-meetie-blue-4'
                    : 'border border-meetie-gray-20'
                }`}
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

  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="text-lg font-semibold">
          {getMonthYear(selectedDate)}
        </div>
        <div className="flex gap-1">
          <Link href="/studyroom/calendar">
            <AddIcon />
          </Link>
          <button onClick={toggleView}>
            <CalendarIcon />
          </button>
        </div>
      </div>
      {isMonthView ? (
        <div className="flex items-center justify-center">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
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
