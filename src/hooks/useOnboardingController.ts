import { useState } from 'react'
import { postOnboarding } from '~/apis/onboarding-rls'

const useOnboardingController = () => {
  const onPostProfiles = async ({
    job,
    purpose,
    personality,
    period,
  }: {
    job: string
    purpose: string[]
    personality: string[]
    period: string | null
  }) => {
    try {
      const result = await postOnboarding({ job, purpose, personality, period })
    } catch (error) {
      console.error(error)
    }
  }

  return { onPostProfiles }
}

export default useOnboardingController
