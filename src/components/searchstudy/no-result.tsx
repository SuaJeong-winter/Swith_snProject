import Exclamation from '~/assets/searchStudy/icon_exclamation-mark.svg'

export default function NoResult() {
  return (
    <>
      <div className="mt-10 h-screen text-center">
        <Exclamation className="mx-auto mb-5" />
        <h3 className="text-xl font-bold text-primary">
          일치하는 스터디가 없어요.
        </h3>
      </div>
    </>
  )
}
