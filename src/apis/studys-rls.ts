'use client'

import { createSupabaseBrowserClient } from '~/lib/client/supabase'

export const getStudys = async () => {
  const supabase = createSupabaseBrowserClient()
  const result = await supabase.from('Study').select('*')

  return result.data
}

export const filterStudys = async (filters: string[]) => {
  const supabase = createSupabaseBrowserClient()
  const result = await supabase.from('Study').select().contains('tags', filters)

  return result.data
}
