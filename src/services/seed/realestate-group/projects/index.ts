import type { File, Payload, PayloadRequest } from 'payload'
import { mockProjects } from './projects'

export const seedProjects = async ({
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
  const classifications = await Promise.all(
    mockClassifications.map((type) =>
      payload.create({
        collection: 'classifications',
        data: type,
      }),
    ),
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

  payload.logger.info(`— Seeding listing status...`)
  const availability = await Promise.all(
    mockAvailability.map((status) =>
      payload.create({
        collection: 'availability',
        data: status,
      }),
    ),
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
            `"propertyType": ${classifications[0].id}`,
          )
          .replace('"listingType": 1', `"listingType": ${contracts[0].id}`)
          .replace(
            '"listingStatus": 1',
            `"listingStatus": ${availability[0].id}`,
          )
          .replace(
            '"features": []',
            `"features": [${amenities[0].id}, ${amenities[1].id}]`,
          )
          // Replace relationship values
          .replace(/"value": 1/g, `"value": ${classifications[0].id}`)
          .replace(/"value": 2/g, `"value": ${contracts[0].id}`),
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
