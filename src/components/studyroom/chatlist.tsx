import SearchIcon from '~/assets/icon_search.svg'
import ChatItem from './chat-item'

export default function ChatList() {
  return (
    <>
      <section className="min-h-[460px] bg-background py-5">
        <div>
          <form
            action=""
            className="relative flex w-full items-center justify-center"
          >
            <input
              type="text"
              placeholder="채팅명 또는 키워드로 검색해보세요!"
              className="w-11/12 rounded-md border border-border bg-[#F3F3F3] px-3 py-2 pl-9"
            />
            <SearchIcon className="absolute left-6 top-1/4 h-5 w-5" />
          </form>
        </div>
        <div>
          <ul>
            <ChatItem />
          </ul>
        </div>
      </section>
    </>
  )
}
