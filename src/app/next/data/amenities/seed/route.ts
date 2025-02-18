import config from '@payload-config'
import { amenitiesIndex } from '@services/seed/realestate-group/amenities'
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

  for (const amenity of amenitiesIndex) {
    try {
      // Check if amenity already exists
      const existingAmenity = await payload.find({
        collection: 'amenities',
        where: {
          slug: { equals: amenity.slug },
        },
      })

      if (existingAmenity.docs.length === 0) {
        await payload.create({
          collection: 'amenities',
          data: {
            _status: 'published',
            title: amenity.title,
            slug: amenity.slug,
          },
        })
        createdCount++
      }
    } catch (error) {
      payload.logger.error(`Error creating amenity "${amenity.title}":`, error)
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
