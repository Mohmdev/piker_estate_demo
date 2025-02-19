import { generateGlobalPreviewPath } from '@services/live-preview/generateGlobalPreviewPath'
import type { GlobalSlug, LivePreviewConfig } from 'payload'

export const getGlobalLivePreviewURL = (
  global: GlobalSlug,
): LivePreviewConfig => ({
  url: () => {
    return generateGlobalPreviewPath({
      global,
      slug: global, // For globals, slug is same as global name
    })
  },
})
