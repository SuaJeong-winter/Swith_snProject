import { Button } from '../ui/button'
import IconCheck from '~/assets/icon_check-white.svg'
import Particle01 from '~/assets/bg_particle-01.svg'
import Particle02 from '~/assets/bg_particle-02.svg'
import Particle03 from '~/assets/bg_particle-03.svg'

export default function AssignmentComplete() {
  return (
    <>
      <section className="relative bg-background p-3">
        <div className="flex flex-col items-center justify-center py-20 text-3xl font-bold">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-bl from-[#7273FF] to-[#B8B9FF]">
            <IconCheck />
          </div>
          <h1>과제 인증 완료!</h1>
          <p className="mt-2 text-primary">{`+ ${10}P`}</p>
        </div>
        <Button className="mb-3 w-full">스터디룸으로 가기</Button>
        <Button className="w-full" variant="outline">
          과제 인증 확인하기
        </Button>
        <div className="-z-50">
          <Particle01 className="absolute right-1/4 top-1/3" />
          <Particle02 className="absolute left-6 top-28" />
          <Particle03 className="absolute right-8 top-3" />
        </div>
      </section>
    </>
  )
}
