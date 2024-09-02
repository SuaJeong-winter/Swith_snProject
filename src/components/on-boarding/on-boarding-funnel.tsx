'use client'

import { createFunnelSteps, useFunnel } from '@use-funnel/browser'

import JobStep from '~/components/on-boarding/job-step'
import PersonalityStep from '~/components/on-boarding/personality-step'
import PurposeStep from '~/components/on-boarding/purpose-step'
import PeriodStep from '~/components/on-boarding/period-step'
import useOnboardingController from '~/hooks/useOnboardingController'
import { useEffect } from 'react'

export type FormState = {
  job?: string
  purpose?: string[]
  personality?: string[]
  period?: string
}

const steps = createFunnelSteps<FormState>()
  .extends('관심직무')
  .extends('스터디목적', { requiredKeys: 'job' })
  .extends('스타일', { requiredKeys: 'purpose' })
  .extends('스터디기간', { requiredKeys: 'personality' })
  .build()

export default function OnBoardingFunnel() {
  const funnel = useFunnel({
    id: 'on-boarding',
    steps: steps,
    initial: {
      step: '관심직무',
      context: {},
    },
  })

  // console.log(funnel.context)

  const { onPostData, user, onGetUser } = useOnboardingController()

  useEffect(() => {
    onGetUser()
  }, [])

  return (
    <funnel.Render
      관심직무={({ history }) => (
        <JobStep onNext={(job) => history.push('스터디목적', { job })} />
      )}
      스터디목적={({ history }) => (
        <PurposeStep
          onNext={(purpose) => history.push('스타일', { purpose })}
        />
      )}
      스타일={({ history }) => (
        <PersonalityStep
          onNext={(personality) => history.push('스터디기간', { personality })}
        />
      )}
      스터디기간={({ context }) => <PeriodStep context={context} />}
    />
  )
}
