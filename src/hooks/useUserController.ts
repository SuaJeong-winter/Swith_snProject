import { useEffect, useState } from 'react'
import { getProfile, getUserAll } from '~/apis/user-rls'
import { Database } from '~/types/supabase'

const useUserController = () => {
  const [user, setUser] = useState<any[]>([])
  const [allUsers, setAllUser] = useState<any[]>([])
  const onGetUser = async () => {
    try {
      const resultUser = await getProfile()
      if (resultUser) setUser(resultUser)
      // console.log(resultUser)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    onGetUser()
    onGetUserAll()
  }, [])

  const onGetUserAll = async () => {
    try {
      const resultUserAll = await getUserAll()
      if (resultUserAll) setAllUser(resultUserAll)
    } catch (error) {
      console.error(error)
    }
  }

  return { user, allUsers, onGetUserAll }
}
export default useUserController
