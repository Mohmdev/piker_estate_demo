import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Page } from '@payload-types'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`

      payload.logger.info(`Revalidating Page Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('pages-sitemap')

      payload.logger.info(`✔ Page and Pages Sitemap were Revalidated`)
      payload.logger.info(``)
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Page was unpublished - Path: "${oldPath}"`,
      )

      revalidatePath(oldPath)
      revalidateTag('pages-sitemap')

      payload.logger.info(`✓ Old Page and Pages Sitemap Revalidated`)
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = doc?.slug === 'home' ? '/' : `/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Page - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('pages-sitemap')

    payload.logger.info(`✓ Deleted Page and Pages Sitemap were Revalidated`)
    payload.logger.info(``)
  }

  return doc
}
