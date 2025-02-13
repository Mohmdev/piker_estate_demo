'use client'

import { getClientSideURL } from '@data/getURL'
import Link from 'next/link'
import React, { Fragment, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../_components/Button'
import { Input } from '../_components/Input'
import { Message } from '../_components/Message'

type FormData = {
  email: string
}

export const RecoverPasswordForm: React.FC = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>()

  const onSubmit = useCallback(async (data: FormData) => {
    const response = await fetch(
      `${getClientSideURL()}/api/users/forgot-password`,
      {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    )

    if (response.ok) {
      setSuccess(true)
      setError('')
    } else {
      setError(
        'There was a problem while attempting to send you a password reset email. Please try again.',
      )
    }
  }, [])

  return (
    <>
      {!success && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mb-6 items-start w-full max-w-xl"
        >
          <Message error={error} className="mb-4" />
          <Input
            error={errors.email}
            label="Email Address"
            name="email"
            register={register}
            required
            type="email"
          />
          <Button
            appearance="theme"
            className="mt-2"
            label="Recover Password"
            type="submit"
          />
        </form>
      )}
      {success && (
        <div className="flex flex-col items-start gap-4">
          <h3 className="prose font-semibold text-xl">Request submitted</h3>
          <p className="prose text-muted-foreground text-xs">
            Check your email for a link that will allow you to securely reset
            your password.
          </p>
        </div>
      )}
    </>
  )
}
