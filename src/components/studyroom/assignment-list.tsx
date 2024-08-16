import AssignmentItem from './assignment-item'

export default function AssignmentList() {
  return (
    <>
      <section className="bg-background">
        <div className="px-4 py-5">
          <h1 className="text-lg font-bold">6월 3일 월요일</h1>
          <p className="text-sm">과제 인증을 완료한 팀원들을 확인해보세요</p>
          {/* 최신순 정렬 필터 추가해야함 */}
        </div>
        <ul className="border-t-2 border-meetie-gray-20">
          <AssignmentItem />
          <AssignmentItem />
          <AssignmentItem />
        </ul>
      </section>
    </>
  )
}
