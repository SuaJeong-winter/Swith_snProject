'use client'

import StudyCreateIcon from '~/assets/searchStudy/icon_study-create.svg'
import { useState, useCallback, useEffect } from 'react'
import { Chip } from '~/components/ui/chip'
import { ChipGroup, ChipGroupItem } from '../ui/chip-group'
import { Checkbox } from '~/components/ui/checkbox'
import { Skeleton } from '~/components/ui/skeleton'
import StudyCard from '~/components/searchstudy/study-card'
import Link from 'next/link'
import useStudysController from '~/hooks/useStudysController'
import { createClient } from '~/utils/supabase/client'
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

  const { loading, studys, onFilterStudys } = useStudysController()

  useEffect(() => {
    onFilterStudys(tags)
  }, [tags])

  return (
    <>
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
          {studys.length === 0 && <NoResult />}
          {loading && (
            <Skeleton className="h-[200px] w-full rounded-xl bg-slate-200" />
          )}
          {studys.map((study) => (
            <StudyCard
              title={study.title}
              types={study['recruit_type']}
              tags={study.tags}
              startdate={study['start_date']}
              enddate={study['end_date']}
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
