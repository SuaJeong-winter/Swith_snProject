import { useCallback, useEffect, useState } from 'react'
import { getStudys, filterStudys, searchStudys } from '~/apis/studys-rls'
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

  const onFilterStudys = useCallback(async (filters: string[]) => {
    if (filters) {
      const resultStudys = await filterStudys(filters)
      if (resultStudys) setStudys(resultStudys)
      // console.log(studys)
    } else {
      await onGetStudys()
    }
  }, [])

  const onSearchStudys = async (terms: string) => {
    if (terms) {
      const resultStudys = await searchStudys(terms)
      if (resultStudys) setStudys(resultStudys)
    } else {
      await onGetStudys()
    }
  }

  return {
    loading,
    studys,
    onFilterStudys,
    onSearchStudys,
  }
}

export default useStudysController
