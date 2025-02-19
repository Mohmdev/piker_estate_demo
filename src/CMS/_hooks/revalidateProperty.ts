import type { Property } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateProperty: CollectionAfterChangeHook<Property> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/properties/${doc.slug}`

      payload.logger.info(`Revalidating Property Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('properties-sitemap')

      payload.logger.info(`✔ Property and Properties Sitemap were Revalidated`)
      payload.logger.info(``)
    }

    // If the property was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/properties/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Property was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('properties-sitemap')

      payload.logger.info(
        `✓ Old Property and Properties Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Property> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/properties/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Property - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('properties-sitemap')

    payload.logger.info(
      `✓ Deleted Property and Properties Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
