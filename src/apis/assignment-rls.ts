'use client'
import { startOfWeek, endOfWeek } from 'date-fns'

import { createClient } from '~/utils/supabase/client'

const supabase = createClient()

export const getAssignment = async (date: Date, studyId: string | string[]) => {
  // 이번 주 일요일과 토요일 날짜 계산
  const startOfThisWeek = startOfWeek(date, { weekStartsOn: 0 }) // 일요일 시작
  const endOfThisWeek = endOfWeek(date, { weekStartsOn: 0 }) // 토요일 끝

  // 날짜를 ISO 8601 문자열로 변환 (UTC 기준)
  const startDate = startOfThisWeek.toISOString()
  const endDate = endOfThisWeek.toISOString()

  const result = await supabase
    .from('Assignment')
    .select('*')
    .eq('study_id', studyId)
    .gte('deadline', startDate)
    .lte('deadline', endDate)
    .order('deadline')

  return result.data
}

export const addAssignment = async (newObject: any) => {
  const { error } = await supabase.from('Assignment').insert(newObject)

  if (error) {
    console.error('과제 생성에 실패했습니다.', error)
  }
}

// 오늘 날짜의 시작과 끝을 계산
const todayStart = new Date().setHours(0, 0, 0, 0) // 오늘의 00:00:00
const todayEnd = new Date().setHours(23, 59, 59, 999) // 오늘의 23:59:59

export const getTodayAssignment = async (studyId: string | string[]) => {
  const result = await supabase
    .from('Assignment')
    .select('*')
    .eq('study_id', studyId)
    .gte('deadline', new Date(todayStart).toISOString()) // 오늘의 시작 시각 이후
    .lte('deadline', new Date(todayEnd).toISOString()) // 오늘의 끝 시각 이전
    .order('deadline')

  return result.data
}

export const submitAssignment = async (
  desc: string,
  image: string,
  studyId: string | string[],
  userId: string,
): Promise<string> => {
  const { data, error } = await supabase
    .from('SubmitAssignment')
    .insert({ desc, image, studyId, userId })
    .select('id')

  if (error) {
    console.error('과제 제출에 실패했습니다.', error)
    throw new Error('Failed to insert data')
  }

  if (!data || data.length === 0) {
    throw new Error('No data returned')
  }
  return data[0].id
}
