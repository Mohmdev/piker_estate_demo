'use client'

import { Media } from '@components/Media'
import RichText from '@components/RichText'
import type { Search } from '@payload-types'
import { cn } from '@utils/ui'
import useClickableCard from '@utils/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

export const Card1: React.FC<{
  alignItems?: 'center'
  className?: string
  record?: Search
  relationTo?: string
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const {
    className,
    record,
    relationTo,
    showCategories,
    title: titleFromProps,
  } = props

  const { slug, taxonomies, meta } = record || {}
  const { title, price, description, images } = meta || {}
  const { availabilityStatus, listingType, condition, classifications } =
    taxonomies || {}

  const thumbnail = images?.[0]

  const hasCategories =
    classifications &&
    Array.isArray(classifications) &&
    classifications.length > 0
  const titleToUse = titleFromProps || title
  const href = `/${relationTo}/${slug}`

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
        {thumbnail && typeof thumbnail !== 'string' && (
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
          {showCategories && hasCategories && (
            <div className="uppercase text-sm mb-4 prose">
              {showCategories && hasCategories && (
                <p>
                  {classifications?.map((classification, index) => {
                    if (typeof classification === 'object') {
                      const { title } = classification
                      const isLast = index === classifications.length - 1
                      return (
                        <Fragment key={index}>
                          {title}
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
          {titleToUse && (
            <div className="prose">
              <h3>
                <Link className="not-prose text-xl" href={href} ref={link.ref}>
                  {titleToUse}
                </Link>
              </h3>
            </div>
          )}
        </div>
        {description && (
          <div className="mt-2 grid h-full place-content-center prose">
            <RichText data={description} />
          </div>
        )}
      </div>
    </article>
  )
}
