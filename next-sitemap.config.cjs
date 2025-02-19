const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'https://example.com'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: [
    '/pages-sitemap.xml',
    '/*',
    '/blog-sitemap.xml',
    '/blog/*',
    '/properties-sitemap.xml',
    '/properties/*',
    '/projects-sitemap.xml',
    '/projects/*',
    '/contracts-sitemap.xml',
    '/contracts/*',
    '/classifications-sitemap.xml',
    '/classifications/*',
    '/amenities-sitemap.xml',
    '/amenities/*',
    '/availability-sitemap.xml',
    '/availability/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin/*',
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/pages-sitemap.xml`,
      `${SITE_URL}/blog-sitemap.xml`,
      `${SITE_URL}/properties-sitemap.xml`,
      `${SITE_URL}/projects-sitemap.xml`,
      `${SITE_URL}/contracts-sitemap.xml`,
      `${SITE_URL}/classifications-sitemap.xml`,
      `${SITE_URL}/amenities-sitemap.xml`,
      `${SITE_URL}/availability-sitemap.xml`,
    ],
  },
}
