'use server'
import { redirect } from 'next/navigation'
import { createClient } from '~/utils/supabase/server'

export const userSignout = async () => {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) console.error('Logout failed:', error)
  redirect('/')
}

export const getUserData = async () => {
  const supabase = createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error) {
    console.error('Error fetching user:', error)
  } else {
    console.log(user?.id)
    console.log('Logged in user:', user?.user_metadata.name)
  }

  return { user }
}
