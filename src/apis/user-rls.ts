'use client'
import { useState } from 'react'
import { createClient } from '~/utils/supabase/client'

export const getUser = async () => {
  const supabase = createClient()
  const user = await supabase.auth.getUser()

  return user?.data?.user
}

export const getProfile = async () => {
  const user = await getUser()
  const supabase = createClient()
  const result = await supabase.from('profiles').select().eq('id', user?.id)

  return result.data
}

export const getOpenProfile = async (userId: any) => {
  const supabase = createClient()
  const result = await supabase.from('profiles').select().eq('id', userId)

  return result.data
}

export const getUserAll = async () => {
  const user = await getUser()
  const supabase = createClient()
  const result = await supabase.from('profiles').select().neq('id', user?.id)

  return result.data
}

export const getUserBookmark = async () => {
  const user = await getUser()
  const supabase = createClient()
  const result = await supabase
    .from('profiles')
    .select('bookmark_list')
    .eq('id', user?.id)

  return result.data
}

export const postUserBookmark = async (newList: any) => {
  const user = await getUser()
  const supabase = createClient()
  const result = await supabase
    .from('profiles')
    .update({ bookmark_list: newList })
    .eq('id', user?.id)

  return result.data
}

export const getUserFriends = async () => {
  const user = await getUser()
  const supabase = createClient()
  const result = await supabase
    .from('profiles')
    .select('friends')
    .eq('id', user?.id)

  return result.data
}

export const postUserFriends = async (newList: any) => {
  const user = await getUser()
  const supabase = createClient()
  const result = await supabase
    .from('profiles')
    .update({ friends: newList })
    .eq('id', user?.id)

  return result.data
}

export const filterMatesByJob = async (filter: string) => {
  const supabase = createClient()
  const result = await supabase.from('profiles').select().eq('job_type', filter)

  return result.data
}

export const filterMatesByPurpose = async (filters: string[]) => {
  const supabase = createClient()
  const result = await supabase
    .from('profiles')
    .select()
    .contains('study_purpose', filters)

  return result.data
}

export const filterMatesByStyle = async (filters: string[]) => {
  const supabase = createClient()
  const result = await supabase
    .from('profiles')
    .select()
    .contains('study_style', filters)

  return result.data
}
