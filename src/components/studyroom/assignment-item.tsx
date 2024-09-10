import BtnMore from '~/assets/icon_more.svg'
import IconComment from '~/assets/icon_comment.svg'
import { format } from 'date-fns'
import useAssignmentController from '~/hooks/useAssignmentController'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Skeleton } from '../ui/skeleton'

export default function AssignmentItem({
  desc,
  image,
  writing_datetime,
  user_id,
  assignment_id,
}: {
  desc: string | null
  image: string | null
  writing_datetime: Date
  user_id: string | null
  assignment_id: string | null
}) {
  const formattedDate = format(writing_datetime, 'yyyy.MM.dd HH:mm')
  const [isLoading, setIsLoading] = useState(true)

  const {
    loading,
    writerData,
    onGetSubmitWriterData,
    assignmentData,
    onGetAssignmentData,
  } = useAssignmentController()

  useEffect(() => {
    onGetSubmitWriterData(user_id)
    onGetAssignmentData(assignment_id)
  }, [])

  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center gap-3">
          <Skeleton className="h-[150px] w-[350px] bg-meetie-gray-20" />
          <Skeleton className="h-[150px] w-[350px] bg-meetie-gray-20" />
          <Skeleton className="h-[150px] w-[350px] bg-meetie-gray-20" />
        </div>
      ) : (
        <li className="flex border-y-[1px] border-[#EAEEF0] px-3 py-5">
          {writerData && writerData.length > 0 && (
            <Image
              alt="프로필 사진"
              width={50}
              height={50}
              src={`${writerData[0].profile_img}` || ''}
              className="h-10 w-10 rounded-full"
            ></Image>
          )}
          <div className="ml-3 w-72">
            <div className="flex items-center justify-between">
              <p className="flex items-center">
                {writerData && writerData.length > 0 && (
                  <span className="mr-2 font-bold">
                    {writerData[0].username}
                  </span>
                )}
                {assignmentData && assignmentData.length > 0 && (
                  <span className="text-xs">
                    {assignmentData[0].description}
                  </span>
                )}
              </p>
              <BtnMore className="" />
            </div>
            <p className="mt-2 line-clamp-5">{desc}</p>
            <div>
              {isLoading && (
                <div className="flex flex-col items-center gap-3">
                  <Skeleton className="h-[150px] w-[300px] animate-pulse bg-meetie-gray-20" />
                </div>
              )}
              <Image
                alt="과제 사진"
                width={360}
                height={240}
                className="block w-full"
                src={image || ''}
                onLoad={() => {
                  console.log('Image loaded')
                  setIsLoading(false)
                }}
              />
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
      )}
    </>
  )
}
