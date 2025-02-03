import { CMSLink } from '@components/CMSLink'
import { Logo } from '@components/Logo/Logo'
import { getCachedGlobal } from '@data/getGlobal'
import type { Footer } from '@payload-types'
import { ThemeSelector } from '@providers/Theme/ThemeSelector'
import Link from 'next/link'
import React from 'react'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-row flex-wrap justify-between">
        <div className="flex flex-col items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>

        <div className="flex flex-col items-end gap-4 justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <ThemeSelector />
        </div>
      </div>
    </footer>
  )
}
