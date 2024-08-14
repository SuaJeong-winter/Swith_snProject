import Link from 'next/link'
import BtnBackIcon from '~/assets/btn_back.svg'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'

export default function CreatePage() {
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="fixed top-4 flex flex-row space-x-28 px-3 pt-3">
        <a href="/search">
          <BtnBackIcon />
        </a>
        <h2 className="font-bold">스터디 만들기</h2>
        <p>
          1 / <span className="text-gray-300">2</span>{' '}
        </p>
      </div>
      <div>{/* 여기는 progress bar */}</div>
      <div className="space-y-0 px-3">
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">모집 직군</h2>
          <h2 className="font-medium">hello</h2>
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">주제</h2>
          <Input
            placeholder="스터디의 주제를 작성해주세요"
            className="required"
            maxLength={20}
          />
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">목표</h2>
          <Input
            placeholder="스터디의 목표를 간단히 작성해주세요"
            className="required"
            maxLength={20}
          />
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">소개</h2>
          <Textarea
            placeholder="스터디를 설명해보세요"
            className="resize-none"
            rows={6}
          />
        </div>
      </div>

      <div className="fixed bottom-8 flex items-center justify-center space-x-2 px-[20px]">
        <Link href="search">
          <Button
            variant="secondary"
            className="w-[110px] flex-initial border-[1px] border-gray-200"
          >
            이전
          </Button>
        </Link>
        <Link href="createsec">
          <Button className="w-[220px] flex-initial border-[1px] border-solid">
            다음
          </Button>
        </Link>

        {/* 비활성화 상태일때 */}
        {/* <Button className="w-[220px] flex-initial border-[1px] border-solid bg-meetie-blue-2">
          다음_off
        </Button> */}
      </div>
    </section>
  )
}
