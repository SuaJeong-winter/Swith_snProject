import Link from 'next/link'

import { Button } from '~/components/ui/button'

export default function WalkThrough() {
  return (
    <div className="justify relative flex min-h-dvh flex-col items-center bg-gradient-to-b from-[hsla(239,100%,95%,1)] from-0% to-background to-50%">
      <div className="flex w-full justify-end px-4 py-3">
        <Link href="/" className="text-sm font-medium text-meetie-gray-40">
          SKIP
        </Link>
      </div>
      <div className="flex w-full flex-col px-4">
        <h2 className="mt-7 text-2xl font-semibold text-meetie-gray-90">
          다양한 IT 직군과의
          <br />
          견고한 스터디를 경험해보세요.
        </h2>
        <span className="mt-6 text-sm text-meetie-gray-90">
          다른 학습자들과 소통하며 함께 성장하세요!
        </span>
      </div>
      <div className="absolute bottom-10 w-full px-4">
        <Button className="w-full font-semibold">나와 비슷한 팀원 찾기</Button>
      </div>
    </div>
  )
}
