import { LivePreviewListener } from '@components/LivePreviewListener'
import { PayloadRedirects } from '@components/PayloadRedirects'
import { getDynamicMeta } from '@data/getDynamicMeta'
import { getPropertyBySlug } from '@data/real-estate/getProperty'
import configPromise from '@payload-config'
import { getQueryClient } from '@providers/tanstack/get-query-client'
import { generateMeta } from '@services/seo/generateMeta'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import React from 'react'
import SingleListingClient from './page.client'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function SingleListing({ params: paramsPromise }: Args) {
  const queryClient = getQueryClient()
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise

  await queryClient.prefetchQuery({
    queryKey: ['properties', slug],
    queryFn: () =>
      getPropertyBySlug({
        slug,
      }),
  })

  return (
    <>
      <PayloadRedirects disableNotFound url="/search" />
      {draft && <LivePreviewListener />}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SingleListingClient />
      </HydrationBoundary>
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
