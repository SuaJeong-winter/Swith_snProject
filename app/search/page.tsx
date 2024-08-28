import BottomNavBar from '~/components/common/bottom-nav-bar'
import SearchHeader from '~/components/searchstudy/search-header'
import SearchMate from '~/components/searchstudy/search-mate'
import SearchStudy from '~/components/searchstudy/search-study'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'

export default function searchPage() {
  return (
    <>
      <SearchHeader />
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
