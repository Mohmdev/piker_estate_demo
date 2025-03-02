import { getDynamicMeta } from '@data/getDynamicMeta'
import { getProperties } from '@data/real-estate/getProperty'
import { getQueryClient } from '@providers/tanstack/get-query-client'
import { mergeOpenGraph } from '@services/seo/mergeOpenGraph'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { Metadata } from 'next'
import React from 'react'
import { FiltersProvider } from './components/filters-context'
import { SearchPageClient } from './page.client'

export default async function SearchPage(
  // {
  //   searchParams,
  // }: {
  //   searchParams: { [key: string]: string | string[] | undefined }
  // }
) {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['properties'],
    queryFn: () =>
      getProperties({
        limit: 12,
      }),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FiltersProvider>
        <SearchPageClient
        //  searchParams={searchParams}
        />
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
