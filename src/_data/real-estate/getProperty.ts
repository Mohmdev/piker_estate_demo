import type { QueryResults } from '@data/types'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'

export const getPropertyBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'properties',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export const getProperties = async ({
  where,
  limit = 12,
  page = 1,
  sort = '-createdAt',
}: {
  where?: Record<string, any>
  limit?: number
  page?: number
  sort?: string
}) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'properties',
    draft,
    limit,
    page,
    sort,
    where,
    depth: 1, // Load related data one level deep
  })

  return result
}

export const getPaginatedProperties = async () => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'properties',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return result
}

export const queryProperties = async (
  query: string | undefined,
): Promise<QueryResults> => {
  const payload = await getPayload({ config: configPromise })

  if (!query) {
    return { results: [], totalDocs: 0 }
  }

  const results = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    // pagination: false reduces overhead if you don't need totalDocs
    pagination: false,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  return {
    results: results.docs,
    totalDocs: results.totalDocs || 0,
  }
}
