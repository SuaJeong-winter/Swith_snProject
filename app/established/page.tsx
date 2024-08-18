import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'
import IconTrophy from '~/assets/icon_trophy.svg'
import MeetieMaster from '~/assets//badge_meetie-master.svg'
import MpProfile from '~/assets/mp_profile.svg'
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
        <div className="flex h-[250px] w-[375px] flex-row space-x-3 bg-meetie-blue-5 py-[20px]">
          <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
            <div className="px-[15px] pt-1">
              <IconTrophy />
              <p className="px-[1px] text-sm text-black"> 피그마 정복하기 🔥</p>
              <p className="px-[30px] text-sm text-black">멤버 5</p>
            </div>
          </div>
          <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
            <div className="px-[8px] pt-[20px]">
              <div className="relative h-[100px] w-[130px] px-[5px]">
                <MeetieMaster className="absolute left-4 right-4 top-1 w-full object-cover" />
                <MpProfile className="absolute left-9 right-6 top-[34px]" />
              </div>

              <p className="px-[40px] text-lg text-black"> 김서희</p>
              <p className="px-[40px] text-sm text-black">디자이너</p>
            </div>
          </div>
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
