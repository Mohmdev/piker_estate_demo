'use client'

import type { MainMenu as MainMenuType, Page, Post } from '@payload-types'
import { useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { LABEL_TO_FLYOUT_MAP, MobileMenu } from './mobile'
import { NavLink } from './nav-links'

export const FlyoutNav: React.FC<{
  data: MainMenuType
  scrollDistance?: number
}> = ({ data, scrollDistance = 150 }) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > scrollDistance ? true : false)
  })
  const getFlyoutContent = (label: string | null) => {
    if (!label) return undefined
    return LABEL_TO_FLYOUT_MAP[label as keyof typeof LABEL_TO_FLYOUT_MAP]
  }

  const { tabs, menuCta } = data

  return (
    <header
      className={`fixed top-0 z-50 w-full text-white
        transition-all duration-300 ease-out lg:px-12
        ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-md py-3 shadow-xl'
            : 'bg-zinc-950/0 backdrop-blur-none py-6 shadow-none'
        }`}
    >
      <div className="container flex-row flex flex-nowrap items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden gap-6 lg:flex">
          {/* Links */}
          <div className="flex items-center gap-6">
            {tabs?.map((tab, i) => (
              <NavLink {...tab} key={i} FlyoutContent={getFlyoutContent(tab.label)} />
            ))}
          </div>
          <CTAs {...menuCta} />
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}

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

export const Logo = ({ color = 'white' }: { color?: string }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center gap-2">
      {/* <span className="text-2xl font-bold" style={{ color }}>
        Nexweb
      </span> */}
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        className="w-10"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor={color}
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor={color}
        ></path>
      </svg>
    </div>
  )
}
