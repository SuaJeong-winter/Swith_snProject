import { useEffect, useState } from 'react'
import { getBadge } from '~/apis/meetiebadge-rls'
import { Database } from '~/types/supabase'
type MeetieBadgeDto = Database['public']['Tables']['MeetieBadge']['Row']

const useMeetieBadgeController = () => {
  const [badge, setBadge] = useState<any[]>([])
  const onGetBadge = async () => {
    try {
      const resultMeetieBadge = await getBadge()
      if (resultMeetieBadge) setBadge(resultMeetieBadge)
      console.log(resultMeetieBadge)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    onGetBadge()
  }, [])
  return { badge }
}
export default useMeetieBadgeController
