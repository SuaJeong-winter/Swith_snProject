import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import OpenProfile from '~/assets/searchStudy/icon_arrow-circle.svg'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import useUserController from '~/hooks/useUserController'

export default function MateCard({
  userName,
  jobType,
  userType,
  profileImg,
  userId,
  btnOpt,
}: {
  userName: string
  jobType: string
  userType: string[]
  profileImg: string
  userId: any
  btnOpt: boolean
}) {
  const { friends, onGetFriends, onPostFriends } = useUserController()

  useEffect(() => {
    onGetFriends()
  }, [])

  const handleFriends = () => {
    onGetFriends()
    if (friends === null && userId) {
      onPostFriends([userId])
    } else if (friends.length !== 0 && userId) {
      if (!friends.includes(userId)) {
        onPostFriends([...friends, userId])
      } else {
        onPostFriends(friends.filter((item) => item !== userId))
      }
    }
  }

  return (
    <>
      <Card className="relative w-40 border-none py-2 shadow-none">
        <Link href={`/open-profile/${userId}`}>
          <OpenProfile className="absolute right-3 top-3" />
        </Link>
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
          <CardContent>
            {userType.map((type) => (
              <span key={type}>{type} </span>
            ))}
          </CardContent>
          <Button
            variant="outline"
            size="sm"
            className={`w-full ${btnOpt ? 'hidden' : ''}`}
            onClick={handleFriends}
            disabled={btnOpt}
          >
            친구 추가하기 +
          </Button>
        </CardHeader>
      </Card>
    </>
  )
}
