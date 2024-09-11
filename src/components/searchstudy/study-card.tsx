'use client'

import Link from 'next/link'

import BookmarkOff from '~/assets/searchStudy/icon_bookmark-off.svg'
import BookmarkOn from '~/assets/searchStudy/icon_bookmark-on.svg'
import CalendarMini from '~/assets/searchStudy/icon_calendar-mini.svg'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Badge } from '~/components/ui/badge'
import { Button } from '../ui/button'
import { use, useEffect, useState } from 'react'
import useStudysController from '~/hooks/useStudysController'
import useUserController from '~/hooks/useUserController'

export default function StudyCard({
  title,
  types,
  tags,
  startdate,
  enddate,
  studyId,
  path,
}: {
  title: string
  types: string[]
  tags: string[]
  startdate: string | null
  enddate: string | null
  studyId: any
  path?: string
}) {
  // console.log(today)
  // console.log(typeof startdate)
  const { prevList, onGetBookmark, onPostBookmark } = useUserController()

  useEffect(() => {
    onGetBookmark()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 북마크 기능 완성X 버그 수정 필요
  const handleBookmark = () => {
    onGetBookmark()
    if (prevList.length !== 0) {
      if (!prevList.includes(studyId)) {
        onPostBookmark([...prevList, studyId])
      } else {
        onPostBookmark(prevList.filter((item) => item !== studyId))
      }
    } else if (prevList.length === 0 && studyId) {
      onPostBookmark([studyId])
    }
  }

  return (
    <>
      <Card className="relative">
        <Button
          variant="secondary"
          className="absolute right-4 top-4 p-0"
          onClick={handleBookmark}
        >
          {prevList.includes(studyId) ? <BookmarkOn /> : <BookmarkOff />}
        </Button>
        <Link
          href={`${path === 'studyroom' ? 'studyroom' : 'apply'}/${studyId}`}
        >
          <CardHeader>
            <div className="flex justify-between">
              <CardDescription>
                <div className="flex flex-row">
                  {types?.map((type, idx) => (
                    <span key={type + idx}>
                      {type}
                      {idx < type.length - 1 && ' | '}
                    </span>
                  ))}
                </div>
              </CardDescription>
            </div>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            {/* 태그 */}
            <div>{tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
            <span className="font-bold text-primary">마감 0일 전</span>
            <CalendarMini className="mb-1 ml-3 mr-1 inline" />
            <span>
              {startdate} ~ {enddate}
            </span>
          </CardContent>
        </Link>
      </Card>
    </>
  )
}
