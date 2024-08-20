'use client'

import { useToast } from '~/components/ui/use-toast'
import { Toaster } from '~/components/ui/toaster'

import IconBell from '~/assets/createStudy/icon_bell.svg'
import MpProfile from '~/assets/mp_profile.svg'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import StudyHeader from '~/components/studycreate/study-header'

export default function WaitingListPage() {
  const applynum: number = 1
  const maxnum = 4
  const { toast } = useToast()
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="fixed bottom-[80px] mx-[50px] -translate-x-1/2 transform">
        <Toaster />
      </div>
      <StudyHeader href="approval" />
      <div className="mt-[70px] h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="mt-6 space-y-2 px-3">
        <div>2024년 06월 07일</div>
        <div className="h-[180px] space-y-2 rounded-lg border-2 border-solid border-gray-400 p-2">
          <div className="mt-[10px] flex h-[70px] flex-row items-center justify-start space-x-2">
            <MpProfile />
            <div className="text-base text-black">
              <p>김서희</p>
              <p>기획자</p>
              <p>스터디 8회</p>
            </div>
            <div className="h-[30px] space-x-2 pl-[100px]">
              <Button size="sm" className="rounded-2xl bg-gray-300 text-black">
                거절
              </Button>
              <Button size="sm" className="rounded-2xl">
                수락
              </Button>
            </div>
          </div>
          <p>한줄 자기소개 들어갈 부분</p>
          <div className="grid h-[10px] grid-cols-4 gap-1 text-xs">
            <Badge className="h-[30px] w-[80px] justify-center bg-meetie-blue-1">
              온라인
            </Badge>
            <Badge className="h-[30px] w-[80px] justify-center bg-meetie-blue-1">
              오프라인
            </Badge>
            <Badge className="h-[30px] w-[80px] justify-center bg-meetie-blue-1">
              프론트엔드
            </Badge>
          </div>
        </div>
        <div>2024년 06월 07일</div>
        <div className="h-[180px] space-y-2 rounded-lg border-2 border-solid border-gray-400 p-2">
          <div className="mt-[10px] flex h-[70px] flex-row items-center justify-start space-x-2">
            <MpProfile />
            <div className="text-base text-black">
              <p>김서희</p>
              <p>기획자</p>
              <p>스터디 8회</p>
            </div>
            <div className="h-[30px] space-x-2 pl-[100px]">
              <Button size="sm" className="rounded-2xl bg-gray-300 text-black">
                거절
              </Button>
              <Button size="sm" className="rounded-2xl">
                수락
              </Button>
            </div>
          </div>
          <p>한줄 자기소개 들어갈 부분</p>
          <div className="grid h-[10px] grid-cols-4 gap-1 text-xs">
            <Badge className="h-[30px] w-[80px] justify-center bg-meetie-blue-1">
              온라인
            </Badge>
            <Badge className="h-[30px] w-[80px] justify-center bg-meetie-blue-1">
              오프라인
            </Badge>
            <Badge className="h-[30px] w-[80px] justify-center bg-meetie-blue-1">
              프론트엔드
            </Badge>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 flex w-[375px] items-center justify-center space-x-2 bg-white px-[20px]">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">{applynum}명 </span>/ {maxnum}
            명
          </p>
        </div>
        <Button
          className="w-60 flex-[2] rounded-md border border-solid"
          onClick={() => {
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
          }}
        >
          전체 수락하기
        </Button>
      </div>
    </section>
  )
}
