import BottomNavBar from '~/components/common/bottom-nav-bar'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'
import SearchIcon from '~/assets/icon_search.svg'
import CalendarMini from '~/assets/icon_calendar-mini.svg'
import BookmarkOff from '~/assets/icon_bookmark-off.svg'
import BookmarkOn from '~/assets/icon_bookmark-on.svg'
import { Badge } from '~/components/ui/badge'

import StudyCreateIcon from '~/assets/icon_study-create.svg'
import { Chip } from '~/components/ui/chip'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Checkbox } from '~/components/ui/checkbox'

export default function searchPage() {
  return (
    <>
      <section className="bg-background pb-8">
        <h1 className="p-4 text-lg font-bold">탐색하기</h1>
        <form
          action=""
          className="relative flex w-full items-center justify-center"
        >
          <input
            type="text"
            placeholder="어떤 스터디를 찾고 싶나요?"
            className="w-11/12 rounded-md border border-border bg-[#F3F3F3] px-3 py-2 pl-9"
          />
          <SearchIcon className="absolute left-6 top-1/4 h-5 w-5" />
        </form>
      </section>
      <Tabs defaultValue="find-study">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="find-study">스터디 찾기</TabsTrigger>
          <TabsTrigger value="find-mate">팀원 찾기</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* 스터디 검색 필터 */}
      <section className="flex flex-wrap justify-evenly gap-2 bg-background px-3 py-4">
        <Chip>#전체</Chip>
        <Chip>#온라인</Chip>
        <Chip>#오프라인</Chip>
        <Chip>#프론트엔드</Chip>
        <Chip>#백엔드</Chip>
        <Chip>#UX/UI</Chip>
        <Chip>#PM</Chip>
        <Chip>#어플</Chip>
        <Chip>#웹</Chip>
        <Chip>#사이드프로젝트</Chip>
      </section>
      <section className="bg-[#FAFAFA] p-3">
        <div className="mb-3 flex items-center space-x-2">
          <Checkbox id="recruitNow" />
          <label htmlFor="recruitNow">모집중만 보기</label>
        </div>
        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardDescription>개발</CardDescription>
                <BookmarkOff />
                {/* <BookmarkOn /> */}
              </div>
              <CardTitle>자바 중급 스터디 모집</CardTitle>
            </CardHeader>
            <CardContent>
              {/* 태그 */}
              <div>
                <Badge>온라인</Badge>
                <Badge>백엔드</Badge>
              </div>
              <span className="font-bold text-primary">마감 0일 전</span>
              <CalendarMini className="mb-1 ml-3 mr-1 inline" />
              <span>24.00.00(월) ~ 24.00.00</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardDescription>개발</CardDescription>
                <BookmarkOff />
                {/* <BookmarkOn /> */}
              </div>
              <CardTitle>자바 중급 스터디 모집</CardTitle>
            </CardHeader>
            <CardContent>
              {/* 태그 */}
              <div>
                <Badge>온라인</Badge>
                <Badge>백엔드</Badge>
              </div>
              <span className="font-bold text-primary">마감 0일 전</span>
              <CalendarMini className="mb-1 ml-3 mr-1 inline" />
              <span>24.00.00(월) ~ 24.00.00</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardDescription>개발</CardDescription>
                <BookmarkOff />
                {/* <BookmarkOn /> */}
              </div>
              <CardTitle>자바 중급 스터디 모집</CardTitle>
            </CardHeader>
            <CardContent>
              {/* 태그 */}
              <div>
                <Badge>온라인</Badge>
                <Badge>백엔드</Badge>
              </div>
              <span className="font-bold text-primary">마감 0일 전</span>
              <CalendarMini className="mb-1 ml-3 mr-1 inline" />
              <span>24.00.00(월) ~ 24.00.00</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardDescription>개발</CardDescription>
                <BookmarkOff />
                {/* <BookmarkOn /> */}
              </div>
              <CardTitle>자바 중급 스터디 모집</CardTitle>
            </CardHeader>
            <CardContent>
              {/* 태그 */}
              <div>
                <Badge>온라인</Badge>
                <Badge>백엔드</Badge>
              </div>
              <span className="font-bold text-primary">마감 0일 전</span>
              <CalendarMini className="mb-1 ml-3 mr-1 inline" />
              <span>24.00.00(월) ~ 24.00.00</span>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* 플로팅 버튼 -> 스터디 생성 */}
      <div className="fixed bottom-20 right-1/4 z-50 rounded-full bg-gradient-to-br from-[#8655FF] to-[#d3c2ff] p-3.5">
        <StudyCreateIcon />
      </div>
      <BottomNavBar />
    </>
  )
}
