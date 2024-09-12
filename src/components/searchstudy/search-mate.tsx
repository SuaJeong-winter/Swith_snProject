'use client'

import SearchIcon from '~/assets/icon_search.svg'
import RefreshBtn from '~/assets/searchStudy/icon_refresh.svg'
import MateCard from '~/components/searchstudy/mate-card'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '~/components/ui/dropdown-menu'
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group'
import { Badge } from '~/components/ui/badge'

import { useEffect, useState } from 'react'
import useUserController from '~/hooks/useUserController'
import useMatesController from '~/hooks/useMatesController'
import NoResult from '../common/no-result'

export default function SearchMate() {
  // const [emblaRef, emblaApi] = useEmblaCarousel()
  const [jobType, setJobType] = useState('')
  const [purpose, setPurpose] = useState<string[]>([])
  const [studyStyle, setStudyStyle] = useState<string[]>([])
  // const [period, setPeriod] = useState('')

  const JOBS = ['개발자', '기획자', '디자이너']
  const PURPOSES = [
    '자기 개발',
    '툴 능력 향상',
    '해당 분야의 네트워킹 확장',
    '취미',
  ]

  const STUDYSTYLE = [
    '주도적인',
    '열정적인',
    '손이 빠른',
    '시간을 지키는',
    '꼼꼼한',
    '모험적인',
    '신중한',
    '커뮤니케이션에 능숙한',
    '논리적인',
    '파워 J',
    '분석적인',
    '동기부여가 필요한',
    '완벽주의',
  ]

  const { allUsers } = useUserController()
  const {
    mates,
    setMates,
    onFilterMatesByJob,
    onFilterMatesByPurpose,
    onFilterMatesByStyle,
  } = useMatesController()

  const filterReset = () => {
    setMates([])
    setJobType('')
    setPurpose([])
    setStudyStyle([])
  }

  return (
    <>
      {/* <section className="bg-background py-5">
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
      </section> */}
      {/* 팀원 검색 필터 */}
      <section className="flex flex-wrap justify-evenly gap-2 bg-background py-3">
        <RefreshBtn onClick={filterReset} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {jobType ? (
              <Button variant="outline" className="py-1 text-sm font-normal">
                직무
              </Button>
            ) : (
              <Button
                variant="secondary"
                className="border-[1px] border-slate-300 py-1 text-sm font-normal"
              >
                직무
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-4 bg-background">
            <DropdownMenuRadioGroup
              value={jobType}
              onValueChange={(job) => {
                setJobType(job)
                onFilterMatesByJob(job)
                setPurpose([])
                setStudyStyle([])
              }}
            >
              {JOBS.map((job, idx) => (
                <DropdownMenuRadioItem
                  value={job}
                  key={job + idx}
                  className="data-[state=on]:text-primary"
                >
                  {job}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {purpose.length > 0 ? (
              <Button variant="outline" className="py-1 text-sm font-normal">
                스터디 목적
              </Button>
            ) : (
              <Button
                variant="secondary"
                className="border-[1px] border-slate-300 py-1 text-sm font-normal"
              >
                스터디 목적
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background">
            <ToggleGroup
              type="multiple"
              onValueChange={(pur) => {
                setPurpose(pur)
                onFilterMatesByPurpose(pur)
                setStudyStyle([])
                setJobType('')
              }}
              className="flex flex-col"
            >
              {PURPOSES.map((pur) => (
                <ToggleGroupItem
                  key={pur}
                  value={pur}
                  className="data-[state=on]:text-primary"
                >
                  {pur}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {studyStyle.length > 0 ? (
              <Button variant="outline" className="py-1 text-sm font-normal">
                작업 스타일
              </Button>
            ) : (
              <Button
                variant="secondary"
                className="border-[1px] border-slate-300 py-1 text-sm font-normal"
              >
                작업 스타일
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background">
            <ToggleGroup
              type="multiple"
              onValueChange={(style) => {
                setStudyStyle(style)
                onFilterMatesByStyle(style)
                setPurpose([])
                setJobType('')
              }}
              className="flex flex-col"
            >
              {STUDYSTYLE.map((style) => (
                <ToggleGroupItem
                  key={style}
                  value={style}
                  className="data-[state=on]:text-primary"
                  disabled={studyStyle.length >= 4}
                >
                  {style}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
      <div className="flex flex-wrap gap-2 bg-background p-2">
        {jobType ? (
          <Badge variant="outline" key={jobType}>
            {jobType}
          </Badge>
        ) : (
          false
        )}
        {purpose?.map((pur) => (
          <Badge variant="outline" key={pur}>
            {pur}
          </Badge>
        ))}
        {studyStyle?.map((style) => (
          <Badge variant="outline" key={style}>
            {style}
          </Badge>
        ))}
      </div>
      {/* 팀원 리스트 */}
      <section className="bg-[#F5F5FF] pb-12 pt-3">
        <div className="flex">
          <div className="flex flex-2 flex-wrap justify-center gap-3" key="01">
            {mates.length !== 0 ? (
              mates?.map((mate) => (
                <MateCard
                  userName={mate.username}
                  jobType={mate['job_type']}
                  userType={mate['study_style']}
                  profileImg={mate['profile_img']}
                  userId={mate.id}
                  key={mate.id}
                  btnOpt={false}
                />
              ))
            ) : jobType !== '' ||
              purpose.length !== 0 ||
              studyStyle.length !== 0 ? (
              <NoResult />
            ) : (
              allUsers.map((user) => (
                <MateCard
                  userName={user.username}
                  jobType={user['job_type']}
                  userType={user['study_style']}
                  profileImg={user['profile_img']}
                  userId={user.id}
                  key={user.id}
                  btnOpt={false}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}
