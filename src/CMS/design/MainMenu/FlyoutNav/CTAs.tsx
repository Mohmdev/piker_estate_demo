import { MainMenu as MainMenuType } from '@payload-types'
import React from 'react'
type CTAProps = MainMenuType['menuCta']

export const CTAs: React.FC<CTAProps> = (props) => {
  const { enableCta, link } = props

  return (
    <>
      {enableCta ? (
        <button className="rounded-lg border-0 ring-0 bg-violet-700 px-4 py-1 font-medium  transition-colors hover:bg-violet-500 hover:text-white ">
          {link?.label || 'Schedule a Demo'}
        </button>
      ) : null}
    </>
  )
}
