import { cn } from '@utils/ui'
import React from 'react'
import PageClient from './page.client'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PageClient />
      <section
        className={cn(
          'container flex-1',
          'flex flex-col items-center justify-center gap-8',
        )}
      >
        {children}
      </section>
    </>
  )
}
