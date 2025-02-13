'use client'

import { useAuth } from '@providers/Auth'
import { cn } from '@utils/ui'
import Link from 'next/link'
import React from 'react'

export const Nav: React.FC = () => {
  const { user } = useAuth()

  return (
    <nav
      className={cn(
        'flex gap-6 items-center flex-wrap *:decoration-0',
        'opacity-100 visible',
        'transition-opacity duration-100 ease-linear',
        // fade the nav in on user load to avoid flash of content and layout shift
        // Vercel also does this in their own website header, see https://vercel.com
        user === undefined && 'opacity-0 invisible',
      )}
    >
      {user && (
        <React.Fragment>
          <Link href="/account">Account</Link>
          <Link href="/logout">Logout</Link>
        </React.Fragment>
      )}
      {!user && (
        <React.Fragment>
          <Link href="/login">Login</Link>
          <Link href="/create-account">Create Account</Link>
        </React.Fragment>
      )}
    </nav>
  )
}
