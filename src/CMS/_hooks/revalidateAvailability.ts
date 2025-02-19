import type { Availability } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateAvailability: CollectionAfterChangeHook<
  Availability
> = ({ doc, previousDoc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/availability/${doc.slug}`

      payload.logger.info(`Revalidating Availability Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('availability-sitemap')

      payload.logger.info(
        `✔ Availability and Availabilities Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }

    // If the Availability was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/availability/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Availability was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('availability-sitemap')

      payload.logger.info(
        `✓ Old Availability and Availabilities Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Availability> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/availability/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Availability - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('availability-sitemap')

    payload.logger.info(
      `✓ Deleted Listing Status and Listing Statuses Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
