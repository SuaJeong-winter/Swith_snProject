'use client'

import { useState } from 'react'

import { Button } from '~/components/ui/button'
import { Progress } from '~/components/ui/progress'
import { ChipGroup, ChipGroupItem } from '~/components/ui/chip-group'
import type { FormState } from '~/components/on-boarding/on-boarding-funnel'
import { useRouter } from 'next/navigation'
import useOnboardingController from '~/hooks/useOnboardingController'
import useUserController from '~/hooks/useUserController'

const PERIODS = [
  '1개월 이내',
  '1개월~3개월',
  '3개월~6개월',
  '6개월 이상',
] as const

export default function PeriodStep({
  context,
}: {
  context: FormState & {
    job: string
    purpose: string[]
    personality: string[]
  }
}) {
  const router = useRouter()
  const [period, setPeriod] = useState<string | null>(null)

  const { onPostProfiles } = useOnboardingController()

  const handleSubmit = () => {
    onPostProfiles({ ...context, period })
    router.push('/on-boarding/done')
  }
  const { user } = useUserController()
  const [userData] = user

  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <Progress value={100} />
        <span className="mt-2.5 px-4 text-xs text-meetie-gray-40">
          <span className="text-foreground">4</span> / 4
        </span>
      </div>
      <div className="flex w-full flex-col px-4">
        <h2 className="mt-16 text-2xl font-semibold text-meetie-gray-90">
          {userData?.username}님의
          <br />
          예상 스터디 기간은 얼마인가요?
        </h2>
        <span className="mt-5 text-sm text-meetie-gray-40">
          나와 비슷한 유저들과 스터디할 수 있도록 도와드려요!
        </span>
        <ChipGroup
          type="single"
          className="mt-16 flex flex-col items-start gap-3"
          onValueChange={(value) => setPeriod(value)}
        >
          {PERIODS.map((value) => (
            <ChipGroupItem key={value} value={value} variant="secondary">
              {value}
            </ChipGroupItem>
          ))}
        </ChipGroup>
      </div>
      <div className="absolute bottom-10 flex w-full flex-col gap-3 px-4">
        <span className="text-center text-xs text-meetie-gray-40/80">
          내용은 다시 수정할 수 있어요!
        </span>
        <div className="flex gap-3">
          <Button variant="secondary" className="w-2/5 border">
            이전
          </Button>
          <Button
            className="w-3/5 font-semibold"
            disabled={!period}
            onClick={handleSubmit}
          >
            이제 마지막이에요
          </Button>
        </div>
      </div>
    </div>
  )
}
