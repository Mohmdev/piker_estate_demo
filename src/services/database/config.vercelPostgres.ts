import path from 'path'
import { fileURLToPath } from 'url'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import type { Config } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isDev = process.env.NODE_ENV !== 'production'

export const vercelPostgres: Config['db'] = vercelPostgresAdapter({
  pool: {
    connectionString: isDev
      ? process.env.POSTGRES_URL_DEVELOPMENT
      : process.env.POSTGRES_URL,
  },
  migrationDir: path.resolve(dirname, './migrations'),
  push: isDev,
})
