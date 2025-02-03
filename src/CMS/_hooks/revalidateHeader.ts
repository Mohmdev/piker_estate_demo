import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateHeader: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating Header Cache - Tag: "global_header"`)

    revalidateTag('global_header')

    payload.logger.info(`✔ Header Revalidated`)
    payload.logger.info(``)
  }

  return doc
}
