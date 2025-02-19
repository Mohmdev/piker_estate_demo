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
  const createdAmenities = new Map<number, number>() // Map mock ID to real ID

  // First pass: Create all root amenities (those without parents)
  for (const amenity of amenitiesIndex) {
    if (!amenity.parent) {
      try {
        const existingAmenity = await payload.find({
          collection: 'amenities',
          where: {
            slug: { equals: amenity.slug },
          },
        })

        if (existingAmenity.docs.length === 0) {
          const created = await payload.create({
            collection: 'amenities',
            data: {
              _status: 'published',
              title: amenity.title,
              description: amenity.description,
              slug: amenity.slug,
              slugLock: amenity.slugLock,
              publishedAt: amenity.publishedAt,
            },
          })
          if (amenity.breadcrumbs?.[0]?.doc) {
            createdAmenities.set(Number(amenity.breadcrumbs[0].doc), created.id)
          }
          createdCount++
        } else if (existingAmenity.docs[0] && amenity.breadcrumbs?.[0]?.doc) {
          createdAmenities.set(
            Number(amenity.breadcrumbs[0].doc),
            existingAmenity.docs[0].id,
          )
        }
      } catch (error) {
        payload.logger.error(
          `Error creating root amenity "${amenity.title}":`,
          error,
        )
        throw error
      }
    }
  }

  // Second pass: Create all child amenities
  for (const amenity of amenitiesIndex) {
    if (amenity.parent) {
      try {
        const existingAmenity = await payload.find({
          collection: 'amenities',
          where: {
            slug: { equals: amenity.slug },
          },
        })

        if (existingAmenity.docs.length === 0) {
          const realParentId = createdAmenities.get(Number(amenity.parent))
          if (!realParentId) {
            payload.logger.error(
              `Parent not found for amenity "${amenity.title}"`,
            )
            continue
          }

          const created = await payload.create({
            collection: 'amenities',
            data: {
              _status: 'published',
              title: amenity.title,
              description: amenity.description,
              slug: amenity.slug,
              slugLock: amenity.slugLock,
              publishedAt: amenity.publishedAt,
              parent: realParentId,
            },
          })
          if (amenity.breadcrumbs?.[1]?.doc) {
            createdAmenities.set(Number(amenity.breadcrumbs[1].doc), created.id)
          }
          createdCount++
        }
      } catch (error) {
        payload.logger.error(
          `Error creating child amenity "${amenity.title}":`,
          error,
        )
        throw error
      }
    }
  }

  if (createdCount > 0) {
    payload.logger.info(`✓ Successfully seeded ${createdCount} amenities.`)
  } else {
    payload.logger.info(`No new amenities were seeded.`)
  }

  return Response.json({ success: true })
}
