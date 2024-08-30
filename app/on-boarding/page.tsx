import dynamic from 'next/dynamic'

const OnBoardingFunnel = dynamic(
  () => import('~/components/on-boarding/on-boarding-funnel'),
  { ssr: false },
)

export default function OnBoarding() {
  return <OnBoardingFunnel />
}
