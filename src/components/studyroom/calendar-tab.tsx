import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import AssignmentAdd from '~/components/studyroom/assignment-add'
import MeetupAdd from '~/components/studyroom/meetup-add'

export default function CalendarTab() {
  return (
    <section className="pt-16">
      <Tabs defaultValue="assignment">
        <TabsList variant="small" className="ml-4 h-8 w-80">
          <TabsTrigger
            value="assignment"
            variant="small"
            className="h-4 w-40 p-4 text-sm"
          >
            과제
          </TabsTrigger>
          <TabsTrigger
            value="meetup"
            variant="small"
            className="h-4 w-40 p-4 text-sm"
          >
            일정
          </TabsTrigger>
        </TabsList>
        <TabsContent value="assignment">
          <AssignmentAdd />
        </TabsContent>
        <TabsContent value="meetup">
          <MeetupAdd />
        </TabsContent>
      </Tabs>
    </section>
  )
}
