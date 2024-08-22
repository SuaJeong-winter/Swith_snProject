'use client'

import BtnCheckOnIcon from '~/assets/createStudy/btn_check_on.svg'
import BtnCheckOffIcon from '~/assets/createStudy/btn_check_off.svg'
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
import { useState } from 'react'

export default function RecruitDrawer() {
  const [isChecked, setIsChecked] = useState([false, false, false])

  const handleToggle = (index: number) => {
    setIsChecked((prev) =>
      prev.map((state, i) => (i === index ? !state : state)),
    )
  }

  return (
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
  )
}
