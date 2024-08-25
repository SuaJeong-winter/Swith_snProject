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
  type,
  tags,
}: {
  title: string
  type: string
  tags: string[]
}) {
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardDescription>{type}</CardDescription>
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
          <span>24.00.00(월) ~ 24.00.00</span>
        </CardContent>
      </Card>
    </>
  )
}
