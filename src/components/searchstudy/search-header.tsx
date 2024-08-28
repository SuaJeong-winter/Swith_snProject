import SearchIcon from '~/assets/icon_search.svg'

export default function SearchHeader() {
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
            placeholder={`어떤 스터디를 찾고 싶나요?`}
            className="w-11/12 rounded-md border border-border bg-[#F3F3F3] px-3 py-2 pl-9"
          />
          <SearchIcon className="absolute left-6 top-1/4 h-5 w-5" />
        </form>
      </section>
    </>
  )
}
