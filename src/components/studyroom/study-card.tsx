'use client'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'
import ArrowBtn from '~/assets/studyRoom/arrowBtn.svg'

export default function StudyCard() {
  return (
    <section className="bg-meetie-blue-1 p-2">
      <Card className="p-2">
        <section>
          <CardHeader>
            <div className="flex">
              {/* 스터디 목록 Drawer */}
              <Drawer>
                <DrawerTrigger>
                  <ArrowBtn />
                </DrawerTrigger>
                <DrawerContent className="mx-auto w-[375px]">
                  <DrawerHeader>
                    <DrawerTitle className="flex justify-center">
                      <p>
                        진행 중인 스터디
                        <span className="ml-2 text-meetie-blue-3">3</span>
                      </p>
                    </DrawerTitle>
                    <DrawerDescription>
                      <p className="text-center">
                        이동하려는 스터디룸을 선택해 주세요.
                      </p>
                      <div className="my-3 space-y-2 rounded-md bg-background">
                        <div className="cursor-pointer rounded-md border-2 border-gray-200 px-6 py-2">
                          <div className="text-lg font-medium">
                            피그마 정복하기
                          </div>
                          <div className="text-sm">
                            기획, 디자인 | 멤버 5 | D-30
                          </div>
                        </div>
                        <div className="cursor-pointer rounded-md border-2 border-gray-200 px-6 py-2">
                          <div className="text-lg font-medium">UX 북스터디</div>
                          <div className="text-sm">전체 | 멤버 4 | D-24</div>
                        </div>
                        <div className="cursor-pointer rounded-md border-2 border-gray-200 px-6 py-2">
                          <div className="text-lg font-medium">
                            파이썬 마스터를 향하여
                          </div>
                          <div className="text-sm">개발 | 멤버 6 | D-24</div>
                        </div>
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
              {/* 현재 스터디룸 설명 카드 */}
              <div className="ml-4 grow">
                <CardTitle className="text-lg font-bold text-black">
                  피그마 정복하기🔥🔥
                </CardTitle>
                <div className="flex justify-between">
                  <CardDescription>디자인 | 멤버 5</CardDescription>
                  <div className="rounded-full border border-meetie-blue-4 px-1 text-xs font-semibold text-meetie-blue-4">
                    D-30
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </section>
      </Card>
    </section>
  )
}
