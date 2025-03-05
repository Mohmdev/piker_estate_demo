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
  let errorCount = 0
  const errors: string[] = []

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

          // Process images
          const galleryImages = property.gallery.images
            ? await Promise.all(
                property.gallery.images.map(async (image, index) => {
                  if (!image || !image.url) {
                    payload.logger.info(`Image ${index} has no URL`)
                    return null
                  }

                  try {
                    // Check if media already exists by URL
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

                    // Use the correct file upload format
                    const createdMedia = await payload.create({
                      collection: 'media',
                      data: {
                        alt: `Image for ${property.title}`,
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

                  try {
                    // Check if media already exists by URL
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

                    const createdMedia = await payload.create({
                      collection: 'media',
                      data: {
                        alt: `Video for ${property.title}`,
                      },
                      file: videoBuffer,
                    })

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

                  try {
                    // Check if media already exists by URL
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

                    const createdMedia = await payload.create({
                      collection: 'media',
                      data: {
                        alt: `Document for ${property.title}`,
                      },
                      file: documentBuffer,
                    })

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
          // Only include non-empty arrays in the gallery data
          galleryData = {
            images: galleryImages.length > 0 ? galleryImages : undefined,
            videos: galleryVideos.length > 0 ? galleryVideos : undefined,
            documents:
              galleryDocuments.length > 0 ? galleryDocuments : undefined,
            virtualTourUrl: property.gallery.virtualTourUrl || undefined,
            floorPlan: undefined, // We don't have floor plans in the seed data
          }

          // Log the final gallery data for debugging
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
            amenities: property.amenities,
            availabilityStatus: property.availabilityStatus,
            listingType: property.listingType,
            condition: property.condition,
            isFeatured: property.isFeatured,
            description: property.description,
            location: property.location,
            specs: property.specs,
            finance: property.finance,
            // Required relationships with resolved IDs
            classification: classificationIds,
            // Gallery with resolved media IDs
            gallery: galleryData,
            _status: 'published',
          },
          // Disable hooks to prevent search plugin from running
          disableVerificationEmail: true,
          overrideAccess: true,
          overwriteExistingFiles: false,
          draft: false,
          // This is the key option to disable the search plugin
          // context: {
          //   skipSearchSync: true,
          // },
        })

        payload.logger.info(
          `Created property: ${createdProperty.id} - ${property.title}`,
        )
        createdCount++
      }
    } catch (error) {
      errorCount++
      const errorMessage =
        error instanceof Error ? error.message : String(error)
      errors.push(
        `Error creating property "${property.title}": ${errorMessage}`,
      )

      payload.logger.error(
        `Error creating property "${property.title}":`,
        error,
      )
      // Continue with the next property instead of throwing the error
      // This allows the script to process other properties even if one fails
    }
  }

  // Log summary of results
  if (createdCount > 0) {
    payload.logger.info(`✓ Successfully seeded ${createdCount} properties.`)
  } else {
    payload.logger.info(`No new properties were seeded.`)
  }

  if (errorCount > 0) {
    payload.logger.error(`Failed to seed ${errorCount} properties.`)
    payload.logger.error(`Errors: ${errors.join('\n')}`)
    return Response.json(
      {
        success: createdCount > 0,
        created: createdCount,
        failed: errorCount,
        errors,
      },
      { status: errorCount > 0 && createdCount === 0 ? 500 : 207 },
    )
  }

  return Response.json({
    success: true,
    created: createdCount,
  })
}
