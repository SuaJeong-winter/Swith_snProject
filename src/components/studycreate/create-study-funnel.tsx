'use client'

import dynamic from 'next/dynamic'

// const Step1Input = dynamic(() => import('./step-first-input'), { ssr: false })
// const Step2Input = dynamic(() => import('./step-second-input'), { ssr: false })
// const TotalInput = dynamic(() => import('./step-total'), { ssr: false })

import { useFunnel } from '@use-funnel/browser'
import Step1Input from './step-first-input'
import Step2Input from './step-second-input'
import TotalInput from './step-total'

import { createClient } from '~/utils/supabase/client'

type Step1Data = {
  recruit_type?: string[]
  title?: string
  goal?: string
  info?: string
  curriculum?: string
  start_date?: Date
  end_date?: Date
  regular_days?: string
  regular_time?: string
  max_member?: number
  tags?: string[]
}

type Step2Data = {
  recruit_type: string[]
  title: string
  goal: string
  info: string
  curriculum?: string
  start_date?: Date
  end_date?: Date
  regular_days?: string
  regular_time?: string
  max_member?: number
  tags?: string[]
}

type TotalData = {
  id: string
  recruit_type: string[]
  title: string
  goal: string
  info: string
  curriculum: string
  start_date: Date | undefined
  end_date: Date | undefined
  regular_days?: string
  regular_time: string
  max_member: number
  tags: string[]
}

const supabase = createClient()

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
            history.push('Step2Data', { recruit_type, title, goal, info })
          }}
        />
      )}
      Step2Data={({ context, history }) => (
        <Step2Input
          onNext={async ({
            curriculum,
            start_date,
            end_date,
            regular_days,
            regular_time,
            max_member,
            tags,
          }) => {
            const {
              data: { session },
              error: sessionError,
            } = await supabase.auth.getSession()

            if (sessionError) {
              console.error('Error fetching session:', sessionError)
              return
            }

            const userUuid = session?.user?.id // 사용자 UUID

            if (!userUuid) {
              console.error('User is not authenticated')
              return
            }

            const step2Data = {
              ...context,
              curriculum,
              start_date: start_date ? new Date(start_date) : undefined, // Date 처리
              end_date: end_date ? new Date(end_date) : undefined, // Date 처리
              regular_days,
              regular_time,
              max_member,
              tags,
            }
            console.log('Step 2 데이터:', step2Data)
            // Supabase insert
            const { data, error } = await supabase
              .from('Study')
              .insert([
                {
                  recruit_type: step2Data.recruit_type,
                  title: step2Data.title,
                  goal: step2Data.goal,
                  info: step2Data.info,
                  curriculum: step2Data.curriculum,
                  start_date: step2Data.start_date,
                  end_date: step2Data.end_date,
                  regular_days: step2Data.regular_days,
                  regular_time: step2Data.regular_time,
                  max_member: step2Data.max_member,
                  tags: step2Data.tags,
                  writing_datetime: new Date(),
                  owner: userUuid,
                  member: [userUuid],
                },
              ])
              .select()

            if (error) {
              console.error('Error inserting data:', error)
            } else {
              console.log('Insert successful, data:', data)
              // 성공적으로 삽입되면 다음 단계로 이동
              if (data && data.length > 0) {
                const studyId = data[0].id // 삽입된 스터디의 ID
                history.push('TotalData', { ...step2Data, id: studyId })
              } else {
                console.error('No study data returned')
              }
            }
          }}
        />
      )}
      TotalData={({ context }) => (
        <TotalInput
          id={context.id}
          recruit_type={context.recruit_type}
          title={context.title}
          goal={context.goal}
          info={context.info}
          curriculum={context.curriculum}
          start_date={context.start_date || new Date()}
          regular_days={context.regular_days}
          regular_time={context.regular_time}
          max_member={context.max_member}
          tags={context.tags}
        />
      )}
    />
  )
}
