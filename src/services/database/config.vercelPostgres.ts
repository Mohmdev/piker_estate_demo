import path from 'path'
import { fileURLToPath } from 'url'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import type { Config } from 'payload'
import { logger } from './logger'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isProd = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === 'production'
  : process.env.NODE_ENV === 'production'
const isDev = !isProd

const getConnectionString = () => {
  const prodUrl = process.env.POSTGRES_URL
  const devUrl = process.env.POSTGRES_URL_DEVELOPMENT

  if (isProd) {
    if (!prodUrl) {
      throw new Error('Production database URL is required in production mode')
    }
    return prodUrl
  }

  if (!devUrl) {
    throw new Error('Development database URL is required in development mode')
  }
  return devUrl
}

// Logs attempt to connect to database during build phase
logger.logDatabaseConnection()

export const vercelPostgres: Config['db'] = vercelPostgresAdapter({
  pool: {
    connectionString: getConnectionString(),
    max: isDev ? 10 : 50,
  },
  migrationDir: path.resolve(dirname, './migrations'),
  push: !isProd,
})
