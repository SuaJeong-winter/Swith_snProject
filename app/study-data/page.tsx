'use client'
import { createSupabaseBrowserClient } from '~/lib/client/supabase'

export default async function StudyData() {
  const supabase = createSupabaseBrowserClient()

  // const { data: Study, error } = await supabase.from('Study').select('*')
  const result = await supabase.from('Study').select('*')

  console.log(result)

  return <pre>{JSON.stringify(result, null, 2)}</pre>
}
