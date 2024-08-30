'use client'

import SearchIcon from '~/assets/icon_search.svg'
import RefreshBtn from '~/assets/searchStudy/icon_refresh.svg'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import { ChipGroup, ChipGroupItem } from '../ui/chip-group'
import MateCard from '~/components/searchstudy/mate-card'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { useState } from 'react'

type Checked = DropdownMenuCheckboxItemProps['checked']

export default function SearchMate() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false)
  const [showPanel, setShowPanel] = useState<Checked>(false)

  return (
    <>
      <section className="bg-background py-5">
        <form
          action=""
          className="relative flex w-full items-center justify-center"
        >
          <input
            type="text"
            placeholder={`어떤 팀원을 찾고 싶나요?`}
            className="w-11/12 rounded-md border border-border bg-[#F3F3F3] px-3 py-2 pl-9"
          />
          <SearchIcon className="absolute left-6 top-1/4 h-5 w-5" />
        </form>
      </section>
      {/* 팀원 검색 필터 */}
      <section className="flex flex-wrap justify-evenly gap-2 bg-background py-3">
        <RefreshBtn />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="border-[1px] border-slate-300 py-1 text-sm font-normal"
            >
              직무
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-4 bg-background">
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
              onSelect={(e) => console.log(e.target.innerText)}
            >
              개발자
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
            >
              기획자
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              디자이너
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      {/* 팀원 리스트 */}
      <section className="bg-[#F5F5FF] p-3">
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
