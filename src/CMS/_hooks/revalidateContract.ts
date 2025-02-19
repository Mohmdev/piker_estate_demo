import type { Contract } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateContract: CollectionAfterChangeHook<Contract> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/contracts/${doc.slug}`

      payload.logger.info(`Revalidating Contract Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('contracts-sitemap')

      payload.logger.info(`✔ Contract and Contracts Sitemap were Revalidated`)
      payload.logger.info(``)
    }

    // If the Contract was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/contracts/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Contract was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('contracts-sitemap')

      payload.logger.info(
        `✓ Old Contract and Contracts Sitemap were Revalidated`,
      )
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Contract> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/contracts/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Contract - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('contracts-sitemap')

    payload.logger.info(
      `✓ Deleted Contract and Contracts Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
