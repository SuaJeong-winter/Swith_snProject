'use client'
import { createClient } from '~/utils/supabase/client'

export const getBadge = async () => {
  const supabase = createClient()
  const result = await supabase
    .from('MeetieBadge')
    .select('*')
    .eq('user_id', '6803b4bf-455c-4675-8d43-84846d2c5944')
  return result.data
}
