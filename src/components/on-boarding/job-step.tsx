'use client'

import { useState } from 'react'

import { Button } from '~/components/ui/button'
import { Progress } from '~/components/ui/progress'
import { ChipGroup, ChipGroupItem } from '~/components/ui/chip-group'
import ChipDesigner from '~/assets/on-boarding/chip_designer.svg'
import ChipDeveloper from '~/assets/on-boarding/chip_developer.svg'
import ChipPM from '~/assets/on-boarding/chip_pm.svg'

const JOBS = [
  { value: '디자이너', icon: ChipDesigner },
  { value: '개발자', icon: ChipDeveloper },
  { value: '기획자', icon: ChipPM },
] as const

export default function JobStep({ onNext }: { onNext: (job: string) => void }) {
  const [job, setJob] = useState<string | null>(null)

  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <Progress value={25} />
        <span className="mt-2.5 px-4 text-xs text-meetie-gray-40">
          <span className="text-foreground">1</span> / 4
        </span>
      </div>
      <div className="flex w-full flex-col px-4">
        <h2 className="mt-16 text-2xl font-semibold text-meetie-gray-90">
          김서희님이 관심있는
          <br />
          직무는 무엇인가요?
        </h2>
        <span className="mt-5 text-sm text-meetie-gray-40">
          선택한 직무를 바탕으로 스터디를 추천해줄게요!
        </span>
        <ChipGroup
          type="single"
          className="mt-16 grid w-full grid-cols-3 gap-2"
          onValueChange={(value) => setJob(value)}
        >
          {JOBS.map(({ value, icon }) => (
            <ChipGroupItem
              key={value}
              value={value}
              className="flex flex-col gap-5 border-meetie-gray-20/40 bg-meetie-gray-20/40 py-6"
            >
              {icon()}
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
            onClick={() => job && onNext(job)}
            disabled={!job}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  )
}
