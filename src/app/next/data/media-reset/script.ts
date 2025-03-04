import { Payload } from 'payload'
import type { PayloadRequest } from 'payload'

export async function clearMediaScript({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> {
  payload.logger.info(`↪ Resetting Media Collection...`)

  await payload.db.deleteMany({
    collection: 'media',
    req,
    where: {},
  })
  await payload.db.deleteVersions({
    collection: 'media',
    req,
    where: {},
  })

  payload.logger.info('✓ Successfully reset Media Collection and Versions')
}
