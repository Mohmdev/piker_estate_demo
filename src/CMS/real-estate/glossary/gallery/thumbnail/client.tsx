'use client'

import type { Media } from '@payload-types'
import { FieldDescription, useFormFields } from '@payloadcms/ui'
import { cn } from '@utils/ui'
import { HousePlus } from 'lucide-react'
import Image from 'next/image'
import type { UIFieldClientProps } from 'payload'
import React, { useEffect, useState } from 'react'

type GalleryThumbnailProps = {
  fieldToUse: string
  description: string
} & UIFieldClientProps

export const GalleryThumbnail: React.FC<GalleryThumbnailProps> = ({
  // field,
  fieldToUse,
  path,
  description,
}) => {
  // const { label } = field

  // Subscribe to the gallery field and extract the first image ID.
  const firstImageId = useFormFields<string | number | null>(([fields]) => {
    const images = fields[fieldToUse]?.value
    if (images && Array.isArray(images) && images.length > 0) {
      return images[0]
    }
    return null
  })

  // Local state to hold the URL from the fetched media item.
  const [firstImageUrl, setFirstImageUrl] = useState('')

  useEffect(() => {
    // Only fetch if we have a valid image ID.
    if (firstImageId) {
      const fetchMedia = async () => {
        try {
          // Adjust the endpoint according to your API structure.
          const res = await fetch(`/api/media/${firstImageId}`)
          if (!res.ok) {
            throw new Error('Network response was not ok')
          }
          const data: Media = await res.json()
          // Assuming the media object includes a url property.
          setFirstImageUrl(data.url ?? '')
        } catch (error) {
          console.error('Error fetching media:', error)
        }
      }
      fetchMedia()
    }
  }, [firstImageId])

  return (
    <div className="w-full flex flex-col gap-2">
      {/* <FieldLabel htmlFor={`field-${path}`} label={label} />
      <TextInput
        value={thumbUrl}
        onChange={setThumbUrl}
        path="thumb_url"
        readOnly={true}
        placeholder="Thumbnail URL will appear here"
      /> */}
      <div
        className={cn(
          'relative aspect-square w-full overflow-hidden rounded-lg border-1 border-border/50',
          'bg-[hsl(var(--space-bg-less))]',
          '[box-shadow:inset_0_1px_4px_0_rgb(0_0_0_/_0.07)]',
          'dark:[box-shadow:inset_0_1px_4px_0_rgb(0_0_0_/_0.9)]',
        )}
      >
        {firstImageUrl ? (
          <Image
            src={firstImageUrl || ''}
            alt={firstImageUrl || 'Property thumbnail'}
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
      {description && (
        <FieldDescription
          description={description}
          path={`field-${path}`}
          className="text-sm text-zinc-400 dark:text-zinc-500"
        />
      )}
    </div>
  )
}
