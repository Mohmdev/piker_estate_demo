'use client'

import { Media } from '@components/Media'
import RichText from '@components/RichText'
import { Media as MediaType } from '@payload-types'
import type { ListingCardOptions, Property } from '@payload-types'
import { cn } from '@utils/ui'
import useClickableCard from '@utils/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

export const ListingCard: React.FC<{
  alignItems?: 'center'
  className?: string
  property?: Property
  title?: string
  cardOptions?: ListingCardOptions
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, property } = props

  const {
    slug,
    title,
    categories,
    description,
    gallery,
    // propertyType,
    // listingType,
    // listingStatus,
    // features,
    // isFeatured,
    // tags,
    // specs,
  } = property || {}

  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0
  const href = `/properties/${slug}`
  const thumbnail = gallery?.images?.[0] as MediaType

  return (
    <article
      className={cn(
        'grid grid-cols-1 grid-rows-[auto_1fr]',
        'border border-border/50 rounded-md overflow-hidden bg-card hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full ">
        {!thumbnail && <div className="">No image</div>}
        {thumbnail && typeof thumbnail !== 'number' && (
          <Media resource={thumbnail} size="33vw" />
        )}
      </div>
      <div
        className={cn(
          //
          'flex flex-col',
          'p-4 border-t border-border',
        )}
      >
        <div className="">
          {hasCategories && (
            <div className="uppercase text-sm mb-4 prose">
              {hasCategories && (
                <p>
                  {categories?.map((category, index) => {
                    if (typeof category === 'object' && 'value' in category) {
                      const categoryValue = category.value
                      const titleFromCategory =
                        typeof categoryValue === 'object' &&
                        categoryValue !== null &&
                        'title' in categoryValue
                          ? categoryValue.title
                          : undefined

                      const categoryTitle =
                        titleFromCategory || 'Untitled category'
                      const isLast = index === categories.length - 1
                      return (
                        <Fragment key={index}>
                          {categoryTitle}
                          {!isLast && <Fragment>, &nbsp;</Fragment>}
                        </Fragment>
                      )
                    }
                    return null
                  })}
                </p>
              )}
            </div>
          )}
          {title && (
            <div className="prose">
              <h3>
                <Link className="not-prose text-xl" href={href} ref={link.ref}>
                  {title}
                </Link>
              </h3>
            </div>
          )}
        </div>
        {description && (
          <div className="mt-2 grid size-full place-content-center prose overflow-hidden text-ellipsis">
            <RichText data={description} />
          </div>
        )}
      </div>
    </article>
  )
}
