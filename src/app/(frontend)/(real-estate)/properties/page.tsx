import { getDynamicMeta } from '@data/getDynamicMeta'
import type { Search } from '@payload-types'
import { mergeOpenGraph } from '@services/seo/mergeOpenGraph'
import type { Metadata } from 'next/types'
import React from 'react'
import { BasicArchive } from './components/listing-archive/basic-archive'
import { SearchInput } from './components/search-input'
import { preFetchProperties, queryProperties } from './data/properties'
import PageClient from './page.client'

export const dynamic = 'force-dynamic'

type Args = {
  searchParams: Promise<{
    q?: string
  }>
}

export default async function PropertiesArchive({ searchParams }: Args) {
  const { q: query } = await searchParams
  const searchQuery = await queryProperties(query)

  const { results: queryResults, totalDocs } = searchQuery

  const staticProperties = await preFetchProperties()

  return (
    <>
      <PageClient />
      <div className="my-24 container flex-1 flex flex-col items-center justify-start gap-4">
        <h1 className="prose dark:prose-invert w-full text-center text-2xl">
          Properties
        </h1>

        <SearchInput className="max-w-[30rem] mx-auto w-full mb-6" />

        {totalDocs > 0 ? (
          <BasicArchive records={queryResults as Search[]} className="px-0!" />
        ) : (
          <p className="text-muted-foreground font-normal mx-auto">
            No properties found.
          </p>
        )}

        <BasicArchive
          records={staticProperties.docs as Search[]}
          className="px-0!"
        />
      </div>
    </>
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
        url: '/properties',
      },
      {
        siteName,
        description: siteDescription,
      },
    ),
  }
}
