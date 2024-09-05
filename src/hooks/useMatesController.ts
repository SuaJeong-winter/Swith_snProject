import { useState } from 'react'
import {
  filterMatesByJob,
  filterMatesByPurpose,
  filterMatesByStyle,
} from '~/apis/user-rls'

const useMatesController = () => {
  const [mates, setMates] = useState<any[]>([])

  const onFilterMatesByJob = async (filter: string) => {
    if (filter) {
      const resultMates = await filterMatesByJob(filter)
      if (resultMates) setMates(resultMates)
    }
  }

  const onFilterMatesByPurpose = async (filters: string[]) => {
    if (filters) {
      const resultMates = await filterMatesByPurpose(filters)
      if (resultMates) setMates(resultMates)
    }
  }

  const onFilterMatesByStyle = async (filters: string[]) => {
    if (filters) {
      const resultMates = await filterMatesByStyle(filters)
      if (resultMates) setMates(resultMates)
    }
  }

  return {
    mates,
    setMates,
    onFilterMatesByJob,
    onFilterMatesByPurpose,
    onFilterMatesByStyle,
  }
}

export default useMatesController
