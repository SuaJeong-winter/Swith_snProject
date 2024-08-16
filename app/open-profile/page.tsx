import Link from 'next/link'
import { Chip } from '~/components/ui/chip'
import BtnBack from '~/assets/btn_back.svg'
import OpenProfileimage from '~/assets/icon_openprofile-image.svg'
import MeetieMaster from '~/assets/badge_meetie-master.svg'
import MyStudyPeople from '~/assets/icon_studypeople.svg'
import { Card } from '~/components/ui/card'

export default function OpenProfile() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <div className="flex items-center px-4 pt-4">
          <Link href="/" className="flex items-center">
            <BtnBack className="" />
          </Link>
          <div className="flex flex-1 justify-center">
            <span className="text-lg font-bold">공개 프로필</span>
          </div>
        </div>

        <div className="flex flex-col items-center pt-8">
          <OpenProfileimage className="justify-between" />
          <span className="pt-2 text-lg font-semibold">제이크</span>
          <span className="pt-1 text-xs">기획자</span>
        </div>

        <div className="flex flex-col px-4 pb-3 pt-10">
          <span className="text-bold pt-1 font-bold">한줄 자기소개</span>
          <span className="pt-1 text-xs">
            안녕하세요, 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디
            버디들을 구하고 싶습니다 화이팅🔥
          </span>
        </div>

        <div className="border-y-2"></div>

        <div className="items-left flex flex-col px-4 pb-10 pt-8">
          <span className="pb-5 text-base font-bold">보유하고 있는 뱃지</span>

          <Card className="flex h-[185px] w-[150px] flex-col items-center justify-center border border-2 border-purple-200 border-purple-500 bg-[#FDFBFF] p-5 text-center">
            <MeetieMaster />
            <span className="align-center pt-3 text-xs font-semibold text-gray-500">
              레벨3
            </span>
            <span className="text-xs font-semibold">밋티 마스터</span>
          </Card>
        </div>

        <div className="items-left flex flex-col px-4 pb-5 pt-8">
          <span className="pb-3 text-base font-bold">스터디 목적</span>
          <div className="flex flex-row space-x-4">
            <Chip
              variant="muted"
              className="bg-gray cursor-default border border-meetie-gray-20 text-black"
            >
              자기 개발
            </Chip>
            <Chip
              variant="muted"
              className="bg-gray cursor-default border border-meetie-gray-20 text-black"
            >
              해당 분야의 네트워크 확장
            </Chip>
          </div>
        </div>
        <div className="items-left flex flex-col px-4">
          <span className="pb-3 text-base font-bold">스터디 성향</span>
          <div className="flex flex-row space-x-4">
            <Chip
              variant="muted"
              className="bg-gray cursor-default border border-meetie-gray-20 text-black"
            >
              손이 빠름
            </Chip>
            <Chip
              variant="muted"
              className="bg-gray cursor-default border border-meetie-gray-20 text-black"
            >
              열정적
            </Chip>
            <Chip
              variant="muted"
              className="bg-gray cursor-default border border-meetie-gray-20 text-black"
            >
              동기부여가 필요한
            </Chip>
          </div>
        </div>
        <div className="items-left flex flex-col px-4 pb-8 pt-5">
          <span className="pb-3 text-base font-bold">예상 스터디 기간</span>
          <div className="flex flex-row space-x-4">
            <Chip
              variant="muted"
              className="bg-gray cursor-default border border-meetie-gray-20 text-black"
            >
              1개월 ~ 3개월
            </Chip>
          </div>
        </div>
        <div className="items-left flex flex-col px-4">
          <span className="text-base font-bold">스터디 경험</span>
          <span className="pb-3 pt-1 text-sm text-gray-400">
            # 성실함과 관심사가 보이는 기록이에요
          </span>
        </div>
        <div className="mb-3 ml-4 mr-4 rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-lg border border-purple-200 p-4 font-semibold">
          <div className="flex items-center">
            <MyStudyPeople className="mr-2" />
            <span className="text-xs font-semibold">
              피그마 초급 실습 스터디
            </span>
          </div>
        </div>
        <div className="ml-4 mr-4 rounded-bl-lg rounded-br-lg rounded-tl-none rounded-tr-lg border border-purple-200 p-4 font-semibold">
          <div className="flex items-center">
            <MyStudyPeople className="mr-2" />
            <span className="text-xs font-semibold">
              디자인 기획 실습 스터디
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
