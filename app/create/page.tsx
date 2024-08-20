'use client'

import Link from 'next/link'

import BtnCheckOnIcon from '~/assets/btn_check_on.svg'
import BtnCheckOffIcon from '~/assets/btn_check_off.svg'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'
import React, { useState } from 'react'
import { Progress } from '~/components/ui/progress'
import { StudyHeaderProgress } from '~/components/studycreate/study-header'

export default function CreatePage() {
  const [isChecked, setIsChecked] = React.useState([false, false, false])

  const handleToggle = (index: number) => {
    setIsChecked((prev) =>
      prev.map((state, i) => (i === index ? !state : state)),
    )
  }

  // 프로그래스 바
  const [progress, setProgress] = React.useState(50)

  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <StudyHeaderProgress />
      <div className="fixed mt-[60px]">
        <Progress value={progress} className="w-[375px]" />
      </div>
      <div className="space-y-0 px-3">
        <div className="space-y-2 pt-[100px]">
          <h2 className="font-bold">모집 직군</h2>
          <Drawer>
            <div className="h-[40px] rounded-md border-2 border-gray-200 py-2 pl-3 text-sm text-gray-400">
              <DrawerTrigger>모집 직군을 선택해주세요</DrawerTrigger>
            </div>
            <DrawerContent className="mx-auto w-[375px]">
              <DrawerHeader>
                <DrawerTitle className="flex flex-row space-x-[200px]">
                  <p>모집 직군</p>
                  <p
                    className="text-xs text-gray-400 underline"
                    onClick={() => {
                      setIsChecked([true, true, true])
                    }}
                  >
                    전체 선택
                  </p>
                </DrawerTitle>
                <DrawerDescription>
                  모집하고 싶은 직군을 선택해주세요
                  <div className="my-3 h-[170px] space-y-2 rounded-md bg-white">
                    <div
                      className="flex h-[50px] flex-row space-x-[210px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                      onClick={() => handleToggle(0)}
                    >
                      <p className="text-lg font-medium">기획자</p>
                      {isChecked[0] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
                    </div>
                    <div
                      className="flex h-[50px] flex-row space-x-[195px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                      onClick={() => handleToggle(1)}
                    >
                      <p className="text-lg font-medium">디자이너</p>
                      {isChecked[1] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
                    </div>
                    <div
                      className="flex h-[50px] flex-row space-x-[210px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                      onClick={() => handleToggle(2)}
                    >
                      <p className="text-lg font-medium">개발자</p>
                      {isChecked[2] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
                    </div>
                  </div>
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
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
