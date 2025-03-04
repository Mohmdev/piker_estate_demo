import config from '@payload-config'
import { getServerSideSitemap } from 'next-sitemap'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

const getBlogSitemap = unstable_cache(
  async () => {
    const payload = await getPayload({ config })
    const SITE_URL =
      process.env.NEXT_PUBLIC_SERVER_URL ||
      process.env.VERCEL_PROJECT_PRODUCTION_URL ||
      'https://example.com'

    const results = await payload.find({
      collection: 'blog',
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
          .filter((blogPost) => Boolean(blogPost?.slug))
          .map((blogPost) => ({
            loc: `${SITE_URL}/blog/${blogPost?.slug}`,
            lastmod: blogPost.updatedAt || dateFallback,
          }))
      : []

    return sitemap
  },
  ['blog-sitemap'],
  {
    tags: ['blog-sitemap'],
  },
)

export async function GET() {
  const sitemap = await getBlogSitemap()

  return getServerSideSitemap(sitemap)
}
