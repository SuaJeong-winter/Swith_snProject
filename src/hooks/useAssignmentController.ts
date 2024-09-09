import { useCallback, useState } from 'react'
import { Database } from '~/types/supabase'
import {
  addAssignment,
  getAssignment,
  getTodayAssignment,
  submitAssignment,
} from '~/apis/assignment-rls'

type AssignmentDto = Database['public']['Tables']['Assignment']['Row']

const useAssignmentController = () => {
  const [loading, setLoading] = useState(false)
  const [assignment, setAssignment] = useState<AssignmentDto[]>([])
  const [todayAssignment, setTodayAssignment] = useState<AssignmentDto[]>([])

  // 과제 일정 리스트 불러오기
  const onGetAssignmentCalendar = async (
    date: Date,
    studyId: string | string[],
  ) => {
    setLoading(true)
    try {
      const assignmentCalendar = await getAssignment(date, studyId)
      if (assignmentCalendar) setAssignment(assignmentCalendar)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // 과제 데이터 저장
  const handleInsertAssignment = async (newObject: any) => {
    await addAssignment(newObject)
  }

  // 마감 직전 과제 불러오기
  const onGetTodayAssignment = useCallback(
    async (studyId: string | string[]) => {
      setLoading(true)
      try {
        const assignments = await getTodayAssignment(studyId)
        if (assignments) setTodayAssignment(assignments)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    },
    [],
  )

  // 과제 인증하기 콘텐츠 DB에 저장하기
  const handleSubmitAssignment = async (
    desc: string,
    image: string,
    study_id: string | string[],
    user_id: string | undefined,
    assignment_id: string | string[],
  ) => {
    return await submitAssignment(desc, image, study_id, user_id, assignment_id)
  }

  return {
    loading,
    assignment,
    todayAssignment,
    onGetAssignmentCalendar,
    handleInsertAssignment,
    onGetTodayAssignment,
    handleSubmitAssignment,
  }
}

export default useAssignmentController
