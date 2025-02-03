import type { Metadata } from 'next'

import { PayloadRedirects } from '@components/PayloadRedirects'
import configPromise from '@payload-config'
import { homeStatic } from '@services/seed/general-site-data/home-static'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import type { Page as PageType } from '@payload-types'

import { RenderBlocks } from '@CMS/blocks/RenderBlocks'
import { LivePreviewListener } from '@components/LivePreviewListener'
import { RenderHero } from '@heros/RenderHero'

import { getDynamicMeta } from '@data/getDynamicMeta'
import { getPageBySlug } from '@data/getPage'
import { generateMeta } from '@services/seo/generateMeta'
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

  let page: PageType | null

  page = await getPageBySlug({
    slug,
  })

  if (!page && slug === 'home') {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className="pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
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

  let page = await getPageBySlug({ slug })

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
