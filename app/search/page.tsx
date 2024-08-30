import BottomNavBar from '~/components/common/bottom-nav-bar'
import SearchHeader from '~/components/searchstudy/search-header'
import SearchMate from '~/components/searchstudy/search-mate'
import SearchStudy from '~/components/searchstudy/search-study'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'

export default function searchPage() {
  return (
    <>
      <section className="bg-background">
        <h1 className="p-4 text-lg font-bold">탐색하기</h1>
      </section>
      <Tabs defaultValue="find-study">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="find-study">스터디 찾기</TabsTrigger>
          <TabsTrigger value="find-mate">팀원 찾기</TabsTrigger>
        </TabsList>
        <TabsContent value="find-study" className="mt-0">
          <SearchStudy />
        </TabsContent>
        <TabsContent value="find-mate" className="mt-0">
          <SearchMate />
        </TabsContent>
      </Tabs>
      <BottomNavBar />
    </>
  )
}
