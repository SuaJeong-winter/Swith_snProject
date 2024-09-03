import { useState } from 'react'
import { postTest } from '~/apis/onboarding-rls'
import { getUser } from '~/apis/user-rls'

const useOnboardingController = () => {
  const [test, setTest] = useState<any>()
  const [user, setUser] = useState<any>()

  const onGetUser = async () => {
    const result = await getUser()
    setUser(result)
  }

  const onPostData = async (userID: any) => {
    try {
      const result = await postTest(userID)
      setTest(result)
    } catch (error) {
      console.error(error)
    }
  }

  return { onPostData, test, onGetUser, user }
}

export default useOnboardingController
