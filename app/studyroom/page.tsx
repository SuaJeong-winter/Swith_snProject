'use client'
import BottomNavBar from '~/components/common/bottom-nav-bar'
import InactiveStudyRoom from '~/components/studyroom/inactive-room'
import ActiveStudyRoomList from '~/components/studyroom/active-room-list'
import useStudyroomController from '~/hooks/useStudyroomController'

export default function StudyRoomPage() {
  const { studyroomList } = useStudyroomController()

  return (
    <>
      {/* 로그인한 유저가 참여한 스터디룸이 존재하거나 그렇지 않은 경우, studyroom 메인화면 분기 */}

      {studyroomList.length > 0 ? (
        <ActiveStudyRoomList studyroomList={studyroomList} />
      ) : (
        <InactiveStudyRoom />
      )}
      <BottomNavBar />
    </>
  )
}
