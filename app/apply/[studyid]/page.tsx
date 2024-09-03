import Link from 'next/link'
import MpProfile from '~/assets/mp_profile.svg'
import { StudyHeaderNoText } from '~/components/studycreate/study-header'
import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'

//  더미데이터
const studyGroupDummyData = {
  title: '프론트엔드 스터디', // 주제
  goal: 'React 심화 학습', // 목표
  info: '프론트엔드 개발에 관심 있는 분들을 위한 스터디입니다. React와 관련된 심화 학습을 통해 실무 능력을 키우고자 합니다.', // 소개
  curriculum: 'React 기본 개념 복습 -> 프로젝트 기획 -> 코드 리뷰', // 진행방식과 커리큘럼
  max_member: 8, // 멤버 수
}
const studyid = 123

export default function ApplyIntroPage() {
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <StudyHeaderNoText />
      <div className="px-3">
        <div className="flex flex-row items-center space-x-4 space-y-2 pt-[60px]">
          <h2 className="text-lg font-bold"> {studyGroupDummyData.title}</h2>
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
          <h2 className="font-medium">{studyGroupDummyData.title}</h2>
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">스터디 목표</h2>
          <h2 className="font-medium">{studyGroupDummyData.goal}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 소개</h2>
          <h2 className="font-medium">{studyGroupDummyData.info}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">진행방식과 커리큘럼</h2>
          <h2 className="font-medium">{studyGroupDummyData.curriculum}</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 인원</h2>
          <h2 className="font-medium">{studyGroupDummyData.max_member}명</h2>
        </div>
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">스터디 기간</h2>
          <h2 className="font-medium">2024.08.26~2024.09.24</h2>
        </div>
        <div className="space-y-2 pt-20"></div>
      </div>

      <div className="fixed bottom-0 flex h-[100px] w-[375px] items-center justify-center space-x-4 bg-white">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">1명 </span>/
            {studyGroupDummyData.max_member - 1}명
          </p>
        </div>
        <Link href={`/apply/${studyid}/application`}>
          <Button className="border-1 w-60 flex-[2] border-solid">
            스터디 신청하기
          </Button>
        </Link>
      </div>
    </section>
  )
}
