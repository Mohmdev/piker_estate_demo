import config from '@payload-config'
import { headers } from 'next/headers'
import { createLocalReq, getPayload } from 'payload'
import { clearDBScript } from './script'

export const maxDuration = 60

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()
  const { user } = await payload.auth({ headers: requestHeaders })
  if (!user) {
    return new Response('Action forbidden.', { status: 403 })
  }

  try {
    const payloadReq = await createLocalReq({ user }, payload)

    await clearDBScript({ payload, req: payloadReq })

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
