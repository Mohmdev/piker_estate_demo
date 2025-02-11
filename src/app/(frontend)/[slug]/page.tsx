import { RenderBlocks } from '@CMS/blocks/RenderBlocks'
import { LivePreviewListener } from '@components/LivePreviewListener'
import { PayloadRedirects } from '@components/PayloadRedirects'
import { getDynamicMeta } from '@data/getDynamicMeta'
import { getPageBySlug } from '@data/getPage'
import { RenderHero } from '@heros/RenderHero'
import configPromise from '@payload-config'
import type { Page as PageType } from '@payload-types'
import { homeStatic } from '@services/seed/general-site-data/home-static'
import { generateMeta } from '@services/seo/generateMeta'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  let page: Partial<PageType> | null

  page = await getPageBySlug({
    slug,
  })

  if (!page && slug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { heros, blocks } = page

  return (
    <article className="flex-1 flex flex-col justify-center">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...heros} />
      <RenderBlocks blocks={blocks} />
    </article>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise

  let page: Partial<PageType> | null = await getPageBySlug({ slug })

  // Handle homepage case
  if (!page && slug === 'home') {
    page = homeStatic
  }

  // Handle 404 case
  if (!page) {
    const { siteName, siteDescription } = await getDynamicMeta()
    return {
      title: `Not Found | ${siteName}`,
      description: siteDescription,
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return generateMeta({ doc: page })
}
