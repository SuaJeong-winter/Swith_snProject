'use client'
import Link from 'next/link'
import BtnBack from '~/assets/btn_back.svg'
import MeetieMaster from '~/assets//badge_meetie-master.svg'
import MeetieNewbie from '~/assets/badge_meetie-newbie.svg'
import MeetieRunner from '~/assets/badge_meetie-runner.svg'
import { Card } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import MeetieBadge from '~/components/my-ability/meetie-badge'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer'

export default function MyAbility() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-background">
      <div className="flex w-full flex-col">
        <div className="flex items-center px-4 pt-4">
          <Link href="mypage" className="flex items-center">
            <BtnBack className="" />
          </Link>
          <div className="flex flex-1 justify-center px-4">
            <span className="text-lg font-bold">내 능력 현황</span>
          </div>
        </div>
        <div className="items-left flex flex-col px-4 pb-3 pt-8">
          <span className="text-lg font-semibold">내 뱃지</span>
        </div>

        <div className="border-y-4"></div>

        <div className="items-left flex flex-col px-4 pb-3 pt-8">
          <span className="text-base">밋티 뱃지</span>
        </div>
        <div className="flex flex-row items-baseline gap-10 pl-4">
          <MeetieBadge
            level={'1'}
            badgename={'밋티 뉴비'}
            point={'100'}
            commentcount={'10'}
            hostcount={'1'}
          />

          <MeetieBadge
            level={'2'}
            badgename={'밋티 러너'}
            point={'300'}
            commentcount={'30'}
            hostcount={'3'}
          />

          <MeetieBadge
            level={'3'}
            badgename={'밋티 마스터'}
            point={'500'}
            commentcount={'50'}
            hostcount={'5'}
          />
        </div>
      </div>
    </div>
  )
}
