'use client'
import { startOfWeek, endOfWeek } from 'date-fns'

import { createClient } from '~/utils/supabase/client'

export const getAssignment = async (date: Date) => {
  const supabase = createClient()

  // 이번 주 일요일과 토요일 날짜 계산
  const startOfThisWeek = startOfWeek(date, { weekStartsOn: 0 }) // 일요일 시작
  const endOfThisWeek = endOfWeek(date, { weekStartsOn: 0 }) // 토요일 끝

  // 날짜를 ISO 8601 문자열로 변환 (UTC 기준)
  const startDate = startOfThisWeek.toISOString()
  const endDate = endOfThisWeek.toISOString()

  const result = await supabase
    .from('Assignment')
    .select('*')
    .gte('deadline', startDate)
    .lte('deadline', endDate)
    .order('deadline')

  return result.data
}
