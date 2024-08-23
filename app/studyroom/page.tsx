import BottomNavBar from '~/components/common/bottom-nav-bar'
import InactiveStudyRoom from '~/components/studyroom/inactive-room'
import StudyroomContent from '~/components/studyroom/studyroom-content'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'

export default function studyRoomPage() {
  const activeStudyRoomLength = 5
  const doneStudyRoomLength = 0

  return (
    <>
      {activeStudyRoomLength ? (
        <>
          {/* 헤더 */}
          <h1 className="bg-meetie-blue-1 p-4 text-lg font-bold">스터디룸</h1>
          {/* 진행중 / 진행완료 탭 */}
          <Tabs defaultValue="wip" className="bg-meetie-blue-1">
            <div className="pr-4 text-end">
              <TabsList variant="small">
                <TabsTrigger value="wip" variant="small">
                  진행중 5
                </TabsTrigger>
                <TabsTrigger value="done" variant="small">
                  진행완료
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="wip">
              <StudyroomContent />
            </TabsContent>
            <TabsContent value="done">
              {doneStudyRoomLength ? (
                <StudyroomContent />
              ) : (
                <div className="flex h-[580px] items-center justify-center bg-meetie-blue-1 pb-10 text-meetie-gray-60">
                  완료된 스터디가 존재하지 않습니다
                </div>
              )}
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <InactiveStudyRoom />
      )}
      <BottomNavBar />
    </>
  )
}
