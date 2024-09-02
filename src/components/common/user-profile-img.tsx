import UserProfile from '~/assets/user.svg'

export default function UserProfileImg() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-200 bg-[#FEFBFF]">
      <UserProfile className="justify-between stroke-violet-800" />
    </div>
  )
}
