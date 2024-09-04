'use client'

import { createClient } from '~/utils/supabase/client'
import { getUser } from './user-rls'

export const postOnboarding = async ({
  job,
  purpose,
  personality,
  period,
}: {
  job: string
  purpose: string[]
  personality: string[]
  period: string | null
}) => {
  const user = await getUser()
  const supabase = createClient()
  const result = await supabase
    .from('profiles')
    .update({
      job_type: job,
      study_purpose: purpose,
      study_style: personality,
      study_period: period,
    })
    .eq('id', user?.id)
    .select()

  return result.data
}

export const testPost = async () => {
  const user = await getUser()
  const supabase = createClient()
  const result = await supabase.from('profiles').select().eq('id', user?.id)

  return result.data
}
