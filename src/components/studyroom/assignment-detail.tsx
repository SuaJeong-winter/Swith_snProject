import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'
import SendIcon from '~/assets/icon_send.svg'

export default function AssignmentDetail() {
  return (
    <>
      <div className="flex flex-row space-x-32 border-b-2 p-3 align-baseline">
        <a href="/studyroom">
          <BtnBackIcon />
        </a>
        <h2 className="font-bold">과제 상세</h2>
        <BtnMoreVertical />
      </div>
      <section className="flex h-screen flex-col">
        <div className="flex items-center justify-start px-3 py-2">
          {/* 임시 프로필 이미지 dummy */}
          <div className="mb-2 h-10 w-10 rounded-full bg-black">
            <p> </p>
          </div>
          <div className="ml-3">
            <h5 className="font-bold">박가현</h5>
            <p className="text-sm">2024.08.13 09:41</p>
          </div>
        </div>
        <p className="border-t-2 border-meetie-gray-20"></p>
        <div className="flex-grow bg-[#FAFAFA] px-3 py-10">
          <p className="">
            강의 듣기 끝! 실습 과정에서 어려움이 있었어요. 피그마 링크
            공유합니다~ 피드백 환영 :)
          </p>
          {/* Image 컴포넌트로 첨부 이미지 삽입 */}
        </div>
        {/* 과제 댓글 영역 */}
        <div className="border-t-2 border-meetie-gray-20 bg-[#FAFAFA] p-4">
          <p>
            댓글 <span className="text-pri">{1}</span>
          </p>
          {/* 과제 개별 댓글 */}
          <div className="flex items-start justify-start py-2">
            {/* 임시 프로필 이미지 dummy */}
            <div className="my-2 h-10 w-10 rounded-full bg-black">
              <p> </p>
            </div>
            <div className="ml-3 max-w-72">
              <span className="mr-2 font-bold">테디</span>
              <span className="text-xs">08.13 09:41</span>
              <p>
                처음부터 끝까지 봤는데, 정말 꼼꼼하게 잘하셨네요! 피드백 할
                부분이 없는데요! 잘 보고 가요
              </p>
            </div>
          </div>
          {/* 과제 개별 댓글 */}
          <div className="flex items-start justify-start py-2">
            {/* 임시 프로필 이미지 dummy */}
            <div className="my-2 h-10 w-10 rounded-full bg-black">
              <p> </p>
            </div>
            <div className="ml-3 max-w-72">
              <span className="mr-2 font-bold">테디</span>
              <span className="text-xs">08.13 09:41</span>
              <p>
                처음부터 끝까지 봤는데, 정말 꼼꼼하게 잘하셨네요! 피드백 할
                부분이 없는데요! 잘 보고 가요
              </p>
            </div>
          </div>
        </div>
        {/* 댓글 입력창 */}
        <div className="mb-16 flex items-center justify-between border-t-2 border-meetie-gray-20 px-3 py-5">
          {/* 임시 프로필 이미지 dummy */}
          <div className="mr-2 h-8 w-8 rounded-full bg-black">
            <p> </p>
          </div>
          <form action="" className="relative w-11/12">
            <input
              type="text"
              placeholder="스터디원에게 응원의 메세지 보내기"
              className="w-full rounded-md bg-[#F3F3F3] px-3 py-2"
            />
            <SendIcon className="absolute right-3 top-2 h-6 w-6" />
          </form>
        </div>
      </section>
    </>
  )
}
