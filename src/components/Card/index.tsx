'use client'

import { Media } from '@components/Media'
import type { BlogCategory, Meta } from '@payload-types'
import { cn } from '@utils/ui'
import useClickableCard from '@utils/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

export type CardPostData = {
  meta?: Meta | undefined
  title: string
  categories?: (number | BlogCategory)[] | null | undefined
  slug?: string | null | undefined
}

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: string
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const {
    className,
    doc,
    relationTo,
    showCategories,
    title: titleFromProps,
  } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
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
        {!metaImage && <div className="">No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media resource={metaImage} size="33vw" />
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
                  {categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category
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
            {description && <p>{sanitizedDescription}</p>}
          </div>
        )}
      </div>
    </article>
  )
}
