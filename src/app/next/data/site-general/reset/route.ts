import config from '@payload-config'
import {
  targetCollections,
  targetGlobals,
} from '@services/seed/general-site-data'
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

    payload.logger.info(`↪ Resetting Site's General Data...`)

    await Promise.all(
      targetGlobals.map((global) =>
        payload.updateGlobal({
          slug: global,
          data: {},
          depth: 0,
          context: {
            disableRevalidate: true,
          },
        }),
      ),
    )

    await Promise.all(
      targetCollections.map((collection) =>
        payload.db.deleteMany({ collection, req, where: {} }),
      ),
    )
    await Promise.all(
      targetCollections.map((collection) =>
        payload.db.deleteVersions({ collection, req, where: {} }),
      ),
    )

    payload.logger.info(
      "✓ Successfully reset Site's General Collections and Globals",
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
