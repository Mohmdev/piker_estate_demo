import type { Metadata } from 'next/types'

import { CollectionArchive } from '@components/CollectionArchive'
import { PageRange } from '@components/PageRange'
import { Pagination } from '@components/Pagination'
import { getDynamicMeta } from '@data/getDynamicMeta'
import { getPaginatedPosts } from '@data/getPost'
import { mergeOpenGraph } from '@services/seo/mergeOpenGraph'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const posts = await getPaginatedPosts()
  const { docs, totalDocs, totalPages, page } = posts

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Blog</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={page}
          limit={12}
          totalDocs={totalDocs}
        />
      </div>

      {posts && totalDocs > 0 ? (
        <CollectionArchive posts={docs} />
      ) : (
        <p className="text-sm text-muted-foreground prose">Blog is empty.</p>
      )}

      <div className="container">
        {totalPages > 1 && page && <Pagination page={page} totalPages={totalPages} />}
      </div>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { siteName, siteDescription } = await getDynamicMeta()
  const title = `Blog | ${siteName}`

  return {
    title,
    description: siteDescription,
    openGraph: mergeOpenGraph(
      {
        title,
        description: siteDescription,
        url: '/blog',
      },
      {
        siteName,
        description: siteDescription,
      },
    ),
  }
}
