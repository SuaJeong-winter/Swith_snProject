import BtnBackIcon from '~/assets/btn_back.svg'

import MpProfile from '~/assets/mp_profile.svg'

import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'
import { StudyHeaderNoText } from '~/components/studycreate/study-header'

export default function ApprovalPage() {
  const AppliedStudyTitle = '피그마 정복하기'
  const TestText = '받아온 데이터 출력하기'
  const applynum: number = 1
  const maxnum = 4
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <StudyHeaderNoText />
      <div className="px-3">
        <div className="flex flex-row items-center space-x-4 space-y-2 pt-[60px]">
          <h2 className="text-lg font-bold"> {AppliedStudyTitle}</h2>
          <Button
            className="m-8 w-[60px] rounded-3xl"
            variant="outline"
            size="sm"
          >
            D-12
          </Button>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1">
          <Chip className="border-transparent bg-meetie-blue-1 text-xs">
            Figma
          </Chip>
          <Chip className="border-transparent bg-meetie-blue-1 text-xs">
            디자이너
          </Chip>
          <Chip className="border-transparent bg-meetie-blue-1 text-xs">
            UX/UI
          </Chip>
          <Chip className="border-transparent bg-meetie-blue-1 text-xs">
            온라인 강의
          </Chip>
        </div>
        <div className="space mt-[10px] flex h-[70px] flex-row items-center justify-start space-x-2">
          <MpProfile />
          <div className="text-base text-black">
            <p>김서희</p>
            <p>작성일 2024.08.13 09:41</p>
          </div>
        </div>
      </div>

      <div className="mt-[10px] h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="px-3">
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">스터디 주제</h2>
          <h2 className="font-medium">{TestText}</h2>
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">스터디 목표</h2>
          <h2 className="font-medium">{TestText}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 소개</h2>
          <h2 className="font-medium">{TestText}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">진행방식과 커리큘럼</h2>
          <h2 className="font-medium">{TestText}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 인원</h2>
          <h2 className="font-medium">{TestText}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 기간</h2>
          <h2 className="font-medium">{TestText}</h2>
        </div>
        <div className="space-y-2 px-[120px] pt-8">
          <Link href="established ">
            <p className="text-meetie-blue-4 underline">스터디 마감하기</p>
          </Link>
        </div>

        <div className="space-y-2 pt-20"></div>
      </div>

      <div className="fixed bottom-0 flex h-[100px] w-[375px] items-center justify-center space-x-4 bg-white">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">{applynum}명 </span>/ {maxnum}
            명
          </p>
        </div>
        {applynum === 0 ? (
          <Button className="border-1 w-[240px] border-solid bg-gray-400">
            아직 대기 인원이 없습니다
          </Button>
        ) : (
          <Link href="/waiting">
            <Button className="border-1 w-60 flex-[2] border-solid">
              대기중인 요청 확인
            </Button>
          </Link>
        )}
        {/* if (applynum===0)
        {
          <Button className="border-1 w-60 flex-[2] border-solid">
            아직 대기 인원이 없습니다
          </Button>
        }
        else
        {
          <Link href="/apply">
            <Button className="border-1 w-60 flex-[2] border-solid">
              스터디 신청하기
            </Button>
          </Link>
        } */}
      </div>
    </section>
  )
}
