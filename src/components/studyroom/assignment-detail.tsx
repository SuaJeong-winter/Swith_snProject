'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'
import SendIcon from '~/assets/icon_send.svg'
import useAssignmentController from '~/hooks/useAssignmentController'
import { Skeleton } from '../ui/skeleton'
import Image from 'next/image'
import { format } from 'date-fns'

export default function AssignmentDetail() {
  const {
    submitAssignmentData,
    writerData,
    onGetSubmitAssignmentData,
    onGetSubmitWriterData,
  } = useAssignmentController()

  const params = useParams()
  const studyId = params.studyId
  const id = params.id
  const [isLoading, setIsLoading] = useState(true)
  const user_id =
    (submitAssignmentData && submitAssignmentData[0].user_id) ?? 'userId'

  useEffect(() => {
    const fetchData = async () => {
      await onGetSubmitAssignmentData(id)
      await onGetSubmitWriterData(user_id)
    }

    fetchData()
  }, [user_id])

  return (
    <section className="mb-20 bg-background">
      <div className="flex flex-row space-x-32 border-b-2 p-3 align-baseline">
        <a href={`/studyroom/${studyId}`}>
          <BtnBackIcon />
        </a>
        <h2 className="font-bold">과제 상세</h2>
        <BtnMoreVertical />
      </div>
      <section className="flex min-h-screen flex-col">
        <div className="flex items-center justify-start px-3 py-2">
          {writerData && writerData.length > 0 && (
            <Image
              alt="프로필 사진"
              width={50}
              height={50}
              src={`${writerData[0].profile_img}` || ''}
              className="mb-1 h-10 w-10 rounded-full"
            ></Image>
          )}
          <div className="ml-3">
            {writerData && writerData.length > 0 && (
              <h5 className="font-bold">{writerData[0].username}</h5>
            )}
            {submitAssignmentData && submitAssignmentData.length > 0 && (
              <p className="text-sm">
                {format(
                  submitAssignmentData[0].writing_datetime,
                  'yyyy.MM.dd HH:mm',
                )}
              </p>
            )}
          </div>
        </div>
        <p className="border-t-2 border-meetie-gray-20"></p>
        <div className="flex-grow bg-[#FAFAFA] px-3 py-8">
          {submitAssignmentData && submitAssignmentData.length > 0 && (
            <p className="mb-2">{submitAssignmentData[0].desc}</p>
          )}
          {isLoading && (
            <div className="flex flex-col items-center gap-3">
              <Skeleton className="h-[150px] w-[300px] animate-pulse bg-meetie-gray-20" />
            </div>
          )}
          {submitAssignmentData && submitAssignmentData.length > 0 && (
            <Image
              alt="과제 사진"
              width={360}
              height={240}
              className="w-full rounded-md"
              src={`${submitAssignmentData[0].image}` || ''}
              onLoad={() => {
                setIsLoading(false)
              }}
            />
          )}
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
        <div className="mb-20 flex items-center justify-between border-t-2 border-meetie-gray-20 px-3 pt-4">
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
            <SendIcon className="absolute right-3 top-2 h-6 w-6 cursor-pointer" />
          </form>
        </div>
      </section>
    </section>
  )
}
