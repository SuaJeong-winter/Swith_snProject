import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'

export default function WaitingListPage() {
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="fixed top-4 flex flex-row space-x-28 px-3 pt-3">
        <a href="# ">
          <BtnBackIcon />
        </a>
        <h2 className="invisible font-bold">스터디 지원하기</h2>
        <BtnMoreVertical />
      </div>
    </section>
  )
}
