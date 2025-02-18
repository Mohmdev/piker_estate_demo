import type { CollectionSlug, File, Payload, PayloadRequest } from 'payload'
import { amenitiesIndex } from './amenities/index'
import { availabilitiesIndex } from './availabilities/index'
import { classificationsIndex } from './classifications/index'
import { contractsIndex } from './contracts/index'
import { propertiesDepthZero } from './properties/0-depth_0'
import { propertiesRelationships } from './properties/1-relationships'
import { propertiesDepthOne as propertiesIndex } from './properties/2-depth_1'

// Define our image sources with meaningful names
const PROPERTY_IMAGES = {
  WATERFRONT_APARTMENT: {
    MAIN: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    LIVING_ROOM:
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
  },
  FAMILY_HOME: {
    MAIN: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    GARDEN:
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    INTERIOR:
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
  },
}

export const targetCollections: CollectionSlug[] = [
  'projects',
  'properties',
  'classifications',
  'contracts',
  'availability',
  'amenities',
]

export const seedRealEstateGroupData = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('⤷ Script starting...')

  payload.logger.info(`— Clearing Real Estate Group Data`)

  // Clear all collections
  await Promise.all(
    targetCollections.map((collection) =>
      payload.db.deleteMany({ collection, req, where: {} }),
    ),
  )
  await Promise.all(
    targetCollections
      .filter((collection) =>
        Boolean(payload.collections[collection].config.versions),
      )
      .map((collection) =>
        payload.db.deleteVersions({ collection, req, where: {} }),
      ),
  )

  payload.logger.info(`✓ Real Estate Group Data Cleared`)

  payload.logger.info(`— Seeding media...`)

  // Create a map to store our image buffers
  const imageBuffers = new Map<string, File>()

  // Fetch all unique images
  const uniqueImageUrls = new Set([
    ...Object.values(PROPERTY_IMAGES.WATERFRONT_APARTMENT),
    ...Object.values(PROPERTY_IMAGES.FAMILY_HOME),
  ])

  // Fetch all images in parallel
  await Promise.all(
    Array.from(uniqueImageUrls).map(async (url) => {
      const buffer = await fetchFileByURL(url)
      imageBuffers.set(url, buffer)
    }),
  )

  // Create media items and store their IDs
  const mediaItems = new Map<string, string | number>()

  for (const [url, buffer] of imageBuffers) {
    const mediaDoc = await payload.create({
      collection: 'media',
      data: {
        alt: `Property Image - ${url.split('/').pop()}`,
      },
      file: buffer,
    })

    let mediaId: string | number = mediaDoc.id
    if (payload.db.defaultIDType === 'text') {
      mediaId = `"${mediaDoc.id}"`
    }
    mediaItems.set(url, mediaId)
  }

  payload.logger.info(`— Seeding classifications...`)
  const classifications = await Promise.all(
    classificationsIndex.map((classification) =>
      payload.create({
        collection: 'classifications',
        data: classification,
      }),
    ),
  )

  // Create a map of classification slugs to IDs
  const classificationMap = new Map(
    classifications.map((classification) => [
      classification.slug,
      classification.id,
    ]),
  )

  payload.logger.info(`— Seeding contracts...`)
  const contracts = await Promise.all(
    contractsIndex.map((contract) =>
      payload.create({
        collection: 'contracts',
        data: contract,
      }),
    ),
  )

  // Create a map of contract slugs to IDs
  const contractMap = new Map(
    contracts.map((contract) => [contract.slug, contract.id]),
  )

  payload.logger.info(`— Seeding availability...`)
  const availability = await Promise.all(
    availabilitiesIndex.map((availability) =>
      payload.create({
        collection: 'availability',
        data: availability,
      }),
    ),
  )

  // Create a map of availability slugs to IDs
  const availabilityMap = new Map(
    availability.map((status) => [status.slug, status.id]),
  )

  payload.logger.info(`— Seeding amenities...`)
  const amenities = await Promise.all(
    amenitiesIndex.map((amenity) =>
      payload.create({
        collection: 'amenities',
        data: amenity,
      }),
    ),
  )

  // Create a map of amenity slugs to IDs
  const amenityMap = new Map(
    amenities.map((amenity) => [amenity.slug, amenity.id]),
  )

  payload.logger.info(`— Seeding properties`)

  // Create properties sequentially to maintain order
  for (const property of propertiesIndex) {
    const propertyKey = Object.keys(propertiesDepthZero).find(
      (key) => propertiesDepthZero[key]?.title === property.title,
    )

    if (!propertyKey) {
      throw new Error(
        `Property "${property.title}" not found in depth zero data`,
      )
    }

    const relationships = propertiesRelationships[propertyKey]
    if (!relationships) {
      throw new Error(
        `Property "${property.title}" not found in relationships data`,
      )
    }

    const contractIds = relationships.contract.map((contract) => {
      const id = contractMap.get(contract.slug)
      if (!id) throw new Error(`Contract "${contract.slug}" not found`)
      return id
    })

    const availabilityIds = relationships.availability.map((status) => {
      const id = availabilityMap.get(status.slug)
      if (!id) throw new Error(`Availability "${status.slug}" not found`)
      return id
    })

    const classificationIds = relationships.classification.map(
      (classification) => {
        const id = classificationMap.get(classification.slug)
        if (!id)
          throw new Error(`Classification "${classification.slug}" not found`)
        return id
      },
    )

    const amenityIds = relationships.amenities.map((amenity) => {
      const id = amenityMap.get(amenity.slug)
      if (!id) throw new Error(`Amenity "${amenity.slug}" not found`)
      return id
    })

    const propertyData = JSON.parse(
      JSON.stringify({
        ...property,
        contract: contractIds,
        availability: availabilityIds,
        classification: classificationIds,
        amenities: amenityIds,
        categories: property.categories?.map((category) => {
          if (category.relationTo === 'contracts') {
            return {
              ...category,
              value: contractIds[0],
            }
          }
          if (category.relationTo === 'classifications') {
            return {
              ...category,
              value: classificationIds[0],
            }
          }
          return category
        }),
      })
        // Replace image placeholders with actual media IDs
        .replace(
          /"image":\s*"\{\{WATERFRONT_APARTMENT_MAIN\}\}"/g,
          `"image": ${mediaItems.get(PROPERTY_IMAGES.WATERFRONT_APARTMENT.MAIN)}`,
        )
        .replace(
          /"image":\s*"\{\{WATERFRONT_APARTMENT_LIVING\}\}"/g,
          `"image": ${mediaItems.get(PROPERTY_IMAGES.WATERFRONT_APARTMENT.LIVING_ROOM)}`,
        )
        .replace(
          /"image":\s*"\{\{FAMILY_HOME_MAIN\}\}"/g,
          `"image": ${mediaItems.get(PROPERTY_IMAGES.FAMILY_HOME.MAIN)}`,
        )
        .replace(
          /"image":\s*"\{\{FAMILY_HOME_GARDEN\}\}"/g,
          `"image": ${mediaItems.get(PROPERTY_IMAGES.FAMILY_HOME.GARDEN)}`,
        )
        .replace(
          /"image":\s*"\{\{FAMILY_HOME_INTERIOR\}\}"/g,
          `"image": ${mediaItems.get(PROPERTY_IMAGES.FAMILY_HOME.INTERIOR)}`,
        ),
    )

    await payload.create({
      collection: 'properties',
      data: propertyData,
    })
  }

  payload.logger.info(`✓`)

  payload.logger.info(`✓ Real Estate Group Data Seeded`)
}

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}
