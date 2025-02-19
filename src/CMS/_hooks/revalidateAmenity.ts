import type { Amenity } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateAmenity: CollectionAfterChangeHook<Amenity> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/amenities/${doc.slug}`

      payload.logger.info(`Revalidating Amenity Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('amenities-sitemap')

      payload.logger.info(`✔ Amenity and Amenities Sitemap were Revalidated`)
      payload.logger.info(``)
    }

    // If the Amenity was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/amenities/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Amenity was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('amenities-sitemap')

      payload.logger.info(
        `✓ Old Amenity and Amenities Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Amenity> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/amenities/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Amenity - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('amenities-sitemap')

    payload.logger.info(
      `✓ Deleted Amenity and Amenities Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
