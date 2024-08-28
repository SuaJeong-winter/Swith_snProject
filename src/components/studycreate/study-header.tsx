import Link from 'next/link'
import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'

export default function StudyHeader({
  href = 'search',
  title = '대기중인 요청',
}: {
  href?: string
  title?: string
}) {
  return (
    <section>
      <div className="fixed flex h-[60px] w-[375px] flex-row space-x-[108px] bg-white px-3 py-5">
        <Link href={href}>
          <BtnBackIcon />
        </Link>
        <h2 className="font-bold">{title}</h2>
        <BtnMoreVertical className="invisible" />
      </div>
    </section>
  )
}

export function StudyHeaderProgress({
  href = 'search',
  progressNum = 1,
}: {
  href?: string
  progressNum?: number
}) {
  return (
    <section>
      <div className="fixed flex h-[60px] w-[375px] flex-row space-x-[108px] bg-white px-3 py-5">
        <Link href={href}>
          <BtnBackIcon />
        </Link>
        <h2 className="font-bold">스터디 만들기</h2>
        <p>
          {progressNum} / <span className="text-gray-300">2</span>
        </p>
      </div>
    </section>
  )
}

export function StudyHeaderNoText({ href = '/search' }: { href?: string }) {
  return (
    <section>
      <div className="fixed flex h-[60px] w-[375px] flex-row space-x-[108px] bg-white px-3 py-5">
        <Link href={href}>
          <BtnBackIcon />
        </Link>
        <h2 className="invisible font-bold">스터디 지원하기</h2>
        <BtnMoreVertical />
      </div>
    </section>
  )
}
