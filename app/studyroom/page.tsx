'use client'
import InactiveStudyRoom from '~/components/studyroom/inactive-room'

import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import ArrowBtn from '~/assets/studyRoom/arrowBtn.svg'
import StudyroomCalendar from '~/components/studyroom/study-calendar'
import TaskDeadline from '~/components/studyroom/task-deadline'

export default function studyRoomPage() {
  const studyRoomLength = 1

  return (
    <>
      {studyRoomLength ? (
        <>
          <section className="bg-meetie-blue-1">
            <h1 className="p-4 text-lg font-bold">스터디룸</h1>
            <section className="p-2">
              <Card className="p-2">
                <section>
                  <CardHeader>
                    <div className="flex">
                      <ArrowBtn />
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
          </section>
          <section className="bg-background">
            <Tabs defaultValue="study-calendar">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="study-calendar">캘린더</TabsTrigger>
                <TabsTrigger value="study-mission">과제</TabsTrigger>
                <TabsTrigger value="chatting">채팅</TabsTrigger>
              </TabsList>
            </Tabs>
            <section>
              <h1 className="p-4 text-lg font-bold">🤙 팀원과의 약속</h1>
              <p className="pb-4 pl-4 text-meetie-gray-40">
                이번 주 과제 및 일정을 확인해 보세요
              </p>
            </section>
            <section className="bg-[#f9f9f9] pb-4 pt-2">
              <StudyroomCalendar />
              <div className="mt-2 flex flex-col gap-2 p-2">
                <Card>
                  <div className="flex items-center">
                    <div className="ml-4 text-center">AM 00:00</div>
                    <CardHeader>
                      <CardTitle>회의</CardTitle>
                      <CardDescription>2024.08.16 00:00</CardDescription>
                    </CardHeader>
                  </div>
                </Card>
                <Card>
                  <div className="flex items-center">
                    <div className="ml-4 text-center">PM 06:30</div>
                    <CardHeader>
                      <CardTitle>과제 제출</CardTitle>
                      <CardDescription>2024.08.16 18:30</CardDescription>
                    </CardHeader>
                  </div>
                </Card>
              </div>
            </section>
          </section>
          <TaskDeadline />
        </>
      ) : (
        <InactiveStudyRoom />
      )}
    </>
  )
}
