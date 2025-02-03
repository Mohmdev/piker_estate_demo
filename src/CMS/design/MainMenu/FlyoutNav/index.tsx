'use client'

import { useMotionValueEvent, useScroll } from 'motion/react'
import { FaUserCircle } from 'react-icons/fa'

import type { MainMenu as MainMenuType, Page, Post } from '@payload-types'
import Link from 'next/link'
import { useState } from 'react'
import { LABEL_TO_FLYOUT_MAP, MobileMenu } from './mobile'
import { NavLink } from './nav-links'

export const FlyoutNav: React.FC<{
  data?: MainMenuType
  scrollDistance?: number
}> = ({ data, scrollDistance = 150 }) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const navItems = data?.tabs?.[0]?.navItems || []

  const getFlyoutContent = (label: string | null) => {
    if (!label) return undefined
    return LABEL_TO_FLYOUT_MAP[label as keyof typeof LABEL_TO_FLYOUT_MAP]
  }

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > scrollDistance ? true : false)
  })

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
          <div className="flex items-center gap-6">
            {navItems.map(({ link }, i) => (
              <NavLink
                key={i}
                {...link}
                FlyoutContent={getFlyoutContent(link.label)}
              />
            ))}
          </div>
          <CTAs />
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}

export const CTAs = () => {
  return (
    <div className="flex items-center gap-3 *:transition-colors *:duration-400 *:ease-in-out text-sm text-white">
      <button className="flex items-center gap-2 rounded-lg border-2 border-white px-4 py-1 font-medium  transition-colors hover:bg-white hover:text-black ">
        <FaUserCircle />
        <span>Sign in</span>
      </button>
      <button className="rounded-lg border-2 border-rose-700 bg-rose-700 px-4 py-1 font-medium  transition-colors hover:border-rose-600 hover:bg-rose-600 hover:text-white ">
        Schedule a Demo
      </button>
    </div>
  )
}

export const Logo = ({ color = 'white' }: { color?: string }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold" style={{ color }}>
        Nexweb
      </span>
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
