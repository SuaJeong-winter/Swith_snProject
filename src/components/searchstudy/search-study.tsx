'use client'

import StudyCreateIcon from '~/assets/searchStudy/icon_study-create.svg'
import { useState, useCallback } from 'react'
import { Chip } from '~/components/ui/chip'
import { ChipGroup, ChipGroupItem } from '../ui/chip-group'
import { Checkbox } from '~/components/ui/checkbox'
import StudyCard from '~/components/searchstudy/study-card'
import Link from 'next/link'

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

// studys.filter((study) => {
//   console.log(study.tags.includes(tags))
// })

export default function SearchStudy() {
  const [tags, setTag] = useState<string[]>([])
  const [filters, setFilters] = useState<string[]>([])

  // const res = await fetch(
  //   'https://fb45094e-62c9-4930-bd40-a21edbb1a329.mock.pstmn.io/study',
  // )
  // const studys = await res.json()

  const studys = [
    {
      id: 'd23a9705-945a-470a-8226-e78d50f85ae6',
      title: '자바 중급 스터디',
      member: [{}, {}, {}, {}, {}],
      max_member: 5,
      status: false,
      'start-date': '6/2/2024',
      'end-date': '3/1/2024',
      info: '자바중급스터디 / Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lorem vitae nibh dapibus fringilla.  ',
      tags: ['온라인', '백엔드'],
      deadline: '7/27/2024',
      'recruit-type': ['개발자'],
      goal: '',
      curriculum: '​자바중급',
      'writing-date': '4/5/2024',
      'regular-days': '화요일',
      'regular-time': '4:30 PM',
    },
    {
      id: '39be8c43-3abc-421e-b41f-5c4f4f6489e4',
      title: '하반기 영상 공모전 대비 스터디',
      member: [{}, {}, {}],
      max_member: 3,
      status: false,
      'start-date': '9/20/2024',
      'end-date': '5/9/2024',
      info: '영상 공모전  / Lorem ipsum dolor sit amet, consectetur adipiscing',
      tags: [' C4D', '블렌더', '3D 디자인'],
      deadline: '10/18/2024',
      'recruit-type': ['디자이너'],
      goal: '하반기 영상 공모전',
      curriculum: '블렌더 C4D 등',
      'writing-date': '12/24/2024',
      'regular-days': '금요일',
      'regular-time': '11:21 AM',
    },
    {
      id: '07493344-8ea8-4a09-82d9-aaa9595e0f9a',
      title: 'UX UI 스터디  ',
      member: [{}, {}, {}],
      max_member: 3,
      status: false,
      'start-date': '6/14/2024',
      'end-date': '3/25/2024',
      info: 'UXUI 스터디 / Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lorem vitae nibh dapibus fringilla.',
      tags: ['온라인', 'UX/UI'],
      deadline: '1/11/2024',
      'recruit-type': ['디자이너'],
      goal: '😍',
      curriculum: 'UXUI 스터디 커리큘럼',
      'writing-date': '7/5/2024',
      'regular-days': '᠎수요일',
      'regular-time': '7:48 PM',
    },
    {
      id: '8337e78f-e2aa-4a20-b6aa-c650804113fe',
      title: '웹프론트엔드 스터디',
      member: [{}, {}, {}],
      max_member: 4,
      status: false,
      'start-date': '12/1/2024',
      'end-date': '3/19/2024',
      info: '웹 프론트엔드 / Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lorem vitae nibh dapibus fringilla.  ',
      tags: ['온라인', '프론트엔드', '웹'],
      deadline: '8/10/2024',
      'recruit-type': ['개발자'],
      goal: '미니플젝',
      curriculum: '웹 프론트 커리큘럼',
      'writing-date': '12/8/2024',
      'regular-days': '᠎금요일',
      'regular-time': '11:34 PM',
    },
    {
      id: 'abeb408d-2afa-4f90-8e34-94fbc1ec1d4a',
      title: '웹 서비스 기획 스터디​',
      member: [{}, {}, {}],
      max_member: 5,
      status: false,
      'start-date': '9/18/2024',
      'end-date': '3/12/2024',
      info: '웹 서비스 기획 스터디 / Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat ',
      tags: ['오프라인', 'PM', '웹'],
      deadline: '9/29/2024',
      'recruit-type': ['기획자'],
      goal: '-1',
      curriculum: '서비스기획 커리큘럼',
      'writing-date': '4/10/2024',
      'regular-days': '"',
      'regular-time': '1:14 AM',
    },
    {
      id: 'b5e6bb83-30d4-4142-8572-150ed9c7f7e4',
      title: '사이드 프로젝트 팀원 모집',
      member: [{}, {}],
      max_member: 6,
      status: true,
      'start-date': '4/8/2024',
      'end-date': '11/11/2024',
      info: '웹 사이드프로젝트 /  Proin feugiat lorem vitae nibh dapibus fringilla.  ',
      tags: ['온라인', '백엔드', '프론트엔드', 'PM', '사이드프로젝트'],
      deadline: '1/11/2024',
      'recruit-type': ['개발자', '기획자', '디자이너'],
      goal: '웹 사이드프로젝트 만들기',
      curriculum: '사이드 프로젝트 커리큘럼',
      'writing-date': '7/26/2024',
      'regular-days': '᠎목요일',
      'regular-time': '11:09 AM',
    },
    {
      id: '8f5c7319-6501-4f7a-adb9-d3d00b9ccb65',
      title: '리액트 스터디',
      member: [{}, {}],
      max_member: 7,
      status: true,
      'start-date': '10/22/2024',
      'end-date': '11/16/2024',
      info: '리액트 스터디',
      tags: ['온라인', '프론트엔드'],
      deadline: '8/31/2024',
      'recruit-type': ['개발자'],
      goal: '리액트 목표',
      curriculum: '리액트 커리큘럼',
      'writing-date': '7/12/2024',
      'regular-days': '수요일',
      'regular-time': '1:44 PM',
    },
    {
      id: 'bf4c8270-6706-4e1b-a432-f87aa86e3194',
      title: 'Vue.js 스터디',
      member: [{}, {}, {}, {}],
      max_member: 8,
      status: false,
      'start-date': '9/2/2024',
      'end-date': '10/18/2024',
      info: 'Vue.js 스터디 / Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lorem vitae nibh dapibus fringilla.  ',
      tags: ['온라인', '프론트엔드', '웹'],
      deadline: '8/8/2024',
      'recruit-type': ['개발자'],
      goal: 'vue.js 스터디',
      curriculum: 'vue js',
      'writing-date': '1/22/2024',
      'regular-days': '금요일',
      'regular-time': '7:03 AM',
    },
    {
      id: 'ad5b4522-4174-4866-b1fb-e958a90d218e',
      title: '자바 초급 스터디',
      member: [{}, {}],
      max_member: 6,
      status: true,
      'start-date': '11/5/2024',
      'end-date': '12/7/2024',
      info: '자바 초급 스터디 / Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lorem vitae nibh dapibus fringilla.  ',
      tags: ['온라인', '백엔드'],
      deadline: '10/18/2024',
      'recruit-type': ['개발자'],
      goal: '자바 초급',
      curriculum: '자바 초급 커리큘럼',
      'writing-date': '1/9/2024',
      'regular-days': '​수요일',
      'regular-time': '4:36 AM',
    },
    {
      id: '48e27fea-ac9e-433c-917f-17903d0bfad0',
      title: '자바 고급 스터디',
      member: [{}],
      max_member: 10,
      status: false,
      'start-date': '9/13/2024',
      'end-date': '11/16/2024',
      info: '자바 고급 스터디 / Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lorem vitae nibh dapibus fringilla.  ',
      tags: ['온라인', '백엔드'],
      deadline: '9/3/2024',
      'recruit-type': ['개발자'],
      goal: '자바 고급',
      curriculum: '자바 고급',
      'writing-date': '7/26/2024',
      'regular-days': '목요일​',
      'regular-time': '4:53 PM',
    },
  ]

  // const getFilterStudy = useCallback(() => {
  //   studys.filter((study) => {
  //     tags.filter((tag) => study.tags.includes(tag))
  //   })
  // }, [tags])

  console.log(tags)

  // let test = studys.map((study) => {
  //   // tags.map((tag) => study.tags.includes(tag))
  //   study.tags.includes('온라인')
  // })

  // console.log(test)

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
          {studys.map((study) => (
            <StudyCard
              title={study.title}
              types={study['recruit-type']}
              tags={study.tags}
              startdate={study['start-date']}
              enddate={study['end-date']}
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
