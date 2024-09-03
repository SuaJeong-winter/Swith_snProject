'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const CreateStudyFunnel = dynamic(
  () => import('../../src/components/studycreate/create-study-funnel'),
  {
    ssr: false,
  },
)

export default function CreateStudyPage() {
  return <CreateStudyFunnel />
}
