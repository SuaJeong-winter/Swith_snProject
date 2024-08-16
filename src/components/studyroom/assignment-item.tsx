import BtnMore from '~/assets/icon_more.svg'
import IconComment from '~/assets/icon_comment.svg'

export default function AssignmentItem() {
  return (
    <>
      <li className="flex items-start justify-start border-y-[1px] border-[#EAEEF0] px-3 py-5">
        {/* 임시 프로필 이미지 dummy */}
        <div className="h-10 w-10 rounded-full bg-black">
          <p> </p>
        </div>
        <div className="ml-3 max-w-64">
          <div className="flex justify-between">
            <p>
              <span className="mr-2 font-bold">제이크</span>
              <span className="text-xs">콜로소 인강 1강 인증하기</span>
            </p>
          </div>
          <p className="mt-4">
            강의 실습은 쉬웠어요! 하다가 어려우시면 dm주시면 알려드릴게요!
          </p>
          {/* Image 컴포넌트로 첨부 이미지  썸네일 삽입 */}
          <div className="flex items-end justify-between">
            <span className="mt-3 text-xs">08.13 09:41</span>
            <div className="flex gap-1 text-xs">
              <IconComment />
              <span>{1}</span>
            </div>
          </div>
        </div>
        <BtnMore className="ml-3 mt-3" />
      </li>
    </>
  )
}
