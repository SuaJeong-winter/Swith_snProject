'use client'
import Link from 'next/link'
import BtnBack from '~/assets/btn_back.svg'
import { useEffect } from 'react'
import MateCard from '~/components/searchstudy/mate-card'
import useUserController from '~/hooks/useUserController'

export default function Page() {
  const { friends, newData, onGetFriends, onGetFriendData } =
    useUserController()

  useEffect(() => {
    onGetFriends()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (friends !== null) {
      friends.map((friend) => {
        onGetFriendData(friend)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [friends])

  return (
    <>
      <section className="h-svh bg-[#F5F5FF] pb-12 pt-3">
        <div className="flex items-center p-4">
          <Link href="/mypage" className="flex items-center">
            <BtnBack className="" />
          </Link>
          <div className="flex flex-1 justify-center px-4">
            <span className="text-lg font-bold">스터디 친구 목록</span>
          </div>
        </div>
        <div className="mt-3 flex flex-2 flex-wrap justify-center gap-3">
          {newData.length > 0 ? (
            newData.map((friend: any) => (
              <MateCard
                userName={friend.username}
                jobType={friend['job_type']}
                userType={friend['study_style']}
                profileImg={friend['profile_img']}
                userId={friend.id}
                key={friend.id}
                btnOpt={true}
              />
            ))
          ) : (
            <p>스터디 친구가 없어요</p>
          )}
        </div>
      </section>
    </>
  )
}
