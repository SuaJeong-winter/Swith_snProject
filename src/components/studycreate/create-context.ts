// 아무것도 입력 안됨
export type CreateFirstPage = {
  // recruit?: string[] //모집 직군
  subject?: string //주제
  goal?: string //목표
  description?: string //소개
  curriculum?: string //진행방식과 커리큘럼
  startdate?: Date //시작일
  enddate?: Date //종료일
  // regulardate?: unknown //정기 요일
  // regulartime?: unknown //정기 시간
  membernum?: number //멤버 수
  // tags?: string[]       //관련 태그
}

// 첫번째 페이지 입력됨
export type CreateSecondPage = {
  // recruit: string[]
  subject: string
  goal: string
  description: string
  curriculum?: string
  startdate?: Date
  enddate?: Date
  // regulardate?: unknown
  // regulartime?: unknown
  membernum?: number
  // tags?: string[]
}
