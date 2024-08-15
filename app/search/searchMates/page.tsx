import SearchIcon from '~/assets/icon_search.svg'
import RefreshBtn from '~/assets/icon_refresh.svg'
import OpenProfile from '~/assets/icon_arrow-circle.svg'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'
import BottomNavBar from '~/components/common/bottom-nav-bar'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Chip } from '~/components/ui/chip'
import Image from 'next/image'
import ChatList from '~/components/studyroom/chatlist'
import Chatting from '~/components/studyroom/chatting'
import TaskDeadline from '~/components/studyroom/task-deadline'

export default function searchMatesPage() {
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
            placeholder="어떤 팀원을 찾고 싶나요?"
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
      {/* 팀원 검색 필터 */}
      <section className="flex flex-wrap justify-evenly gap-2 bg-background px-3 py-4">
        <RefreshBtn />
        <Chip className="py-1 text-sm">직무</Chip>
        <Chip className="py-1 text-sm">스터디목적</Chip>
        <Chip className="py-1 text-sm">작업 스타일</Chip>
      </section>
      <section className="bg-[#F5F5FF] p-3">
        {/* 페이지 넘버 */}
        <p className="mb-2 text-right">1/2</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Card className="relative border-none px-0 py-4 shadow-none">
            <OpenProfile className="absolute right-3 top-3" />
            <CardHeader className="items-center px-2">
              {/* 임시 프로필 이미지 dummy */}
              <div className="mb-2 h-14 w-14 rounded-full bg-black">
                <p>img</p>
              </div>
              {/* <Image src="" alt="profile image" /> */}
              <CardTitle className="font-bold">김선우</CardTitle>
              <CardDescription className="text-meetie-gray-40">
                디자이너 | UX UI
              </CardDescription>
              <CardContent>초급 열정있는 파워J</CardContent>
              <Button variant="outline" size="sm" className="w-full">
                친구 추가하기 +
              </Button>
            </CardHeader>
          </Card>
          <Card className="relative border-none px-0 py-4 shadow-none">
            <OpenProfile className="absolute right-3 top-3" />
            <CardHeader className="items-center px-2">
              {/* 임시 프로필 이미지 dummy */}
              <div className="mb-2 h-14 w-14 rounded-full bg-black">
                <p>img</p>
              </div>
              {/* <Image src="" alt="profile image" /> */}
              <CardTitle className="font-bold">김선우</CardTitle>
              <CardDescription className="text-meetie-gray-40">
                디자이너 | UX UI
              </CardDescription>
              <CardContent>초급 열정있는 파워J</CardContent>
              <Button variant="outline" size="sm" className="w-full">
                친구 추가하기 +
              </Button>
            </CardHeader>
          </Card>
          <Card className="relative border-none px-0 py-4 shadow-none">
            <OpenProfile className="absolute right-3 top-3" />
            <CardHeader className="items-center px-2">
              {/* 임시 프로필 이미지 dummy */}
              <div className="mb-2 h-14 w-14 rounded-full bg-black">
                <p>img</p>
              </div>
              {/* <Image src="" alt="profile image" /> */}
              <CardTitle className="font-bold">김선우</CardTitle>
              <CardDescription className="text-meetie-gray-40">
                디자이너 | UX UI
              </CardDescription>
              <CardContent>초급 열정있는 파워J</CardContent>
              <Button variant="outline" size="sm" className="w-full">
                친구 추가하기 +
              </Button>
            </CardHeader>
          </Card>
          <Card className="relative border-none px-0 py-4 shadow-none">
            <OpenProfile className="absolute right-3 top-3" />
            <CardHeader className="items-center px-2">
              {/* 임시 프로필 이미지 dummy */}
              <div className="mb-2 h-14 w-14 rounded-full bg-black">
                <p>img</p>
              </div>
              {/* <Image src="" alt="profile image" /> */}
              <CardTitle className="font-bold">김선우</CardTitle>
              <CardDescription className="text-meetie-gray-40">
                디자이너 | UX UI
              </CardDescription>
              <CardContent>초급 열정있는 파워J</CardContent>
              <Button variant="outline" size="sm" className="w-full">
                친구 추가하기 +
              </Button>
            </CardHeader>
          </Card>
        </div>
      </section>
      <div className="mb-16">
        <ChatList />
        <Chatting />
        <TaskDeadline />
      </div>
      <BottomNavBar />
    </>
  )
}
