import { PATHS } from '@/utils/paths'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-DarkPurple3 flex items-center justify-center bg-gradient-to-b from-[#211044] from-50% to-[#0a0721] to-100% px-10">
      <div className="flex items-center max-[991]:flex-col flex-row  max-991:gap-[50px] max-991:flex-col max-911:justify-center gap-[107px]">
        <div className="flex flex-col gap-[24px] text-left max-w-[460px] max-991:text-center max-991:justify-center max-991:items-center">
          <h2 className="text-white font-sora font-bold leading-[140%] uppercase text-[100px] max-991:text-[50px]">
            404
          </h2>
          <h1 className="text-white font-sora uppercase font-bold leading-[140%] text-[20px] max-991:text-[32px]">
            Page not found
          </h1>
          <p className="font-sora max-991:text-[12px] text-[16px] font-bold leading-[150%] text-[#9698C6]">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link
            to={PATHS.HOME}
            className="flex items-center text-white font-sora uppercase font-bold leading-[140%] text-sm max-991:text-[32px]"
          >
            <ChevronLeft />
            Back to home
          </Link>
        </div>
        <div>
          <img
            className="max-w-[378px] max-h-[378px] max-991:max-w-[250px] max-991:max-h-[250px]"
            src="/assets/icons/image_notfound.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
