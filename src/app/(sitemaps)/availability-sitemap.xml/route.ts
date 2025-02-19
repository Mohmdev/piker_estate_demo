import config from '@payload-config'
import { getServerSideSitemap } from 'next-sitemap'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

const getAvailabilitySitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'availability',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: 1000,
      pagination: false,
      where: {
        _status: {
          equals: 'published',
        },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const dateFallback = new Date().toISOString()

    const sitemap = results.docs
      ? results.docs
          .filter((availability) => Boolean(availability?.slug))
          .map((availability) => ({
            loc: `${SITE_URL}/availability/${availability?.slug}`,
            lastmod: availability.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['availability-sitemap'],
  {
    tags: ['availability-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getAvailabilitySitemap()

  return getServerSideSitemap(sitemap)
}
