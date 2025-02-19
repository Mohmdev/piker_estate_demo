import { generateCollectionPreviewPath } from '@services/live-preview/generateCollectionPreviewPath'

import type { CollectionSlug, LivePreviewConfig } from 'payload'

export const getCollectionLivePreviewURL = (
  collection: CollectionSlug,
): LivePreviewConfig => ({
  url: ({ data }) => {
    const path = generateCollectionPreviewPath({
      slug: typeof data?.slug === 'string' ? data.slug : '',
      collection,
    })

    return path
  },
})
