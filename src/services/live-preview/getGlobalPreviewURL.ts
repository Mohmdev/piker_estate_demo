import { generateGlobalPreviewPath } from '@services/live-preview/generateGlobalPreviewPath'
import type { GeneratePreviewURL, GlobalSlug } from 'payload'

export const getGlobalPreviewURL = (global: GlobalSlug): GeneratePreviewURL => {
  return () => {
    return generateGlobalPreviewPath({
      global,
      slug: global, // For globals, slug is same as global name
    })
  }
}
