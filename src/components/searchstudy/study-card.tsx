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
import { useState } from 'react'
import useStudysController from '~/hooks/useStudysController'
import useUserController from '~/hooks/useUserController'

export default function StudyCard({
  title,
  types,
  tags,
  startdate,
  enddate,
  studyId,
}: {
  title: string
  types: string[]
  tags: string[]
  startdate: string | null
  enddate: string | null
  studyId: any
}) {
  const today = new Date()
  // console.log(today)
  // console.log(typeof startdate)

  const { prevList, bookmarkList, setBookmark, onPostBookmark } =
    useUserController()
  // console.log(prevList)
  // console.log(bookmarkList)
  const handleBookmark = () => {
    if (!prevList.includes(studyId)) {
      // setBookmark([...prevList, studyId])
      // console.log(bookmarkList)
      // onPostBookmark(bookmarkList)
    } else {
      // setBookmark(bookmarkList.filter((item) => item !== studyId))
      console.log('off')
    }
    console.log(bookmarkList)
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
        <Link href={`apply/${studyId}`}>
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
