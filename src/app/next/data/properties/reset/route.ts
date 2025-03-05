import config from '@payload-config'
import { headers } from 'next/headers'
import { createLocalReq, getPayload } from 'payload'

export const maxDuration = 60

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user) {
    return new Response('Action forbidden.', { status: 403 })
  }

  try {
    const req = await createLocalReq({ user }, payload)

    payload.logger.info(`↪ Resetting Properties...`)

    // First, delete search documents related to properties
    try {
      payload.logger.info(
        `↪ Deleting search documents related to properties...`,
      )
      await payload.db.deleteMany({
        collection: 'search',
        req,
        where: {
          'doc.relationTo': {
            equals: 'properties',
          },
        },
      })
      payload.logger.info(
        `✓ Successfully deleted search documents related to properties`,
      )
    } catch (searchError) {
      payload.logger.error(`Error deleting search documents: ${searchError}`)
      // Continue with property deletion even if search deletion fails
    }

    // Then delete properties
    await payload.db.deleteMany({
      collection: 'properties',
      req,
      where: {},
    })
    await payload.db.deleteVersions({
      collection: 'properties',
      req,
      where: {},
    })

    payload.logger.info(
      '✓ Successfully reset Properties Collection and Versions',
    )

    return Response.json({ success: true })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Response(`API Route failed to finish - ${error.message}`, {
        status: 500,
      })
    }
    return new Response('An unknown error occurred', { status: 500 })
  }
}
