import Link from 'next/link'
import BtnBack from '~/assets/btn_back.svg'
import MeetieMaster from '~/assets//badge_meetie-master.svg'
import MeetieNewbie from '~/assets/badge_meetie-newbie.svg'
import MeetieRunner from '~/assets/badge_meetie-runner.svg'

export default function MyAbility() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <div className="flex items-center px-4 pt-4">
          <Link href="/" className="flex items-center">
            <BtnBack className="" />
          </Link>
          <div className="flex flex-1 justify-center px-4">
            <span className="text-lg font-bold">내 능력 현황</span>
          </div>
        </div>
        <div className="items-left flex flex-col px-4 pb-3 pt-8">
          <span className="text-lg font-semibold">내 뱃지</span>
        </div>

        <div className="border-y-4"></div>

        <div className="items-left flex flex-col px-4 pb-3 pt-8">
          <span className="text-base">밋티 뱃지</span>
        </div>
        <div className="flex flex-row items-center gap-10 pl-4">
          <div className="flex flex-col items-center pt-2">
            <MeetieNewbie className=""></MeetieNewbie>
            <span className="pt-2 text-sm text-gray-600">밋티 뉴비</span>
          </div>
          <div className="flex flex-col items-center pb-1">
            <MeetieRunner className=""></MeetieRunner>
            <span className="pt-2 text-sm text-gray-600">밋티 러너</span>
          </div>
          <div className="flex flex-col items-center pb-4">
            <MeetieMaster className=""></MeetieMaster>
            <span className="pt-2 text-sm text-gray-600">밋티 마스터</span>
          </div>
        </div>
      </div>
    </div>
  )
}
