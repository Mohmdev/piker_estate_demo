import type { Amenity } from '@payload-types'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

// Define a simple logger interface that matches Payload's logger
interface PayloadLogger {
  info: (message: string) => void
  error: (message: string) => void
}

// Dynamically import revalidation functions to avoid client-side errors
// This ensures they're only loaded in a server context
const revalidateCache = async (
  path: string,
  tag: string,
  logger: PayloadLogger,
) => {
  try {
    // Dynamic import to ensure this only runs on the server
    const { revalidatePath, revalidateTag } = await import('next/cache')

    logger.info(`Revalidating Cache - Path: ${path}, Tag: ${tag}`)

    revalidatePath(path)
    revalidateTag(tag)

    logger.info(`✔ Path and Tag were Revalidated`)
    logger.info(``)
  } catch (error) {
    logger.error(
      `Failed to revalidate: ${error instanceof Error ? error.message : String(error)}`,
    )
  }
}

export const revalidateAmenity: CollectionAfterChangeHook<Amenity> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/amenities/${doc.slug}`

      payload.logger.info(`Revalidating Amenity Cache - Path: ${path}`)

      // Use the async function without awaiting (fire and forget)
      revalidateCache(path, 'amenities-sitemap', payload.logger)
    }

    // If the Amenity was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/amenities/${previousDoc.slug}`

      payload.logger.info(`Revalidating Old Amenity Cache - Path: ${oldPath}`)

      // Use the async function without awaiting (fire and forget)
      revalidateCache(oldPath, 'amenities-sitemap', payload.logger)
    }
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Amenity> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/amenities/${doc.slug}`

      payload.logger.info(`Revalidating Deleted Amenity Cache - Path: ${path}`)

      // Use the async function without awaiting (fire and forget)
      revalidateCache(path, 'amenities-sitemap', payload.logger)
    }
  }

  return doc
}
