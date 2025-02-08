'use client'

import type { MainMenu as MainMenuType } from '@payload-types'
import { useHeaderTheme } from '@providers/HeaderTheme'
import { cn } from '@utils/ui'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Logo } from './Logo'
import { DesktopNav } from './desktop'
import { MobileMenu } from './mobile'
import { Hamburger } from './mobile/hamburger'

export const FlyoutNav: React.FC<MainMenuType> = (navData) => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 100 ? true : false)
  })

  const [hovered, setHovered] = useState<string | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Storing the value in a useState to avoid hydration errors
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
        'h-max',
        'fixed top-0 z-50 w-full text-white',
        //
      )}
    >
      <div
        onMouseLeave={() => setHovered(null)}
        className={cn(
          //
          'w-full h-max',
          'z-50',
        )}
      >
        <motion.nav
          animate={
            scrolled && !mobileNavOpen
              ? 'scrolled'
              : !scrolled && !mobileNavOpen
                ? 'notScrolled'
                : 'scrolledMobileNavOpen'
          }
          variants={variants}
          transition={{
            duration: 0.4,
            ease: [0.165, 0.84, 0.44, 1],
          }}
          className={cn(
            'container',
            'flex-1 h-full flex flex-row items-center justify-between',
            'rounded-0 lg:rounded-full border-0 border-border/60',
            'mt-0 lg:mt-2',
          )}
        >
          <Link href="/" className="z-50">
            <Logo />
          </Link>
          <DesktopNav
            {...navData}
            setHovered={setHovered}
            hovered={hovered}
            className="z-40"
          />
          <Hamburger
            active={mobileNavOpen}
            setActive={setMobileNavOpen}
            className="block lg:hidden z-50"
          />
        </motion.nav>
      </div>
      <MobileMenu {...navData} open={mobileNavOpen} className="lg:hidden z-25" />
    </header>
  )
}

const variants = {
  initial: {
    opacity: 0,
    backgroundColor: 'hsla(var(--navigation) / 0)',
    height: 74,
    marginTop: 0,
    borderWidth: 0,
  },
  scrolled: {
    opacity: 1,
    height: 63,
    backdropFilter: 'blur(8px)',
    backgroundColor: 'hsla(var(--navigation) / 0.9)',
  },
  scrolledMobileNavOpen: {
    opacity: 1,
    height: 63,
    backdropFilter: 'blur(8px)',
    backgroundColor: 'hsla(var(--navigation) / 0)',
  },
  notScrolled: {
    opacity: 1,
    height: 74,
    backdropFilter: 'blur(0px)',
    backgroundColor: 'hsla(var(--navigation) / 0)',
    borderColor: 'transparent',
  },
}
