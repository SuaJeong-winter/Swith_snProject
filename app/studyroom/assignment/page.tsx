import BtnBackIcon from '~/assets/btn_back.svg'
import IconCamera from '~/assets/icon_camera.svg'
import IconAdd from '~/assets/icon_add-mini.svg'
import { Card } from '~/components/ui/card'
import { Textarea } from '~/components/ui/textarea'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import AssignmentComplete from '~/components/studyroom/assignment-complete'
import AssignmentDetail from '~/components/studyroom/assignment-detail'
import AssignmentList from '~/components/studyroom/assignment-list'

export default function Assignment() {
  return (
    <>
      <div className="flex flex-row space-x-32 border-b-2 bg-background p-3 align-baseline">
        <a href="/studyroom">
          <BtnBackIcon />
        </a>
        <h2 className="font-bold">과제 인증</h2>
      </div>
      <section className="bg-background px-3">
        <div className="py-6">
          <h2 className="text-xl font-bold">콜로소 인강 1강 완강 인증하기</h2>
          <p className="text-meetie-gray-40">강의 과제 화면 캡쳐</p>
        </div>
        <Card className="mb-10 flex justify-center bg-[#F5F5F5] py-14">
          <Label htmlFor="assign-pic" className="block">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-meetie-blue-3">
              <div className="absolute -right-1 -top-1 rounded-full bg-meetie-gray-20 p-1">
                <IconAdd />
              </div>
              <IconCamera />
            </div>
          </Label>
          <Input id="assign-pic" type="file" className="hidden" />
          {/* 이미지 첨부 후 onchange로 보이게 하는 처리 필요 */}
        </Card>
        <div>
          <h2 className="font-bold">소개</h2>
          <Textarea
            placeholder="과제를 하며 나누고 싶은 생각을 적어보세요."
            className="resize-none bg-[#F5F5F5]"
            rows={6}
          />
          {/* 글자수  */}
          <p className="text-right text-meetie-gray-20">0/500</p>
        </div>
        <Button className="mb-1 mt-8 w-full">인증하기</Button>
        <Button className="w-full bg-background text-sm font-normal text-meetie-gray-40 underline">
          임시 저장
        </Button>
      </section>
      {/* 과제 인증 화면 컴포넌트 */}
      <AssignmentComplete />
      {/* 과제 상세 컴포넌트 - 추후 라우터 [id]로 분리 */}
      <AssignmentDetail />
      {/* 과제 리스트 */}
      <AssignmentList />
    </>
  )
}
