import Image from 'next/image'
import OpenProfile from '~/assets/searchStudy/icon_arrow-circle.svg'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'

export default function MateCard({
  userName,
  jobType,
  userType,
  profileImg,
}: {
  userName: string
  jobType: string
  userType: string[]
  profileImg: string
}) {
  return (
    <>
      <Card className="relative border-none px-0 py-4 shadow-none">
        <OpenProfile className="absolute right-3 top-3" />
        <CardHeader className="items-center px-2">
          <Image
            src={profileImg}
            width={56}
            height={56}
            className="rounded-full"
            alt={`${userName} profile image`}
          />
          <CardTitle className="font-bold">{userName}</CardTitle>
          <CardDescription className="text-meetie-gray-40">
            {jobType}
          </CardDescription>
          <CardContent>{userType.map((type) => `${type} `)}</CardContent>
          <Button variant="outline" size="sm" className="w-full">
            친구 추가하기 +
          </Button>
        </CardHeader>
      </Card>
    </>
  )
}
