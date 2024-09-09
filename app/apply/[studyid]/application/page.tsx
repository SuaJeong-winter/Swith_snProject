'use client'

import { useEffect, useState } from 'react'
import { getUser } from '~/apis/user-rls'
import StudyHeader from '~/components/studycreate/study-header'
import { Button } from '~/components/ui/button'
import { Textarea } from '~/components/ui/textarea'
import { createClient } from '~/utils/supabase/client'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog'
import Link from 'next/link'

const supabase = createClient()

export default function ApplyPage({ params }: { params: { studyid: string } }) {
  const [studyData, setStudyData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [introduce, setIntroduce] = useState<string>('')

  useEffect(() => {
    const fetchStudyData = async () => {
      const { data, error } = await supabase
        .from('Study')
        .select('*')
        .eq('id', params.studyid)
        .single()

      if (error) {
        console.error('Error fetching study data:', error)
      } else {
        setStudyData(data)
      }
      setLoading(false)
    }

    fetchStudyData()
  }, [params.studyid])

  const handleSubmit = async () => {
    const user = await getUser()
    console.log(user)

    // 삽입될 데이터를 콘솔에 출력
    const dataToInsert = {
      introduce: introduce, // 사용자가 입력한 한 줄 자기소개
      study_id: params.studyid, // 현재 스터디 ID
      user_id: user?.id, // 현재 로그인된 사용자의 ID
      writing_datetime: new Date(), // 현재 시간
    }

    console.log('삽입될 데이터:', dataToInsert)

    // 실제 데이터 삽입
    const { data, error } = await supabase
      .from('Study-apply')
      .insert([dataToInsert])

    if (error) {
      console.error('Error inserting introduction:', error)
    } else {
      console.log('Introduction submitted successfully!')
      // 필요한 경우 페이지를 이동하거나 다른 작업을 수행할 수 있습니다.
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (!studyData) {
    return <p>Study not found</p>
  }
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <StudyHeader title="스터디 지원하기" href={`/apply/${studyData.id}`} />
      <div className="fixed top-16 h-1 w-[375px] border-transparent bg-slate-200"></div>

      <div className="px-3">
        <div className="space-y-2 pt-20">
          <h2 className="font-bold">지원 스터디 확인</h2>
          <h2 className="font-medium"> {studyData.title}</h2>
        </div>
        <div className="space-y-2 pt-10">
          <h2 className="font-bold">한 줄 자기소개</h2>
          <Textarea
            placeholder="한 줄 자기소개를 작성하세요"
            className="resize-none"
            rows={6}
            value={introduce}
            onChange={(e) => setIntroduce(e.target.value)}
          />
        </div>
      </div>

      <div className="fixed bottom-8 flex items-center justify-center space-x-4 px-3">
        <div>
          <p>참여 가능 인원</p>
          <p>
            <span className="text-meetie-blue-4">
              {studyData.max_member - studyData.member.length}명
            </span>
            / {studyData.max_member}명
          </p>
        </div>
        <div className="border-1 w-60 flex-[2] border-solid">
          <AlertDialog>
            <AlertDialogTrigger
              className="h-[50px] w-[250px] whitespace-nowrap rounded-lg font-semibold text-white"
              style={{ background: '#6326FD' }}
              onClick={handleSubmit}
            >
              신청서 제출하기
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[300px]">
              <AlertDialogHeader>
                <AlertDialogTitle>신청이 완료되었습니다!</AlertDialogTitle>
                <AlertDialogDescription>
                  확인 버튼을 눌러 스터디룸으로 이동합니다
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="w-[80px] px-[60px]">
                  취소
                </AlertDialogCancel>
                <Link href="/studyroom">
                  <AlertDialogAction className="w-[80px] px-[60px]">
                    확인
                  </AlertDialogAction>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  )
}
