'use client'

import { createClient } from '~/utils/supabase/client'

export const getStudys = async () => {
  const supabase = createClient()
  const result = await supabase.from('Study').select('*')

  return result.data
}

export const filterStudys = async (filters: string[]) => {
  const supabase = createClient()
  const result = await supabase.from('Study').select().contains('tags', filters)

  return result.data
}
