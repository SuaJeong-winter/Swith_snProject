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

export default function RecruitDrawer({
  onJobsChange,
}: {
  onJobsChange: (jobs: string[]) => void
}) {
  const [isChecked, setIsChecked] = useState([false, false, false])
  const [selectedJobs, setSelectedJobs] = useState<string[]>([])
  const jobtypes = ['기획자', '디자이너', '개발자']

  const handleToggle = (index: number) => {
    setIsChecked((prev) =>
      prev.map((state, i) => (i === index ? !state : state)),
    )

    // jobtypes 배열의 현재 index에 해당하는 직군을 selectedJobs 배열에 추가하거나 제거합니다.
    // setSelectedJobs((prev) => {
    //   if (prev.includes(jobtypes[index])) {
    //     // 이미 선택된 직군이라면 배열에서 제거
    //     return prev.filter((job) => job !== jobtypes[index])
    //   } else {
    //     // 선택되지 않은 직군이라면 배열에 추가
    //     return [...prev, jobtypes[index]]
    //   }
    // })
    setSelectedJobs((prev) => {
      const updatedJobs = prev.includes(jobtypes[index])
        ? prev.filter((job) => job !== jobtypes[index])
        : [...prev, jobtypes[index]]

      // 콜백을 통해 변경된 직군 정보를 부모 컴포넌트에 전달
      onJobsChange(updatedJobs)
      return updatedJobs
    })
  }

  return (
    <Drawer>
      <div className="h-[40px] rounded-md border-2 border-gray-200 py-2 pl-3 text-sm text-gray-400">
        <DrawerTrigger>
          {selectedJobs.length > 0
            ? ` ${selectedJobs.join(', ')}`
            : '모집 직군을 선택해주세요'}
        </DrawerTrigger>
      </div>
      <DrawerContent className="mx-auto w-[375px]">
        <DrawerHeader>
          <DrawerTitle className="flex flex-row space-x-[200px]">
            <p>모집 직군</p>
            <p
              className="text-xs text-gray-400 underline"
              onClick={() => {
                setIsChecked([true, true, true])
                setSelectedJobs(jobtypes) // 전체 선택 버튼 클릭 시 모든 직군을 선택
              }}
            >
              전체 선택
            </p>
          </DrawerTitle>
          <DrawerDescription>
            <div className="my-3 h-[170px] space-y-2 rounded-md bg-white">
              <div className="my-3 h-[170px] space-y-2 rounded-md bg-white">
                <div
                  className="flex h-[55px] flex-row space-x-[210px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                  onClick={() => handleToggle(0)}
                >
                  <p className="text-lg font-medium">기획자</p>
                  {isChecked[0] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
                </div>

                <div
                  className="flex h-[55px] flex-row space-x-[195px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                  onClick={() => handleToggle(1)}
                >
                  <p className="text-lg font-medium">디자이너</p>
                  {isChecked[1] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
                </div>

                <div
                  className="flex h-[55px] flex-row space-x-[210px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                  onClick={() => handleToggle(2)}
                >
                  <p className="text-lg font-medium">개발자</p>
                  {isChecked[2] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
                </div>
              </div>

              {/* 방법 2. 디자이너 부분 간격이 깨진다 */}
              {/* {jobtypes.map((job, index) => (
                <div
                  key={job}
                  className="flex h-[55px] flex-row space-x-[200px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                  onClick={() => handleToggle(index)} // handleToggle 함수가 onClick 이벤트에서 호출됩니다.
                >
                  <p className="text-lg font-medium">{job}</p>
                  {isChecked[index] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
                </div>
              ))} */}

              {/* 방법 1 수정 */}
              {/* <div
                className="flex h-[55px] flex-row space-x-[210px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                onClick={() => handleToggle(0)}
              >
                <p className="text-lg font-medium">기획자</p>
                {isChecked[0] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
              </div>
              <div
                className="flex h-[55px] flex-row space-x-[195px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                onClick={() => handleToggle(1)}
              >
                <p className="text-lg font-medium">디자이너</p>
                {isChecked[1] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
              </div>
              <div
                className="flex h-[55px] flex-row space-x-[210px] rounded-md border-2 border-gray-200 bg-white px-6 py-3"
                onClick={() => handleToggle(2)}
              >
                <p className="text-lg font-medium">개발자</p>
                {isChecked[2] ? <BtnCheckOnIcon /> : <BtnCheckOffIcon />}
              </div> */}
            </div>
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
