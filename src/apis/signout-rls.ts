'use server'
import { redirect } from 'next/navigation'
import { createClient } from '~/utils/supabase/server'

export const userSignout = async () => {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) console.error('Logout failed:', error)
  redirect('/')
}
