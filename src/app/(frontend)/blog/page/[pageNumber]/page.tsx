import type { CardPostData } from '@components/Card'
import { CollectionArchive } from '@components/CollectionArchive'
import { PageRange } from '@components/PageRange'
import { Pagination } from '@components/Pagination'
import { getDynamicMeta } from '@data/getDynamicMeta'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  const blogPosts = await payload.find({
    collection: 'blog',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange
          collection="blog"
          currentPage={blogPosts.page}
          limit={12}
          totalDocs={blogPosts.totalDocs}
        />
      </div>

      <CollectionArchive posts={blogPosts.docs as CardPostData[]} />

      <div className="container">
        {blogPosts?.page && blogPosts?.totalPages > 1 && (
          <Pagination page={blogPosts.page} totalPages={blogPosts.totalPages} />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  const { siteName } = await getDynamicMeta()
  return {
    title: `Blog - Page ${pageNumber || ''} | ${siteName}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'blog',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 10)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
