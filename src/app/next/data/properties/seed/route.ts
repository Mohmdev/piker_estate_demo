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
          // Log the gallery data from the property
          payload.logger.info(
            `Raw gallery data for ${property.title}:`,
            JSON.stringify({
              imagesCount: property.gallery.images?.length || 0,
              videosCount: property.gallery.videos?.length || 0,
              documentsCount: property.gallery.documents?.length || 0,
            }),
          )

          if (property.gallery.images && property.gallery.images.length > 0) {
            payload.logger.info(
              `First image URL: ${property.gallery.images[0]?.url || 'none'}`,
            )
          }

          // Process images
          const galleryImages = property.gallery.images
            ? await Promise.all(
                property.gallery.images.map(async (image, index) => {
                  if (!image || !image.url) {
                    payload.logger.info(`Image ${index} has no URL`)
                    return null
                  }

                  payload.logger.info(`Processing image ${index}: ${image.url}`)

                  try {
                    // Check if media already exists
                    const existingMedia = await payload.find({
                      collection: 'media',
                      where: {
                        url: { equals: image.url },
                      },
                    })

                    if (existingMedia.docs.length > 0) {
                      payload.logger.info(
                        `Found existing media: ${existingMedia.docs[0]?.id}`,
                      )
                      return existingMedia.docs[0]?.id
                    }

                    // Create new media
                    const imageBuffer = await fetchFileByURL(image.url)

                    payload.logger.info(
                      `Fetched image buffer for ${image.url}, size: ${imageBuffer.size} bytes`,
                    )

                    // Use the correct file upload format
                    const createdMedia = await payload.create({
                      collection: 'media',
                      data: {
                        alt: `Image for ${property.title}`,
                      },
                      file: imageBuffer,
                    })

                    payload.logger.info(
                      `Created media ID: ${createdMedia.id} for ${image.url}`,
                    )
                    return createdMedia.id
                  } catch (error) {
                    payload.logger.error(
                      `Error creating media for ${image.url}:`,
                      error,
                    )
                    return null
                  }
                }),
              ).then((ids) => {
                const filteredIds = ids.filter(
                  (id): id is number => id !== null,
                )
                payload.logger.info(
                  `Processed ${filteredIds.length} images, IDs: ${JSON.stringify(filteredIds)}`,
                )
                return filteredIds
              })
            : []

          // Process videos
          const galleryVideos = property.gallery.videos
            ? await Promise.all(
                property.gallery.videos.map(async (video, index) => {
                  if (!video || !video.url) {
                    payload.logger.info(`Video ${index} has no URL`)
                    return null
                  }

                  payload.logger.info(`Processing video ${index}: ${video.url}`)

                  try {
                    // Check if media already exists
                    const existingMedia = await payload.find({
                      collection: 'media',
                      where: {
                        url: { equals: video.url },
                      },
                    })

                    if (existingMedia.docs.length > 0) {
                      payload.logger.info(
                        `Found existing media: ${existingMedia.docs[0]?.id}`,
                      )
                      return existingMedia.docs[0]?.id
                    }

                    // Create new media
                    const videoBuffer = await fetchFileByURL(video.url)

                    payload.logger.info(
                      `Fetched video buffer for ${video.url}, size: ${videoBuffer.size} bytes`,
                    )

                    const createdMedia = await payload.create({
                      collection: 'media',
                      data: {
                        alt: `Video for ${property.title}`,
                      },
                      file: videoBuffer,
                    })

                    payload.logger.info(
                      `Created media ID: ${createdMedia.id} for ${video.url}`,
                    )
                    return createdMedia.id
                  } catch (error) {
                    payload.logger.error(
                      `Error creating media for ${video.url}:`,
                      error,
                    )
                    return null
                  }
                }),
              ).then((ids) => {
                const filteredIds = ids.filter(
                  (id): id is number => id !== null,
                )
                payload.logger.info(
                  `Processed ${filteredIds.length} videos, IDs: ${JSON.stringify(filteredIds)}`,
                )
                return filteredIds
              })
            : []

          // Process documents
          const galleryDocuments = property.gallery.documents
            ? await Promise.all(
                property.gallery.documents.map(async (document, index) => {
                  if (!document || !document.url) {
                    payload.logger.info(`Document ${index} has no URL`)
                    return null
                  }

                  payload.logger.info(
                    `Processing document ${index}: ${document.url}`,
                  )

                  try {
                    // Check if media already exists
                    const existingMedia = await payload.find({
                      collection: 'media',
                      where: {
                        url: { equals: document.url },
                      },
                    })

                    if (existingMedia.docs.length > 0) {
                      payload.logger.info(
                        `Found existing media: ${existingMedia.docs[0]?.id}`,
                      )
                      return existingMedia.docs[0]?.id
                    }

                    // Create new media
                    const documentBuffer = await fetchFileByURL(document.url)

                    payload.logger.info(
                      `Fetched document buffer for ${document.url}, size: ${documentBuffer.size} bytes`,
                    )

                    const createdMedia = await payload.create({
                      collection: 'media',
                      data: {
                        alt: `Document for ${property.title}`,
                      },
                      file: documentBuffer,
                    })

                    payload.logger.info(
                      `Created media ID: ${createdMedia.id} for ${document.url}`,
                    )
                    return createdMedia.id
                  } catch (error) {
                    payload.logger.error(
                      `Error creating media for ${document.url}:`,
                      error,
                    )
                    return null
                  }
                }),
              ).then((ids) => {
                const filteredIds = ids.filter(
                  (id): id is number => id !== null,
                )
                payload.logger.info(
                  `Processed ${filteredIds.length} documents, IDs: ${JSON.stringify(filteredIds)}`,
                )
                return filteredIds
              })
            : []

          // Create gallery data with the correct structure
          galleryData = {
            images: galleryImages.length > 0 ? galleryImages : null,
            videos: galleryVideos.length > 0 ? galleryVideos : null,
            documents: galleryDocuments.length > 0 ? galleryDocuments : null,
            virtualTourUrl: property.gallery.virtualTourUrl || null,
            floorPlan: null, // We don't have floor plans in the seed data
          }

          payload.logger.info(
            `Final gallery data for ${property.title}:`,
            JSON.stringify(galleryData),
          )
        }

        // Create the property with resolved relationship IDs
        const createdProperty = await payload.create({
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

        payload.logger.info(
          `Created property: ${createdProperty.id} - ${property.title}`,
        )
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
