import { Separator } from '@components/ui/separator'
import { getServerSideURL } from '@data/getURL'
import config from '@payload-config'
import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { type Permissions, getPayload } from 'payload'
import React from 'react'
import { Button } from '../_components/Button'
import { HydrateClientUser } from '../_components/HydrateClientUser'
import { RenderParams } from '../_components/RenderParams'
import { AccountForm } from './AccountForm'

export default async function Account() {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { permissions, user } = await payload.auth({ headers })

  if (!user) {
    redirect(
      `/login?error=${encodeURIComponent('You must be logged in to access your account.')}&redirect=/account`,
    )
  }

  return (
    <div className="flex flex-col items-start justify-center gap-8">
      <HydrateClientUser permissions={permissions as Permissions} user={user} />
      <RenderParams className="" />
      <h1 className="prose font-semibold text-2xl">Account</h1>
      <p className="prose text-muted-foreground text-xs">
        {`This is your account dashboard. Here you can update your account information and more. To manage all users, `}
        <Link
          href={`${getServerSideURL()}/admin/collections/users`}
          className="text-foreground"
        >
          login to your dashboard
        </Link>
        .
      </p>
      <AccountForm />
      <Separator className="w-full" />
      <Button appearance="secondary" href="/logout" label="Log out" />
    </div>
  )
}
