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

export default function StudyCard({
  title,
  types,
  tags,
  startdate,
  enddate,
}: {
  title: string
  types: string[]
  tags: string[]
  startdate: string | null
  enddate: string | null
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardDescription>
              <div className="flex flex-row">
                {types.map((type, idx) => (
                  <span key={type + idx}>
                    {type}
                    {idx < type.length - 1 && '|'}{' '}
                  </span>
                ))}
              </div>
            </CardDescription>
            <BookmarkOff />
            {/* <BookmarkOn /> */}
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* 태그 */}
          <div>
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <span className="font-bold text-primary">마감 0일 전</span>
          <CalendarMini className="mb-1 ml-3 mr-1 inline" />
          <span>
            {startdate} ~ {enddate}
          </span>
        </CardContent>
      </Card>
    </>
  )
}
