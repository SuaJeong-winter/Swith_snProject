import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { StudyHeaderProgress } from '~/components/studycreate/study-header'
import RecruitDrawer from '~/components/studycreate/create-drawer'
import CreateProgress from '~/components/studycreate/create-progress'

export default function CreatePage() {
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <StudyHeaderProgress />
      <div className="fixed mt-[60px]">
        <CreateProgress currentProgress={50} />
      </div>
      <div className="space-y-0 px-3">
        <div className="space-y-2 pt-[100px]">
          <h2 className="font-bold">모집 직군</h2>
          <RecruitDrawer />
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">주제</h2>
          <Input
            placeholder="스터디의 주제를 작성해주세요"
            className="required"
            maxLength={20}
          />
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">목표</h2>
          <Input
            placeholder="스터디의 목표를 간단히 작성해주세요"
            className="required"
            maxLength={20}
          />
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">소개</h2>
          <Textarea
            placeholder="스터디를 설명해보세요"
            className="resize-none"
            rows={6}
          />
        </div>
      </div>

      <div className="fixed bottom-8 flex items-center justify-center space-x-2 px-[20px]">
        <Link href="search">
          <Button
            variant="secondary"
            className="w-[110px] flex-initial border-[1px] border-gray-200"
          >
            이전
          </Button>
        </Link>
        <Link href="createsec">
          <Button className="w-[220px] flex-initial border-[1px] border-solid">
            다음
          </Button>
        </Link>

        {/* 비활성화 상태일때 */}
        {/* <Button className="w-[220px] flex-initial border-[1px] border-solid bg-meetie-blue-2">
          다음_off
        </Button> */}
      </div>
    </section>
  )
}
