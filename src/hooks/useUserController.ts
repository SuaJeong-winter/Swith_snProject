import { useEffect, useState } from 'react'
import { getProfile } from '~/apis/user-rls'
import { Database } from '~/types/supabase'
type UserDto = Database['public']['Tables']['User']['Row']

const useUserController = () => {
  const [user, setUser] = useState<any[]>([])
  const onGetUser = async () => {
    try {
      const resultUser = await getProfile()
      if (resultUser) setUser(resultUser)
      console.log(resultUser)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    onGetUser()
  }, [])
  return { user }
}
export default useUserController
