import type { ListingType } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidateListingType: CollectionAfterChangeHook<ListingType> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/listing-types/${doc.slug}`

      payload.logger.info(`Revalidating Listing Type Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('listing-types-sitemap')

      payload.logger.info(`✔ Listing Type and Listing Types Sitemap were Revalidated`)
      payload.logger.info(``)
    }

    // If the Listing Type was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/listing-types/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Listing Type was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('properties-sitemap')

      payload.logger.info(`✓ Old Listing Type and Listing Types Sitemap were Revalidated`)
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<ListingType> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/listing-types/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Listing Type - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('listing-types-sitemap')

    payload.logger.info(
      `✓ Deleted Listing Type and Listing Types Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
