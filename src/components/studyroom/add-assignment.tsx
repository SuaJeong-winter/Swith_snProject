'use client'

import * as React from 'react'
import { format } from 'date-fns'

import { cn } from '~/utils/cn'
import { Calendar } from '~/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import { Button } from '~/components/ui/button'
import { Textarea } from '~/components/ui/textarea'
import { Input } from '~/components/ui/input'

export default function AssignmentAdd() {
  const [regulardate, setRegularDate] = React.useState<Date>()
  const [inputType, setInputType] = React.useState('text')
  const handleFocus = () => {
    setInputType('time')
  }

  return (
    <>
      <div className="space-y-0">
        <div className="mb-10 mt-4 space-y-2">
          <h2 className="font-bold">과제 소개</h2>
          <Textarea
            placeholder="과제를 간단히 소개해 주세요."
            className="resize-none border-gray-400"
            rows={1}
          />
        </div>
        <div className="flex gap-2">
          <div className="items-center">
            <h2 className="font-bold leading-3">마감 기한</h2>
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
            <h2 className="invisible font-bold leading-3">마감 기한</h2>
            <Input
              placeholder="시간 선택"
              className="required mr-0 mt-3 h-[55px] w-[170px] border-gray-400 text-base focus:outline-none"
              onFocus={handleFocus}
              type={inputType}
            />
          </div>
        </div>
        <div>
          <h2 className="mb-2 mt-10 font-bold">인증 방식</h2>
          <Textarea
            placeholder="과제의 인증 방식을 간단히 작성해 주세요."
            className="resize-none border-gray-400"
            rows={1}
          />
        </div>
      </div>
    </>
  )
}
