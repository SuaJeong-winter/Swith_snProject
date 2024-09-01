'use client'

import dynamic from 'next/dynamic'

// const Step1Input = dynamic(() => import('./step-first-input'), { ssr: false })
// const Step2Input = dynamic(() => import('./step-second-input'), { ssr: false })
// const TotalInput = dynamic(() => import('./step-total'), { ssr: false })

import { useFunnel } from '@use-funnel/browser'
import Step1Input from './step-first-input'
import Step2Input from './step-second-input'
import TotalInput from './step-total'

type Step1Data = {
  recruit_type?: string[]
  title?: string
  goal?: string
  info?: string
  curriculum?: string
  // start_date?: Date
  // end_date?: Date
  // regulardays?: string
  // regulartime?: string
  max_member?: number
  tags?: string[]
}

type Step2Data = {
  recruit_type: string[]
  title: string
  goal: string
  info: string
  curriculum?: string
  // start_date?: Date
  // end_date?: Date
  // regulardays?: string
  // regulartime?: string
  max_member?: number
  tags?: string[]
}

type TotalData = {
  recruit_type: string[]
  title: string
  goal: string
  info: string
  curriculum: string
  // start_date?: Date
  // end_date?: Date
  // regulardays?: string
  // regulartime?: string
  max_member: number
  tags: string[]
}

export default function CreateStudyPage() {
  const funnel = useFunnel<{
    Step1Data: Step1Data
    Step2Data: Step2Data
    TotalData: TotalData
  }>({
    id: 'input-funnel',
    initial: {
      step: 'Step1Data',
      context: {},
    },
  })
  return (
    <funnel.Render
      Step1Data={({ history }) => (
        <Step1Input
          onNext={({ recruit_type, title, goal, info }) => {
            const step1Data = { recruit_type, title, goal, info }
            console.log('Step 1 데이터:', step1Data)
            console.log('데이터 길이', Object.keys(step1Data).length)
            // const hasEmptyValue = Object.keys(step1Data).some(
            //   (key) => step1Data[key] === '',
            // )

            // if (hasEmptyValue) {
            //   console.log('sth wrong') // 값이 공백인 경우
            // } else {
            //   console.log('good') // 모든 키에 값이 있는 경우
            // }
            history.push('Step2Data', { recruit_type, title, goal, info })
          }}
        />
      )}
      Step2Data={({ context, history }) => (
        <Step2Input
          onNext={({ curriculum, max_member, tags }) => {
            const step2Data = { ...context, curriculum, max_member, tags }
            console.log('Step 2 데이터:', step2Data)
            history.push('TotalData', step2Data)
          }}
        />
      )}
      TotalData={({ context }) => (
        <TotalInput
          recruit_type={context.recruit_type}
          title={context.title}
          goal={context.goal}
          info={context.info}
          curriculum={context.curriculum}
          max_member={context.max_member}
          tags={context.tags}
          // regulartime={context.regulartime}
        />
      )}
    />
  )
}
