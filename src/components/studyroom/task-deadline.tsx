import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Alram from '~/assets/icon_alarm.svg'

export default function TaskDeadline() {
  return (
    <>
      <section className="bg-background px-3 font-bold">
        <h2 className="mb-3 text-xl">
          🚨마감 직전 과제 <span className="text-red-500">2</span>
        </h2>
        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader>
              <CardTitle className="mb-3">
                콜로소 인강 1강 완강 인증하기
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                <Alram className="mr-2" />
                인증마감까지 08:00
              </Badge>
            </CardHeader>
            <CardContent>
              <Button className="w-full">인증하기</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mb-3">
                콜로소 인강 2강 완강 인증하기
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                <Alram className="mr-2" />
                인증마감까지 08:00
              </Badge>
            </CardHeader>
            <CardContent>
              <Button className="w-full">인증하기</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
