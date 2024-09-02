'use client'

import { createClient } from '~/utils/supabase/client'

export const postOnboarding = async () => {
  const supabase = createClient()
  const result = await supabase.from('User').insert([{}])
}

export const postTest = async (userID: any) => {
  const supabase = createClient()
  const result = await supabase
    .from('Profiles')
    .insert([{ name: 'Test Post network---id', user_id: userID }])

  return result.data
}
