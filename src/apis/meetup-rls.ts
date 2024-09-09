'use client'
import { startOfWeek, endOfWeek } from 'date-fns'

import { createClient } from '~/utils/supabase/client'

const supabase = createClient()

export const getMeetup = async (date: Date, studyId: string | string[]) => {
  // 이번 주 일요일과 토요일 날짜 계산
  const startOfThisWeek = startOfWeek(date, { weekStartsOn: 0 }) // 일요일 시작
  const endOfThisWeek = endOfWeek(date, { weekStartsOn: 0 }) // 토요일 끝

  // 날짜를 ISO 8601 문자열로 변환 (UTC 기준)
  const startDate = startOfThisWeek.toISOString()
  const endDate = endOfThisWeek.toISOString()

  const result = await supabase
    .from('Meetup')
    .select('*')
    .eq('study_id', studyId)
    .gte('schedule', startDate)
    .lte('schedule', endDate)
    .order('schedule')

  return result.data
}

export const addMeetup = async (newObject: any) => {
  const { error } = await supabase.from('Meetup').insert(newObject)

  if (error) {
    console.error('일정 생성에 실패했습니다.', error)
  }
}
