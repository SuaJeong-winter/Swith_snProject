'use client'

import { createClient } from '~/utils/supabase/client'

export const getStudyroom = async () => {
  const supabase = createClient()
  const result = await supabase
    .from('StudyroomTest')
    .select('*')
    .order('timestamp', { ascending: false })

  return result.data
}
