import config from '@payload-config'
import { fetchFileByURL } from '@services/seed/fetchFile'
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

        const amenityIds = (
          await Promise.all(
            property.amenities.map(async (amenity) => {
              const existingAmenity = await payload.find({
                collection: 'amenities',
                where: {
                  slug: { equals: amenity.slug },
                },
              })
              return existingAmenity.docs[0]?.id
            }),
          )
        ).filter((id): id is number => typeof id === 'number')

        // Handle gallery media
        let galleryData = undefined
        if (property.gallery) {
          const galleryImages = property.gallery.images
            ? await Promise.all(
                property.gallery.images.map(async (image) => {
                  if (!image || !image.url) return null
                  try {
                    // Check if media already exists
                    const existingMedia = await payload.find({
                      collection: 'media',
                      where: {
                        url: { equals: image.url },
                      },
                    })

                    if (existingMedia.docs.length > 0) {
                      return existingMedia.docs[0]?.id
                    }

                    // Create new media
                    const imageBuffer = await fetchFileByURL(image.url)
                    const createdMedia = await payload.create({
                      collection: 'media',
                      data: {
                        alt: image.alt,
                        url: image.url,
                        filename: image.filename,
                        mimeType: image.mimeType,
                        width: image.width,
                        height: image.height,
                      },
                      file: imageBuffer,
                    })
                    return createdMedia.id
                  } catch (error) {
                    payload.logger.error(
                      `Error creating media for ${image.url}:`,
                      error,
                    )
                    return null
                  }
                }),
              ).then((ids) => ids.filter((id): id is number => id !== null))
            : undefined

          galleryData = {
            ...property.gallery,
            images: galleryImages ?? null,
            video: null,
            floorPlan: null,
            documents: null,
          }
        }

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
            amenities: amenityIds,
            // Gallery with resolved media IDs
            gallery: galleryData,
            _status: 'published',
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
