import { generateCollectionPreviewPath } from '@services/live-preview/generateCollectionPreviewPath'

import type { CollectionSlug, GeneratePreviewURL } from 'payload'

export const getCollectionPreviewURL = (
  collection: CollectionSlug,
): GeneratePreviewURL => {
  return (data) => {
    return generateCollectionPreviewPath({
      slug: typeof data?.slug === 'string' ? data.slug : '',
      collection,
    })
  }
}
