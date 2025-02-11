import type { PropertyType } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidatePropertyType: CollectionAfterChangeHook<
  PropertyType
> = ({ doc, previousDoc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/property-types/${doc.slug}`

      payload.logger.info(`Revalidating Property Type Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('property-types-sitemap')

      payload.logger.info(
        `✔ Property Type and Property Types Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }

    // If the Listing Type was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/property-types/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Property Type was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('properties-sitemap')

      payload.logger.info(
        `✓ Old Property Type and Property Types Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<PropertyType> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/property-types/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Property Type - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('property-types-sitemap')

    payload.logger.info(
      `✓ Deleted Property Type and Property Types Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
