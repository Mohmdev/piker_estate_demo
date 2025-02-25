import RichText from '@components/RichText'
import type { Property } from '@payload-types'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { cn } from '@utils/ui'
import React from 'react'
import { ListingCard } from '../glossary/listing-card'

export type ListingBlockProps = {
  className?: string
  listings?: Property[]
  introContent?: SerializedEditorState
}

export const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const { className, listings, introContent } = props

  return (
    <div className={cn('lg:container', className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        {listings?.map((listing, index) => {
          if (typeof listing === 'string') return null

          const listingData = typeof listing === 'object' ? listing : null
          if (!listingData) return null

          return <ListingCard key={index} property={listingData} />
        })}
      </div>
    </div>
  )
}
