import config from '@payload-config'
import { mockAmenities } from '@services/seed/properties/mock-data/amenities'
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

  for (const amenity of mockAmenities) {
    try {
      // Check if amenity already exists
      const existingAmenity = await payload.find({
        collection: 'amenities',
        where: {
          slug: { equals: amenity.slug },
        },
      })

      if (existingAmenity.docs.length === 0) {
        await payload.create({
          collection: 'amenities',
          data: {
            _status: 'published',
            title: amenity.title,
            slug: amenity.slug,
          },
        })
        payload.logger.info(`✓ Created amenity "${amenity.title}"`)
      } else {
        payload.logger.info(
          `Amenity "${amenity.title}" already exists, skipping...`,
        )
      }
    } catch (error) {
      payload.logger.error(`Error creating amenity "${amenity.title}":`, error)
      throw error
    }
  }

  return Response.json({ success: true })
}

// const createAmenities = async ({ payload, req }): Promise<void> => {
//   for (const amenity of mockAmenities) {
//     try {
//       // Check if style already exists
//       const existingAmenity = await payload.find({
//         collection: 'amenities',
//         where: {
//           slug: { equals: amenity.slug },
//         },
//       })

//       if (existingAmenity.docs.length === 0) {
//         await payload.create({
//           req,
//           collection: 'amenities',
//           data: {
//             _status: 'published',
//             title: amenity.title,
//             slug: amenity.slug,
//           },
//           overrideLock: true,
//         })
//         payload.logger.info(`✓ Created amenity "${amenity.title}"`)
//       } else {
//         payload.logger.info(
//           `Amenity "${amenity.title}" already exists, skipping...`,
//         )
//       }
//     } catch (error) {
//       payload.logger.error(`Error creating amenity "${amenity.title}":`, error)
//       throw error
//     }
//   }
// }
