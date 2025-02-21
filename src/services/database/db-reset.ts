import { spawn } from 'child_process'
import path from 'path'
import dotenv from 'dotenv'
import fs from 'fs/promises'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

async function resetMigrations() {
  try {
    // Check environment
    const isProd =
      process.env.NODE_ENV === 'production' ||
      process.env.VERCEL_ENV === 'production'

    // Check for appropriate database URL based on environment
    if (isProd && !process.env.POSTGRES_URL) {
      console.error(
        '❌ Production database URL (POSTGRES_URL) is not configured',
      )
      process.exit(1)
    }

    if (!isProd && !process.env.POSTGRES_URL_DEVELOPMENT) {
      console.error(
        '❌ Development database URL (POSTGRES_URL_DEVELOPMENT) is not configured',
      )
      process.exit(1)
    }

    // Warn about production database usage
    if (isProd) {
      console.log('⚠️  WARNING: You are about to reset the PRODUCTION database!')
      console.log('⚠️  This action cannot be undone!')
    }

    console.log('🔄 Starting database reset process...')

    // Get the migrations directory path
    const migrationsDir = path.join(
      process.cwd(),
      'src/services/database/migrations',
    )

    // Read all files in the migrations directory
    const files = await fs.readdir(migrationsDir)

    // Delete all files except index.ts
    for (const file of files) {
      if (file !== 'index.ts') {
        await fs.unlink(path.join(migrationsDir, file))
        console.log(`🗑️  Deleted migration file: ${file}`)
      }
    }

    // Reset the content of index.ts
    const indexContent = `export const migrations = [
  // Add migrations here
];
`
    await fs.writeFile(path.join(migrationsDir, 'index.ts'), indexContent)
    console.log('📝 Reset migrations index file')

    // Run migrate:fresh command
    console.log('🔄 Running migrate:fresh...')
    const migrate = spawn('pnpm', ['migrate:fresh'], {
      stdio: ['pipe', 'inherit', 'inherit'],
      env: {
        ...process.env,
      },
    })

    // Automatically answer 'y' to the prompt
    migrate.stdin.write('y\n')
    migrate.stdin.end()

    // Wait for the process to complete
    await new Promise((resolve, reject) => {
      migrate.on('close', (code) => {
        if (code === 0) {
          console.log('✅ Database reset completed successfully')
          resolve(code)
        } else {
          reject(new Error(`❌ migrate:fresh failed with code ${code}`))
        }
      })
    })
  } catch (error) {
    console.error('❌ Error during database reset:', error)
    process.exit(1)
  }
}

resetMigrations()
