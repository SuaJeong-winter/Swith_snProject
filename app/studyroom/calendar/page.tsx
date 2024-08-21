import BtnBackIcon from '~/assets/btn_back.svg'
import { Button } from '~/components/ui/button'
import Link from 'next/link'
import CalendarTab from '~/components/studyroom/calendar-tab'

export default function CalendarPage() {
  return (
    <section className="flex min-h-dvh flex-col bg-background p-3">
      <div className="fixed mt-4 flex h-[50px] flex-row space-x-[130px]">
        <Link href="/studyroom">
          <BtnBackIcon />
        </Link>
        <h2 className="font-bold">캘린더 추가</h2>
      </div>
      <CalendarTab />
      <Link href="/studyroom">
        <Button className="fixed bottom-8 w-[350px]">작성완료</Button>
      </Link>
    </section>
  )
}
