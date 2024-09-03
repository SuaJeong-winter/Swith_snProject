import StudyHeader from '~/components/studycreate/study-header'
import { Button } from '~/components/ui/button'
import { Textarea } from '~/components/ui/textarea'

//  더미데이터
const studyGroupDummyData = {
  title: '프론트엔드 스터디', // 주제
  goal: 'React 심화 학습', // 목표
  info: '프론트엔드 개발에 관심 있는 분들을 위한 스터디입니다. React와 관련된 심화 학습을 통해 실무 능력을 키우고자 합니다.', // 소개
  curriculum: 'React 기본 개념 복습 -> 프로젝트 기획 -> 코드 리뷰', // 진행방식과 커리큘럼
  max_member: 8, // 멤버 수
}
const studyid = 123

export default function ApplyPage() {
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <StudyHeader title="스터디 지원하기" href={`/apply/${studyid}`} />
      <div className="fixed top-16 h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="px-3">
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">지원 스터디 확인</h2>
          <h2 className="font-medium"> {studyGroupDummyData.title}</h2>
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
            <span className="text-meetie-blue-4">1명 </span>/
            {studyGroupDummyData.max_member - 1}명
          </p>
        </div>
        <Button className="border-1 w-60 flex-[2] border-solid">
          신청서 제출하기
        </Button>
      </div>
    </section>
  )
}
