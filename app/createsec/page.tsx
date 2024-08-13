'use client'

import * as React from 'react'
import BtnBackIcon from '~/assets/btn_back.svg'
import { Input } from '~/components/ui/input'
import { Progress } from '~/components/ui/progress'
import { Calendar } from '~/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Button } from '~/components/ui/button'
import { Textarea } from '~/components/ui/textarea'
import { Calendar as CalendarIcon } from 'lucide-react'

import { format } from 'date-fns'
import { cn } from '~/utils/cn'
import { Chip } from '~/components/ui/chip'
import Link from 'next/link'

export default function CreatePageSecond() {
  const [count, setCount] = React.useState<number>(0)

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count > 0 ? count - 1 : 0) // 최소 0명으로 제한
  }
  const [date, setDate] = React.useState<Date>()
  const [date2, setDate2] = React.useState<Date>()

  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-[#F7F3FF] py-24">
      <div className="flex flex-row">
        {/* 헤더 */}
        <a href="/">
          <BtnBackIcon />
        </a>
        <h2>스터디 만들기</h2>
      </div>
      <div>
        {/* 관련 오류 해결 안됨 */}
        <Progress value={2} />
      </div>
      <div>
        <div>
          <h2>진행방식과 커리큘럼</h2>
          <Textarea placeholder="스터디의 진행 방식과 커리큘럼을 작성해주세요" />
        </div>

        <div className="flex flex-row">
          <div>
            <h2>시작일</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[1] justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )}
                >
                  {date ? format(date, 'PPP') : <span>날짜 선택</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <h2>마감일</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[1] justify-start text-left font-normal',
                    !date2 && 'text-muted-foreground',
                  )}
                >
                  {date2 ? format(date2, 'PPP') : <span>날짜 선택</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar
                  mode="single"
                  selected={date2}
                  onSelect={setDate2}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <p className="text-left">스터디 시작일이 모집 마감일로 설정됩니다</p>
        <div>
          <h2>스터디 모집인원</h2>
          <div>
            <button onClick={handleDecrease}>-</button>
            <span style={{ margin: '0 10px' }}>{count}</span>
            <button onClick={handleIncrease}>+</button>
          </div>
          <p className="text-xs">4~8명이 적당한 스터디 인원이에요</p>
        </div>
        <div>
          <h2>관련태그</h2>

          <div className="... h-42 grid grid-cols-3 content-evenly gap-2">
            <Chip data-state="on" className="border-1 text-xs text-black">
              온라인
            </Chip>
            <Chip data-state="on" className="border-1 text-xs text-black">
              오프라인
            </Chip>
            <Chip data-state="on" className="border-1 text-xs text-black">
              프론트엔드
            </Chip>
            <Chip data-state="on" className="border-1 text-xs text-black">
              UX/UI
            </Chip>
            <Chip data-state="on" className="border-1 text-xs text-black">
              PM
            </Chip>
            <Chip data-state="on" className="border-1 text-xs text-black">
              어플
            </Chip>
            <Chip data-state="on" className="border-1 text-xs text-black">
              웹
            </Chip>
            <Chip data-state="on" className="border-1 text-xs text-black">
              사이드프로젝트
            </Chip>
          </div>
          <p className="text-xs">최대 10개까지 선택이 가능해요</p>
        </div>
        <div className="flex">
          <Link href="create">
            <Button variant="secondary" className="flex-1">
              이전
            </Button>
          </Link>

          <Button className="border-1 flex-[2] border-solid">작성완료 </Button>
        </div>
      </div>
    </div>
  )
}
