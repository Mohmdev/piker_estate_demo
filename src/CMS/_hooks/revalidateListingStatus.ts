import type { ListingStatus } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

export const revalidateListingStatus: CollectionAfterChangeHook<ListingStatus> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/listing-status/${doc.slug}`

      payload.logger.info(`Revalidating Listing Status Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('listing-status-sitemap')

      payload.logger.info(
        `✔ Listing Status and Listing Statuses Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }

    // If the Feature was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/listing-status/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Listing Status was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('listing-status-sitemap')

      payload.logger.info(
        `✓ Old Listing Status and Listing Statuses Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<ListingStatus> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/listing-status/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Listing Status - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('listing-status-sitemap')

    payload.logger.info(
      `✓ Deleted Listing Status and Listing Statuses Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
