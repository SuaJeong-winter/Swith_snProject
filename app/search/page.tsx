import BottomNavBar from '~/components/common/bottom-nav-bar'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'
import SearchIcon from '~/assets/icon_search.svg'

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
            className="w-11/12 rounded-md border border-[#DDDDDD] bg-[#F3F3F3] px-3 py-2 pl-9"
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
      <BottomNavBar />
    </>
  )
}
