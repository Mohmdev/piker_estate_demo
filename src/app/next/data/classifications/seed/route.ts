import config from '@payload-config'
import { classificationsIndex } from '@services/seed/realestate-group/classifications'
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
  const createdClassifications = new Map<number, number>() // Map mock ID to real ID

  // First pass: Create all root classifications (those without parents)
  for (const classification of classificationsIndex) {
    if (!classification.parent) {
      try {
        const existingClassification = await payload.find({
          collection: 'classifications',
          where: {
            slug: { equals: classification.slug },
          },
        })

        if (existingClassification.docs.length === 0) {
          const created = await payload.create({
            collection: 'classifications',
            data: {
              _status: 'published',
              title: classification.title,
              description: classification.description,
              slug: classification.slug,
              slugLock: classification.slugLock,
              publishedAt: classification.publishedAt,
            },
          })
          if (classification.breadcrumbs?.[0]?.doc) {
            createdClassifications.set(
              Number(classification.breadcrumbs[0].doc),
              created.id,
            )
          }
          createdCount++
        } else if (
          existingClassification.docs[0] &&
          classification.breadcrumbs?.[0]?.doc
        ) {
          createdClassifications.set(
            Number(classification.breadcrumbs[0].doc),
            existingClassification.docs[0].id,
          )
        }
      } catch (error) {
        payload.logger.error(
          `Error creating root classification "${classification.title}":`,
          error,
        )
        throw error
      }
    }
  }

  // Second pass: Create all child classifications
  for (const classification of classificationsIndex) {
    if (classification.parent) {
      try {
        const existingClassification = await payload.find({
          collection: 'classifications',
          where: {
            slug: { equals: classification.slug },
          },
        })

        if (existingClassification.docs.length === 0) {
          const realParentId = createdClassifications.get(
            Number(classification.parent),
          )
          if (!realParentId) {
            payload.logger.error(
              `Parent not found for classification "${classification.title}"`,
            )
            continue
          }

          const created = await payload.create({
            collection: 'classifications',
            data: {
              _status: 'published',
              title: classification.title,
              description: classification.description,
              slug: classification.slug,
              slugLock: classification.slugLock,
              publishedAt: classification.publishedAt,
              parent: realParentId,
            },
          })
          if (classification.breadcrumbs?.[1]?.doc) {
            createdClassifications.set(
              Number(classification.breadcrumbs[1].doc),
              created.id,
            )
          }
          createdCount++
        }
      } catch (error) {
        payload.logger.error(
          `Error creating child classification "${classification.title}":`,
          error,
        )
        throw error
      }
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
