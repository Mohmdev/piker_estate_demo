import { Footer } from '@CMS/design/Footer/Component'
import { Header } from '@CMS/design/Header/Component'
import { getServerSideURL } from '@data/getURL'
// import { AdminBar } from '@components/AdminBar'
import { Providers } from '@providers'
import { InitTheme } from '@providers/Theme/InitTheme'
import { mergeOpenGraph } from '@services/seo/mergeOpenGraph'
import { cn } from '@utils/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import React from 'react'
import '@styles/frontend/globals.css'
import { MainMenu } from '@CMS/design/MainMenu'
import { getDynamicMeta } from '@services/seo/getDynamicMeta'

import classes from './layout.module.scss'

export default async function RootLayout({
  children,
}: { children: React.ReactNode }) {
  const noiseProperties = {
    enable: true,
    size: 6.2,
    opacity: 0.05,
  }

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className="relative">
        <Providers>
          <main className="relative z-1 min-h-[100dvh] flex flex-col">
            <MainMenu />
            {children}
            <Footer />
          </main>
          {noiseProperties.enable && (
            <div
              className="absolute inset-0 m-0 z-[-1]"
              style={
                {
                  '--noise-size': `${noiseProperties.size}rem`,
                  '--noise-opacity': noiseProperties.opacity,
                } as React.CSSProperties
              }
            >
              <div className={classes.noiseBackground} />
            </div>
          )}
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
    openGraph: mergeOpenGraph(undefined, {
      siteName,
      description: siteDescription,
    }),
  }
}
