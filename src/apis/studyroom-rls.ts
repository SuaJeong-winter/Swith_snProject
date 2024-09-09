'use client'

import { createClient } from '~/utils/supabase/client'
import { getUser } from './user-rls'

const supabase = createClient()

export const getStudyroomAssignment = async () => {
  const result = await supabase
    .from('StudyroomTest')
    .select('*')
    .order('timestamp', { ascending: false })

  return result.data
}

// 내가 참여하고 있는 스터디룸 리스트 불러오기
export const getStudyroomList = async () => {
  const myUserData = await getUser()
  const userId = myUserData?.id

  const result = await supabase
    .from('Study')
    .select('*')
    .contains('member', [userId])
    .eq('status', true)

  return result.data
}

export const getStudyById = async (id: string) => {
  const result = await supabase.from('Study').select('*').eq('id', id).single() // 단일 row를 가져오기 위해 .single() 사용

  return result.data
}
