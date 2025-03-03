import React from 'react'

import type { Page } from '@payload-types'

import { CMSLink } from '@components/CMSLink'
import { Media } from '@components/Media'
import RichText from '@components/RichText'
import { cn } from '@utils/ui'

export const MediumImpactHero: React.FC<Page['heros']> = ({
  links,
  media,
  richText,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col container',
        'size-full min-h-[50vh]',
        'mt-[calc(var(--base-header-height)_+_2rem)]',
      )}
    >
      <div
        className={cn(
          'flex-1 size-full rounded-md border-1 border-border/70',
          'relative overflow-hidden',
        )}
      >
        <div className="absolute inset-0 z-10 grid items-end justify-start">
          {richText && (
            <RichText className="m-6" data={richText} enableGutter={false} />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
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
        <div className="absolute inset-0 z-0 select-none">
          {media && typeof media === 'object' && (
            <div>
              <Media
                imgClassName="-z-10 object-cover"
                priority
                resource={media}
              />
              {media?.caption && (
                <div className="mt-3">
                  <RichText data={media.caption} enableGutter={false} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
