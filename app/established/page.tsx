'use client'

import IconTrophy from '~/assets/createStudy/icon_trophy.svg'
import MeetieMaster from '~/assets/icon_profile-deco.svg'
import MpProfile from '~/assets/mp_profile.svg'
import { Button } from '~/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import StudyHeader, {
  StudyHeaderNoText,
} from '~/components/studycreate/study-header'

export default function EstablishedPage() {
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="invisible">
        <StudyHeaderNoText />
      </div>

      <div className="px-3">
        <div className="space-y-2 pt-20">
          <h1 className="text-2xl font-bold">멤버들이 모두 모여</h1>
          <h1 className="text-2xl font-bold">스터디룸이 생성되었어요👏</h1>
          <p className="text-xs">모두 함께 스터디 완주를 하는 그날까지!</p>
        </div>
      </div>
      <div className="space-y-2 pt-20">
        {/* <div > */}
        <Carousel className="flex h-[250px] w-[375px] flex-row space-x-1 py-[20px]">
          <CarouselContent>
            <CarouselItem className="basis-1/10">
              <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
                <div className="pt-[20px]">
                  <div className="relative h-[100px] w-[130px] px-[5px]">
                    <MeetieMaster className="absolute left-1 right-1 top-1 w-full object-cover" />
                    <MpProfile className="absolute left-[41px] right-6 top-[30px]" />
                  </div>

                  <p className="px-[48px] text-lg text-black"> 김서희</p>
                  <p className="px-[48px] text-sm text-black">디자이너</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/10">
              <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
                <div className="pt-[20px]">
                  <div className="relative h-[100px] w-[130px] px-[5px]">
                    <MeetieMaster className="absolute left-1 right-1 top-1 w-full object-cover" />
                    <MpProfile className="absolute left-[41px] right-6 top-[30px]" />
                  </div>

                  <p className="px-[48px] text-lg text-black"> 김서희</p>
                  <p className="px-[48px] text-sm text-black">디자이너</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/10">
              <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
                <div className="pt-[20px]">
                  <div className="relative h-[100px] w-[130px] px-[5px]">
                    <MeetieMaster className="absolute left-1 right-1 top-1 w-full object-cover" />
                    <MpProfile className="absolute left-[41px] right-6 top-[30px]" />
                  </div>

                  <p className="px-[48px] text-lg text-black"> 김서희</p>
                  <p className="px-[48px] text-sm text-black">디자이너</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/10">
              <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
                <div className="pt-[20px]">
                  <div className="relative h-[100px] w-[130px] px-[5px]">
                    <MeetieMaster className="absolute left-1 right-1 top-1 w-full object-cover" />
                    <MpProfile className="absolute left-[41px] right-6 top-[30px]" />
                  </div>

                  <p className="px-[48px] text-lg text-black"> 김서희</p>
                  <p className="px-[48px] text-sm text-black">디자이너</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/10">
              <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
                <div className="px-[15px] pt-1">
                  <IconTrophy />
                  <p className="px-[1px] text-sm text-black">
                    피그마 정복하기 🔥
                  </p>
                  <p className="px-[30px] text-sm text-black">멤버 5</p>
                </div>
              </div>
            </CarouselItem>

            {/* <CarouselItem>...</CarouselItem> */}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
        {/* </div> */}
      </div>
      <div className="fixed bottom-8 flex items-center justify-center space-x-4 px-3">
        <Button className="border-1 w-[350px] border-solid">
          스터디룸 보러가기
        </Button>
      </div>
    </section>
  )
}
