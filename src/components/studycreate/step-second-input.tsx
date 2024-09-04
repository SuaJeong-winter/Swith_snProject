'use client'
import { Bold, Italic, Underline } from 'lucide-react'
import * as React from 'react'
import { format } from 'date-fns'
import { cn } from '../../../src/utils/cn'
import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
import { Textarea } from '~/components/ui/textarea'
import Link from 'next/link'
import { Chip } from '~/components/ui/chip'
import { Input } from '~/components/ui/input'
import { StudyHeaderProgress } from '~/components/studycreate/study-header'
import CreateProgress from '~/components/studycreate/create-progress'
import { ChipGroup, ChipGroupItem } from '../ui/chip-group'

export default function Step2Input({
  onNext,
}: {
  onNext: (data: {
    curriculum: string
    max_member: number
    tags: string[]
    start_date: string | null
    end_date: string | null
  }) => void
}) {
  const [curriculum, setCurriculum] = React.useState<string>('') //진행 방식과 커리큘럼
  const [startdate, setStartDate] = React.useState<Date | null>() //시작일
  const [enddate, setEndDate] = React.useState<Date | null>() //종료일

  const [regularTime, setRegularTime] = React.useState<string>('') // 정기일정(시간)을 저장하는 상태

  const [count, setCount] = React.useState<number>(0) //스터디 모집인원
  const [isValid, setIsValid] = React.useState(false)
  const handleIncrease = () => {
    setCount(count < 10 ? count + 1 : 10)
  }

  const handleDecrease = () => {
    setCount(count > 0 ? count - 1 : 0) // 최소 0명으로 제한
  }

  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const allTags = [
    '온라인',
    '오프라인',
    '프론트엔드',
    '백엔드',
    'UX/UI',
    'PM',
    '어플',
    '웹',
    '사이드 프로젝트',
  ]
  // 나중에 Database에 넘겨주는 값은 selectedTags(배열 type)

  React.useEffect(() => {
    if (selectedTags.length > 4) {
      console.log('Stop!')
    } else {
      console.log('선택된 태그:', selectedTags, selectedTags.length)
    }
  }, [selectedTags])

  // useEffect to log startdate when it changes
  React.useEffect(() => {
    if (startdate) {
      console.log('선택한 시작일:', format(startdate, 'yyyy년 MM월 dd일'))
    }
  }, [startdate])

  // useEffect to log startdate when it changes
  React.useEffect(() => {
    if (enddate) {
      console.log('선택한 종료일:', format(enddate, 'yyyy년 MM월 dd일'))
    }
  }, [enddate])

  React.useEffect(() => {
    setIsValid(
      curriculum.trim() !== '' &&
        // startdate.trim() !== '' &&
        // enddate.trim() !== '' &&
        count > 0 &&
        selectedTags.length > 0,
    )
  }, [curriculum, startdate, enddate, count, selectedTags])

  const handleNext = () => {
    const addOneDay = (date: Date | null | undefined): Date | null => {
      if (!date) return null
      const newDate = new Date(date)
      newDate.setDate(newDate.getDate() + 1) // 하루 더하기
      return newDate
    }
    const correctStartDate = addOneDay(startdate)
    const correctEndDate = addOneDay(enddate)

    onNext({
      curriculum,
      max_member: count,
      tags: selectedTags,
      start_date: correctStartDate ? correctStartDate.toISOString() : null,
      end_date: correctEndDate ? correctEndDate.toISOString() : null,
    })
  }

  return (
    <>
      <section className="flex min-h-dvh flex-col bg-white pb-8">
        <StudyHeaderProgress progressNum={2} href="create" />
        <div className="fixed mt-[60px]">
          <CreateProgress currentProgress={100} />
        </div>
        <div className="space-y-0 px-3">
          <div className="space-y-2 pt-[100px]">
            <h2 className="font-bold">진행방식과 커리큘럼</h2>
            <Textarea
              placeholder="스터디의 진행방식과 커리큘럼을 소개해주세요"
              className="resize-none border-gray-400"
              rows={6}
              value={curriculum}
              onChange={(e) => setCurriculum(e.target.value)}
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
                <PopoverContent className="ml-[105px] w-auto bg-white p-0">
                  <Calendar
                    mode="single"
                    selected={startdate || undefined}
                    onSelect={setStartDate}
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
                <PopoverContent className="mr-[105px] w-auto bg-white p-0">
                  <Calendar
                    mode="single"
                    selected={enddate || undefined}
                    onSelect={setEndDate}
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
                    )}
                  >
                    <span className="text-gray-400">요일 선택</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="ml-[165px] w-[330px] bg-white">
                  <ToggleGroup
                    variant="outline"
                    type="multiple"
                    className="space-x-1"
                  >
                    <ToggleGroupItem
                      value="mon"
                      className="aria-pressed:bg-gray-200"
                    >
                      월
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="tue"
                      className="aria-pressed:bg-gray-200"
                    >
                      화
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="wed"
                      className="aria-pressed:bg-gray-200"
                    >
                      수
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="thu"
                      className="aria-pressed:bg-gray-200"
                    >
                      목
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="fri"
                      className="aria-pressed:bg-gray-200"
                    >
                      금
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="sat"
                      className="aria-pressed:bg-gray-200"
                    >
                      토
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="sun"
                      className="aria-pressed:bg-gray-200"
                    >
                      일
                    </ToggleGroupItem>
                  </ToggleGroup>
                </PopoverContent>
              </Popover>
            </div>
            <div className="items-center">
              <h2 className="invisible font-bold leading-3">정기일정</h2>
              <Input
                placeholder="시간 선택"
                className="required mr-0 mt-3 h-[55px] w-[170px] border-gray-400 text-base focus:outline-none"
                onChange={(e) => setRegularTime(e.target.value)}
                type="time"
                value={regularTime} // 입력된 값을 상태로 유지
              />
            </div>
          </div>

          <div className="pt-10">
            <h2 className="font-bold leading-3">스터디 모집 인원</h2>
            <div className="mx-auto mt-3 flex flex-row space-x-[100px]">
              <div>
                <Button onClick={handleDecrease} className="w-[50px] text-base">
                  -
                </Button>
              </div>
              <div className="my-3 text-lg">
                <span style={{ margin: '0 10px' }}>{count}</span>
              </div>
              <div>
                <Button onClick={handleIncrease} className="w-[50px] text-base">
                  +
                </Button>
              </div>
            </div>
          </div>

          <p className="pt-2 text-xs text-meetie-blue-4">
            4~8명이 적당한 스터디 인원이에요
          </p>
          {/* const [tagsarr, setTagsArr] = React.useState<String[]>([]) */}
          <div className="pt-10">
            <h2 className="font-bold leading-3">관련 태그</h2>
            <ChipGroup
              type="multiple"
              onValueChange={(value) => setSelectedTags(value)}
              className="grid grid-cols-3 gap-1 pt-3 text-sm"
            >
              {allTags.map((tag, index) => (
                <ChipGroupItem key={index} value={tag}>
                  {tag}
                  {/* tag는 변수명 온라인 index는 배열 allTags의 index값 */}
                </ChipGroupItem>
              ))}
            </ChipGroup>
          </div>
          <p className="pt-2 text-xs text-meetie-blue-4">
            최대 4개까지 선택이 가능합니다
          </p>
          <div className="space-y-2 pt-40"></div>
        </div>

        <div className="fixed bottom-8 flex w-[375px] items-center justify-center space-x-2 bg-white px-[20px]">
          <Link href="create">
            <Button
              variant="secondary"
              className="w-[110px] flex-initial border-[1px] border-gray-200"
            >
              이전
            </Button>
          </Link>

          {isValid ? (
            <Button
              className="w-[220px] flex-initial border-[1px] border-solid"
              onClick={handleNext}
            >
              작성완료
            </Button>
          ) : (
            <Button className="w-[220px] flex-initial border-[1px] border-solid bg-meetie-blue-2">
              내용이 부족해요!
            </Button>
          )}

          {/* 비활성화 상태일때 */}
          {/* <Button className="w-[220px] flex-initial border-[1px] border-solid bg-meetie-blue-2">
      내용이 부족해요!
    </Button> */}
        </div>
      </section>
    </>
  )
}
