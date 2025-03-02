import { LivePreviewListener } from '@components/LivePreviewListener'
import { PayloadRedirects } from '@components/PayloadRedirects'
import { getDynamicMeta } from '@data/getDynamicMeta'
import { getPropertyBySlug } from '@data/real-estate/getProperty'
import configPromise from '@payload-config'
import { generateMeta } from '@services/seo/generateMeta'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { useParams } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import SingleListingClient from './page.client'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function SingleListing({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/search/' + slug
  const property = await getPropertyBySlug({ slug })

  if (!property) return <PayloadRedirects url={url} />

  return (
    <>
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <SingleListingClient />
    </>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const properties = await payload.find({
    collection: 'properties',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = properties.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const property = await getPropertyBySlug({ slug })

  if (!property) {
    const { siteName, siteDescription } = await getDynamicMeta()
    return {
      title: `Not Found | ${siteName}`,
      description: siteDescription,
    }
  }

  return generateMeta({ doc: property })
}
