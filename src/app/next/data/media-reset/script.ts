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

  // Check if the media collection exists
  const mediaCollection = await payload.find({
    collection: 'media',
    req,
    where: {},
  })

  if (
    !mediaCollection ||
    !mediaCollection.docs ||
    mediaCollection.docs.length === 0
  ) {
    payload.logger.info('✓ Media Collection is empty')
    return
  } else {
    try {
      payload.logger.info('Clearing Media Collection...')
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
    } catch (error) {
      payload.logger.info(`Script failed. - ${error}`)
      throw error
    }
  }
}
