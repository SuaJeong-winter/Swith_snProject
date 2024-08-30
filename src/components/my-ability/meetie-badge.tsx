'use client'
import MeetieRunner from '~/assets/badge_meetie-runner.svg'
import MeetieNewbie from '~/assets/badge_meetie-newbie.svg'
import MeetieMaster from '~/assets//badge_meetie-master.svg'

import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'

export default function MeetieBadge({
  level,
  badgename,
  point,
  commentcount,
  hostcount,
}: {
  level: string
  badgename: string
  point: string
  commentcount: string
  hostcount: string
}) {
  return (
    <>
      <Drawer>
        <DrawerTrigger className="text-white">
          <div className="flex flex-col items-center pb-2">
            {badgename === '밋티 뉴비' ? (
              <MeetieNewbie />
            ) : badgename === '밋티 러너' ? (
              <MeetieRunner />
            ) : (
              <MeetieMaster />
            )}
            <span className="pt-2 text-sm text-gray-600">{badgename}</span>
          </div>
        </DrawerTrigger>
        <DrawerContent className="mx-auto flex max-w-[375px] flex-col items-center justify-center bg-background">
          <DrawerClose>
            <Button className="bg-meetie-gray-40 px-8 py-1"> </Button>
          </DrawerClose>
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex flex-col items-center px-2">
                <span className="text-base font-semibold">밋티 뱃지</span>
              </div>
            </DrawerTitle>
            <DrawerDescription>
              <div className="flex flex-col items-center px-2">
                <span className="text-2xl font-bold text-gray-700">
                  모두가 믿고 따르는 리더쉽!
                </span>
                <span className="pt-3 text-sm text-gray-500">
                  3가지 퀘스트 완수로
                </span>
                <span className="text-sm text-gray-500">
                  나의 IT 스터디 방장 능력이 상승했어요
                </span>
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <div className="mb-10">
            <div className="flex w-full flex-col">
              <div className="items-center gap-10 pl-4 pt-2">
                <div className="flex flex-col items-center pb-4">
                  <div className="pb-3">
                    {badgename === '밋티 뉴비' ? (
                      <MeetieNewbie />
                    ) : badgename === '밋티 러너' ? (
                      <MeetieRunner />
                    ) : (
                      <MeetieMaster />
                    )}
                  </div>
                  <Card className="flex flex-col items-center justify-center border-2 border-purple-500 bg-[#FDFBFF] p-1 pl-2 pr-2 text-center">
                    <span className="text-xs text-purple-500">레벨{level}</span>
                  </Card>
                  <span className="pb-7 pt-2 text-base font-semibold">
                    {badgename}
                  </span>
                </div>
              </div>
            </div>
            <div className="pb-1 text-xs font-semibold text-gray-600">
              {point}p 모으기
            </div>
            <div className="relative h-4 w-64">
              <div className="absolute left-1/2 top-1/2 h-4 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-purple-100 bg-purple-50"></div>
              <div className="absolute left-1/2 top-1/2 h-3 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-purple-100 bg-purple-600"></div>
              <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform items-center space-x-1">
                <span className="text-xs text-white">500</span>
                <span className="text-xs text-white">/{point}</span>
              </div>
            </div>

            <div className="pb-1 pt-3 text-xs font-semibold text-gray-600">
              댓글 {commentcount}회 남기기
            </div>
            <div className="relative h-4 w-64">
              <div className="absolute left-1/2 top-1/2 h-4 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-purple-100 bg-purple-50"></div>
              <div className="absolute left-1/2 top-1/2 h-3 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-purple-100 bg-purple-600"></div>
              <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform items-center space-x-1">
                <span className="text-xs text-white">50</span>
                <span className="text-xs text-white">/{commentcount}</span>
              </div>
            </div>

            <div className="pb-1 pt-3 text-xs font-semibold text-gray-600">
              방장 {hostcount}회 달성
            </div>
            <div className="relative h-4 w-64">
              <div className="absolute left-1/2 top-1/2 h-4 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-purple-100 bg-purple-50"></div>
              <div className="absolute left-1/2 top-1/2 h-3 w-60 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-purple-100 bg-purple-600"></div>
              <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 transform items-center space-x-1">
                <span className="text-xs text-white">5</span>
                <span className="text-xs text-white">/{hostcount}</span>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
