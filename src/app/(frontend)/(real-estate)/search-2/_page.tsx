import { getDynamicMeta } from '@data/getDynamicMeta'
import configPromise from '@payload-config'
import { getQueryClient } from '@providers/tanstack/get-query-client'
import { mergeOpenGraph } from '@services/seo/mergeOpenGraph'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { type Where, getPayload } from 'payload'
import React from 'react'
import { FiltersProvider } from './components/filters-context'
import { SearchPageClient } from './page.client'

export const getProperties = async ({
  where,
  limit = 12,
  page = 1,
  sort = '-createdAt',
}: {
  where?: Where
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
    depth: 1,
    where,
  })

  return result
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Create a new query client for server-side prefetching
  const queryClient = getQueryClient()

  // Prefetch the initial data
  await queryClient.prefetchQuery({
    queryKey: ['properties'],
    queryFn: () =>
      getProperties({
        limit: 12,
        where: {
          _status: {
            equals: 'published',
          },
        },
      }),
  })

  // Dehydrate the query cache and pass it to the client
  const dehydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={dehydratedState}>
      <FiltersProvider>
        {/* @ts-ignore - Component prop types */}
        <SearchPageClient searchParams={searchParams} />
      </FiltersProvider>
    </HydrationBoundary>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { siteName, siteDescription } = await getDynamicMeta()
  const title = `Properties | ${siteName}`

  return {
    title,
    description: siteDescription,
    openGraph: await mergeOpenGraph(
      {
        title,
        description: siteDescription,
        url: '/search',
      },
      {
        siteName,
        description: siteDescription,
      },
    ),
  }
}
