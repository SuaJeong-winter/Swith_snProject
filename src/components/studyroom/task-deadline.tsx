'use client'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Alram from '~/assets/icon_alarm.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Link from 'next/link'

export default function TaskDeadline() {
  return (
    <>
      <section className="bg-background px-3 pt-5 font-bold">
        <div className="flex items-center justify-between">
          <h2 className="mb-3 text-xl">🚨마감 직전 과제</h2>
          <Badge variant="secondary" className="h-6 w-fit">
            <Alram className="mr-2" />
            인증마감까지 08:00
          </Badge>
        </div>
        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader className="relative">
              <CardTitle className="mb-3">
                콜로소 인강 1강 완강 인증하기
              </CardTitle>
              <div className="text-sm font-medium">
                <span className="text-meetie-blue-4">3명의 팀원</span>이
                수행했어요! 👏
              </div>
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
              <Link href="/studyroom/assignment">
                <Button className="w-full">인증하기</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
