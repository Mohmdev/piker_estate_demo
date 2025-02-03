import { revalidateTag } from 'next/cache'

import type { CollectionAfterChangeHook } from 'payload'

export const revalidateRedirects: CollectionAfterChangeHook = ({
  doc,
  req: { payload },
}) => {
  payload.logger.info(`Revalidating Redirects Cache - Tag: "redirects"`)

  revalidateTag('redirects')

  payload.logger.info(`✔ Redirects Cache Revalidated`)
  payload.logger.info(``)

  return doc
}
