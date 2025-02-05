import { revalidatePath, revalidateTag } from 'next/cache'
import type { GlobalAfterChangeHook } from 'payload'

export const revalidateFooter: GlobalAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = '/theme-editor'

      payload.logger.info(
        `Revalidating Footer Cache - Tag: "global_footer" Path: "${path}"`,
      )
      payload.logger.info(``)

      revalidatePath(path)
      payload.logger.info(`✓ Published Footer Revalidated at path: "${path}"`)
      revalidateTag('global_footer')
      payload.logger.info(`Revalidating Footer Cache - Tag: "global_footer"`)
      payload.logger.info(`✔ Footer Revalidated`)
      payload.logger.info(``)
    }

    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/footer/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Footer was unpublished - Path: "${oldPath}"`,
      )

      revalidatePath(oldPath)

      payload.logger.info(`✓ Old Footer Revalidated`)
      payload.logger.info(``)
    }
  }
  return doc
}
