import { getDynamicMeta } from '@data/getDynamicMeta'
import { getServerSideURL } from '@data/getURL'
import { seoPlugin } from '@payloadcms/plugin-seo'
import type {
  GenerateDescription,
  GenerateTitle,
  GenerateURL,
} from '@payloadcms/plugin-seo/types'
import type { Plugin } from 'payload'

const generateTitle: GenerateTitle = async ({ doc }) => {
  const { siteName } = await getDynamicMeta()

  const title = doc?.title ? `${doc.title} | ${siteName}` : siteName

  if (!title) return ''

  return title
}

const generateURL: GenerateURL = ({ doc }) => {
  const baseURL = getServerSideURL()
  const url = doc?.slug ? `${baseURL}/${doc.slug}` : baseURL

  if (!url) return ''

  return url
}

const generateDescription: GenerateDescription = async ({ doc }) => {
  const { siteDescription } = await getDynamicMeta()

  if (!doc?.description) return siteDescription ?? null

  // Handle Lexical structure
  const description = doc.description
  if (typeof description === 'object' && description.root?.children) {
    const text = description.root.children
      .map(
        (child: {
          type: string
          children?: { type: string; text?: string }[]
        }) => {
          if (child.type === 'paragraph') {
            return child.children
              ?.map((textNode) =>
                textNode.type === 'text' ? textNode.text : '',
              )
              .join('')
          }
          return ''
        },
      )
      .join(' ')
      .trim()

    return text || null
  }

  if (!description) return null

  return description
}

export const seoService: Plugin = seoPlugin({
  generateTitle,
  generateURL,
  generateDescription,
})
