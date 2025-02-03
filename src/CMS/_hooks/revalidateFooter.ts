import type { GlobalAfterChangeHook } from 'payload'

import { revalidateTag } from 'next/cache'

export const revalidateFooter: GlobalAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating Footer Cache - Tag: "global_footer"`)

    revalidateTag('global_footer')

    payload.logger.info(`✔ Footer Revalidated`)
    payload.logger.info(``)
  }

  return doc
}
