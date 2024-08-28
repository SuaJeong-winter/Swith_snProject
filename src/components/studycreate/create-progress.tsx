'use client'

import React from 'react'
import { Progress } from '~/components/ui/progress'

export default function CreateProgress({
  currentProgress = 50,
}: {
  currentProgress?: number
}) {
  const [progress, setProgress] = React.useState(currentProgress)
  return (
    <>
      <Progress value={progress} className="w-[375px]" />
    </>
  )
}
