import Link from 'next/link'
import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'
import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'
import { Textarea } from '~/components/ui/textarea'

//여기 페이지 메뉴는 무슨 쓸모지? 필요 없으면 삭제할 것
//프로필 부분 추가 필요

export default function ApplyIntroPage() {
  const AppliedStudyTitle = '피그마 정복하기'
  const TestText = '받아온 데이터 출력하기'
  const applynum = 2
  const maxnum = 4
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="fixed top-4 flex flex-row space-x-28 px-3 pt-3">
        <a href="# ">
          <BtnBackIcon />
        </a>
        <h2 className="invisible font-bold">스터디 지원하기</h2>
        <BtnMoreVertical />
      </div>

      <div className="px-3">
        <div className="flex flex-row items-center space-x-4 space-y-2 pt-20">
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
      </div>

      <div className="top-[300px] h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="px-3">
        <div className="space-y-2 pt-20">
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
      </div>

      <div className="fixed bottom-8 flex items-center justify-center space-x-4 px-3">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">{applynum}명 </span>/ {maxnum}
            명
          </p>
        </div>
        <Link href="/apply">
          <Button className="border-1 w-60 flex-[2] border-solid">
            스터디 신청하기
          </Button>
        </Link>
      </div>
    </section>
  )
}
