'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '~/utils/cn'
import StudyRoomIcon from '~/assets/icon_studyroom.svg'
import SearchIcon from '~/assets/icon_search.svg'
import MyPageIcon from '~/assets/icon_mypage.svg'

const links = [
  { name: '스터디룸', icon: <StudyRoomIcon className="h-6 w-6" />, path: '/' },
  { name: '탐색', icon: <SearchIcon className="h-6 w-6" />, path: '/search' }, //explore 에서 search로 변경함
  { name: '마이', icon: <MyPageIcon className="h-6 w-6" />, path: '/my' },
] as const

export default function BottomNavBar() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 grid w-full max-w-[375px] grid-cols-3 bg-background text-xs shadow-[0_-2px_5px_0_rgba(0,0,0,0.12)]">
      {links.map((link) => (
        <Link key={`bnb-link-${link.name}`} href={link.path}>
          <div
            className={cn(
              'flex flex-col items-center justify-center pb-3 pt-2 font-medium text-meetie-gray-60',
              pathname.startsWith(link.path) && 'text-primary',
            )}
          >
            {link.icon}
            {link.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
