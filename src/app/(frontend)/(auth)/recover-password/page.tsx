import { getServerSideURL } from '@data/getURL'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import { RecoverPasswordForm } from './RecoverPasswordForm'

export default async function RecoverPassword() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (user) {
    redirect(
      `/account?message=${encodeURIComponent('Cannot recover password while logged in.')}`,
    )
  }

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="prose font-semibold text-2xl">Recover Password</h1>
        <p>
          {`Please enter your email below. You will receive an email message with instructions on how to reset your password. To manage all of your users, `}
          <Link
            href={`${getServerSideURL()}/admin/collections/users`}
            className="text-foreground"
          >
            login to the admin dashboard
          </Link>
          .
        </p>
      </div>
      <RecoverPasswordForm />
    </div>
  )
}
