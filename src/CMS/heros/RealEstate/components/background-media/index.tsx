'use client'

import { Media } from '@components/Media'
import type { Page } from '@payload-types'

type BackgroundMediaProps = {
  media: Page['heros']['media']
}

export const BackgroundMedia: React.FC<BackgroundMediaProps> = ({ media }) => {
  return (
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
  )
}
