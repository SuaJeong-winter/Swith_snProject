import Image from 'next/image'
import MeetieMaster from '~/assets/icon_profile-deco.svg'
import MpProfile from '~/assets/mp_profile.svg'

export default function ProfileCard({
  username = '김서희',
  userjobtype = '개발자',
  profile_img,
}: {
  username?: string
  userjobtype?: string
  profile_img: string
}) {
  return (
    <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
      <div className="pt-[20px]">
        <div className="r relative h-[100px] w-[130px] px-[5px]">
          <MeetieMaster className="absolute left-1 right-1 top-1 w-full object-cover" />
          <Image
            width={56}
            height={56}
            className="absolute left-[43px] right-6 top-[32px] rounded-full"
            src={profile_img}
            alt="user profile image"
          />
        </div>
        <div className="text-center">
          <p className="text-lg text-black"> {username}</p>
          <p className="text-sm text-black">{userjobtype}</p>
        </div>
      </div>
    </div>
  )
}
