import path from 'path'
import { fileURLToPath } from 'url'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import type { Config } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Environment detection
const isProd =
  process.env.NODE_ENV === 'production' ||
  process.env.VERCEL_ENV === 'production'
const isDev = !isProd

// Get the appropriate connection string
const getConnectionString = () => {
  const prodUrl = process.env.POSTGRES_URL
  const devUrl = process.env.POSTGRES_URL_DEVELOPMENT

  if (isProd) {
    if (!prodUrl) {
      throw new Error('Production database URL is required in production mode')
    }
    console.log('🔌 Using production database')
    return prodUrl
  }

  if (!devUrl) {
    throw new Error('Development database URL is required in development mode')
  }
  console.log('🔌 Using development database')
  return devUrl
}

export const vercelPostgres: Config['db'] = vercelPostgresAdapter({
  pool: {
    connectionString: getConnectionString(),
    max: isDev ? 10 : 50,
  },
  migrationDir: path.resolve(dirname, './migrations'),
  push: !isProd,
})
