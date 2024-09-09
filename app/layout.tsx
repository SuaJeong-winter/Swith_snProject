import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '~/styles/globals.css'
import { cn } from '~/utils/cn'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export const metadata: Metadata = {
  title: 'Meetie',
  description: 'Meetie',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={cn('bg-black', pretendard.className)}>
        <div className="relative mx-auto w-full max-w-[375px]">{children}</div>
      </body>
    </html>
  )
}
