import { getCachedGlobalWithSelect } from '@data/getGlobalWithSelect'
import type { GlobalSetting } from '@payload-types'

export type DynamicMeta = {
  siteName: string
  siteDescription: string
  favicon?: {
    url: string
  }
}

export const getDynamicMeta = async (): Promise<DynamicMeta> => {
  const globaldata: GlobalSetting = await getCachedGlobalWithSelect(
    'global-settings',
    {
      depth: 1,
      select: {
        branding: { favicon: true },
        siteIdentity: {
          siteName: true,
          siteDescription: true,
        },
      },
    },
  )()

  const { siteName: cachedSiteName, siteDescription: cachedSiteDescription } =
    globaldata.siteIdentity || {}
  const favicon = globaldata.branding?.favicon

  return {
    siteName: cachedSiteName || 'Webora Estates - Property Management Platform',
    siteDescription:
      cachedSiteDescription ||
      'Enterprise-grade real estate management platform for property listings, tenant management, and portfolio operations.',
    favicon:
      favicon && typeof favicon === 'object' && 'url' in favicon && favicon.url
        ? { url: favicon.url }
        : undefined,
  }
}
