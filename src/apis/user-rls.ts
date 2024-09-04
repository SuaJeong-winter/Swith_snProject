'use client'
import { createClient } from '~/utils/supabase/client'

export const getProfile = async () => {
  const supabase = createClient()
  const result = await supabase
    .from('User')
    .select('*')
    .eq('user_id', '6803b4bf-455c-4675-8d43-84846d2c5944')

  return result.data
}

export const getUser = async () => {
  const supabase = createClient()
  const user = await supabase.auth.getUser()
  return user?.data?.user
}
