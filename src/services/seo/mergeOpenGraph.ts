import { getDynamicMeta } from '@data/getDynamicMeta'
import { getServerSideURL } from '@data/getURL'
import type { Metadata } from 'next'

const defaultImage = `${getServerSideURL()}/assets/website-template-OG.webp`

export const mergeOpenGraph = async (
  og?: Metadata['openGraph'],
  defaults: {
    siteName: string
    description: string
  } = {
    siteName: 'Nexweb - Modern Web Development Platform',
    description:
      'Nexweb is a modern web development platform that lets you build, deploy, and scale websites and web applications with ease.',
  },
): Promise<Metadata['openGraph']> => {
  const { siteName, siteDescription } = await getDynamicMeta()

  const defaultOpenGraph: Metadata['openGraph'] = {
    type: 'website',
    description: siteDescription || defaults.description || '',
    images: [{ url: defaultImage }],
    siteName: siteName || defaults.siteName || '',
    title: siteName || defaults.siteName || '',
  }

  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
