'use client'
import type { MainMenu } from '@payload-types'
import { useHeaderTheme } from '@providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FlyoutNav } from './FlyoutNav'

interface MainMenuClientProps {
  data: MainMenu
}

export const MainMenuClient: React.FC<MainMenuClientProps> = ({ data }) => {
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

  return <FlyoutNav data={data} />
}
