'use client'

import { getClientSideURL } from '@data/getURL'
import { useAuth } from '@providers/Auth'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../_components/Button'
import { Input } from '../_components/Input'
import { Message } from '../_components/Message'

type FormData = {
  password: string
  passwordConfirm: string
  token: string
}

export const ResetPasswordForm: React.FC = () => {
  const [error, setError] = useState('')
  const { login } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>()

  const onSubmit = useCallback(
    async (data: FormData) => {
      const response = await fetch(
        `${getClientSideURL()}/api/users/reset-password`,
        {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        },
      )

      if (response.ok) {
        const json = await response.json()

        // Automatically log the user in after they successfully reset password
        await login({
          username: json.user.username,
          email: json.user.email,
          password: data.password,
        })

        // Redirect them to `/account` with success message in URL
        router.push('/account?success=Password reset successfully.')
      } else {
        setError(
          'There was a problem while resetting your password. Please try again later.',
        )
      }
    },
    [router, login],
  )

  // when Next.js populates token within router,
  // reset form with new token value
  useEffect(() => {
    reset({ token: token || undefined })
  }, [reset, token])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mb-6 items-start w-full max-w-xl"
    >
      <Message error={error} className="mb-4" />
      <Input
        error={errors.password}
        label="New Password"
        name="password"
        register={register}
        required
        type="password"
      />
      <Input
        error={errors.passwordConfirm}
        label="Confirm New Password"
        name="passwordConfirm"
        register={register}
        required
        type="password"
      />
      <input type="hidden" {...register('token')} />
      <Button
        appearance="theme"
        className="mt-2"
        label="Reset Password"
        type="submit"
      />
    </form>
  )
}
