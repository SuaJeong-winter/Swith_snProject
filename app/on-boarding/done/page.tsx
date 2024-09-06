'use client'

import Link from 'next/link'
import ProfileCard from '~/components/common/profile-card'
import { Button } from '~/components/ui/button'
import useUserController from '~/hooks/useUserController'

export default function Done() {
  const { user } = useUserController()
  const [userData] = user
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col px-4">
        <h2 className="mt-24 text-2xl font-semibold text-meetie-gray-90">
          {userData?.username}님의
          <br />
          공개 프로필이 생성되었어요
        </h2>
        <span className="mt-5 text-sm text-meetie-gray-40">
          나와 딱 맞는 스터디를 찾으러 떠나볼까요?
        </span>
        <div className="mt-20 flex justify-center">
          <ProfileCard
            username={userData?.username}
            userjobtype={userData?.['job_type']}
            profile_img={userData?.['profile_img']}
          />
        </div>
      </div>
      <div className="absolute bottom-10 flex w-full flex-col gap-3 px-4">
        <div>
          <Link href="/mypage" className="block">
            <Button className="w-full font-semibold">확인하러 가기</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
