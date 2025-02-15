import type { File, Payload, PayloadRequest } from 'payload'
import { mockAmenities } from './mock-data/amenities'
import { mockAvailability } from './mock-data/availability'
import { mockClassifications } from './mock-data/classifications'
import { mockContracts } from './mock-data/contracts'
import {
  mockProperties,
  propertyMetadata,
} from './mock-data/properties/index.dubai'

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

export const seedProperties = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('⤷ Script starting...')

  payload.logger.info(`— Clearing properties`)

  // Clear all collections
  await Promise.all([
    payload.db.deleteMany({
      collection: 'properties',
      req,
      where: {},
    }),
    payload.db.deleteMany({
      collection: 'classifications',
      req,
      where: {},
    }),
    payload.db.deleteMany({
      collection: 'contracts',
      req,
      where: {},
    }),
    payload.db.deleteMany({
      collection: 'availability',
      req,
      where: {},
    }),
    payload.db.deleteMany({
      collection: 'amenities',
      req,
      where: {},
    }),
  ])

  await Promise.all([
    payload.db.deleteVersions({
      collection: 'properties',
      req,
      where: {},
    }),
    payload.db.deleteVersions({
      collection: 'classifications',
      req,
      where: {},
    }),
    payload.db.deleteVersions({
      collection: 'contracts',
      req,
      where: {},
    }),
    payload.db.deleteVersions({
      collection: 'availability',
      req,
      where: {},
    }),
    payload.db.deleteVersions({
      collection: 'amenities',
      req,
      where: {},
    }),
  ])
  payload.logger.info(`✓`)

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

  payload.logger.info(`— Seeding property types...`)
  const classifications = await Promise.all(
    mockClassifications.map((type) =>
      payload.create({
        collection: 'classifications',
        data: type,
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

  payload.logger.info(`— Seeding listing types...`)
  const contracts = await Promise.all(
    mockContracts.map((type) =>
      payload.create({
        collection: 'contracts',
        data: type,
      }),
    ),
  )

  // Create a map of contract slugs to IDs
  const contractMap = new Map(
    contracts.map((contract) => [contract.slug, contract.id]),
  )

  payload.logger.info(`— Seeding listing status...`)
  const availability = await Promise.all(
    mockAvailability.map((status) =>
      payload.create({
        collection: 'availability',
        data: status,
      }),
    ),
  )

  // Create a map of availability slugs to IDs
  const availabilityMap = new Map(
    availability.map((status) => [status.slug, status.id]),
  )

  payload.logger.info(`— Seeding features...`)
  const amenities = await Promise.all(
    mockAmenities.map((feature) =>
      payload.create({
        collection: 'amenities',
        data: feature,
      }),
    ),
  )

  // Create a map of amenity slugs to IDs
  const amenityMap = new Map(
    amenities.map((amenity) => [amenity.slug, amenity.id]),
  )

  payload.logger.info(`— Seeding properties`)

  // Ensure we have all required related records
  if (
    !classifications[0] ||
    !contracts[0] ||
    !availability[0] ||
    !amenities[0] ||
    !amenities[1]
  ) {
    throw new Error('Failed to create required related records')
  }

  // Create properties sequentially to maintain order
  for (const property of mockProperties) {
    const propertyTitle = property.title
    if (
      !propertyTitle ||
      !(propertyTitle in propertyMetadata.contractMappings) ||
      !(propertyTitle in propertyMetadata.availabilityMappings) ||
      !(propertyTitle in propertyMetadata.classificationMappings) ||
      !(propertyTitle in propertyMetadata.amenityMappings)
    ) {
      throw new Error(`Property "${propertyTitle}" not found in mappings`)
    }

    const contractSlug =
      propertyMetadata.contractMappings[
        propertyTitle as keyof typeof propertyMetadata.contractMappings
      ]
    const availabilitySlug =
      propertyMetadata.availabilityMappings[
        propertyTitle as keyof typeof propertyMetadata.availabilityMappings
      ]
    const classificationSlug =
      propertyMetadata.classificationMappings[
        propertyTitle as keyof typeof propertyMetadata.classificationMappings
      ]
    const amenitySlugs =
      propertyMetadata.amenityMappings[
        propertyTitle as keyof typeof propertyMetadata.amenityMappings
      ]

    const contractId = contractMap.get(contractSlug)
    const availabilityId = availabilityMap.get(availabilitySlug)
    const classificationId = classificationMap.get(classificationSlug)
    const amenityIds = amenitySlugs
      .map((slug) => amenityMap.get(slug))
      .filter(Boolean)

    if (
      !contractId ||
      !availabilityId ||
      !classificationId ||
      amenityIds.length !== amenitySlugs.length
    ) {
      throw new Error(
        `Could not find all required IDs for property "${propertyTitle}"`,
      )
    }

    const propertyData = JSON.parse(
      JSON.stringify({
        ...property,
        contract: contractId,
        availability: availabilityId,
        classification: [classificationId],
        amenities: amenityIds,
        categories: property.categories?.map((category) => {
          if (category.relationTo === 'contracts') {
            return {
              ...category,
              value: contractId,
            }
          }
          if (category.relationTo === 'classifications') {
            return {
              ...category,
              value: classificationId,
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
        )
        // Replace the placeholder IDs with actual IDs
        .replace(
          '"classification": [1]',
          `"classification": [${classifications[0].id}]`,
        )
        .replace('"availability": 1', `"availability": ${availability[0].id}`)
        .replace(
          '"amenities": []',
          `"amenities": [${amenities[0].id}, ${amenities[1].id}]`,
        )
        // Replace other relationship values
        .replace(/"value": 1/g, `"value": ${classifications[0].id}`),
    )

    await payload.create({
      collection: 'properties',
      data: propertyData,
    })
  }

  payload.logger.info(`✓`)

  payload.logger.info(`✓ Properties seeded`)
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
