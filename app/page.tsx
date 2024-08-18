'use client'

import { redirect } from 'next/navigation'

import BgBackground from '~/assets/main/bg_background.svg'
import BgRocket from '~/assets/main/bg_rocket.svg'
import LoginGoogle from '~/assets/main/login_google.svg'
import LoginKakao from '~/assets/main/login_kakao.svg'
import LoginGitHub from '~/assets/main/login_github.svg'
import { createClient } from '~/utils/supabase/client'

export default function Home() {
  const supabase = createClient()

  const signInWithOauth = async (provider: 'github' | 'google' | 'kakao') => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: '/auth/callback',
      },
    })

    if (error) redirect('/')

    redirect(data.url)
  }

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
          <LoginGitHub
            className="cursor-pointer rounded-full"
            onClick={async () => await signInWithOauth('github')}
          />
          <LoginKakao
            className="cursor-pointer rounded-full"
            onClick={async () => await signInWithOauth('kakao')}
          />
          <LoginGoogle
            className="cursor-pointer rounded-full"
            onClick={async () => await signInWithOauth('google')}
          />
        </div>
      </div>
    </div>
  )
}
