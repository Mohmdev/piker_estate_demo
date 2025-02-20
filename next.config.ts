import { withToolbar } from '@lib/vercel-toolbar'
import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import redirects from './redirects.cjs'

let hasLogged = false
const isProd =
  process.env.NODE_ENV === 'production' ||
  process.env.VERCEL_ENV === 'production'
const ENV_TAG = isProd ? '🚀 [PROD]' : '🛠️ [DEV]'

if (!hasLogged) {
  console.log('\n=== Webora Estates Environment ===')
  console.log(
    `${ENV_TAG} Vercel Environment: ${process.env.VERCEL_ENV || 'local'}`,
  )
  console.log(`${ENV_TAG} Node Environment: ${process.env.NODE_ENV}`)
  console.log(
    `${ENV_TAG} Database: ${isProd ? 'Production DB' : 'Development DB'}`,
  )
  console.log(
    `${ENV_TAG} Connection: ${isProd ? 'Vercel Postgres Integration' : process.env.POSTGRES_URL_DEVELOPMENT?.split('?')[0]}`,
  )
  console.log('=======================================\n')
  hasLogged = true
}

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  redirects,
  experimental: {
    reactCompiler: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year,
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', '') as 'http' | 'https',
        }
      }),
      {
        hostname: '127.0.0.1',
        protocol: 'http',
      },
      {
        hostname: 'localhost',
        protocol: 'http',
      },
      {
        hostname: 'res.cloudinary.com',
        protocol: 'https',
      },
    ],
  },
}

export default withToolbar(withPayload(nextConfig))
