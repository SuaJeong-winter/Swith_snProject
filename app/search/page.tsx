import BottomNavBar from '~/components/common/bottom-nav-bar'
import SearchHeader from '~/components/searchstudy/search-header'
import SearchMate from '~/components/searchstudy/search-mate'
import SearchStudy from '~/components/searchstudy/search-study'

export default function searchPage() {
  return (
    <>
      <SearchHeader />
      <SearchStudy />
      {/* <SearchMate /> */}
      <BottomNavBar />
    </>
  )
}
