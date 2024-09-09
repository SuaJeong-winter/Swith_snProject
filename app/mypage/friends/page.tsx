'use client'
import { useEffect } from 'react'
import MateCard from '~/components/searchstudy/mate-card'
import useUserController from '~/hooks/useUserController'

export default function page() {
  // const { friends, onGetFriends, onGetOpenProfile } = useUserController()
  // useEffect(() => {
  //   onGetFriends()
  // }, [])
  // console.log(friends[0])

  return (
    <>
      <section className="bg-[#F5F5FF] pb-12 pt-3"></section>
      <div className="flex flex-2 flex-wrap justify-center gap-3">
        {/* {friends.length > 0 ? (
          friends.map((friend) => (
            <MateCard
              userName={friend.username}
              jobType={friend['job_type']}
              userType={friend['study_style']}
              profileImg={friend['profile_img']}
              userId={friend.id}
              key={friend.id}
            />
          ))
        ) : (
          <p>스터디 친구가 없어요</p>
        )} */}
      </div>
    </>
  )
}
