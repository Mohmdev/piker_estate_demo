import type { File, Payload, PayloadRequest } from 'payload'
import { mockFeatures } from './mock-data/features'
import { mockListingStatus } from './mock-data/listing-status'
import { mockListingTypes } from './mock-data/listing-types'
import { mockProperties } from './mock-data/properties'
import { mockPropertyTypes } from './mock-data/property-types'

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
      collection: 'property-types',
      req,
      where: {},
    }),
    payload.db.deleteMany({
      collection: 'listing-types',
      req,
      where: {},
    }),
    payload.db.deleteMany({
      collection: 'listing-status',
      req,
      where: {},
    }),
    payload.db.deleteMany({
      collection: 'features',
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
      collection: 'property-types',
      req,
      where: {},
    }),
    payload.db.deleteVersions({
      collection: 'listing-types',
      req,
      where: {},
    }),
    payload.db.deleteVersions({
      collection: 'listing-status',
      req,
      where: {},
    }),
    payload.db.deleteVersions({
      collection: 'features',
      req,
      where: {},
    }),
  ])
  payload.logger.info(`✓`)

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer] = await Promise.all([
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
    ),
    fetchFileByURL(
      'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
    ),
  ])

  const [image1Doc, image2Doc, image3Doc] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'Property Image 1',
      },
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Property Image 2',
      },
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Property Image 3',
      },
      file: image3Buffer,
    }),
  ])

  let image1ID: number | string = image1Doc.id
  let image2ID: number | string = image2Doc.id
  let image3ID: number | string = image3Doc.id

  if (payload.db.defaultIDType === 'text') {
    image1ID = `"${image1Doc.id}"`
    image2ID = `"${image2Doc.id}"`
    image3ID = `"${image3Doc.id}"`
  }

  payload.logger.info(`— Seeding property types...`)
  const propertyTypes = await Promise.all(
    mockPropertyTypes.map((type) =>
      payload.create({
        collection: 'property-types',
        data: type,
      }),
    ),
  )

  payload.logger.info(`— Seeding listing types...`)
  const listingTypes = await Promise.all(
    mockListingTypes.map((type) =>
      payload.create({
        collection: 'listing-types',
        data: type,
      }),
    ),
  )

  payload.logger.info(`— Seeding listing status...`)
  const listingStatus = await Promise.all(
    mockListingStatus.map((status) =>
      payload.create({
        collection: 'listing-status',
        data: status,
      }),
    ),
  )

  payload.logger.info(`— Seeding features...`)
  const features = await Promise.all(
    mockFeatures.map((feature) =>
      payload.create({
        collection: 'features',
        data: feature,
      }),
    ),
  )

  payload.logger.info(`— Seeding properties`)

  // Ensure we have all required related records
  if (
    !propertyTypes[0] ||
    !listingTypes[0] ||
    !listingStatus[0] ||
    !features[0] ||
    !features[1]
  ) {
    throw new Error('Failed to create required related records')
  }

  // Create properties sequentially to maintain order
  for (const property of mockProperties) {
    await payload.create({
      collection: 'properties',
      data: JSON.parse(
        JSON.stringify(property)
          .replace(/"\{\{IMAGE_1\}\}"/g, String(image1ID))
          .replace(/"\{\{IMAGE_2\}\}"/g, String(image2ID))
          .replace(/"\{\{IMAGE_3\}\}"/g, String(image3ID))
          // Replace the placeholder IDs with actual IDs
          .replace(
            '"propertyType": 1',
            `"propertyType": ${propertyTypes[0].id}`,
          )
          .replace('"listingType": 1', `"listingType": ${listingTypes[0].id}`)
          .replace(
            '"listingStatus": 1',
            `"listingStatus": ${listingStatus[0].id}`,
          )
          .replace(
            '"features": []',
            `"features": [${features[0].id}, ${features[1].id}]`,
          )
          // Replace relationship values
          .replace(/"value": 1/g, `"value": ${propertyTypes[0].id}`)
          .replace(/"value": 2/g, `"value": ${listingTypes[0].id}`),
      ),
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
