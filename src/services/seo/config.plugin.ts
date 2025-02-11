import { getDynamicMeta } from '@data/getDynamicMeta'
import { getServerSideURL } from '@data/getURL'
import { seoPlugin } from '@payloadcms/plugin-seo'
import type { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import type { Plugin } from 'payload'

const generateTitle: GenerateTitle = async ({ doc }) => {
  const { siteName } = await getDynamicMeta()

  return doc?.title ? `${doc.title} | ${siteName}` : siteName
}

const generateURL: GenerateURL = ({ doc }) => {
  const url = getServerSideURL()
  return doc?.slug ? `${url}/${doc.slug}` : url
}

export type GenerateTitle2<T = unknown> = (args: {
  doc: T
  locale?: string
}) => Promise<string> | string

export const seoService: Plugin = seoPlugin({
  generateTitle,
  generateURL,
})
