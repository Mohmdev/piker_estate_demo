import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache } from 'react'
import type { QueryResults } from './types'

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
              // {
              //   title: {
              //     like: query,
              //   },
              // },
              {
                'taxonomies.amenities.label': {
                  like: query,
                },
              },
              {
                'meta.price': {
                  like: query,
                },
              },
              // {
              //   slug: {
              //     like: query,
              //   },
              // },
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

export const preFetchProperties = cache(async () => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const unPaginatedResult = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    overrideAccess: draft,
    draft,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return unPaginatedResult
})
