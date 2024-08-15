import Link from 'next/link'
import BtnBackIcon from '~/assets/btn_back.svg'
import BtnMoreVertical from '~/assets/icon_more-vertical.svg'
import MpProfile from '~/assets/mp_profile.svg'
import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'

export default function WaitingListPage() {
  const applynum: number = 1
  const maxnum = 4
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="fixed top-4 flex flex-row space-x-28 px-3 pt-3">
        <Link href="approval">
          <BtnBackIcon />
        </Link>
        <h2 className="font-bold">대기중인 요청</h2>
        <BtnMoreVertical />
      </div>
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
            <Chip>온라인</Chip>
            <Chip>오프라인</Chip>
            <Chip>프론트엔드</Chip>
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
            <Chip>온라인</Chip>
            <Chip>오프라인</Chip>
            <Chip>프론트엔드</Chip>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 flex h-[100px] w-[375px] items-center justify-center space-x-4 bg-white">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">{applynum}명 </span>/ {maxnum}
            명
          </p>
        </div>
        <Button className="border-1 w-60 flex-[2] border-solid">
          대기중인 요청 확인
        </Button>
      </div>
    </section>
  )
}
