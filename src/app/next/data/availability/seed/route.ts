import config from '@payload-config'
import { mockAvailabilities } from '@services/seed/realestate-group/availabilities'
import { headers } from 'next/headers'
import { getPayload } from 'payload'

export const maxDuration = 60

export async function POST(): Promise<Response> {
  const payload = await getPayload({ config })
  const requestHeaders = await headers()
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user) {
    return new Response('Action forbidden.', { status: 403 })
  }

  let createdCount = 0

  for (const availability of mockAvailabilities) {
    try {
      // Check if availability already exists
      const existingAvailability = await payload.find({
        collection: 'availability',
        where: {
          slug: { equals: availability.slug },
        },
      })

      if (existingAvailability.docs.length === 0) {
        await payload.create({
          collection: 'availability',
          data: {
            _status: 'published',
            title: availability.title,
            slug: availability.slug,
          },
        })
        createdCount++
      }
    } catch (error) {
      payload.logger.error(
        `Error creating availability "${availability.title}":`,
        error,
      )
      throw error
    }
  }

  if (createdCount > 0) {
    payload.logger.info(`✓ Successfully seeded ${createdCount} availabilities.`)
  } else {
    payload.logger.info(`No new availabilities were seeded.`)
  }

  return Response.json({ success: true })
}
