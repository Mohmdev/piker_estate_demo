import config from '@payload-config'
import { propertiesDepthOne } from '@services/seed/realestate-group/properties/2-depth_1'
import { mockProperties } from '@services/seed/realestate-group/properties/index.dubai'
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

  for (const property of propertiesDepthOne) {
    try {
      // Check if property already exists
      const existingProperty = await payload.find({
        collection: 'properties',
        where: {
          slug: { equals: property.slug },
        },
      })

      if (existingProperty.docs.length === 0) {
        await payload.create({
          collection: 'properties',
          data: {
            _status: 'published',
            title: property.title,
            slug: property.slug,
          },
        })
        createdCount++
      }
    } catch (error) {
      payload.logger.error(
        `Error creating property "${property.title}":`,
        error,
      )
      throw error
    }
  }

  if (createdCount > 0) {
    payload.logger.info(`✓ Successfully seeded ${createdCount} amenities.`)
  } else {
    payload.logger.info(`No new amenities were seeded.`)
  }

  return Response.json({ success: true })
}
