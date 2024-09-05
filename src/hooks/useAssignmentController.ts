import { useState } from 'react'
import { Database } from '~/types/supabase'
import { getAssignment } from '~/apis/assignment-rls'

type AssignmentDto = Database['public']['Tables']['Assignment']['Row']

const useAssignmentController = () => {
  const [loading, setLoading] = useState(false)
  const [assignment, setAssignment] = useState<AssignmentDto[]>([])

  // 과제 일정 리스트 불러오기
  const onGetAssignmentCalendar = async (date: Date) => {
    setLoading(true)
    try {
      const assignmentCalendar = await getAssignment(date)
      if (assignmentCalendar) setAssignment(assignmentCalendar)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    assignment,
    onGetAssignmentCalendar,
  }
}

export default useAssignmentController
