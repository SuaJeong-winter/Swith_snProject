import { useEffect, useState } from 'react'
import { getStudys, filterStudys } from '~/apis/studys-rls'
import { Database } from '~/types/supabase'

type StudyDto = Database['public']['Tables']['Study']['Row']

const useStudysController = () => {
  const [loading, setLoading] = useState(false)
  const [studys, setStudys] = useState<StudyDto[]>([])

  const onGetStudys = async () => {
    setLoading(true)
    try {
      const resultStudys = await getStudys()
      if (resultStudys) setStudys(resultStudys)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    onGetStudys()
  }, [])

  const onFilterStudys = async (filters: string[]) => {
    if (filters) {
      const filteredStudys = await filterStudys(filters)
      if (filteredStudys) setStudys(filteredStudys)
      // console.log(studys)
    } else {
      await onGetStudys()
    }
  }

  return { loading, studys, onFilterStudys }
}

export default useStudysController
