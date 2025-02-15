import type { Project } from '@payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateProject: CollectionAfterChangeHook<Project> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/projects/${doc.slug}`

      payload.logger.info(`Revalidating Project Cache - Path: ${path}`)

      revalidatePath(path)
      revalidateTag('projects-sitemap')

      payload.logger.info(`✔ Project and Projects Sitemap were Revalidated`)
      payload.logger.info(``)
    }

    // If the project was previously published, we need to revalidate the old path
    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/projects/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Project was unpublished - Path: ${oldPath}`,
      )

      revalidatePath(oldPath)
      revalidateTag('properties-sitemap')

      payload.logger.info(`✓ Old Project and Projects Sitemap were Revalidated`)
      payload.logger.info(``)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Project> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/projects/${doc?.slug}`

    payload.logger.info(`Revalidating Deleted Project - Path: ${path}`)

    revalidatePath(path)
    revalidateTag('projects-sitemap')

    payload.logger.info(
      `✓ Deleted Project and Projects Sitemap were Revalidated`,
    )
    payload.logger.info(``)
  }

  return doc
}
