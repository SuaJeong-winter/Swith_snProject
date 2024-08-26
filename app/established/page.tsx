'use client'

import IconTrophy from '~/assets/createStudy/icon_trophy.svg'
import { Button } from '~/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import { StudyHeaderNoText } from '~/components/studycreate/study-header'
import ProfileCard from '~/components/common/profile-card'

const usersDummyData = [
  {
    name: '박가현',
    job_type: '디자이너',
    introduce:
      '안녕하세요. 올해 졸업하고 취업 준비 중 경력도 쌓고싶고 비슷한 사람들과 정보도 공유하고 싶어요!!',
    study_style: ['취준생', '논리적인', '책임감있는'],
    status: false,
    user_id: '550e8400-e29b-41d4-a716-446655440000',
  },
  {
    name: '이수민',
    job_type: '개발자',
    introduce:
      '안녕하세요. 다양한 기술을 배우고 적용해보는 것을 좋아하는 개발자입니다. 함께 성장할 스터디를 찾고 있습니다!',
    study_style: ['문제 해결', '협력적', '열정적인'],
    status: false,
    user_id: '760e6500-e39b-41d4-a816-556655450001',
  },
]

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
            {usersDummyData.map((user) => (
              <CarouselItem key={user.user_id} className="basis-1/10">
                <ProfileCard username={user.name} userjobtype={user.job_type} />
              </CarouselItem>
            ))}
            <CarouselItem className="basis-1/10">
              <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
                <div className="px-[15px] pt-1">
                  <IconTrophy />
                  <p className="px-[1px] text-sm text-black">
                    피그마 정복하기 🔥
                  </p>
                  <p className="px-[30px] text-sm text-black">
                    멤버 {usersDummyData.length}
                  </p>
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
