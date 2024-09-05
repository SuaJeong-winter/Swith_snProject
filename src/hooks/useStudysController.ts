import { useEffect, useState } from 'react'
import { getStudys, filterStudys, searchStudys } from '~/apis/studys-rls'
import { getUserBookmark } from '~/apis/user-rls'
import { Database } from '~/types/supabase'

type StudyDto = Database['public']['Tables']['Study']['Row']

const useStudysController = () => {
  const [loading, setLoading] = useState(false)
  const [studys, setStudys] = useState<StudyDto[]>([])
  const [bookmark, setBookmark] = useState<any[]>([])

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
      const resultStudys = await filterStudys(filters)
      if (resultStudys) setStudys(resultStudys)
      // console.log(studys)
    } else {
      await onGetStudys()
    }
  }

  const onSearchStudys = async (terms: string) => {
    if (terms) {
      const resultStudys = await searchStudys(terms)
      if (resultStudys) setStudys(resultStudys)
    } else {
      await onGetStudys()
    }
  }

  const onUserBookmark = async () => {
    const resultBookmark = await getUserBookmark()
    if (resultBookmark) setBookmark(resultBookmark)
  }

  return {
    loading,
    studys,
    onFilterStudys,
    onSearchStudys,
    onUserBookmark,
    bookmark,
  }
}

export default useStudysController
