'use client'
import { Spinner } from '@components/ui/spinner'
import type { Media } from '@payload-types'
import { cn } from '@utils/ui'
import { HousePlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type CellProps = {
  rowData: Record<string, unknown>
  cellData: unknown
  collectionSlug: string
  field: string
  link?: boolean
  id: number
}

// Define a type for the gallery structure based on payload-types
type Gallery = {
  images?: (number | Media)[] | null
  video?: (number | null) | Media
  virtualTourUrl?: string | null
  floorPlan?: (number | Media)[] | null
  documents?: (number | Media)[] | null
}

export const GalleryCell: React.FC<CellProps> = (props) => {
  const { rowData, field, collectionSlug, link = true } = props

  console.log('rowData', rowData)
  console.log('field', field)
  console.log('collectionSlug', collectionSlug)
  console.log('link', link)

  // Extract the first image ID directly from rowData
  const getFirstImageId = (): number | null => {
    // Parse the field path to navigate the nested structure
    const fieldPath = field.split('.')

    // If we have gallery.images, we need to access rowData.gallery.images
    if (
      fieldPath.length === 2 &&
      fieldPath[0] === 'gallery' &&
      rowData.gallery
    ) {
      const gallery = rowData.gallery as Gallery

      // Get the field name from the path (e.g., 'images')
      const fieldName = fieldPath[1]

      // Type-safe access to the gallery field
      if (fieldName === 'images' && gallery.images) {
        const images = gallery.images

        if (Array.isArray(images) && images.length > 0) {
          // The first item could be a number or Media object
          const firstItem = images[0]

          // If it's a number, return it directly
          if (typeof firstItem === 'number') {
            return firstItem
          }

          // If it's a Media object, return its ID
          if (
            typeof firstItem === 'object' &&
            firstItem !== null &&
            'id' in firstItem
          ) {
            return firstItem.id
          }
        }
      }
    }

    return null
  }

  const firstImageId = getFirstImageId()

  // Get the property ID for the link
  const propertyId = rowData.id as number | undefined
  console.log('propertyId', propertyId)

  // Local state to hold the URL from the fetched media item
  const [firstImageUrl, setFirstImageUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Only fetch if we have a valid image ID
    if (firstImageId) {
      setIsLoading(true)
      setHasError(false)

      const fetchMedia = async () => {
        try {
          const res = await fetch(`/api/media/${firstImageId}`)

          if (!res.ok) {
            throw new Error(`Network response was not ok: ${res.status}`)
          }

          const data: Media = await res.json()

          // Set the image URL if available
          if (data && data.url) {
            setFirstImageUrl(data.url)
          } else {
            setHasError(true)
          }
        } catch (error) {
          console.error('Error fetching media:', error)
          setHasError(true)
        } finally {
          setIsLoading(false)
        }
      }

      fetchMedia()
    } else {
      setFirstImageUrl('')
    }
  }, [firstImageId])

  // Create the admin edit URL
  const editUrl = propertyId
    ? `/admin/collections/${collectionSlug}/${propertyId}`
    : undefined

  console.log('editUrl', editUrl)

  // Cell content to be rendered with or without a link
  const CellContent = ({ className }: { className?: string }) => (
    <div
      className={cn(
        'relative aspect-square w-14 overflow-hidden rounded-lg border-1 border-border/50',
        'bg-[hsl(var(--space-bg-less))]',
        className,
      )}
    >
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center">
          <Spinner size="sm" className="text-muted-foreground" />
        </div>
      ) : firstImageUrl ? (
        <Image
          src={firstImageUrl}
          alt="Property thumbnail"
          className="h-full w-full object-cover"
          fill
          sizes="56px"
          priority
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          <HousePlus
            className={cn(
              'h-5 w-5',
              hasError ? 'text-red-400' : 'text-zinc-400 dark:text-zinc-500',
            )}
            strokeWidth={1.5}
          />
        </div>
      )}
    </div>
  )

  // Return the cell with or without a link based on the link prop and editUrl availability
  return (
    <div className="flex items-center justify-center h-full w-full group">
      {link && editUrl ? (
        <Link
          href={editUrl}
          className={'block h-full w-full'}
          title={`Edit ${rowData.title || 'property'}`}
        >
          <CellContent className="group-hover:scale-105 transition-transform duration-300" />
        </Link>
      ) : (
        <CellContent className="group-hover:scale-105 transition-transform duration-300" />
      )}
    </div>
  )
}
