import Link from 'next/link'

import BgBackground from '~/assets/main/bg_background.svg'
import BgRocket from '~/assets/main/bg_rocket.svg'
import LoginGoogle from '~/assets/main/login_google.svg'
import LoginKakao from '~/assets/main/login_kakao.svg'
import LoginNaver from '~/assets/main/login_naver.svg'
import LoginMeetie from '~/assets/main/login_meetie.svg'

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b from-[hsla(239,100%,95%,1)] from-0% to-background to-50%">
      <div className="flex flex-col items-center gap-2">
        <span className="text-lg font-semibold">같은 목표로 공부중인 유저</span>
        <span className="text-2xl font-extrabold text-meetie-blue-4">
          124,368명
        </span>
      </div>
      <div className="relative mt-16">
        <BgBackground />
        <BgRocket className="absolute -top-1 left-24" />
        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-6">
          <Link href="/" className="rounded-full">
            <LoginNaver />
          </Link>
          <Link href="/" className="rounded-full">
            <LoginKakao />
          </Link>
          <Link href="/" className="rounded-full">
            <LoginGoogle />
          </Link>
          <Link
            href="/"
            className="flex aspect-square h-[46px] w-[46px] items-center justify-center rounded-full bg-meetie-gray-75 text-white"
          >
            <LoginMeetie />
          </Link>
        </div>
      </div>
      <div className="mt-24 flex gap-3 text-xs font-medium text-slate-300">
        <Link href="/" className="transition-colors hover:text-slate-400">
          회원가입하기
        </Link>
        <span>|</span>
        <Link href="/" className="transition-colors hover:text-slate-400">
          아이디 찾기
        </Link>
        <span>|</span>
        <Link href="/" className="transition-colors hover:text-slate-400">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  )
}
