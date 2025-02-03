import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Post } from '@payload-types'

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/blog/${doc.slug}`

      payload.logger.info(`Revalidating Post Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('blog-sitemap')

      payload.logger.info(`✔ Post and Blog Sitemap were Revalidated`)
      payload.logger.info(``)
    }

    // If the post was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/blog/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Post was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('blog-sitemap')

      payload.logger.info(`✓ Old Post and Blog Sitemap Revalidated`)
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/blog/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Post - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('blog-sitemap')

    payload.logger.info(`✓ Deleted Post and Blog Sitemap were Revalidated`)
    payload.logger.info(``)
  }

  return doc
}
