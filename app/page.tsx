import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Chip } from '~/components/ui/chip'
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs'

export default function Home() {
  return (
    <div className="flex h-dvh w-full items-center justify-center bg-[#F7F3FF]">
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 items-center justify-center gap-4">
          <span className="col-span-2 w-full">Buttons</span>
          <Button variant="secondary">Button</Button>
          <Button size="sm">친구 추가완료</Button>
          <Button>Button</Button>
          <Button variant="outline" size="sm">
            친구 추가하기 +
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <span>Tabs</span>
          <Tabs defaultValue="find-study">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="find-study">스터디 찾기</TabsTrigger>
              <TabsTrigger value="find-mate">팀원 찾기</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="calendar">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="calendar">캘린더</TabsTrigger>
              <TabsTrigger value="feedback">피드백</TabsTrigger>
              <TabsTrigger value="chat">채팅</TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="wip">
            <TabsList variant="small">
              <TabsTrigger value="wip" variant="small">
                진행중 5
              </TabsTrigger>
              <TabsTrigger value="done" variant="small">
                진행완료
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Tabs defaultValue="done">
            <TabsList variant="small">
              <TabsTrigger value="wip" variant="small">
                진행중 5
              </TabsTrigger>
              <TabsTrigger value="done" variant="small">
                진행완료
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="grid grid-cols-2 items-center justify-items-center gap-4">
          <span className="col-span-2 w-full">Chips</span>
          <Chip>자기 개발</Chip>
          <Chip variant="secondary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>check</title>
              <circle cx="10" cy="10" r="10" fill="currentColor" />
              <path
                d="M14.0167 6.8312C14.1144 6.93836 14.1693 7.08362 14.1693 7.23507C14.1693 7.38653 14.1144 7.53179 14.0167 7.63894L8.974 13.1636C8.87619 13.2706 8.7436 13.3307 8.60536 13.3307C8.46712 13.3307 8.33453 13.2706 8.23672 13.1636L5.9762 10.687C5.88394 10.5787 5.83368 10.4354 5.83602 10.2872C5.83835 10.1391 5.8931 9.99776 5.98872 9.893C6.08434 9.78824 6.21336 9.72826 6.34857 9.7257C6.48378 9.72314 6.61461 9.77821 6.71348 9.87928L8.60536 11.952L13.2794 6.8312C13.3772 6.72418 13.5098 6.66406 13.6481 6.66406C13.7863 6.66406 13.9189 6.72418 14.0167 6.8312Z"
                fill="white"
              />
            </svg>
            텍스트
          </Chip>
          <Chip data-state="on">자기 개발</Chip>
          <Chip variant="secondary" data-state="on">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>check</title>
              <circle cx="10" cy="10" r="10" fill="#6224FD" />
              <path
                d="M14.0167 6.8312C14.1144 6.93836 14.1693 7.08362 14.1693 7.23507C14.1693 7.38653 14.1144 7.53179 14.0167 7.63894L8.974 13.1636C8.87619 13.2706 8.7436 13.3307 8.60536 13.3307C8.46712 13.3307 8.33453 13.2706 8.23672 13.1636L5.9762 10.687C5.88394 10.5787 5.83368 10.4354 5.83602 10.2872C5.83835 10.1391 5.8931 9.99776 5.98872 9.893C6.08434 9.78824 6.21336 9.72826 6.34857 9.7257C6.48378 9.72314 6.61461 9.77821 6.71348 9.87928L8.60536 11.952L13.2794 6.8312C13.3772 6.72418 13.5098 6.66406 13.6481 6.66406C13.7863 6.66406 13.9189 6.72418 14.0167 6.8312Z"
                fill="white"
              />
            </svg>
            텍스트
          </Chip>
          <Chip variant="muted">자기 개발</Chip>
        </div>
        <div className="flex flex-col gap-4">
          <span>Cards</span>
          <Card>
            <CardHeader>
              <CardDescription>Description</CardDescription>
              <CardTitle>Title</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
