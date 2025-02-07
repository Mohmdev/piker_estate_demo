import { MainMenu as MainMenuType } from '@payload-types'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
type CTAProps = MainMenuType['menuCta']

export const CTAs: React.FC<CTAProps> = (props) => {
  const { enableCta, link } = props

  return (
    <div className="flex items-center gap-3 *:transition-colors *:duration-400 *:ease-in-out text-sm text-white">
      <button className="flex items-center gap-2 rounded-lg ring-0 border-white px-4 py-1 font-medium  transition-colors hover:bg-white hover:text-black ">
        <FaUserCircle />
        <span>Sign in</span>
      </button>
      {enableCta ? (
        <button className="rounded-lg border-0 ring-0 bg-violet-700 px-4 py-1 font-medium  transition-colors hover:bg-violet-500 hover:text-white ">
          {link?.label || 'Schedule a Demo'}
        </button>
      ) : null}
    </div>
  )
}
