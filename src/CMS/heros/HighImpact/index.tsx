'use client'
import { useHeaderTheme } from '@providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@payload-types'

import { CMSLink } from '@components/CMSLink'
import { Media } from '@components/Media'
import RichText from '@components/RichText'
import { cn } from '@utils/ui'

export const HighImpactHero: React.FC<Page['heros']> = ({
  links,
  media,
  richText,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className={cn(
        'min-h-[80vh] ',
        'relative flex items-center justify-center text-white border-b-1 border-border/50',
      )}
      data-theme="dark"
    >
      <div className="container z-10 relative grid place-content-center">
        <div className="max-w-[36.5rem] md:text-center">
          {richText && (
            <RichText className="mb-6" data={richText} enableGutter={false} />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex md:justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
      <div className="select-none absolute inset-0">
        <div className="size-full relative">
          {media && typeof media === 'object' && (
            <Media
              fill
              imgClassName="-z-10 object-cover"
              priority={false}
              loading="lazy"
              resource={media}
            />
          )}
        </div>
      </div>
    </div>
  )
}
