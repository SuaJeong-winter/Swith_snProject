'use client'

import { useToast } from '~/components/ui/use-toast'
import { Toaster } from '~/components/ui/toaster'

import IconBell from '~/assets/createStudy/icon_bell.svg'
import MpProfile from '~/assets/mp_profile.svg'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import StudyHeader from '~/components/studycreate/study-header'
import React, { useState } from 'react'
import Image from 'next/image'

const studyGroupDummyData = {
  max_member: 3, // 멤버 수
}

const usersDummyData = [
  {
    name: '제이크',
    job_type: '기획자',
    introduce:
      '안녕하세요. 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디 버디들을 구하고 싶습니다. 화이팅 🫠',
    study_style: ['손이 빠름', '열정적', '동기부여가 필요한'],
    status: false,
    // profile_img:
    //   'data:image/png;base64,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',
    user_id: '123e4567-e89b-12d3-a456-426614174000',
  },
  {
    name: '박가현',
    job_type: '디자이너',
    introduce:
      '안녕하세요. 올해 졸업하고 취업 준비 중 경력도 쌓고싶고 비슷한 사람들과 정보도 공유하고 싶어요!!',
    study_style: ['취준생', '논리적인', '책임감있는'],
    status: false,
    user_id: '550e8400-e29b-41d4-a716-446655440000',
  },
  {
    name: '이수민',
    job_type: '개발자',
    introduce:
      '안녕하세요. 다양한 기술을 배우고 적용해보는 것을 좋아하는 개발자입니다. 함께 성장할 스터디를 찾고 있습니다!',
    study_style: ['문제 해결', '협력적', '열정적인'],
    status: false,
    user_id: '760e6500-e39b-41d4-a816-556655450001',
  },
]

export default function WaitingListPage() {
  const { toast } = useToast()

  const [participants, setParticipants] = useState<string[]>([])
  const [users, setUsers] = useState(usersDummyData) // 상태로 사용자 목록 관리

  // 수락 또는 거절한 user_id 관리 배열
  const [acceptedParticipants, setAcceptedParticipants] = useState<string[]>([])
  const [rejectedParticipants, setRejectedParticipants] = useState<string[]>([])

  const [applynum, setApplynum] = useState(1)

  const onAccept = (user_id: string) => {
    setParticipants((prevParticipants) => {
      if (!prevParticipants.includes(user_id)) {
        return [...prevParticipants, user_id]
      }
      return prevParticipants
    })

    setAcceptedParticipants((prevAccepted) => {
      const newAccepted = [...prevAccepted, user_id]
      console.log('Accepted Participants:', newAccepted)
      return newAccepted
    })

    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.user_id !== user_id),
    ) // 해당 블럭 제거
    setApplynum((prevApplynum) => prevApplynum + 1)
    console.log('Accepted Participants:', [...acceptedParticipants, user_id])
  }

  const onReject = (user_id: string) => {
    setRejectedParticipants((prevRejected) => {
      const newRejected = [...prevRejected, user_id]
      console.log('Rejected Participants:', newRejected)
      return newRejected
    })

    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.user_id !== user_id),
    ) // 해당 블럭 제거
  }

  const handleAcceptAll = () => {
    const potentialTotal = acceptedParticipants.length + users.length + 1
    if (potentialTotal > studyGroupDummyData.max_member) {
      toast({
        description: (
          <div className="flex items-center">
            <IconBell />
            <span>신청자가 수락 가능 인원보다 많습니다</span>
          </div>
        ),
        style: {
          background: 'gray-300',
          width: '300px',
          height: '30px',
          marginBottom: '10px',
        },
      })
      return
    }
    users.forEach((user) => onAccept(user.user_id))
  }

  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="fixed bottom-[80px] mx-[50px] -translate-x-1/2 transform">
        <Toaster />
      </div>
      <StudyHeader href="create?input-funnel.step=TotalData" />

      <div className="mt-[70px] h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="mt-6 space-y-4 px-3">
        {users.map((user) => (
          <div key={user.user_id}>
            <div>2024년 06월 07일</div>
            <div className="h-[180px] space-y-1 rounded-md border-[2px] border-solid border-gray-200 p-2">
              <div className="mt-[8px] flex h-[70px] flex-row items-center justify-start space-x-2">
                <MpProfile />

                {/* <Image
                  src={user.profile_img || '/default-profile.png'}
                  width={50}
                  height={50}
                  alt="profile image"
                /> */}
                <div className="text-base text-black">
                  <p className="text-base">{user.name}</p>
                  <p className="text-sm">{user.job_type}</p>
                  <p className="text-xs">스터디 8회</p>
                </div>
                <div className="h-[30px] space-x-2 pl-[70px]">
                  <Button
                    className="h-[30px] w-[60px] rounded-2xl bg-gray-300 text-xs text-black"
                    onClick={() => onReject(user.user_id)}
                  >
                    거절
                  </Button>
                  <Button
                    className="h-[30px] w-[60px] rounded-2xl text-xs"
                    onClick={() => onAccept(user.user_id)}
                  >
                    수락
                  </Button>
                </div>
              </div>
              <p className="text-sm">{user.introduce}</p>
              <div className="grid h-[10px] grid-cols-4 gap-1 text-xs">
                {user.study_style.map((style, index) => (
                  <Badge
                    key={index}
                    className="h-[30px] w-[80px] justify-center bg-meetie-blue-1"
                  >
                    {style}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-8 flex w-[375px] items-center justify-center space-x-2 bg-white px-[20px]">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">{applynum}명 </span>/
            {studyGroupDummyData.max_member}명
          </p>
        </div>
        <Button
          className="w-60 flex-[2] rounded-md border border-solid"
          onClick={handleAcceptAll}
        >
          전체 수락하기
        </Button>
      </div>
    </section>
  )
}
