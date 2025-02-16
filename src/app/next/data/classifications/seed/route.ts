import config from '@payload-config'
import { mockClassifications } from '@services/seed/realestate-group/classifications'
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

  for (const classification of mockClassifications) {
    try {
      // Check if classification already exists
      const existingClassification = await payload.find({
        collection: 'classifications',
        where: {
          slug: { equals: classification.slug },
        },
      })

      if (existingClassification.docs.length === 0) {
        await payload.create({
          collection: 'classifications',
          data: {
            _status: 'published',
            title: classification.title,
            slug: classification.slug,
          },
        })
        createdCount++
      }
    } catch (error) {
      payload.logger.error(
        `Error creating classification "${classification.title}":`,
        error,
      )
      throw error
    }
  }

  if (createdCount > 0) {
    payload.logger.info(
      `✓ Successfully seeded ${createdCount} classifications.`,
    )
  } else {
    payload.logger.info(`No new classifications were seeded.`)
  }

  return Response.json({ success: true })
}
