import type { CollectionSlug, PayloadRequest } from 'payload'

import { PREVIEWABLE_COLLECTIONS } from '@services/control-board'

// Explicit prefix configuration
const collectionPrefixOverrides: Record<string, string> = {
  pages: '', // No prefix for pages
  posts: '/blog', // Override 'posts' to use '/blog'
  // Add other exceptions here, e.g.,
  // products: '/shop',
}

// Dynamic collection prefix map
const collectionPrefixMap: Partial<Record<CollectionSlug, string>> =
  PREVIEWABLE_COLLECTIONS.reduce((acc, collection) => {
    const override = collectionPrefixOverrides[collection]
    const prefix = override !== undefined ? override : `/${collection}`
    return {
      ...acc,
      [collection]: prefix,
    }
  }, {})

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
}

export const generateCollectionPreviewPath = ({
  collection,
  slug,
  req,
}: Props) => {
  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path: `${collectionPrefixMap[collection]}/${slug}`,
    previewSecret: process.env.PREVIEW_SECRET || 'DUNE_3',
  })

  const isProduction =
    process.env.NODE_ENV === 'production' ||
    Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL)

  const protocol = isProduction ? 'https:' : req.protocol

  const url = `${protocol}//${req.host}/next/preview?${encodedParams.toString()}`

  return url
}
