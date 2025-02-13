'use client'

import { getClientSideURL } from '@data/getURL'
import { useAuth } from '@providers/Auth'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../_components/Button'
import { Input } from '../_components/Input'
import { Message } from '../_components/Message'

type FormData = {
  email: string
  username: string
  password: string
  passwordConfirm: string
  firstName: string
  lastName: string
}

export const CreateAccountForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const { login } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm<FormData>()

  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit = useCallback(
    async (data: FormData) => {
      const response = await fetch(`${getClientSideURL()}/api/users`, {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      if (!response.ok) {
        const message =
          response.statusText || 'There was an error creating the account.'
        setError(message)
        return
      }

      const redirect = searchParams.get('redirect')

      const timer = setTimeout(() => {
        setLoading(true)
      }, 1000)

      try {
        await login(data)
        clearTimeout(timer)
        if (redirect) {
          router.push(redirect)
        } else {
          router.push(
            `/account?success=${encodeURIComponent('Account created successfully')}`,
          )
        }
      } catch (_) {
        clearTimeout(timer)
        setError(
          'There was an error with the credentials provided. Please try again.',
        )
      }
    },
    [login, router, searchParams],
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mb-6 items-start w-full max-w-xl"
    >
      <p>
        {`This is where new customers can signup and create a new account. To manage all users, `}
        <Link
          href={`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/collections/users`}
        >
          login to the admin dashboard
        </Link>
        .
      </p>
      <Message error={error} className="mb-4" />
      <Input
        error={errors.email}
        label="Email Address"
        name="email"
        register={register}
        required
        type="email"
      />
      <Input
        error={errors.username}
        label="Username"
        name="username"
        register={register}
        required
      />
      <Input
        error={errors.firstName}
        label="First Name"
        name="firstName"
        register={register}
        required
      />
      <Input
        error={errors.lastName}
        label="Last Name"
        name="lastName"
        register={register}
        // required
      />
      <Input
        error={errors.password}
        label="Password"
        name="password"
        register={register}
        required
        type="password"
      />
      <Input
        error={errors.passwordConfirm}
        label="Confirm Password"
        name="passwordConfirm"
        register={register}
        required
        type="password"
        validate={(value) =>
          value === password.current || 'The passwords do not match'
        }
      />
      <Button
        appearance="theme"
        label={loading ? 'Processing' : 'Create Account'}
        type="submit"
        className="mt-2"
      />
      <div>
        {'Already have an account? '}
        <Link href={`/login${allParams}`}>Login</Link>
      </div>
    </form>
  )
}
