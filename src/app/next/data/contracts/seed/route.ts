import config from '@payload-config'
import { contractsIndex } from '@services/seed/realestate-group/contracts'
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
  const createdContracts = new Map<number, number>() // Map mock ID to real ID

  // First pass: Create all root contracts (those without parents)
  for (const contract of contractsIndex) {
    if (!contract.parent) {
      try {
        const existingContract = await payload.find({
          collection: 'contracts',
          where: {
            slug: { equals: contract.slug },
          },
        })

        if (existingContract.docs.length === 0) {
          const created = await payload.create({
            collection: 'contracts',
            data: {
              _status: 'published',
              title: contract.title,
              description: contract.description,
              slug: contract.slug,
              slugLock: contract.slugLock,
              publishedAt: contract.publishedAt,
            },
          })
          if (contract.breadcrumbs?.[0]?.doc) {
            createdContracts.set(
              Number(contract.breadcrumbs[0].doc),
              created.id,
            )
          }
          createdCount++
        } else if (existingContract.docs[0] && contract.breadcrumbs?.[0]?.doc) {
          createdContracts.set(
            Number(contract.breadcrumbs[0].doc),
            existingContract.docs[0].id,
          )
        }
      } catch (error) {
        payload.logger.error(
          `Error creating root contract "${contract.title}":`,
          error,
        )
        throw error
      }
    }
  }

  // Second pass: Create all child contracts
  for (const contract of contractsIndex) {
    if (contract.parent) {
      try {
        const existingContract = await payload.find({
          collection: 'contracts',
          where: {
            slug: { equals: contract.slug },
          },
        })

        if (existingContract.docs.length === 0) {
          const realParentId = createdContracts.get(Number(contract.parent))
          if (!realParentId) {
            payload.logger.error(
              `Parent not found for contract "${contract.title}"`,
            )
            continue
          }

          const created = await payload.create({
            collection: 'contracts',
            data: {
              _status: 'published',
              title: contract.title,
              description: contract.description,
              slug: contract.slug,
              slugLock: contract.slugLock,
              publishedAt: contract.publishedAt,
              parent: realParentId,
            },
          })
          if (contract.breadcrumbs?.[1]?.doc) {
            createdContracts.set(
              Number(contract.breadcrumbs[1].doc),
              created.id,
            )
          }
          createdCount++
        }
      } catch (error) {
        payload.logger.error(
          `Error creating child contract "${contract.title}":`,
          error,
        )
        throw error
      }
    }
  }

  if (createdCount > 0) {
    payload.logger.info(`✓ Successfully seeded ${createdCount} contracts.`)
  } else {
    payload.logger.info(`No new contracts were seeded.`)
  }

  return Response.json({ success: true })
}
