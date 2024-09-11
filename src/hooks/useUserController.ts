import { useCallback, useEffect, useState } from 'react'
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
  const [friendData, setFriendData] = useState<any[]>([])

  const onGetUser = async () => {
    try {
      // console.log('fetch--getUser')
      const resultUser = await getProfile()
      if (resultUser) setUser(resultUser)
    } catch (error) {
      console.error(error)
    }
  }

  const onGetUserAll = async () => {
    try {
      // console.log('fetch--getUserAll')
      const resultUserAll = await getUserAll()
      if (resultUserAll) setAllUser(resultUserAll)
    } catch (error) {
      console.error(error)
    }
  }

  const onGetOpenProfile = async (userId: any) => {
    try {
      // console.log('fetch--getOpenProfile')
      const resultUser = await getOpenProfile(userId)
      if (resultUser) setOpenUser(resultUser)
      return resultUser
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    onGetUser()
    onGetUserAll()
  }, [])

  const onGetFriendData = useCallback(async (userId: any) => {
    try {
      const result = await getOpenProfile(userId)
      if (result) {
        const [newResult] = result
        setFriendData((prev) => [...prev, newResult])

        // console.log(friendData)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  const newData = friendData.reduce(function (acc, current) {
    if (acc.findIndex(({ id }: { id: any }) => id === current.id) === -1) {
      acc.push(current)
    }
    return acc
  }, [])

  // console.log(friendData)
  // console.log(newData)

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

  const onGetFriends = useCallback(async () => {
    const result = await getUserFriends()
    if (result) {
      const [resultFriends] = result
      if (resultFriends) setFriends(resultFriends.friends)
      // console.log('fetch--getFriends')
    }
  }, [])

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
    friendData,
    newData,
    onGetFriends,
    onPostFriends,
    onGetFriendData,
  }
}
export default useUserController
