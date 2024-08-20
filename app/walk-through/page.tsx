import Link from 'next/link'

import WalkThroughCarousel from '~/components/walk-through/walk-through-carousel'

export default function WalkThrough() {
  return (
    <div className="justify relative flex min-h-dvh flex-col items-center bg-gradient-to-b from-[hsla(239,100%,95%,1)] from-0% to-background to-50%">
      <div className="flex w-full justify-end px-4 py-3">
        <Link
          href="/on-boarding"
          className="text-sm font-medium text-meetie-gray-40"
        >
          SKIP
        </Link>
      </div>
      <WalkThroughCarousel />
    </div>
  )
}
