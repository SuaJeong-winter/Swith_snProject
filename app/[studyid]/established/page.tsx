'use client'

import IconTrophy from '~/assets/createStudy/icon_trophy.svg'
import { Button } from '~/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel'
import { StudyHeaderNoText } from '~/components/studycreate/study-header'
import ProfileCard from '~/components/common/profile-card'
import { useEffect, useState } from 'react'
import { createClient } from '~/utils/supabase/client'
import Link from 'next/link'

const supabase = createClient()

export default function EstablishedPage({
  params,
}: {
  params: { studyid: string }
}) {
  const [studyParticipantsData, setStudyParticipantsData] = useState<any[]>([])
  const [sutdyTitle, setStudyTitle] = useState<string>('')
  const [profileData, setProfileData] = useState<any[]>([])

  useEffect(() => {
    const studyMembersData = async () => {
      const { data: participantsData, error: participantsError } =
        await supabase
          .from('Study')
          .select('member,title')
          .eq('id', params.studyid)
          .single()

      if (participantsError) {
        console.log('participantsError', participantsError)
      } else {
        console.log('participantsData', participantsData)
        setStudyParticipantsData(participantsData.member)
        setStudyTitle(participantsData.title)

        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .in('id', participantsData.member) // 배열의 UUID와 일치하는 profiles 데이터 가져오기

        if (profileError) {
          console.log('프로필 데이터 가져오기 에러', profileError)
        } else {
          console.log('Profiles 데이터', profileData) // profiles 데이터를 콘솔에 출력
          setProfileData(profileData) // 가져온 프로필 데이터를 상태에 저장
        }
      }
    }
    studyMembersData()
  }, [params.studyid])
  return (
    <section className="flex min-h-dvh flex-col bg-white pb-8">
      <div className="invisible">
        <StudyHeaderNoText />
      </div>

      <div className="px-3">
        <div className="space-y-2 pt-20">
          <h1 className="text-2xl font-bold">멤버들이 모두 모여</h1>
          <h1 className="text-2xl font-bold">스터디룸이 생성되었어요👏</h1>
          <p className="text-xs">모두 함께 스터디 완주를 하는 그날까지!</p>
        </div>
      </div>
      <div className="space-y-2 pt-20">
        {/* <div > */}
        <Carousel className="flex h-[250px] w-[375px] flex-row space-x-1 py-[20px]">
          <CarouselContent>
            {profileData.map((user, index) => (
              <CarouselItem key={index} className="basis-1/10">
                <ProfileCard
                  username={user.username}
                  userjobtype={user.job_type}
                  profile_img={user.profile_img}
                />
              </CarouselItem>
            ))}
            <CarouselItem className="basis-1/10">
              <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
                <div className="px-[15px] pt-1">
                  <IconTrophy />
                  <p className="px-[1px] text-sm text-black">{sutdyTitle}</p>
                  <p className="px-[30px] text-sm text-black">
                    멤버 {studyParticipantsData.length}
                  </p>
                </div>
              </div>
            </CarouselItem>

            {/* <CarouselItem>...</CarouselItem> */}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
        {/* </div> */}
      </div>
      <div className="fixed bottom-8 flex items-center justify-center space-x-4 px-3">
        <Link href={`/studyroom/${params.studyid}`}>
          <Button className="border-1 w-[350px] border-solid">
            스터디룸 보러가기
          </Button>
        </Link>
      </div>
    </section>
  )
}
