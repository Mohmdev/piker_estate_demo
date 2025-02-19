import { getServerSideURL } from '@data/getURL'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import { RenderParams } from '../_components/RenderParams'
import { LoginForm } from './LoginForm'

export default async function Login() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (user) {
    redirect(
      `/account?message=${encodeURIComponent('You are already logged in.')}`,
    )
  }

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <RenderParams className="mt-6" />
      <div className="flex flex-col gap-2">
        <h1 className="prose font-semibold text-2xl">Log in</h1>
        <p className="prose text-muted-foreground text-xs">
          {'To log in, use the email '}
          <b>account@example.com</b>
          {' with the password '}
          <b>password</b>
          {'. To manage your users, '}
          <Link
            href={`${getServerSideURL()}/admin/collections/users`}
            className="text-foreground"
          >
            login to the admin dashboard
          </Link>
          .
        </p>
      </div>
      <LoginForm />
    </div>
  )
}
