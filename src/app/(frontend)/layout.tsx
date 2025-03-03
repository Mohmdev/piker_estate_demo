import { getDynamicMeta } from '@data/getDynamicMeta'
import { getServerSideURL } from '@data/getURL'
import { Providers } from '@providers'
import { InitTheme } from '@providers/Theme/InitTheme'
import { mergeOpenGraph } from '@services/seo/mergeOpenGraph'
import { cn } from '@utils/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import React from 'react'

import { App } from './App'
import { NoiseBackground } from './App/noise-background'

import '@styles/frontend/globals.css'
import '@styles/frontend/layout.css'

export default async function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
      </head>
      <body className="relative">
        <Providers>
          <App>{children}</App>
          <NoiseBackground enable size={6.0} opacity={0.045} />
        </Providers>
      </body>
    </html>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { siteName, siteDescription, favicon } = await getDynamicMeta()

  return {
    metadataBase: new URL(getServerSideURL()),
    title: siteName,
    description: siteDescription,
    icons: favicon ? [{ rel: 'icon', url: favicon.url }] : undefined,
    openGraph: await mergeOpenGraph(undefined, {
      siteName,
      description: siteDescription,
    }),
  }
}
