'use client'
import { useCallback, useEffect, useState } from 'react'
import BottomNavBar from '~/components/common/bottom-nav-bar'
import StudyroomContent from '~/components/studyroom/studyroom-content'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import useStudyroomController from '~/hooks/useStudyroomController'

export default function StudyRoomIdPage() {
  const { studyroomList } = useStudyroomController()
  const [activeStudies, setActiveStudies] = useState<any[]>([])
  const [inactiveStudies, setInactiveStudies] = useState<any[]>([])

  const fetchAndFilterStudies = async () => {
    try {
      const now = new Date()
      // 종료 이전인 (진행중, 활성화된) 스터디들 필터링
      const activeFiltered = studyroomList.filter((study) => {
        if (study && study.end_date) {
          const endDate = new Date(study.end_date)
          return endDate > now || endDate == now
        }
        return false
      })
      setActiveStudies(activeFiltered)
      // 종료된 스터디들 필터링
      const inactiveFiltered = studyroomList.filter((study) => {
        if (study && study.end_date) {
          const endDate = new Date(study.end_date)
          return endDate < now
        }
        return false
      })
      setInactiveStudies(inactiveFiltered)
    } catch (error) {
      console.error('Error fetching or filtering studies:', error)
    }
  }

  useEffect(() => {
    fetchAndFilterStudies()
  }, [studyroomList])

  return (
    <>
      {/* 헤더 */}
      <h1 className="bg-meetie-blue-1 p-4 text-lg font-bold">스터디룸</h1>
      {/* 진행중 / 진행완료 탭 */}
      <Tabs defaultValue="wip" className="bg-meetie-blue-1">
        <div className="pr-4 text-end">
          <TabsList variant="small">
            <TabsTrigger value="wip" variant="small">
              진행중 {activeStudies.length}
            </TabsTrigger>
            <TabsTrigger value="done" variant="small">
              진행완료
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="wip">
          <StudyroomContent studies={activeStudies} />
        </TabsContent>
        <TabsContent value="done">
          {inactiveStudies.length > 0 ? (
            <StudyroomContent studies={inactiveStudies} />
          ) : (
            <div className="flex h-[580px] items-center justify-center bg-meetie-blue-1 pb-10 text-meetie-gray-60">
              완료된 스터디가 존재하지 않습니다
            </div>
          )}
        </TabsContent>
      </Tabs>
      <BottomNavBar />
    </>
  )
}
