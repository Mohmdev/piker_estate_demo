import { generateCollectionPreviewPath } from '@services/live-preview/generateCollectionPreviewPath'

import type { CollectionSlug, GeneratePreviewURL, GlobalSlug } from 'payload'
import { generateGlobalPreviewPath } from './generateGlobalPreviewPath'

export const getPreviewUrl = (
  collection: CollectionSlug,
): GeneratePreviewURL => {
  return (data, { req }) => {
    return generateCollectionPreviewPath({
      slug: typeof data?.slug === 'string' ? data.slug : '',
      collection,
      req,
    })
  }
}

export const getGlobalPreviewUrl = (global: GlobalSlug): GeneratePreviewURL => {
  return (data, { req }) => {
    return generateGlobalPreviewPath({
      global,
      slug: typeof data?.slug === 'string' ? data.slug : '',
      req,
    })
  }
}
