import { spawn } from 'child_process'
import path from 'path'
import fs from 'fs/promises'

async function resetMigrations() {
  try {
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
      }
    }

    // Reset the content of index.ts
    const indexContent = `export const migrations = [
  // Add migrations here
];
`
    await fs.writeFile(path.join(migrationsDir, 'index.ts'), indexContent)

    console.log('Successfully reset migrations directory')

    // Run migrate:fresh command
    console.log('Running migrate:fresh...')
    const migrate = spawn('pnpm', ['migrate:fresh'], {
      stdio: ['pipe', 'inherit', 'inherit'],
    })

    // Automatically answer 'y' to the prompt
    migrate.stdin.write('y\n')
    migrate.stdin.end()

    // Wait for the process to complete
    await new Promise((resolve, reject) => {
      migrate.on('close', (code) => {
        if (code === 0) {
          resolve(code)
        } else {
          reject(new Error(`migrate:fresh failed with code ${code}`))
        }
      })
    })

    console.log('Database reset completed successfully')
  } catch (error) {
    console.error('Error during database reset:', error)
    process.exit(1)
  }
}

resetMigrations()
