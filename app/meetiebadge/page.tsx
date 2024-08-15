import Link from 'next/link'
import MeetieMaster from '~/assets/badge_meetie-master.svg'

export default function MyAbility() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-center px-4 pb-3 pt-8">
          <span className="text-base font-semibold">밋티 뱃지</span>
        </div>

        <div className="flex flex-col items-center px-4 pb-3 pt-8">
          <span className="text-2xl font-bold text-gray-700">
            모두가 믿고 따르는 리더쉽!
          </span>
          <span className="pt-3 text-sm text-gray-500">
            3가지 퀘스트 완수로
          </span>
          <span className="text-sm text-gray-500">
            나의 IT 스터디 방장 능력이 상승했어요
          </span>
        </div>
        <div className="items-center gap-10 pl-4 pt-11">
          <div className="flex flex-col items-center pb-4">
            <MeetieMaster className=""></MeetieMaster>
            <span className="pt-2 text-sm text-gray-600">밋티 마스터</span>
          </div>
        </div>
      </div>
    </div>
  )
}
