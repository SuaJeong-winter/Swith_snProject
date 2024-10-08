import { useCallback, useEffect, useState } from 'react'
import { getStudyById, getStudyroomList } from '~/apis/studyroom-rls'
import { Database } from '~/types/supabase'
import { v4 as uuid } from 'uuid'
import { createClient } from '~/utils/supabase/client'

export type StudyDto = Database['public']['Tables']['Study']['Row']

const useStudyroomController = () => {
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [uploadedFileName, setUploadedFileName] = useState('')
  const [studyroomList, setStudyroomList] = useState<StudyDto[]>([])
  const [studyData, setStudyData] = useState<StudyDto>()

  // 로그인한 유저가 참여하고 있는 스터디룸들 불러오기
  const onGetStudyroomList = async () => {
    setLoading(true)
    try {
      const resultStudyroomList = await getStudyroomList()
      if (resultStudyroomList) setStudyroomList(resultStudyroomList)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // id값을 통한 study 정보 불러오기
  const onGetStudy = useCallback(async (id: string | string[]) => {
    setLoading(true)
    try {
      const resultStudy = await getStudyById(id)
      if (resultStudy) setStudyData(resultStudy)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  // 과제 인증 과정 중 이미지 업로드
  const handleAddImage = async (file: File): Promise<string | ''> => {
    try {
      const newFileName = uuid()
      const { data, error } = await supabase.storage
        .from('assignmentImages')
        .upload(`${newFileName}`, file)

      if (error) {
        console.log('파일이 업로드되지 않습니다.', error)
        return ''
      }
      const res = supabase.storage
        .from('assignmentImages')
        .getPublicUrl(data.path)

      setUploadedFileName(newFileName)

      return res.data.publicUrl
    } catch (error) {
      console.error(
        '알 수 없는 문제가 발생하였습니다. 다시 시도하여 주십시오.',
        error,
      )
      return ''
    }
  }
  // 과제 인증 과정 중 이미지 삭제
  const handleDeleteImage = async () => {
    const { error } = await supabase.storage
      .from('assignmentImages')
      .remove([uploadedFileName])

    if (error) {
      console.error('파일을 삭제하는 데 실패했습니다.', error)
    } else {
      setUploadedFileName('')
    }
  }

  useEffect(() => {
    onGetStudyroomList()
  }, [])

  return {
    loading,
    studyroomList,
    studyData,
    handleAddImage,
    handleDeleteImage,
    onGetStudyroomList,
    onGetStudy,
  }
}

export default useStudyroomController
