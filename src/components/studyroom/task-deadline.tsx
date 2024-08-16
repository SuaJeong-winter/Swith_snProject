'use client'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Alram from '~/assets/icon_alarm.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function TaskDeadline() {
  return (
    <>
      <section className="bg-background px-3 font-bold">
        <h2 className="mb-3 text-xl">
          🚨마감 직전 과제 <span className="text-red-500">2</span>
        </h2>
        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader className="relative">
              <CardTitle className="mb-3">
                콜로소 인강 1강 완강 인증하기
              </CardTitle>
              <Badge variant="secondary" className="w-fit">
                <Alram className="mr-2" />
                인증마감까지 08:00
              </Badge>
              <div className="absolute right-8 top-4 h-12 w-12">
                <CircularProgressbar
                  value={60}
                  text={`${60}%`}
                  strokeWidth={10}
                  styles={buildStyles({
                    textSize: '24px',
                    textColor: 'hsl(257 98% 57%)',
                    pathColor: 'hsl(257 98% 57%)',
                    trailColor: 'hsl(0 0% 90%)',
                    strokeLinecap: 'butt',
                  })}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full">인증하기</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="relative">
              <div>
                <CardTitle className="mb-3">
                  콜로소 인강 2강 완강 인증하기
                </CardTitle>
                <Badge variant="secondary" className="w-fit">
                  <Alram className="mr-2" />
                  인증마감까지 08:00
                </Badge>
              </div>
              <div className="absolute right-8 top-4 h-12 w-12">
                <CircularProgressbar
                  value={75}
                  text={`${75}%`}
                  strokeWidth={10}
                  styles={buildStyles({
                    textSize: '24px',
                    textColor: 'hsl(257 98% 57%)',
                    pathColor: 'hsl(257 98% 57%)',
                    trailColor: 'hsl(0 0% 90%)',
                    strokeLinecap: 'butt',
                  })}
                />
              </div>
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
