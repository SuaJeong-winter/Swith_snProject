import { useCallback, useEffect, useState } from 'react'
import {
  getStudys,
  filterStudys,
  searchStudys,
  getOwnStudys,
  getUserStudys,
  getAppliedStudy,
  getStudyData,
} from '~/apis/studys-rls'
import { Database } from '~/types/supabase'

type StudyDto = Database['public']['Tables']['Study']['Row']

const useStudysController = () => {
  const [loading, setLoading] = useState(false)
  const [studys, setStudys] = useState<StudyDto[]>([])
  const [ownStudys, setOwnStudys] = useState<StudyDto[]>([])
  const [userStudys, setUserStudys] = useState<StudyDto[]>([])
  const [waitingStudys, setWaitings] = useState<any[]>([])
  const [studyData, setStudyData] = useState<any[]>([])

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

  const onGetOwnStudys = async (userId: any) => {
    try {
      const result = await getOwnStudys(userId)
      if (result) setOwnStudys(result)
    } catch (error) {
      console.error(error)
    }
  }

  const onGetUserStudys = async (userId: any) => {
    try {
      const result = await getUserStudys(userId)
      if (result) setUserStudys(result)
    } catch (error) {
      console.error(error)
    }
  }

  const onGetAppliedStudys = async (userId: any) => {
    try {
      const result = await getAppliedStudy(userId)
      if (result) setWaitings(result)
    } catch (error) {
      console.error(error)
    }
  }

  const onGetStudyData = async (studyId: any) => {
    try {
      const result = await getStudyData(studyId)
      if (result) {
        const [newResult] = result
        setStudyData((prev) => [...prev, newResult])
        console.log(newResult)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const newData = studyData.reduce((acc, curr) => {
    if (acc.findIndex(({ id }: { id: any }) => id === curr.id) === -1) {
      acc.push(curr)
    }
    return acc
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
    ownStudys,
    userStudys,
    waitingStudys,
    studyData,
    newData,
    onGetOwnStudys,
    onGetUserStudys,
    onGetAppliedStudys,
    onGetStudyData,
    onFilterStudys,
    onSearchStudys,
  }
}

export default useStudysController
