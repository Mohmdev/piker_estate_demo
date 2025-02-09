import type { Feature } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateFeature: CollectionAfterChangeHook<Feature> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/features/${doc.slug}`

      payload.logger.info(`Revalidating Feature Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('listing-types-sitemap')

      payload.logger.info(`✔ Feature and Features Sitemap were Revalidated`)
      payload.logger.info(``)
    }

    // If the Feature was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/features/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Feature was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('features-sitemap')

      payload.logger.info(`✓ Old Feature and Features Sitemap were Revalidated`)
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Feature> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/features/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Feature - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('features-sitemap')

    payload.logger.info(
      `✓ Deleted Feature and Features Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
