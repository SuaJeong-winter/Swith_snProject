import { useEffect, useState } from 'react'
import { getStudys, filterStudys } from '~/apis/studys-rls'
import { Database } from '~/types/supabase'

type StudyDto = Database['public']['Tables']['Study']['Row']

const useStudysController = () => {
  const [studys, setStudys] = useState<StudyDto[]>([])

  const onGetStudys = async () => {
    try {
      const resultStudys = await getStudys()
      if (resultStudys) setStudys(resultStudys)
    } catch (error) {
      console.error(error)
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

  return { studys, onFilterStudys }
}

export default useStudysController
