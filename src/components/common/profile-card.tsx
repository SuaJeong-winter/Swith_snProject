import MeetieMaster from '~/assets/icon_profile-deco.svg'
import MpProfile from '~/assets/mp_profile.svg'

export default function ProfileCard({
  username = '김서희',
  userjobtype = '개발자',
}: {
  username?: string
  userjobtype?: string
}) {
  return (
    <div className="h-[203px] w-[146px] rounded-lg bg-gradient-to-r from-meetie-blue-1 via-white to-meetie-blue-1">
      <div className="pt-[20px]">
        <div className="relative h-[100px] w-[130px] px-[5px]">
          <MeetieMaster className="absolute left-1 right-1 top-1 w-full object-cover" />
          <MpProfile className="absolute left-[41px] right-6 top-[30px]" />
        </div>

        <p className="px-[48px] text-lg text-black"> {username}</p>
        <p className="px-[48px] text-sm text-black">{userjobtype}</p>
      </div>
    </div>
  )
}

// 이렇게 사용하시면 됩니다
{
  /* <ProfileCard username="제이" userjobtype="디자이너" /> */
}
