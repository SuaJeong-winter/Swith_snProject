import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import RecruitDrawer from '~/components/studycreate/create-drawer'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { StudyHeaderProgress } from '~/components/studycreate/study-header'

import CreateProgress from '~/components/studycreate/create-progress'

export default function Step1Input({
  onNext,
}: {
  onNext: (data: {
    recruit_type: string[]
    title: string
    goal: string
    info: string
  }) => void
}) {
  const [title, setTitle] = useState('')
  const [goal, setGoal] = useState('')
  const [info, setInfo] = useState('')
  const [selectedJobs, setSelectedJobs] = useState<string[]>([])
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    setIsValid(
      selectedJobs.length > 0 &&
        title.trim() !== '' &&
        goal.trim() !== '' &&
        info.trim() !== '',
    )
  }, [title, goal, info, selectedJobs])

  const handleNext = () => {
    onNext({ recruit_type: selectedJobs, title, goal, info })
  }

  return (
    <>
      <section className="flex min-h-dvh flex-col bg-white pb-8">
        <StudyHeaderProgress />
        <div className="fixed mt-[60px]">
          <CreateProgress currentProgress={50} />
        </div>
        <div className="space-y-0 px-3">
          <div className="space-y-2 pt-[100px]">
            <h2 className="font-bold">모집 직군</h2>
            <RecruitDrawer onJobsChange={setSelectedJobs} />
          </div>
          <div className="space-y-2 pt-10">
            <h2 className="font-bold">주제</h2>
            <Input
              placeholder="스터디의 주제를 작성해주세요"
              className="required"
              maxLength={20}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-2 pt-10">
            <h2 className="font-bold">목표</h2>
            <Input
              placeholder="스터디의 목표를 간단히 작성해주세요"
              className="required"
              maxLength={20}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>
          <div className="space-y-2 pt-10">
            <h2 className="font-bold">소개</h2>
            <Textarea
              placeholder="스터디를 설명해보세요"
              className="resize-none"
              rows={6}
              value={info}
              onChange={(e) => setInfo(e.target.value)}
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

          {isValid ? (
            <Button
              onClick={handleNext}
              className="w-[220px] flex-initial border-[1px] border-solid"
            >
              다음
            </Button>
          ) : (
            <Button className="w-[220px] flex-initial border-[1px] border-solid bg-meetie-blue-2">
              내용이 부족해요!
            </Button>
          )}
        </div>
      </section>
    </>
  )
}
