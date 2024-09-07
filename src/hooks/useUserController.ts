import { useEffect, useState } from 'react'
import {
  getProfile,
  getUser,
  getUserAll,
  getUserBookmark,
  postUserBookmark,
} from '~/apis/user-rls'
import { Database } from '~/types/supabase'

const useUserController = () => {
  const [user, setUser] = useState<any[]>([])
  const [allUsers, setAllUser] = useState<any[]>([])
  const [prevList, setPrevList] = useState<any[]>([])
  const [bookmarkList, setBookmark] = useState<any[]>([])

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
    console.log('get prev list')
  }

  useEffect(() => {
    onGetBookmark()
  }, [bookmarkList])

  const onPostBookmark = async (newList: any) => {
    try {
      const resultNewList = await postUserBookmark(newList)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    user,
    allUsers,
    onGetUserAll,
    prevList,
    bookmarkList,
    setBookmark,
    onGetBookmark,
    onPostBookmark,
  }
}
export default useUserController
