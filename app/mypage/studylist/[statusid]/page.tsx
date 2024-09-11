'use client'
import Link from 'next/link'
import BtnBack from '~/assets/btn_back.svg'

import { useEffect, useState } from 'react'
import StudyCard from '~/components/searchstudy/study-card'
import useStudysController from '~/hooks/useStudysController'
import useUserController from '~/hooks/useUserController'

export default function StudyListpage({
  params,
}: {
  params: { statusid: any }
}) {
  const {
    ownStudys,
    userStudys,
    waitingStudys,
    newData,
    onGetOwnStudys,
    onGetUserStudys,
    onGetAppliedStudys,
    onGetStudyData,
  } = useStudysController()

  const { user } = useUserController()
  const [userData] = user
  let listName = ''

  useEffect(() => {
    onGetOwnStudys(userData?.id)
    onGetUserStudys(userData?.id)
    onGetAppliedStudys(userData?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData])

  useEffect(() => {
    waitingStudys.map((study) => {
      onGetStudyData(study['study_id'])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waitingStudys])

  console.log(newData)

  if (params.statusid === 'own') {
    listName = '개설한'
  } else if (params.statusid === 'now') {
    listName = '참여 중인'
  } else if (params.statusid === 'prev') {
    listName = '지난'
  } else if (params.statusid === 'bookmark') {
    listName = '관심'
  } else {
    listName = '모집 중인'
  }

  return (
    <>
      <section className="h-svh bg-background p-4">
        <div className="flex items-center py-4">
          <Link href="/mypage" className="flex items-center">
            <BtnBack className="" />
          </Link>
          <div className="flex flex-1 justify-center px-4">
            <span className="text-lg font-bold">{listName} 스터디</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 pb-14">
          {params.statusid === 'now'
            ? userStudys.map((study) => (
                <StudyCard
                  title={study.title}
                  types={study['recruit_type']}
                  tags={study.tags}
                  startdate={study['start_date']}
                  enddate={study['end_date']}
                  studyId={study.id}
                  key={study.id}
                />
              ))
            : params.statusid === 'own'
              ? ownStudys.map((study) => (
                  <StudyCard
                    title={study.title}
                    types={study['recruit_type']}
                    tags={study.tags}
                    startdate={study['start_date']}
                    enddate={study['end_date']}
                    studyId={study.id}
                    key={study.id}
                  />
                ))
              : params.statusid === 'waiting'
                ? newData.map((study: any) => (
                    <StudyCard
                      title={study.title}
                      types={study['recruit_type']}
                      tags={study.tags}
                      startdate={study['start_date']}
                      enddate={study['end_date']}
                      studyId={study.id}
                      key={study.id}
                    />
                  ))
                : userStudys.map((study) => (
                    <StudyCard
                      title={study.title}
                      types={study['recruit_type']}
                      tags={study.tags}
                      startdate={study['start_date']}
                      enddate={study['end_date']}
                      studyId={study.id}
                      key={study.id}
                    />
                  ))}
          {/* {studys.map((study) => (
            <StudyCard
              title={study.title}
              types={study['recruit_type']}
              tags={study.tags}
              startdate={study['start_date']}
              enddate={study['end_date']}
              studyId={study.id}
              key={study.id}
            />
          ))} */}
        </div>
      </section>
    </>
  )
}
