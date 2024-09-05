import { useEffect, useState } from 'react'
import { getStudyroom } from '~/apis/studyroom-rls'
import { Database } from '~/types/supabase'
import { v4 as uuid } from 'uuid'
import { createClient } from '~/utils/supabase/client'

type StudyroomDto = Database['public']['Tables']['StudyroomTest']['Row']

const useStudyroomController = () => {
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [studyroom, setStudyroom] = useState<StudyroomDto[]>([])
  const [uploadedFileName, setUploadedFileName] = useState('')

  // 과제 리스트 불러오기
  const onGetStudyroom = async () => {
    setLoading(true)
    try {
      const resultStudyroom = await getStudyroom()
      if (resultStudyroom) setStudyroom(resultStudyroom)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

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

  // 과제 인증하기 콘텐츠 DB에 저장하기
  const handleInsertData = async (description: string, photo: string) => {
    const { error } = await supabase
      .from('StudyroomTest')
      .insert({ description, photo })

    if (error) {
      console.error('과제 제출에 실패했습니다.', error)
    }
  }

  useEffect(() => {
    onGetStudyroom()
  }, [])

  return {
    loading,
    studyroom,
    handleAddImage,
    handleDeleteImage,
    handleInsertData,
  }
}

export default useStudyroomController
