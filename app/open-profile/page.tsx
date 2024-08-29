import Link from 'next/link'
import { Chip } from '~/components/ui/chip'
import BtnBack from '~/assets/btn_back.svg'
import OpenProfileimage from '~/assets/icon_openprofile-image.svg'
import MeetieMaster from '~/assets/badge_meetie-master.svg'
import MyStudyPeople from '~/assets/icon_studypeople.svg'
import { Card } from '~/components/ui/card'

export default async function OpenProfile() {
  const res = await fetch(
    'https://2cda2bdc-f43f-42c4-862d-6bee7ed3fd16.mock.pstmn.io/user/01',
    {
      cache: 'no-cache',
    },
  )
  const user = await res.json()
  console.log(user)

  const res2 = await fetch(
    'https://bca20514-f73e-4685-b1ad-7ad95c1392b9.mock.pstmn.io/meetiebadge/01',
    {
      cache: 'no-cache',
    },
  )
  const meetiebadge = await res2.json()
  console.log(meetiebadge)

  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <div className="flex items-center px-4 pt-4">
          <Link href="mypage" className="flex items-center">
            <BtnBack className="" />
          </Link>
          <div className="flex flex-1 justify-center">
            <span className="text-lg font-bold">공개 프로필</span>
          </div>
        </div>

        <div className="flex flex-col items-center pt-8">
          <OpenProfileimage className="justify-between" />
          <span className="pt-2 text-lg font-semibold">{user[0].name}</span>
          <span className="pt-1 text-xs">{user[0]['job_type']}</span>
        </div>

        <div className="flex flex-col px-4 pb-3 pt-10">
          <span className="text-bold pt-1 font-bold">한줄 자기소개</span>
          <span className="pt-1 text-xs">{user[0].introduce}</span>
        </div>

        <div className="border-y-2"></div>

        <div className="items-left flex flex-col px-4 pb-10 pt-8">
          <span className="pb-5 text-base font-bold">보유하고 있는 뱃지</span>

          <Card className="flex h-[185px] w-[150px] flex-col items-center justify-center border border-2 border-purple-200 border-purple-500 bg-[#FDFBFF] p-5 text-center">
            <MeetieMaster />
            <span className="align-center pt-3 text-xs font-semibold text-gray-500">
              레벨{meetiebadge[0].level}
            </span>
            <span className="text-xs font-semibold">
              {meetiebadge[0].badgename}
            </span>
          </Card>
        </div>

        <div className="items-left flex flex-col px-4 pb-5 pt-8">
          <span className="pb-3 text-base font-bold">스터디 목적</span>
          <div className="flex flex-row space-x-4">
            {user[0]['study_purpose'].map((purpose, idx) => (
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
        <div className="items-left flex flex-col px-4">
          <span className="pb-3 text-base font-bold">스터디 성향</span>
          <div className="flex flex-row space-x-4">
            {user[0]['study_style'].map((style, idx) => (
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
        <div className="items-left flex flex-col px-4 pb-8 pt-5">
          <span className="pb-3 text-base font-bold">예상 스터디 기간</span>
          <div className="flex flex-row space-x-4">
            <Chip
              variant="muted"
              className="bg-gray cursor-default border border-meetie-gray-20 text-black"
            >
              {user[0]['study_period']}
            </Chip>
          </div>
        </div>
        <div className="items-left flex flex-col px-4">
          <span className="text-base font-bold">스터디 경험</span>
          <span className="pb-3 pt-1 text-sm text-gray-400">
            # 성실함과 관심사가 보이는 기록이에요
          </span>
        </div>
        {user[0]['study_list'].map((list, idx) => (
          <div
            key={list + idx}
            className="mb-3 ml-4 mr-4 rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-lg border border-purple-200 p-4 font-semibold"
          >
            <div className="flex items-center">
              <MyStudyPeople className="mr-2" />
              <span className="text-xs font-semibold">{list}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
