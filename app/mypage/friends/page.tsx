'use client'
import { useEffect } from 'react'
import MateCard from '~/components/searchstudy/mate-card'
import useUserController from '~/hooks/useUserController'

export default function Page() {
  const { friends, newData, onGetFriends, onGetFriendData } =
    useUserController()

  useEffect(() => {
    onGetFriends()
  }, [friends])

  useEffect(() => {
    if (friends !== null) {
      friends.map((friend) => {
        onGetFriendData(friend)
      })
    }
  }, [friends])

  return (
    <>
      <section className="h-svh bg-[#F5F5FF] pb-12 pt-3">
        <div className="p-8 text-center">
          <h2 className="text-xl font-bold">스터디 친구</h2>
        </div>
        <div className="flex flex-2 flex-wrap justify-center gap-3">
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
