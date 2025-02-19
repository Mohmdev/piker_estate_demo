import { RelatedDocs } from '@CMS/blocks/RelatedDocs/Component'
import { BlogHero } from '@CMS/heros/Blog'
import { LivePreviewListener } from '@components/LivePreviewListener'
import { PayloadRedirects } from '@components/PayloadRedirects'
import RichText from '@components/RichText'
import { getDynamicMeta } from '@data/getDynamicMeta'
import { getAvailabilityBySlug } from '@data/real-estate/getAvailability'
import configPromise from '@payload-config'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { generateMeta } from '@services/seo/generateMeta'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const availabilities = await payload.find({
    collection: 'availability',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = availabilities.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function AvailabilityPost({
  params: paramsPromise,
}: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/availability/' + slug
  const availability = await getAvailabilityBySlug({ slug })

  if (!availability) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <BlogHero post={availability} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <RichText
            className="max-w-[48rem] mx-auto"
            data={availability.description as SerializedEditorState}
            enableGutter={false}
          />
          {availability.relatedDocs && availability.relatedDocs.length > 0 && (
            <RelatedDocs
              className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
              docs={availability.relatedDocs.filter(
                (relatedDoc) => typeof relatedDoc === 'object',
              )}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const availability = await getAvailabilityBySlug({ slug })

  if (!availability) {
    const { siteName, siteDescription } = await getDynamicMeta()
    return {
      title: `Not Found | ${siteName}`,
      description: siteDescription,
    }
  }

  return generateMeta({ doc: availability })
}
