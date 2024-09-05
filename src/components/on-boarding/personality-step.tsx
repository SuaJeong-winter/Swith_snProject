'use client'

import { useState } from 'react'

import { Button } from '~/components/ui/button'
import { Progress } from '~/components/ui/progress'
import { ChipGroup, ChipGroupItem } from '~/components/ui/chip-group'
import useUserController from '~/hooks/useUserController'

const PERSONALITIES = [
  ['주도적인', '열정적인', '손이 빠른'],
  ['시간을 지키는', '꼼꼼한', '모험적인', '신중한'],
  ['커뮤니케이션에 능숙한', '논리적인', '파워 J'],
  ['분석적인', '동기부여가 필요한', '완벽주의'],
] as const

export default function PersonalityStep({
  onNext,
}: {
  onNext: (personality: string[]) => void
}) {
  const [personality, setPersonality] = useState<string[]>([])
  const { user } = useUserController()
  const [userData] = user
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <Progress value={75} />
        <span className="mt-2.5 px-4 text-xs text-meetie-gray-40">
          <span className="text-foreground">3</span> / 4
        </span>
      </div>
      <div className="flex w-full flex-col px-4">
        <h2 className="mt-16 text-2xl font-semibold text-meetie-gray-90">
          {userData?.username}님은
          <br />
          어떤 스타일이신가요?
        </h2>
        <span className="mt-5 text-sm text-meetie-gray-40">
          미티님과 비슷하다고 생각되는 키워드를 모두 선택해주세요!
        </span>
        <ChipGroup
          type="multiple"
          className="mt-16 flex-col items-start gap-3 tracking-tighter"
          onValueChange={(value) => setPersonality(value)}
        >
          {PERSONALITIES.map((group, index) => (
            <div
              key={`personality-group-${index.toString()}`}
              className="flex gap-2"
            >
              {group.map((value) => (
                <ChipGroupItem key={value} value={value} className="rounded-xl">
                  {value}
                </ChipGroupItem>
              ))}
            </div>
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
            disabled={!personality.length}
            onClick={() => onNext(personality)}
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  )
}
