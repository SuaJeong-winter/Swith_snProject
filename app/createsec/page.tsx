'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '../../src/utils/cn'
import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import BtnBackIcon from '~/assets/btn_back.svg'
import { Textarea } from '~/components/ui/textarea'
import Link from 'next/link'
import { Chip } from '~/components/ui/chip'

export default function CreatePageSecond() {
  const [startdate, setStartDate] = React.useState<Date>()
  const [enddate, setEndDate] = React.useState<Date>()
  const [regulardate, setRegularDate] = React.useState<Date>()

  const [count, setCount] = React.useState<number>(0)

  const handleIncrease = () => {
    setCount(count < 10 ? count + 1 : 10)
  }

  const handleDecrease = () => {
    setCount(count > 0 ? count - 1 : 0) // 최소 0명으로 제한
  }

  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="fixed top-4 flex flex-row space-x-28 px-3 pt-3">
        <a href="/create">
          <BtnBackIcon />
        </a>
        <h2 className="font-bold">스터디 만들기</h2>
        <p>
          2 / <span className="text-gray-300">2</span>
        </p>
      </div>
      <div>{/* 여기는 progress bar */}</div>
      <div className="space-y-0 px-3">
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">진행방식과 커리큘럼</h2>
          <Textarea
            placeholder="스터디의 진행방식과 커리큘럼을 소개해주세요"
            className="resize-none border-gray-400"
            rows={6}
          />
        </div>

        <div className="flex flex-row space-x-3 pt-10">
          <div className="items-center">
            <h2 className="font-bold leading-3">시작일</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'mt-3 w-[170px] justify-start border-gray-400 text-left font-normal text-black',
                    !enddate && 'text-muted-foreground',
                  )}
                >
                  {enddate ? (
                    format(enddate, 'yyyy년 MM월 dd일')
                  ) : (
                    <span className="text-gray-400">날짜 선택</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar
                  mode="single"
                  selected={enddate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="items-center">
            <h2 className="font-bold leading-3">종료일</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'mt-3 w-[170px] justify-start border-gray-400 text-left font-normal text-black',
                    !startdate && 'text-muted-foreground',
                  )}
                >
                  {startdate ? (
                    format(startdate, 'yyyy년 MM월 dd일')
                  ) : (
                    <span className="text-gray-400">날짜 선택</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar
                  mode="single"
                  selected={startdate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <p className="pt-2 text-xs text-meetie-blue-4">
          스터디 시작일이 모집 마감일로 설정됩니다
        </p>
        <div className="flex flex-row space-x-3 pt-10">
          <div className="items-center">
            <h2 className="font-bold leading-3">정기일정</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'mt-3 w-[170px] justify-start border-gray-400 text-left font-normal text-black',
                    !regulardate && 'text-muted-foreground',
                  )}
                >
                  {regulardate ? (
                    format(regulardate, 'yyyy년 MM월 dd일')
                  ) : (
                    <span className="text-gray-400">날짜 선택</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar
                  mode="single"
                  selected={regulardate}
                  onSelect={setRegularDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="items-center">
            <h2 className="invisible font-bold leading-3">정기일정</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'mt-3 w-[170px] justify-start border-gray-400 text-left font-normal text-black',
                    !regulardate && 'text-muted-foreground',
                  )}
                >
                  {regulardate ? (
                    format(regulardate, 'yyyy년 MM월 dd일')
                  ) : (
                    <span className="text-gray-400">시간기능으로 수정필요</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto bg-white p-0">
                <Calendar
                  mode="single"
                  selected={regulardate}
                  onSelect={setRegularDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="pt-10">
          <h2 className="font-bold leading-3">스터디 모집 인원</h2>
          <div className="mx-[30px] mt-3 flex flex-row space-x-[120px]">
            <div>
              <button onClick={handleDecrease}>-</button>
            </div>
            <div>
              <span style={{ margin: '0 10px' }}>{count}</span>
            </div>
            <div>
              <button onClick={handleIncrease}>+</button>
            </div>
          </div>
        </div>

        <p className="pt-2 text-xs text-meetie-blue-4">
          4~8명이 적당한 스터디 인원이에요
        </p>

        <div className="pt-10">
          <h2 className="font-bold leading-3">관련 태그</h2>
          <div className="grid grid-cols-4 gap-1 pt-4 text-xs">
            <Chip>온라인</Chip>
            <Chip>오프라인</Chip>
            <Chip>프론트엔드</Chip>
            <Chip>백엔드</Chip>
            <Chip>UX/UI</Chip>
            <Chip>PM</Chip>
            <Chip>어플</Chip>
            <Chip>웹</Chip>
            <Chip className="w-[120px]">사이드 프로젝트</Chip>
          </div>
        </div>
        <p className="pt-2 text-xs text-meetie-blue-4">
          최대 4개까지 선택이 가능합니다
        </p>
      </div>

      <div className="fixed bottom-8 flex items-center justify-center space-x-2 px-[20px]">
        <Link href="create">
          <Button
            variant="secondary"
            className="w-[110px] flex-initial border-[1px] border-gray-200"
          >
            이전
          </Button>
        </Link>
        <Link href="approval">
          <Button className="w-[220px] flex-initial border-[1px] border-solid">
            작성완료
          </Button>
        </Link>

        {/* 비활성화 상태일때 */}
        {/* <Button className="w-[220px] flex-initial border-[1px] border-solid bg-meetie-blue-2">
          내용이 부족해요!
        </Button> */}
      </div>
    </section>
  )
}
