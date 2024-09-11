'use client'

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
import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useParams, useRouter } from 'next/navigation'
import useAssignmentController from '~/hooks/useAssignmentController'
import { getUser } from '~/apis/user-rls'

export default function AssignmentAdd() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const [regularDate, setRegularDate] = useState<Date>()
  const [inputType, setInputType] = useState('text')
  const params = useParams()
  const studyId = params.studyId
  const router = useRouter()

  const { handleInsertAssignment } = useAssignmentController()

  const handleFocus = () => {
    setInputType('time')
  }
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = date.toISOString()
      setRegularDate(date)
      setValue('regularDate', formattedDate)
    }
  }

  const onSubmit = (data: any) => {
    const deadline = new Date(
      `${format(data.regularDate, 'yyyy-MM-dd')}T${data.submissionTime}`,
    )
    const newObject = {
      study_id: studyId,
      description: data.description,
      verificationMethod: data.verificationMethod,
      deadline: deadline,
    }
    handleInsertAssignment(newObject).then(() => {
      router.push(`/studyroom/${studyId}`)
    })
  }

  return (
    <>
      <div className="space-y-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-10 mt-4 space-y-2">
            <h2 className="font-bold">과제 소개</h2>
            <Textarea
              placeholder="ex. 자바스크립트 딥다이브 챕터1 읽기"
              className="resize-none border-gray-400"
              rows={1}
              {...register('description', { required: true })}
            />
            {errors.description && (
              <span className="pl-2 text-sm text-red-500">
                과제 소개를 입력해 주세요.
              </span>
            )}
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
                      !regularDate && 'text-muted-foreground',
                    )}
                  >
                    {regularDate ? (
                      format(regularDate, 'yyyy년 MM월 dd일')
                    ) : (
                      <span className="text-gray-400">날짜 선택</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="ml-[105px] w-auto bg-white p-0">
                  <Calendar
                    mode="single"
                    initialFocus
                    selected={regularDate}
                    onSelect={(date) => handleDateSelect(date)}
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
                {...register('submissionTime')}
              />
            </div>
          </div>
          {(errors.regularDate || errors.submissionTime) && (
            <span className="pl-2 text-sm text-red-500">
              마감 기한을 선택해 주세요.
            </span>
          )}
          <div>
            <h2 className="mb-2 mt-10 font-bold">인증 방식</h2>
            <Textarea
              placeholder="ex. 공부한 내용 사진 찍어 올리기"
              className="resize-none border-gray-400"
              rows={1}
              {...register('verificationMethod', { required: true })}
            />
            {errors.verificationMethod && (
              <span className="pl-2 text-sm text-red-500">
                인증 방식을 입력해 주세요.
              </span>
            )}
            <Button type="submit" className="fixed bottom-8 w-[350px]">
              작성완료
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
