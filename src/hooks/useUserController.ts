import { useEffect, useState } from 'react'
import {
  getOpenProfile,
  getProfile,
  getUser,
  getUserAll,
  getUserBookmark,
  getUserFriends,
  postUserBookmark,
  postUserFriends,
} from '~/apis/user-rls'
import { Database } from '~/types/supabase'

const useUserController = () => {
  const [user, setUser] = useState<any[]>([])
  const [openUser, setOpenUser] = useState<any[]>([])
  const [allUsers, setAllUser] = useState<any[]>([])
  const [prevList, setPrevList] = useState<any[]>([])
  const [friends, setFriends] = useState<any[]>([])

  const onGetUser = async () => {
    try {
      const resultUser = await getProfile()
      if (resultUser) setUser(resultUser)
    } catch (error) {
      console.error(error)
    }
  }

  const onGetUserAll = async () => {
    try {
      const resultUserAll = await getUserAll()
      if (resultUserAll) setAllUser(resultUserAll)
    } catch (error) {
      console.error(error)
    }
  }

  const onGetOpenProfile = async (userId: any) => {
    try {
      const resultUser = await getOpenProfile(userId)
      if (resultUser) setOpenUser(resultUser)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    onGetUser()
    onGetUserAll()
  }, [])

  const onGetBookmark = async () => {
    try {
      const result = await getUserBookmark()
      if (result) {
        const [resultBookmark] = result
        if (resultBookmark) setPrevList(resultBookmark.bookmark_list)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onPostBookmark = async (newList: any) => {
    try {
      await postUserBookmark(newList)
      onGetBookmark()
    } catch (error) {
      console.error(error)
    }
  }

  const onGetFriends = async () => {
    try {
      const result = await getUserFriends()
      if (result) {
        const [resultFriends] = result
        if (resultFriends) setFriends(resultFriends.friends)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onPostFriends = async (newList: any) => {
    try {
      await postUserFriends(newList)
      onGetFriends()
    } catch (error) {
      console.error(error)
    }
  }

  return {
    user,
    allUsers,
    openUser,
    onGetUser,
    onGetUserAll,
    onGetOpenProfile,
    prevList,
    onGetBookmark,
    onPostBookmark,
    friends,
    onGetFriends,
    onPostFriends,
  }
}
export default useUserController
