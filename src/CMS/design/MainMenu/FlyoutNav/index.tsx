'use client'

import type { MainMenu as MainMenuType } from '@payload-types'
import { useHeaderTheme } from '@providers/HeaderTheme'
import { cn } from '@utils/ui'
import { useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Logo } from './Logo'
import { DesktopNav } from './desktop'
import { MobileMenu } from './mobile'

export const FlyoutNav: React.FC<MainMenuType> = (navData) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 100 ? true : false)
  })

  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  useEffect(() => {
    setHeaderTheme(null)
  }, [pathname])
  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
  }, [headerTheme])

  return (
    <header
      className={cn(
        'flex',
        'h-full',
        'fixed top-0 z-50 w-full text-white',
        'transition-all duration-300 ease-out',
        scrolled
          ? 'h-[63px] bg-zinc-950/90 backdrop-blur-md shadow-xl'
          : 'h-[74px] bg-zinc-950/0 backdrop-blur-[0px] shadow-none',
      )}
    >
      <nav className="container flex items-center flex-row justify-between">
        <Link href="/" className="z-50">
          <Logo />
        </Link>

        <DesktopNav {...navData} className="z-40" />
        <MobileMenu {...navData} className="z-25" />
      </nav>
    </header>
  )
}
