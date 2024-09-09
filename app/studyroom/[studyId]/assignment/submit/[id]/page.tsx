import BottomNavBar from '~/components/common/bottom-nav-bar'
import AssignmentDetail from '~/components/studyroom/assignment-detail'

export default function AssignmentSubmitComplete() {
  return (
    <section className="h-dvh bg-background">
      <AssignmentDetail />
      <BottomNavBar />
    </section>
  )
}
