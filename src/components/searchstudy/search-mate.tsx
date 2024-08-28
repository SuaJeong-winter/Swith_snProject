'use client'
import RefreshBtn from '~/assets/searchStudy/icon_refresh.svg'
import BottomNavBar from '~/components/common/bottom-nav-bar'
import { Chip } from '~/components/ui/chip'
import MateCard from '~/components/searchstudy/mate-card'
import useEmblaCarousel from 'embla-carousel-react'

export default function SearchMate() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  return (
    <>
      {/* 팀원 검색 필터 */}
      <section className="flex flex-wrap justify-evenly gap-2 bg-background px-3 py-4">
        <RefreshBtn />
        <Chip className="py-1 text-sm">직무</Chip>
        <Chip className="py-1 text-sm">스터디목적</Chip>
        <Chip className="py-1 text-sm">작업 스타일</Chip>
      </section>
      <section className="bg-[#F5F5FF] p-3">
        {/* 팀원 리스트 */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {/* page1 */}
            <div
              className="flex flex-2 flex-wrap justify-center gap-3"
              key="01"
            >
              <MateCard
                userName="김선우"
                jobType="디자이너"
                userType={['초급', '열정있는', '파워J']}
              />
              <MateCard
                userName="이정아"
                jobType="디자이너"
                userType={['고급', '꼼꼼한', '사교적인']}
              />
              <MateCard
                userName="김선우"
                jobType="디자이너"
                userType={['초급', '열정있는', '파워J']}
              />
              <MateCard
                userName="이정아"
                jobType="디자이너"
                userType={['고급', '꼼꼼한', '사교적인']}
              />
            </div>
            {/* page2 */}
            <div
              className="flex flex-2 flex-wrap justify-center gap-3"
              key="02"
            >
              <MateCard
                userName="김선우2"
                jobType="디자이너"
                userType={['초급', '열정있는', '파워J']}
              />
              <MateCard
                userName="이정아2"
                jobType="디자이너"
                userType={['고급', '꼼꼼한', '사교적인']}
              />
              <MateCard
                userName="김선우2"
                jobType="디자이너"
                userType={['초급', '열정있는', '파워J']}
              />
              <MateCard
                userName="이정아2"
                jobType="디자이너"
                userType={['고급', '꼼꼼한', '사교적인']}
              />
            </div>
            {/* page3 */}
            <div
              className="flex flex-2 flex-wrap justify-center gap-3"
              key="03"
            >
              <MateCard
                userName="김선우3"
                jobType="디자이너"
                userType={['초급', '열정있는', '파워J']}
              />
              <MateCard
                userName="이정아3"
                jobType="디자이너"
                userType={['고급', '꼼꼼한', '사교적인']}
              />
              <MateCard
                userName="김선우3"
                jobType="디자이너"
                userType={['초급', '열정있는', '파워J']}
              />
              <MateCard
                userName="이정아3"
                jobType="디자이너"
                userType={['고급', '꼼꼼한', '사교적인']}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
