import { useState } from 'react'
import { Database } from '~/types/supabase'
import { addMeetup, getMeetup } from '~/apis/meetup-rls'

type MeetupDto = Database['public']['Tables']['Meetup']['Row']

const useMeetupController = () => {
  const [loading, setLoading] = useState(false)
  const [meetup, setMeetup] = useState<MeetupDto[]>([])

  // 밋업 일정 리스트 불러오기
  const onGetMeetupCalendar = async (
    date: Date,
    studyId: string | string[],
  ) => {
    setLoading(true)
    try {
      const meetupCalendar = await getMeetup(date, studyId)
      if (meetupCalendar) setMeetup(meetupCalendar)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // 과제 데이터 저장
  const handleInsertMeetup = async (newObject: any) => {
    await addMeetup(newObject)
  }

  return {
    loading,
    meetup,
    onGetMeetupCalendar,
    handleInsertMeetup,
  }
}

export default useMeetupController
