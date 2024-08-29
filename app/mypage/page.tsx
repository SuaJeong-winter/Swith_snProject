import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import MpProfile from '~/assets/mp_profile.svg'
import MpStudyIcon from '~/assets/icon_study-now-purple.svg'
import MpStudyPeople from '~/assets/icon_people.svg'
import MyStudyIconBlack from '~/assets/icon_study-now.svg'
import MyStudyOpen from '~/assets/icon_page open.svg'
import MyStudyPrev from '~/assets/icon_study-prev.svg'
import MpLine from '~/assets/icon_line.svg'
import BookMark from '~/assets/icon_study-bookmark.svg'
import MeetieMaster from '~/assets/badge_meetie-master.svg'
import InfoVector from '~/assets/icon_info_vector.svg'

export default async function Home() {
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
    <div className="items-left flex min-h-dvh flex-col justify-center bg-background from-[hsla(239,100%,95%,1)] from-0% to-background to-50% p-3">
      <div className="items-left flex flex-col pb-8">
        <span className="text-lg font-bold">마이페이지</span>
      </div>

      <div className="items-left flex justify-between">
        <div className="items-left flex p-3">
          <MpProfile className="justify-between" />
          <div className="items-left flex flex-col pl-3">
            <span className="text-lg">{user[0]['job_type']}</span>
            <span className="text-lg font-bold">{user[0].name}님</span>
          </div>
        </div>
        <div className="items-right flex pl-8 pt-3">
          <div className="items-left flex flex-col pt-7">
            <Link href="open-profile">
              <Button
                variant="secondary"
                size="sm"
                className="w-4/1 border text-purple-600"
              >
                공개 프로필
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="items-left flex flex-col pb-3 pt-4">
        <span className="text-lg font-bold">내 정보</span>
      </div>

      <div>
        <Card className="flex items-center justify-between border-purple-200 bg-[#FDFBFF] p-5">
          <div className="flex flex-col items-center pl-12">
            <Link href="/" className="">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F1FF]">
                <MpStudyIcon />
              </div>
            </Link>
            <div className="pt-2 text-center">
              <div className="text-sm text-gray-400">스터디</div>
              <div className="text-base font-bold">2</div>
            </div>
          </div>

          <InfoVector />

          <div className="flex flex-col items-center pr-12">
            <Link href="/" className="">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F1FF]">
                <MpStudyPeople />
              </div>
            </Link>
            <div className="pt-2 text-center">
              <div className="text-sm text-gray-400">스터디 친구</div>
              <div className="text-base font-bold">{user[0].friends}</div>
            </div>
          </div>
        </Card>
      </div>

      <div className="items-left flex flex-col pt-4">
        <span className="text-lg font-bold">내 능력 현황</span>
      </div>
      <div className="items-left flex flex-col p-3 pt-4">
        <Link href="my-ability" className="">
          <MeetieMaster className="justify-between" />
        </Link>
        <span className="align-center pl-9 pt-3 text-xs font-semibold text-gray-500">
          레벨{meetiebadge[0].level}
        </span>
        <span className="pl-6 text-xs font-semibold">
          {meetiebadge[0].badgename}
        </span>
      </div>

      <div className="items-left flex flex-col pt-4">
        <span className="text-lg font-bold">내 스터디</span>
      </div>
      <div className="relative pt-3">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">
            <MyStudyIconBlack className="mr-2" />
            <span className="mr-2">참여 중인 스터디</span>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EDF1FF]">
                <span className="font-bold text-purple-600">2</span>
              </div>
            </div>
          </div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>
      <div className="relative">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">
            <MyStudyIconBlack className="mr-2" />
            <span className="mr-2">모집 중인 스터디</span>
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EDF1FF]">
                <span className="font-bold text-purple-600">2</span>
              </div>
            </div>
          </div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>
      <div className="relative">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">
            <MyStudyPrev className="mr-2" /> 지난 스터디
            <span className="pl-2 font-bold">2</span>
          </div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>

      <MpLine className="" />

      <div className="items-left flex flex-col pt-4">
        <span className="text-lg font-bold">관심 보인 스터디</span>
      </div>
      <div className="relative pt-3">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">
            <BookMark className="mr-2" /> 관심 스터디
          </div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>

      <div className="items-left flex flex-col pt-4">
        <span className="text-lg font-bold">계정 정보</span>
      </div>
      <div className="relative pt-3">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">회원 정보 수정</div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>
      <div className="relative">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">비밀번호 설정</div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>
      <div className="relative">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">회원 탈퇴</div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>

      <div className="items-left flex flex-col pt-4">
        <span className="text-lg font-bold">고객 센터</span>
      </div>
      <div className="relative pt-3">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">FAQ</div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>
      <div className="relative">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">문의하기</div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>
      <div className="relative">
        <button className="flex w-full items-center rounded bg-white py-2 text-sm text-black">
          <div className="flex items-center">공지사항</div>
          <MyStudyOpen className="absolute right-4 top-1/2 -translate-y-1/2 transform" />
        </button>
      </div>
    </div>
  )
}
