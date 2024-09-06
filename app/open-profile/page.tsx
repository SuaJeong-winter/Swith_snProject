'use client'
import Link from 'next/link'
import { Chip } from '~/components/ui/chip'
import BtnBack from '~/assets/btn_back.svg'
import MeetieRunner from '~/assets/badge_meetie-runner.svg'
import MeetieNewbie from '~/assets/badge_meetie-newbie.svg'
import MeetieMaster from '~/assets/badge_meetie-master.svg'
import MyStudyPeople from '~/assets/icon_studypeople.svg'
import { Card } from '~/components/ui/card'
import useUserController from '~/hooks/useUserController'
import useMeetieBadgeController from '~/hooks/useMeetieBadgeController'
import Image from 'next/image'

export default function OpenProfile() {
  const { user } = useUserController()
  const { badge } = useMeetieBadgeController()
  const [userData] = user

  return (
    <div className="flex min-h-dvh flex-col items-center bg-background px-4 pb-4">
      <div className="flex w-full flex-col">
        <div className="flex items-center pt-4">
          <Link href="/mypage" className="flex items-center">
            <BtnBack className="" />
          </Link>
          <div className="flex flex-1 justify-center">
            <span className="text-lg font-bold">공개 프로필</span>
          </div>
        </div>

        <div className="flex flex-col items-center pt-8">
          <Image
            width={56}
            height={56}
            src={userData?.['profile_img']}
            alt={`${userData?.username} profile image`}
            className="rounded-full"
          />
          <span className="pt-2 text-lg font-semibold">
            {userData?.username}
          </span>
          <span className="pt-1 text-xs">{userData?.['job_type']}</span>
        </div>

        <div className="flex flex-col pb-3 pt-10">
          <span className="text-bold pt-1 font-bold">한줄 자기소개</span>
          <span className="pt-1 text-xs">{userData?.introduce}</span>
        </div>

        <div className="items-left flex flex-col py-8">
          <span className="pb-5 text-base font-bold">보유하고 있는 뱃지</span>
          <Card className="flex h-[185px] w-[150px] flex-col items-center justify-center border-[1px] border-purple-200 bg-[#FDFBFF] p-5 text-center">
            {badge[0]?.badgename === '밋티 뉴비' ? (
              <MeetieNewbie />
            ) : badge[0]?.badgename === '밋티 러너' ? (
              <MeetieRunner />
            ) : (
              <MeetieMaster />
            )}
            <span className="align-center pt-3 text-xs font-semibold text-gray-500">
              레벨
              {badge[0]?.badgename === '밋티 뉴비'
                ? 1
                : badge[0]?.badgename === '밋티 러너'
                  ? 2
                  : 3}
            </span>
            <span className="text-xs font-semibold">{badge[0]?.badgename}</span>
          </Card>
        </div>
        <div className="pb-8">
          <p className="pb-3 text-base font-bold">스터디 목적</p>
          <div className="flex flex-wrap gap-2">
            {userData?.['study_purpose'].map((purpose: any, idx: number) => (
              <Chip
                variant="muted"
                key={purpose + idx}
                className="bg-gray cursor-default border border-meetie-gray-20 text-black"
              >
                {purpose}
              </Chip>
            ))}
          </div>
        </div>
        <div className="pb-8">
          <p className="pb-3 text-base font-bold">스터디 성향</p>
          <div className="flex flex-wrap gap-2">
            {userData?.['study_style'].map((style: any, idx: number) => (
              <Chip
                variant="muted"
                key={style + idx}
                className="bg-gray cursor-default border border-meetie-gray-20 text-black"
              >
                {style}
              </Chip>
            ))}
          </div>
        </div>
        <div className="pb-8">
          <p className="pb-3 text-base font-bold">예상 스터디 기간</p>
          <div className="flex flex-wrap gap-2">
            <Chip
              variant="muted"
              className="bg-gray cursor-default border border-meetie-gray-20 text-black"
            >
              {userData?.['study_period']}
            </Chip>
          </div>
        </div>
        <div className="items-left flex flex-col">
          <span className="text-base font-bold">스터디 경험</span>
          <span className="pb-3 pt-1 text-sm text-gray-400">
            # 성실함과 관심사가 보이는 기록이에요
          </span>
        </div>
        {userData?.['study_list'] ? (
          userData?.['study_list'].map((list: any, idx: number) => (
            <div
              key={list + idx}
              className="mx-4 mb-3 rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-lg border border-purple-200 p-4 font-semibold"
            >
              <div className="flex items-center">
                <MyStudyPeople className="mr-2" />
                <span className="text-xs font-semibold">{list}</span>
              </div>
            </div>
          ))
        ) : (
          <p>아직 참여한 스터디가 없어요.</p>
        )}
      </div>
    </div>
  )
}
