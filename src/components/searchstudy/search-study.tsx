'use client'

import StudyCreateIcon from '~/assets/searchStudy/icon_study-create.svg'
import SearchIcon from '~/assets/icon_search.svg'
import { useState, useEffect } from 'react'
import { Chip } from '~/components/ui/chip'
import { ChipGroup, ChipGroupItem } from '../ui/chip-group'
import { Checkbox } from '~/components/ui/checkbox'
import { Skeleton } from '~/components/ui/skeleton'
import StudyCard from '~/components/searchstudy/study-card'
import Link from 'next/link'
import useStudysController from '~/hooks/useStudysController'
import NoResult from './no-result'

const AllTags = [
  '온라인',
  '오프라인',
  '프론트엔드',
  '백엔드',
  'UX/UI',
  'PM',
  '어플',
  '웹',
  '사이드프로젝트',
]

export default function SearchStudy() {
  const [tags, setTag] = useState<string[]>([])
  // console.log(tags)

  const {
    loading,
    studys,
    onFilterStudys,
    onSearchStudys,
    onUserBookmark,
    bookmark,
  } = useStudysController()

  useEffect(() => {
    onFilterStudys(tags)
  }, [tags, onFilterStudys])

  return (
    <>
      {/* 스터디 검색 인풋 */}
      <section className="bg-background py-5">
        <form
          action=""
          className="relative flex w-full items-center justify-center"
        >
          <input
            type="text"
            placeholder={`어떤 스터디를 찾고 싶나요?`}
            className="w-11/12 rounded-md border border-border bg-[#F3F3F3] px-3 py-2 pl-9"
            onChange={(e) => onSearchStudys(e.target.value)}
          />
          <SearchIcon className="absolute left-6 top-1/4 h-5 w-5" />
        </form>
      </section>
      {/* 스터디 검색 필터 */}
      <ChipGroup
        type="multiple"
        onValueChange={(tag) => setTag(tag)}
        className="flex flex-wrap justify-evenly gap-2 bg-background px-3 py-4"
      >
        <Chip defaultPressed={true} className="p-2 text-sm">
          #전체
        </Chip>
        {AllTags.map((tag) => (
          <ChipGroupItem key={tag} value={tag} className="p-2 text-sm">
            #{tag}
          </ChipGroupItem>
        ))}
      </ChipGroup>
      <section className="bg-[#FAFAFA] p-3">
        <div className="mb-3 flex items-center space-x-2">
          <Checkbox id="recruitNow" />
          <label htmlFor="recruitNow">모집중만 보기</label>
        </div>
        {/* 스터디 리스트 */}

        <div className="flex flex-col gap-5 pb-14">
          {loading && (
            <div className="flex flex-col gap-3">
              <Skeleton className="h-[150px] w-full rounded-xl bg-slate-200" />
              <Skeleton className="h-[150px] w-full rounded-xl bg-slate-200" />
              <Skeleton className="h-[150px] w-full rounded-xl bg-slate-200" />
              <Skeleton className="h-[150px] w-full rounded-xl bg-slate-200" />
            </div>
          )}
          {studys.length === 0 && <NoResult />}
          {studys.map((study) => (
            <StudyCard
              title={study.title}
              types={study['recruit_type']}
              tags={study.tags}
              startdate={study['start_date']}
              enddate={study['end_date']}
              sutdyId={study.id}
              key={study.id}
            />
          ))}
        </div>
        {/* 플로팅 버튼 -> 스터디 생성 */}
        <Link href="create">
          <div className="fixed bottom-20 right-1/4 z-50 rounded-full bg-gradient-to-br from-[#8655FF] to-[#d3c2ff] p-3.5 leading-3">
            <StudyCreateIcon />
          </div>
        </Link>
      </section>
    </>
  )
}
