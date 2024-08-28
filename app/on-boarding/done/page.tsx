import ProfileCard from '~/components/common/profile-card'
import { Button } from '~/components/ui/button'

export default function Done() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col px-4">
        <h2 className="mt-24 text-2xl font-semibold text-meetie-gray-90">
          김서희님의
          <br />
          공개 프로필이 생성되었어요
        </h2>
        <span className="mt-5 text-sm text-meetie-gray-40">
          나와 딱 맞는 스터디를 찾으러 떠나볼까요?
        </span>
        <div className="mt-20 flex justify-center">
          <ProfileCard username="김서희" userjobtype="디자이너" />
        </div>
      </div>
      <div className="absolute bottom-10 flex w-full flex-col gap-3 px-4">
        <div className="flex gap-3">
          <Button className="w-full font-semibold">확인하러 가기</Button>
        </div>
      </div>
    </div>
  )
}
