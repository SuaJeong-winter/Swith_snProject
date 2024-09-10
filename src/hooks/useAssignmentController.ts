import { useCallback, useState } from 'react'
import { Database } from '~/types/supabase'
import {
  addAssignment,
  checkAssignmentExists,
  getAssignment,
  getAssignmentData,
  getAssignmentSubmitList,
  getSubmitAssignmentDetail,
  getTodayAssignment,
  getWriterData,
  submitAssignment,
} from '~/apis/assignment-rls'
import { getUser } from '~/apis/user-rls'

type AssignmentDto = Database['public']['Tables']['Assignment']['Row']
type SubmitAssignmentDto =
  Database['public']['Tables']['SubmitAssignment']['Row']

const useAssignmentController = () => {
  const [loading, setLoading] = useState(false)
  const [assignment, setAssignment] = useState<AssignmentDto[]>([])
  const [todayAssignment, setTodayAssignment] = useState<AssignmentDto[]>([])
  const [assignmentSubmitList, setAssignmentSubmitList] = useState<
    SubmitAssignmentDto[]
  >([])
  const [writerData, setWriterData] = useState<any>([])
  const [assignmentData, setAssignmentData] = useState<AssignmentDto[]>([])
  const [submitAssignmentData, setSubmitAssignmentData] =
    useState<SubmitAssignmentDto[]>()

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

  const onCheckDoneAssignment = async (assignment_id: string | string[]) => {
    const userData = await getUser()
    const user_id = userData?.id
    return checkAssignmentExists(assignment_id, user_id)
  }

  // 제출된 과제 리스트 불러오기
  const onGetAssignmentSubmitList = async (
    date: Date,
    studyId: string | string[],
  ) => {
    setLoading(true)
    try {
      const resultAssignmentSubmit = await getAssignmentSubmitList(
        date,
        studyId,
      )
      if (resultAssignmentSubmit)
        setAssignmentSubmitList(resultAssignmentSubmit)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // 과제 제출한 작성자의 정보 불러오기
  const onGetSubmitWriterData = async (user_id: string | null) => {
    setLoading(true)
    try {
      const result = await getWriterData(user_id)
      if (result) setWriterData(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // 과제 아이디로 과제 정보 불러오기
  const onGetAssignmentData = async (assignment_id: string | null) => {
    setLoading(true)
    try {
      const result = await getAssignmentData(assignment_id)
      if (result) setAssignmentData(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // 과제 제출 아이디로 제출 과제 정보 불러오기
  const onGetSubmitAssignmentData = async (id: string | string[]) => {
    setLoading(true)
    try {
      const result = await getSubmitAssignmentDetail(id)
      if (result) setSubmitAssignmentData(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    assignment,
    todayAssignment,
    assignmentSubmitList,
    writerData,
    assignmentData,
    submitAssignmentData,
    onGetAssignmentCalendar,
    handleInsertAssignment,
    onGetTodayAssignment,
    handleSubmitAssignment,
    onCheckDoneAssignment,
    onGetAssignmentSubmitList,
    onGetSubmitWriterData,
    onGetAssignmentData,
    onGetSubmitAssignmentData,
  }
}

export default useAssignmentController
