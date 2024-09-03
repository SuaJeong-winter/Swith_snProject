'use client'
import BtnBackIcon from '~/assets/btn_back.svg'
import IconCamera from '~/assets/icon_camera.svg'
import IconAdd from '~/assets/icon_add-mini.svg'
import { Card } from '~/components/ui/card'
import { Textarea } from '~/components/ui/textarea'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

import AssignmentDetail from '~/components/studyroom/assignment-detail'
import AssignmentList from '~/components/studyroom/assignment-list'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Assignment() {
  const searchParams = useSearchParams()
  const description = searchParams.get('description')
  const method = searchParams.get('method')

  const [preview, setPreview] = useState('')

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setPreview(imageUrl)
      setValue('file', file)
    }
  }
  const deleteFile = () => {
    setPreview('')
    setValue('file', '')
  }

  const { register, handleSubmit, setValue, reset } = useForm()
  const onSubmit = async (data: any) => {
    const formData = new FormData()
    formData.append('file', data.file)
    formData.append('text', data.text)

    console.log(formData.get('file'), formData.get('text'))
    // try {
    //   const response = await fetch('/api/save', {
    //     method: 'POST',
    //     body: formData,
    //   })

    //   if (response.ok) {
    //     reset() // 폼 초기화
    //   } else {
    //     alert('저장에 실패했습니다.')
    //   }
    // } catch (error) {
    //   console.error('Error:', error)
    //   alert('저장 중 오류가 발생했습니다.')
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="h-dvh bg-background">
        <div className="flex flex-row space-x-32 border-b-2 p-3 align-baseline">
          <a href="/studyroom">
            <BtnBackIcon />
          </a>
          <h2 className="font-bold">과제 인증</h2>
        </div>
        <section className="bg-background px-3">
          <div className="py-6">
            <h2 className="text-xl font-bold">{description}</h2>
            <p className="text-meetie-gray-40">{method}</p>
          </div>
          <Card className="w- flex h-44 justify-center bg-[#F5F5F5]">
            {!preview && (
              <Label htmlFor="assign-pic" className="my-14 block">
                <div className="relative flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-meetie-blue-3">
                  <div className="absolute -right-1 -top-1 rounded-full bg-meetie-gray-20 p-1">
                    <IconAdd />
                  </div>
                  <IconCamera />
                </div>
              </Label>
            )}
            <Input
              id="assign-pic"
              type="file"
              className="hidden"
              {...register('file')}
              onChange={handleImageChange}
            />
            {/* 이미지 미리보기 */}
            {preview && (
              <>
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={preview}
                    alt="미리보기"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div
                  className="absolute right-4 mt-1 rotate-45 cursor-pointer rounded-full border-2 border-meetie-blue-2 bg-white p-1"
                  onClick={deleteFile}
                >
                  <IconAdd />
                </div>
              </>
            )}
          </Card>
          <div>
            <h2 className="mt-10 pb-4 font-bold">소개</h2>
            <Textarea
              placeholder="과제를 하며 나누고 싶은 생각을 적어보세요."
              className="resize-none bg-[#F5F5F5]"
              {...register('text', { required: true })}
              rows={6}
            />
          </div>
          {/* <Link href="/studyroom/assignment/complete"> */}
          <Button className="mb-1 mt-8 w-full" type="submit">
            인증하기
          </Button>
          {/* </Link> */}
          <div className="mt-2 flex justify-center">
            <button className="text-sm font-normal text-meetie-gray-40 underline">
              임시 저장
            </button>
          </div>
        </section>

        {/* 과제 상세 컴포넌트 - 추후 라우터 [id]로 분리 */}
        {/* <AssignmentDetail /> */}
        {/* 과제 리스트 */}
        {/* <AssignmentList /> */}
      </div>
    </form>
  )
}
