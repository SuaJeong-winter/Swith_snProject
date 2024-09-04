import { useEffect, useState } from 'react'
import { getUserData } from '~/apis/signout-rls'

const useUserDataController = () => {
  const [user, setUser] = useState<any>()
  const onGetUserData = async () => {
    const userData = await getUserData()
    if (userData) setUser(userData)
  }

  useEffect(() => {
    onGetUserData()
  }, [])

  return { user }
}

export default useUserDataController
