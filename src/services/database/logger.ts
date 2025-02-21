import chalk from 'chalk'
import { NEXT_PUBLIC_SERVER_URL } from 'next.config'

class EnvironmentLogger {
  private static instance: EnvironmentLogger
  private hasLoggedEnv: boolean = false
  private hasLoggedDb: boolean = false

  private constructor() {}

  static getInstance(): EnvironmentLogger {
    if (!EnvironmentLogger.instance) {
      EnvironmentLogger.instance = new EnvironmentLogger()
    }
    return EnvironmentLogger.instance
  }

  private formatHeader(text: string): string {
    const line = '─'.repeat(text.length + 4)
    return `┌${line}┐\n│  ${text}  │\n└${line}┘`
  }

  private getEnvironmentTag(): string {
    const isProd = process.env.VERCEL_ENV === 'production'
    return isProd
      ? chalk.magenta('⚡ PROD')
      : process.env.VERCEL_ENV === 'preview'
        ? chalk.cyan('🔍 PREVIEW')
        : chalk.green('🛠️  DEV')
  }

  private getConnectionInfo(): string {
    const isProd = process.env.VERCEL_ENV === 'production'
    if (isProd) {
      return 'Vercel Postgres Integration'
    }
    const devUrl = process.env.POSTGRES_URL_DEVELOPMENT?.split('?')[0]
    return devUrl || 'No connection string found'
  }

  logEnvironment(): void {
    if (this.hasLoggedEnv) return

    const envTag = this.getEnvironmentTag()
    const header = this.formatHeader('Webora Estates Environment ')

    console.log('\n' + chalk.bold(header))
    console.log(chalk.dim('├─ Environment'))
    console.log(`│  ${envTag}`)
    console.log(
      `│  ${chalk.dim('Vercel:')} ${process.env.VERCEL_ENV || 'local'}`,
    )
    console.log(`│  ${chalk.dim('Build:')} ${process.env.NODE_ENV}`)
    console.log(`│  ${chalk.dim('Server:')} ${NEXT_PUBLIC_SERVER_URL}`)
    console.log(chalk.dim('├─ Database'))
    console.log(
      `│  ${chalk.dim('Type:')} ${process.env.VERCEL_ENV === 'production' ? 'Production' : 'Development'}`,
    )
    console.log(`│  ${chalk.dim('Connection:')} ${this.getConnectionInfo()}`)
    console.log(chalk.dim('└─────────────────────────────\n'))

    this.hasLoggedEnv = true
  }

  logDatabaseConnection(): void {
    if (this.hasLoggedDb) return

    const isProd = process.env.VERCEL_ENV === 'production'
    const dbType = isProd ? 'production' : 'development'

    console.log(`🔌 Connecting to ${dbType} database`)
    this.hasLoggedDb = true
  }
}

export const logger = EnvironmentLogger.getInstance()
