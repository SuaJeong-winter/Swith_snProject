import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'
import { Button } from '~/components/ui/button'

export default function EstablishedPage() {
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="invisible fixed top-4 flex flex-row space-x-28 px-3 pt-3">
        <a href="# ">
          <BtnBackIcon />
        </a>
        <h2 className="invisible font-bold">스터디 지원하기</h2>
        <BtnMoreVertical />
      </div>

      <div className="px-3">
        <div className="space-y-2 pt-20">
          <h1 className="text-2xl font-bold">멤버들이 모두 모여</h1>
          <h1 className="text-2xl font-bold">스터디룸이 생성되었어요👏</h1>
          <p className="text-xs">모두 함께 스터디 완주를 하는 그날까지!</p>
        </div>
      </div>
      <div className="space-y-2 pt-20">
        <div className="h-[250px] w-[375px] bg-meetie-blue-5 text-white">
          여기에 나중에 스터디원 카드들이 수동으로 slider
        </div>
      </div>
      <div className="fixed bottom-8 flex items-center justify-center space-x-4 px-3">
        <Button className="border-1 w-[350px] border-solid">
          스터디룸 보러가기
        </Button>
      </div>
    </section>
  )
}
