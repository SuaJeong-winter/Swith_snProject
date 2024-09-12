'use client'

import { createClient } from '~/utils/supabase/client'

export const getStudys = async () => {
  const supabase = createClient()
  const result = await supabase.from('Study').select('*')

  return result.data
}

export const getOwnStudys = async (userId: any) => {
  const supabase = createClient()
  const result = await supabase.from('Study').select().eq('owner', userId)

  return result.data
}

export const getUserStudys = async (userId: any) => {
  const supabase = createClient()
  const result = await supabase
    .from('Study')
    .select()
    .contains('member', [userId])

  return result.data
}

export const getAppliedStudy = async (userId: any) => {
  const supabase = createClient()
  const result = await supabase
    .from('Study-apply')
    .select()
    .eq('user_id', userId)

  return result.data
}

export const getStudyData = async (studyId: any) => {
  const supabase = createClient()
  const result = await supabase.from('Study').select().eq('id', studyId)

  return result.data
}

export const filterStudys = async (filters: string[]) => {
  const supabase = createClient()
  const result = await supabase.from('Study').select().contains('tags', filters)

  return result.data
}

export const searchStudys = async (terms: string) => {
  const supabase = createClient()
  const result = await supabase
    .from('Study')
    .select()
    .textSearch('title', terms)

  return result.data
}
