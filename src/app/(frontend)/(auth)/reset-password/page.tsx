import config from '@payload-config'
import { headers as getHeaders } from 'next/headers.js'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import { ResetPasswordForm } from './ResetPasswordForm'

export default async function ResetPassword() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (user) {
    redirect(
      `/account?message=${encodeURIComponent('Cannot reset password while logged in.')}`,
    )
  }

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="prose font-semibold text-2xl">Reset Password</h1>
        <p className="prose text-muted-foreground text-xs">
          Please enter a new password below.
        </p>
      </div>
      <ResetPasswordForm />
    </div>
  )
}
