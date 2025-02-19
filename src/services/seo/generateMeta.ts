import { getDynamicMeta } from '@data/getDynamicMeta'
import { getServerSideURL } from '@data/getURL'
import type {
  Amenity,
  Availability,
  Blog,
  Classification,
  Contract,
  Page,
  Project,
  Property,
} from '@payload-types'
import type { Metadata } from 'next'
import { mergeOpenGraph } from './mergeOpenGraph'

export const generateMeta = async (args: {
  doc:
    | Partial<Page>
    | Partial<Blog>
    | Partial<Property>
    | Partial<Project>
    | Partial<Classification>
    | Partial<Availability>
    | Partial<Amenity>
    | Partial<Contract>
}): Promise<Metadata> => {
  const { doc } = args || {}

  const { siteName, siteDescription } = await getDynamicMeta()

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    doc.meta.image.url
      ? `${getServerSideURL()}${doc.meta.image.url}`
      : undefined

  // Base OpenGraph configuration
  const openGraphBase = mergeOpenGraph(
    {
      siteName: siteName,
      title: siteName,
      description: siteDescription,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    {
      siteName,
      description: siteDescription,
    },
  )

  // Special handling for homepage
  if (doc?.slug === 'home') {
    return {
      title: siteName,
      description: siteDescription,
      openGraph: {
        ...openGraphBase,
        url: '/', // Ensure homepage URL is always '/'
        type: 'website',
      },
      alternates: {
        canonical: '/',
      },
    }
  }

  if (doc?.slug === 'blog') {
    return {
      title: `Blog | ${siteName}`,
      description: 'Browse all posts.',
      openGraph: {
        ...openGraphBase,
        title: `Blog | ${siteName}`,
        description: 'Browse all posts.',
        url: '/blog',
      },
    }
  }

  if (doc?.slug === 'search') {
    return {
      title: `Search | ${siteName}`,
      description: 'Search across our site',
      openGraph: {
        ...openGraphBase,
        title: `Search | ${siteName}`,
        description: 'Search across our site',
        url: '/search',
      },
    }
  }

  // All other docs
  const documentTitle = doc?.meta?.title
    ? `${doc.meta.title} | ${siteName}`
    : `${doc?.title} | ${siteName}` || siteName
  const documentDescription = doc?.meta?.description || siteDescription
  const documentUrl = doc?.slug
    ? Array.isArray(doc.slug)
      ? doc.slug.join('/')
      : 'collection' in doc
        ? `/${doc.collection}/${doc.slug}`
        : `/${doc.slug}`
    : '/'

  return {
    title: documentTitle,
    description: documentDescription,
    openGraph: {
      ...openGraphBase,
      title: documentTitle,
      description: documentDescription,
      url: documentUrl,
    },
  }
}
