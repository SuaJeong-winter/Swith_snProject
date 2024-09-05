import { useState } from 'react'
import { Database } from '~/types/supabase'
import { getMeetup } from '~/apis/meetup-rls'

type MeetupDto = Database['public']['Tables']['Meetup']['Row']

const useMeetupController = () => {
  const [loading, setLoading] = useState(false)
  const [meetup, setMeetup] = useState<MeetupDto[]>([])

  // 밋업 일정 리스트 불러오기
  const onGetMeetupCalendar = async (date: Date) => {
    setLoading(true)
    try {
      const meetupCalendar = await getMeetup(date)
      if (meetupCalendar) setMeetup(meetupCalendar)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    meetup,
    onGetMeetupCalendar,
  }
}

export default useMeetupController
