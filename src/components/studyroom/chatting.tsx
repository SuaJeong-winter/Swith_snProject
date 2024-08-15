import SendIcon from '~/assets/icon_send.svg'

export default function Chatting() {
  return (
    <>
      <section className="bg-background">
        <div className="mt-5 flex items-center justify-start px-4 py-2">
          {/* 임시 프로필 이미지 dummy */}
          <div className="mb-2 h-10 w-10 rounded-full bg-black">
            <p> </p>
          </div>
          <h5 className="ml-3 font-bold">박가현</h5>
        </div>
        <p className="border-t-2 border-meetie-gray-20"></p>
        {/* 상대 채팅 */}
        <div className="flex items-end justify-between px-4 py-2">
          <p className="max-w-72 rounded-xl border bg-background px-5 py-3 text-sm text-foreground shadow-sm">
            반가워요 ~ 😊 앞으로 잘 부탁드립니다 😊
          </p>
          <p className="text-xs text-meetie-gray-40">오후 6:40</p>
        </div>
        {/* 내 채팅 */}
        <div className="flex items-end justify-between px-4 py-2">
          <p className="text-xs text-meetie-gray-40">오후 6:40</p>
          <p className="max-w-72 rounded-xl bg-[#F3F3F3] px-5 py-3 text-sm text-foreground shadow-sm">
            반가워요 ~ 😊 앞으로 잘 부탁드립니다 😊
          </p>
        </div>
        {/* 긴 채팅 */}
        {/* 상대 채팅 */}
        <div className="flex items-end justify-between px-4 py-2">
          <p className="max-w-72 rounded-xl border bg-background px-5 py-3 text-sm text-foreground shadow-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
            ullamcorper lectus. Phasellus euismod pharetra tristique. Nam
            gravida purus massa, sit amet accumsan dui molestie et. Maecenas sit
            amet orci quam. Sed accumsan posuere mauris, quis efficitur ipsum
            egestas eget.
          </p>
          <p className="text-xs text-meetie-gray-40">오후 6:40</p>
        </div>
        {/* 내 채팅 */}
        <div className="flex items-end justify-between px-4 py-2">
          <p className="text-xs text-meetie-gray-40">오후 6:40</p>
          <p className="max-w-72 rounded-xl bg-[#F3F3F3] px-5 py-3 text-sm text-foreground shadow-sm">
            Donec facilisis convallis arcu, id cursus turpis scelerisque sit
            amet. Pellentesque semper tellus id facilisis pulvinar. Nam eget
            tincidunt lacus. Mauris rutrum vulputate mi, non sollicitudin massa
            blandit vitae. Curabitur tincidunt, eros sit amet dignissim
            facilisis, felis nisl aliquet nulla, vel mollis nisl justo a elit.
            Aenean nec lorem finibus, sollicitudin elit ac, luctus dolor.
          </p>
        </div>
        {/* 채팅 입력창 */}
        <div className="flex items-center justify-between border-t-2 border-meetie-gray-20 px-3 py-5">
          {/* 임시 프로필 이미지 dummy */}
          <div className="mr-2 h-8 w-8 rounded-full bg-black">
            <p> </p>
          </div>
          <form action="" className="relative w-11/12">
            <input
              type="text"
              placeholder="대화를 시작해보세요!"
              className="w-full rounded-md bg-[#F3F3F3] px-3 py-2"
            />
            <SendIcon className="absolute right-3 top-2 h-6 w-6" />
          </form>
        </div>
      </section>
    </>
  )
}
