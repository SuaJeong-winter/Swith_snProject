import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'
import { Button } from '~/components/ui/button'
import { Textarea } from '~/components/ui/textarea'

//Btn BackIcon 클릭 시 기능 추가
//BtnMoreVertical클릭 시 기능 추가
//TextArea 관련 글자 수 실시간 확인 기능 추가
//신청서 제출하기 버튼 클릭 시 기능 추가

export default function ApplyPage() {
  const AppliedStudyTitle = '피그마 정복하기'
  const applynum = 2
  const maxnum = 4
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="fixed top-4 flex flex-row space-x-28 px-3 pt-3">
        <a href="/applyintro">
          <BtnBackIcon />
        </a>
        <h2 className="font-bold">스터디 지원하기</h2>
        <BtnMoreVertical />
      </div>
      <div className="fixed top-16 h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="px-3">
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">지원 스터디 확인</h2>
          <h2 className="font-medium"> {AppliedStudyTitle}</h2>
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">한 줄 자기소개</h2>
          <Textarea
            placeholder="한 줄 자기소개를 작성하세요"
            className="resize-none"
            rows={6}
          />
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
        <Button className="border-1 w-60 flex-[2] border-solid">
          신청서 제출하기
        </Button>
      </div>
    </section>
  )
}
