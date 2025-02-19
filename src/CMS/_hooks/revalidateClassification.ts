import type { Classification } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateClassification: CollectionAfterChangeHook<
  Classification
> = ({ doc, previousDoc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/classifications/${doc.slug}`

      payload.logger.info(`Revalidating Classification Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('classifications-sitemap')

      payload.logger.info(
        `✔ Classification and Classifications Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }

    // If the Classification was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/classifications/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Classification was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('classifications-sitemap')

      payload.logger.info(
        `✓ Old Classification and Classifications Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Classification> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/classifications/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Classification - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('classifications-sitemap')

    payload.logger.info(
      `✓ Deleted Classification and Classifications Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
