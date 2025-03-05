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
    '/classifications-sitemap.xml',
    '/classifications/*',
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
      `${SITE_URL}/classifications-sitemap.xml`,
    ],
  },
}
