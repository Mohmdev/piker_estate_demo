import config from '@payload-config'
import { getServerSideSitemap } from 'next-sitemap'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

const getAmenitiesSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'amenities',
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
          .filter((amenity) => Boolean(amenity?.slug))
          .map((amenity) => ({
            loc: `${SITE_URL}/amenities/${amenity?.slug}`,
            lastmod: amenity.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['amenities-sitemap'],
  {
    tags: ['amenities-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getAmenitiesSitemap()

  return getServerSideSitemap(sitemap)
}
