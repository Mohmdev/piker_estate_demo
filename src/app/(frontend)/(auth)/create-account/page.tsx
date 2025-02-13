import config from '@payload-config'
import { headers as getHeaders } from 'next/headers.js'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'
import { Gutter } from '../_components/Gutter'
import { RenderParams } from '../_components/RenderParams'
import { CreateAccountForm } from './CreateAccountForm'

export default async function CreateAccount() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  if (user) {
    redirect(
      `/account?message=${encodeURIComponent(
        'Cannot create a new account while logged in, please log out and try again.',
      )}`,
    )
  }

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <RenderParams />
      <div className="flex flex-col gap-2">
        <h1 className="prose font-semibold text-2xl">Create Account</h1>
        <CreateAccountForm />
      </div>
    </div>
  )
}
