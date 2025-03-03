import { CMSLink } from '@components/CMSLink'
import { Logo } from '@components/Logo/Logo'
import type { Footer as FooterType } from '@payload-types'
import { ThemeSelector } from '@providers/Theme/ThemeSelector'
import { cn } from '@utils/ui'
import Link from 'next/link'
import React from 'react'

export const Footer: React.FC<FooterType> = (props) => {
  const { columns } = props

  return (
    <footer
      className={cn(
        'mt-auto border-t border-border/50  text-foreground',
        'bg-background dark:bg-neutral-950',
      )}
    >
      <div className="container py-8 gap-8 flex flex-row flex-wrap justify-between">
        <div className="flex flex-col items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-row gap-8">
            {columns &&
              columns.map((column, columnIndex) => {
                return (
                  <div
                    key={columnIndex}
                    className="flex flex-col gap-4 items-start justify-start"
                  >
                    <h3 className="text-foreground prose prose-lg">
                      {column.label}
                    </h3>
                    <div className="flex flex-col gap-2 items-start justify-start">
                      {column?.navItems?.map(({ link }, i) => {
                        return (
                          <CMSLink
                            className="text-foreground"
                            key={i}
                            {...link}
                          />
                        )
                      })}
                    </div>
                  </div>
                )
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
