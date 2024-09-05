import BtnMore from '~/assets/icon_more.svg'
import IconComment from '~/assets/icon_comment.svg'
import { format } from 'date-fns'

export default function AssignmentItem({
  description,
  photo,
  timestamp,
}: {
  description: string
  photo: string
  timestamp: Date
}) {
  const formattedDate = format(timestamp, 'yyyy.MM.dd HH:mm')

  return (
    <>
      <li className="flex border-y-[1px] border-[#EAEEF0] px-3 py-5">
        {/* 임시 프로필 이미지 dummy */}
        <div className="h-10 w-10 rounded-full bg-black">
          <p> </p>
        </div>
        <div className="ml-3 w-72">
          <div className="flex items-center justify-between">
            <p className="flex items-center">
              <span className="mr-2 font-bold">제이크</span>
              <span className="text-xs">콜로소 인강 1강 인증하기</span>
            </p>
            <BtnMore className="" />
          </div>
          <p className="mt-2 line-clamp-5">{description}</p>
          {/* Image 컴포넌트로 첨부 이미지  썸네일 삽입 */}
          <div>
            <img className="w-full" src={photo} />
          </div>
          <div className="flex items-end justify-between">
            <span className="mt-3 text-xs">{formattedDate}</span>
            <div className="flex gap-1 text-xs">
              <IconComment />
              <span>{1}</span>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
