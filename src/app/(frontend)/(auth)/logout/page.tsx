import config from '@payload-config'
import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'
import { LogoutComponent } from './LogoutComponent'

export default async function Logout() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (!user) {
    return (
      <div className="flex flex-col items-start justify-center gap-8">
        <h1 className="prose font-semibold text-2xl">
          You are already logged out.
        </h1>
        <p className="prose text-muted-foreground text-xs">
          {'What would you like to do next? '}
          <Link href="/" className="text-foreground">
            Click here
          </Link>
          {` to go to the home page. To log back in, `}
          <Link href="/login" className="text-foreground">
            click here
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <LogoutComponent />
    </div>
  )
}
