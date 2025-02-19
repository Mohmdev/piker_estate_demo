import config from '@payload-config'
import { availabilitiesIndex } from '@services/seed/realestate-group/availabilities'
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
  const createdAvailabilities = new Map<number, number>() // Map mock ID to real ID

  // First pass: Create all root availabilities (those without parents)
  for (const availability of availabilitiesIndex) {
    if (!availability.parent) {
      try {
        const existingAvailability = await payload.find({
          collection: 'availability',
          where: {
            slug: { equals: availability.slug },
          },
        })

        if (existingAvailability.docs.length === 0) {
          const created = await payload.create({
            collection: 'availability',
            data: {
              _status: 'published',
              title: availability.title,
              description: availability.description,
              slug: availability.slug,
              slugLock: availability.slugLock,
              publishedAt: availability.publishedAt,
            },
          })
          if (availability.breadcrumbs?.[0]?.doc) {
            createdAvailabilities.set(
              Number(availability.breadcrumbs[0].doc),
              created.id,
            )
          }
          createdCount++
        } else if (
          existingAvailability.docs[0] &&
          availability.breadcrumbs?.[0]?.doc
        ) {
          createdAvailabilities.set(
            Number(availability.breadcrumbs[0].doc),
            existingAvailability.docs[0].id,
          )
        }
      } catch (error) {
        payload.logger.error(
          `Error creating root availability "${availability.title}":`,
          error,
        )
        throw error
      }
    }
  }

  // Second pass: Create all child availabilities
  for (const availability of availabilitiesIndex) {
    if (availability.parent) {
      try {
        const existingAvailability = await payload.find({
          collection: 'availability',
          where: {
            slug: { equals: availability.slug },
          },
        })

        if (existingAvailability.docs.length === 0) {
          const realParentId = createdAvailabilities.get(
            Number(availability.parent),
          )
          if (!realParentId) {
            payload.logger.error(
              `Parent not found for availability "${availability.title}"`,
            )
            continue
          }

          const created = await payload.create({
            collection: 'availability',
            data: {
              _status: 'published',
              title: availability.title,
              description: availability.description,
              slug: availability.slug,
              slugLock: availability.slugLock,
              publishedAt: availability.publishedAt,
              parent: realParentId,
            },
          })
          if (availability.breadcrumbs?.[1]?.doc) {
            createdAvailabilities.set(
              Number(availability.breadcrumbs[1].doc),
              created.id,
            )
          }
          createdCount++
        }
      } catch (error) {
        payload.logger.error(
          `Error creating child availability "${availability.title}":`,
          error,
        )
        throw error
      }
    }
  }

  if (createdCount > 0) {
    payload.logger.info(`✓ Successfully seeded ${createdCount} availabilities.`)
  } else {
    payload.logger.info(`No new availabilities were seeded.`)
  }

  return Response.json({ success: true })
}
