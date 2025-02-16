import config from '@payload-config'
import { mockContracts } from '@services/seed/realestate-group/contracts'
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

  for (const contract of mockContracts) {
    try {
      // Check if contract already exists
      const existingContract = await payload.find({
        collection: 'contracts',
        where: {
          slug: { equals: contract.slug },
        },
      })

      if (existingContract.docs.length === 0) {
        await payload.create({
          collection: 'contracts',
          data: {
            _status: 'published',
            title: contract.title,
            slug: contract.slug,
          },
        })
        createdCount++
      }
    } catch (error) {
      payload.logger.error(
        `Error creating contract "${contract.title}":`,
        error,
      )
      throw error
    }
  }

  if (createdCount > 0) {
    payload.logger.info(`✓ Successfully seeded ${createdCount} contracts.`)
  } else {
    payload.logger.info(`No new contracts were seeded.`)
  }

  return Response.json({ success: true })
}
