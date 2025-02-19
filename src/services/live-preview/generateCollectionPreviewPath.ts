import type { CollectionSlug } from 'payload'

import { PREVIEW_ENABLED_COLLECTIONS } from '@services/control-board'

// Explicit prefix configuration
const collectionPrefixOverrides: Record<string, string> = {
  pages: '', // No prefix for pages; Overrides '/pages' to '/'
  // Add other exceptions here, e.g.,
  // products: '/shop',
}

// Dynamic collection prefix map
const collectionPrefixMap: Partial<Record<CollectionSlug, string>> =
  PREVIEW_ENABLED_COLLECTIONS.reduce((acc, collection) => {
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
}

export const generateCollectionPreviewPath = ({ collection, slug }: Props) => {
  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path: `${collectionPrefixMap[collection]}/${slug}`,
    previewSecret: process.env.PREVIEW_SECRET || 'DUNE_3',
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
