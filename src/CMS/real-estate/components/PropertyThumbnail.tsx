import { Media } from '@payload-types'
import { cn } from '@utils/ui'
import { HousePlus } from 'lucide-react'
import Image from 'next/image'
import type { Payload } from 'payload'
import React from 'react'

export const PropertyThumbnail = async ({
  payload,
}: {
  payload: Payload
}) => {
  const result = await payload.find({
    collection: 'properties',
    depth: 2,
    select: {
      gallery: {
        images: true,
      },
    },
    pagination: false,
    // limit: 1,
  })

  const firstImage = result.docs[0]?.gallery.images[0]

  const thumbnail = firstImage?.image as Media
  const url = thumbnail?.thumbnailURL

  return (
    <div
      className={cn(
        'relative aspect-video w-full overflow-hidden rounded-lg border-1 border-border/50',
        'my-6 bg-[hsl(var(--space-bg-less))]',
        '[box-shadow:inset_0_1px_4px_0_rgb(0_0_0_/_0.07)]',
        'dark:[box-shadow:inset_0_1px_4px_0_rgb(0_0_0_/_0.9)]',
      )}
    >
      {url ? (
        <Image
          src={url}
          alt={thumbnail.alt || 'Property thumbnail'}
          className="h-full w-full object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="h-full w-full  flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500">
            <HousePlus className="h-8 w-8" strokeWidth={1.5} />
          </div>
        </div>
      )}
    </div>
  )
}
