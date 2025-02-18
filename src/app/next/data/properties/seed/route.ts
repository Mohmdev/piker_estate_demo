import config from '@payload-config'
import { propertiesDepthOne } from '@services/seed/realestate-group/properties/2-depth_1'
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
        // First, create or get IDs for required relationships
        const classificationIds = (
          await Promise.all(
            property.classification.map(async (classification) => {
              const existingClassification = await payload.find({
                collection: 'classifications',
                where: {
                  slug: { equals: classification.slug },
                },
              })
              return existingClassification.docs[0]?.id
            }),
          )
        ).filter((id): id is number => typeof id === 'number')

        const contractIds = (
          await Promise.all(
            property.contract.map(async (contract) => {
              const existingContract = await payload.find({
                collection: 'contracts',
                where: {
                  slug: { equals: contract.slug },
                },
              })
              return existingContract.docs[0]?.id
            }),
          )
        ).filter((id): id is number => typeof id === 'number')

        const availabilityIds = (
          await Promise.all(
            property.availability.map(async (availability) => {
              const existingAvailability = await payload.find({
                collection: 'availability',
                where: {
                  slug: { equals: availability.slug },
                },
              })
              return existingAvailability.docs[0]?.id
            }),
          )
        ).filter((id): id is number => typeof id === 'number')

        // Create the property with resolved relationship IDs
        await payload.create({
          collection: 'properties',
          data: {
            title: property.title,
            slug: property.slug,
            price: property.price,
            condition: property.condition,
            isFeatured: property.isFeatured,
            description: property.description,
            location: property.location,
            specs: property.specs,
            finance: property.finance,
            // Required relationships with resolved IDs
            classification: classificationIds,
            contract: contractIds,
            availability: availabilityIds,
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
    payload.logger.info(`✓ Successfully seeded ${createdCount} properties.`)
  } else {
    payload.logger.info(`No new properties were seeded.`)
  }

  return Response.json({ success: true })
}
