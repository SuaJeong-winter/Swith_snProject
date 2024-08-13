import { Button } from '~/components/ui/button'
import { Chip } from '~/components/ui/chip'
import { Progress } from '~/components/ui/progress'

export default function OnBoarding() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <Progress value={50} />
        <span className="mt-2.5 px-4 text-xs text-meetie-gray-40">
          <span className="text-foreground">2</span> / 4
        </span>
      </div>
      <div className="flex w-full flex-col px-4">
        <h2 className="mt-16 text-2xl font-semibold text-meetie-gray-90">
          김서희님의
          <br />
          스터디 목적은 무엇인가요?
        </h2>
        <span className="mt-5 text-sm text-meetie-gray-40">
          중복선택도 가능해요
        </span>
        <div className="mt-16 flex flex-col items-start gap-3">
          <Chip variant="secondary">자기 개발</Chip>
          <Chip variant="secondary">툴 능력 향상</Chip>
          <Chip variant="secondary">해당 분야의 네트워킹 확장</Chip>
          <Chip variant="secondary">취미</Chip>
          <Chip variant="muted">+ 직접 입력하기</Chip>
        </div>
      </div>
      <div className="absolute bottom-10 flex w-full flex-col gap-3 px-4">
        <span className="text-center text-xs text-meetie-gray-40/80">
          내용은 다시 수정할 수 있어요!
        </span>
        <div className="flex gap-3">
          <Button variant="secondary" className="w-2/5 border">
            이전
          </Button>
          <Button className="w-3/5 font-semibold">다음</Button>
        </div>
      </div>
    </div>
  )
}
