import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'

import StudyroomCalendar from '~/components/studyroom/calendar-tab-content'
import TaskDeadline from '~/components/studyroom/task-deadline'
import AssignmentList from '~/components/studyroom/assignment-list'
import ChatList from '~/components/studyroom/chatlist'
import StudyCard from '~/components/studyroom/study-card'

export default function StudyroomContent({ studies }: { studies: any[] }) {
  return (
    <>
      {/* 스터디 카드 */}
      <StudyCard studies={studies} />
      {/* 탭 영역 */}
      <section className="bg-background">
        <Tabs defaultValue="study-calendar">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="study-calendar">캘린더</TabsTrigger>
            <TabsTrigger value="assignment">과제</TabsTrigger>
            <TabsTrigger value="chatting">채팅</TabsTrigger>
          </TabsList>
          <TabsContent value="study-calendar" className="pb-20">
            {/* 캘린더 영역 */}
            <StudyroomCalendar />
            {/* 마감 직전 과제 */}
            <TaskDeadline />
          </TabsContent>
          <TabsContent value="assignment" className="pb-20">
            {/* 과제 리스트 영역 */}
            <AssignmentList />
          </TabsContent>
          <TabsContent value="chatting">
            {/* 채팅 영역 */}
            <ChatList />
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
