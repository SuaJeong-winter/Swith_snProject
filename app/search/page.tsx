import StudyCreateIcon from '~/assets/searchStudy/icon_study-create.svg'

import BottomNavBar from '~/components/common/bottom-nav-bar'
import { Chip } from '~/components/ui/chip'

import { Checkbox } from '~/components/ui/checkbox'
import SearchHeader from '~/components/searchstudy/search-header'
import StudyCard from '~/components/searchstudy/study-card'
import Link from 'next/link'

export default function searchPage() {
  return (
    <>
      <SearchHeader />
      {/* 스터디 검색 필터 */}
      <section className="flex flex-wrap justify-evenly gap-2 bg-background px-3 py-4">
        <Chip className="py-1 text-sm">#전체</Chip>
        <Chip className="py-1 text-sm">#온라인</Chip>
        <Chip className="py-1 text-sm">#오프라인</Chip>
        <Chip className="py-1 text-sm">#프론트엔드</Chip>
        <Chip className="py-1 text-sm">#백엔드</Chip>
        <Chip className="py-1 text-sm">#UX/UI</Chip>
        <Chip className="py-1 text-sm">#PM</Chip>
        <Chip className="py-1 text-sm">#어플</Chip>
        <Chip className="py-1 text-sm">#웹</Chip>
        <Chip className="py-1 text-sm">#사이드프로젝트</Chip>
      </section>
      <section className="bg-[#FAFAFA] p-3">
        <div className="mb-3 flex items-center space-x-2">
          <Checkbox id="recruitNow" />
          <label htmlFor="recruitNow">모집중만 보기</label>
        </div>
        {/* 스터디 리스트 */}
        <div className="flex flex-col gap-5 pb-14">
          <StudyCard
            title="자바 중급 스터디"
            type="개발"
            tags={['온라인', '백엔드']}
            key="01"
          />
          <StudyCard
            title="자바 중급 스터디"
            type="디자이너"
            tags={['오토레이아웃', '과제인증필수']}
            key="02"
          />
          <StudyCard
            title="하반기 영상 공모전 대비 스터디"
            type="디자이너"
            tags={['C4D', '블렌더', '3D디자인']}
            key="03"
          />
        </div>
        {/* 플로팅 버튼 -> 스터디 생성 */}
        <Link href="create">
          <div className="fixed bottom-20 right-1/4 z-50 rounded-full bg-gradient-to-br from-[#8655FF] to-[#d3c2ff] p-3.5 leading-3">
            <StudyCreateIcon />
          </div>
        </Link>
      </section>
      <BottomNavBar />
    </>
  )
}
