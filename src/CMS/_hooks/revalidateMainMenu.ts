import { revalidatePath, revalidateTag } from 'next/cache'
import type { GlobalAfterChangeHook } from 'payload'

export const revalidateMainMenu: GlobalAfterChangeHook = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = '/theme-editor'

      payload.logger.info(
        `Revalidating Main Menu Cache - Tag: "global_main-menu" Path: "${path}"`,
      )
      payload.logger.info(``)

      revalidatePath(path)
      payload.logger.info(
        `✓ Published Main Menu Revalidated at path: "${path}"`,
      )
      revalidateTag('global_main-menu')
      payload.logger.info(
        `Revalidating Main Menu Cache - Tag: "global_main-menu"`,
      )
      payload.logger.info(`✔ Main Menu Revalidated`)
      payload.logger.info(``)
    }

    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/main-menu/${previousDoc.slug}`

      payload.logger.info(
        `Previous published version of Main Menu was unpublished - Path: "${oldPath}"`,
      )

      revalidatePath(oldPath)

      payload.logger.info(`✓ Old Main Menu Revalidated`)
      payload.logger.info(``)
    }
  }

  return doc
}
