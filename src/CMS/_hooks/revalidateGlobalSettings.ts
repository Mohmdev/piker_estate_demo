import { revalidateTag } from 'next/cache'

import type { GlobalAfterChangeHook } from 'payload'

export const revalidateGlobalSettings: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(
      `Revalidating Global Settings Cache - Tag: "global_global-settings"`,
    )

    revalidateTag('global_global-settings')

    payload.logger.info(`✔ Global Settings Revalidated`)
    payload.logger.info(``)
  }

  return doc
}
