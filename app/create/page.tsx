import BtnBackIcon from '~/assets/btn_back.svg'
import { Input } from '~/components/ui/input'
import { Progress } from '~/components/ui/progress'
import { Textarea } from '~/components/ui/textarea'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { Button } from '~/components/ui/button'
import Link from 'next/link'

// 확인 주소 http://localhost:3000/create

export default function CreatePage() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-[#F7F3FF] py-24">
      <div className="relative h-40 w-full bg-slate-600">
        <div className="absolute inset-x-0 top-0 flex flex-row">
          {/* 헤더 */}
          <a href="/">
            <BtnBackIcon />
          </a>
          <h2>스터디 만들기</h2>
        </div>
      </div>
      <div>
        {/* 관련 오류 해결 안됨 */}
        <Progress value={2} />
      </div>
      <div>
        <div>
          <h2>모집 직군 </h2>
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <h2>주제</h2>
          <Input
            placeholder="스터디의 주제를 작성해주세요"
            className="required"
            maxLength={20}
          />
        </div>
        <div>
          <h2>목표</h2>
          <Input placeholder="스터디의 목표를 간단히 작성해주세요" />
        </div>
        <div>
          <h2>소개</h2>
          <Textarea placeholder="스터디를 설명해보세요" />
        </div>
        <div className="flex">
          <Button variant="secondary" className="flex-1">
            이전
          </Button>
          <Link href="createsec">
            <Button className="border-1 flex-[2] border-solid bg-meetie-blue-2">
              다음
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
