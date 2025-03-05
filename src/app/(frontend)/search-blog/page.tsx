import { CardPostData } from '@components/Card'
import { CollectionArchive } from '@components/CollectionArchive'
import { getDynamicMeta } from '@data/getDynamicMeta'
import { queryPosts } from '@data/getPost'
import { SearchInput } from '@services/search/SearchInput'
import { mergeOpenGraph } from '@services/seo/mergeOpenGraph'
import type { Metadata } from 'next/types'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-dynamic'

type Args = {
  searchParams: Promise<{
    q?: string
  }>
}
export default async function Page({ searchParams }: Args) {
  const { q: query } = await searchParams
  const searchQuery = await queryPosts(query)

  const { results: posts, totalDocs } = searchQuery

  return (
    <>
      <PageClient />
      <div className="my-24 container flex-1 flex flex-col items-center justify-start gap-4">
        <h1 className="prose dark:prose-invert w-full text-center text-2xl">
          Search
        </h1>

        <SearchInput className="max-w-[30rem] mx-auto w-full mb-6" />

        {totalDocs > 0 ? (
          <CollectionArchive
            posts={posts as CardPostData[]}
            className="px-0!"
          />
        ) : (
          <p className="text-muted-foreground font-normal mx-auto">
            No results found.
          </p>
        )}
      </div>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { siteName, siteDescription } = await getDynamicMeta()
  const title = `Search | ${siteName}`

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
