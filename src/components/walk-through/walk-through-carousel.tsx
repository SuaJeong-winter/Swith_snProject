'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useState } from 'react'
import Link from 'next/link'

import { Button, buttonVariants } from '~/components/ui/button'
import WalkThrough1 from '~/assets/walk-through/walk-through-1.svg'
import WalkThrough2 from '~/assets/walk-through/walk-through-2.svg'
import WalkThrough3 from '~/assets/walk-through/walk-through-3.svg'
import { cn } from '~/utils/cn'

export default function WalkThroughCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ watchDrag: false })
  const [isLast, setIsLast] = useState(false)

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()

      if (!emblaApi.canScrollNext()) setIsLast(true)
    }
  }, [emblaApi])

  return (
    <>
      <div className="max-w-[375px] overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="flex w-full flex-shrink-0 flex-col">
            <h2 className="mt-7 px-4 text-2xl font-semibold text-meetie-gray-90">
              다양한 IT 직군과의
              <br />
              견고한 스터디를 경험해보세요.
            </h2>
            <span className="mt-6 px-4 text-sm text-meetie-gray-90">
              다른 학습자들과 소통하며 함께 성장하세요!
            </span>
            <WalkThrough1 />
          </div>
          <div className="flex w-full flex-shrink-0 flex-col">
            <h2 className="mt-7 px-4 text-2xl font-semibold text-meetie-gray-90">
              다른 학습자들과
              <br />
              함께 고민을 나눠보세요.
            </h2>
            <span className="mt-6 px-4 text-sm text-meetie-gray-90">
              학습에 어려움을 겪고 있나요?
              <br />
              고민을 나누고 해결책을 찾아보세요!
            </span>
            <WalkThrough2 />
          </div>
          <div className="flex w-full flex-shrink-0 flex-col">
            <h2 className="mt-7 px-4 text-2xl font-semibold text-meetie-gray-90">
              뱃지를 통해 성취를 경험하고,
              <br />
              차별화된 신뢰지표를 만들어보세요.
            </h2>
            <span className="mt-6 px-4 text-sm text-meetie-gray-90">
              스터디 활동을 수행하고 다양한 뱃지를 획득하세요!
            </span>
            <WalkThrough3 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 w-full px-4">
        {isLast ? (
          <Link
            href="/on-boarding"
            className={cn(buttonVariants(), 'w-full font-semibold')}
          >
            프로필 만들기
          </Link>
        ) : (
          <Button className="w-full font-semibold" onClick={scrollNext}>
            다음
          </Button>
        )}
      </div>
    </>
  )
}
