'use client'

import dynamic from 'next/dynamic'
import { useFunnel, UseFunnel, UseFunnelResults } from '@use-funnel/browser'
import type {
  CreateFirstPage,
  CreateSecondPage,
} from '~/components/studycreate/create-context'
import { useEffect, useState } from 'react'

const CreateFPage = dynamic(
  () => import('~/components/studycreate/create-first-step'),
  {
    ssr: false,
  },
)
const CreateSPage = dynamic(
  () => import('~/components/studycreate/create-second-step'),
  {
    ssr: false,
  },
)

export default function CreateInfoPage() {
  const createfunnel = useFunnel<{
    StepOne: CreateFirstPage
    StepTwo: CreateSecondPage
  }>({
    id: 'createStudy',
    initial: {
      step: 'StepOne',
      context: {},
    },
  })

  return (
    <createfunnel.Render
      StepOne={({ history }) => (
        <CreateFPage
          onNext={(step1data) => history.push('StepTwo', step1data)}
        />
      )}
      StepTwo={({ context }) => {
        Object.keys(context).forEach((key) => {
          const typedKey = key as keyof CreateSecondPage

          if (context[typedKey]?.length === 0) {
            console.log('there is no data question')
          }
        })
        console.log('StepOne Data', context)
        return <CreateSPage />
      }}
    />
  )
}
