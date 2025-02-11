import RichText from '@components/RichText'
import configPromise from '@payload-config'
import type {
  ListingArchive as ListingArchiveBlockProps,
  Property,
} from '@payload-types'
import { getPayload } from 'payload'
import React from 'react'

import { CollectionArchive } from '@components/CollectionArchive'
import { cn } from '@utils/ui'
import { ListingGrid } from './grid'

export const ListingArchiveBlock: React.FC<
  ListingArchiveBlockProps & {
    id?: number
  }
> = async (props) => {
  const { id, mainTitle, subTitle, behavior } = props

  const {
    populateBy,
    limit: limitFromProps,
    // pagination,
    selection,
    categories,
  } = behavior || {}

  const limit = limitFromProps || 12

  let properties: Property[] = []

  if (populateBy === 'latest') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object')
        return {
          category: category.value,
          relationTo: category.relationTo,
        }
      else return {}
    })

    const fetchedProperties = await payload.find({
      collection: 'properties',
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    properties = fetchedProperties.docs
  } else {
    if (selection?.length) {
      const filteredSelectedProperties = selection.map((property) => {
        if (typeof property === 'object') return property
      }) as Property[]

      properties = filteredSelectedProperties
    }
  }

  return (
    <div
      id={`block-${id}`}
      className={cn(
        'container',
        'flex flex-col items-start justify-start gap-6',
        'mb-10 mt-[calc(var(--base-header-height)_+_2rem)]',
      )}
    >
      <h2 className="text-lg font-medium text-foreground prose">
        {mainTitle ? mainTitle : 'Latest Properties'}
      </h2>

      {subTitle && (
        <div className="">
          <RichText className="ml-0" data={subTitle} enableGutter={false} />
        </div>
      )}
      <ListingGrid properties={properties} />
    </div>
  )
}
