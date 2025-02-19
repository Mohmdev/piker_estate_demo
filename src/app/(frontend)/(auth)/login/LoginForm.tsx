'use client'

import { getServerSideURL } from '@data/getURL'
import { useAuth } from '@providers/Auth'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../_components/Button'
import { Input } from '../_components/Input'
import { Message } from '../_components/Message'

type FormData = {
  identifier: string
  password: string
}

export const LoginForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const redirect = useRef(searchParams.get('redirect'))
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<null | string>(null)

  const {
    formState: { errors, isLoading },
    handleSubmit,
    register,
  } = useForm<FormData>({
    defaultValues: {
      identifier: 'account@example.com', // changed from separate email/username
      password: 'password',
    },
  })

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        await login({
          email: data.identifier, // Pass identifier as both email and username
          username: data.identifier, // The backend will handle which one to use
          password: data.password,
        })
        if (redirect?.current) {
          router.push(redirect.current)
        } else {
          router.push('/account')
        }
      } catch (_) {
        setError(
          'There was an error with the credentials provided. Please try again.',
        )
      }
    },
    [login, router],
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mb-6 items-start w-full max-w-xl"
    >
      {/* <Input
        error={errors.email}
        label="Email Address"
        name="email"
        register={register}
        required
        type="email"
      /> */}
      <Input
        error={errors.identifier}
        label="Username or Email"
        name="identifier"
        register={register}
        required
        type="identifier"
        autoComplete="username email"
      />
      <Input
        error={errors.password}
        label="Password"
        name="password"
        register={register}
        required
        type="password"
        autoComplete="current-password"
      />
      <div className="flex flex-col gap-0 items-start">
        <Button
          appearance="theme"
          className="mt-2"
          disabled={isLoading}
          label={isLoading ? 'Processing' : 'Login'}
          type="submit"
        />
        <Message error={error} />
      </div>
      <div>
        <Link
          href={`/create-account${allParams}`}
          className="text-sm text-muted-foreground hover:text-foreground prose"
        >
          Create an account
        </Link>
        <br />
        <Link
          href={`/recover-password${allParams}`}
          className="text-sm text-muted-foreground hover:text-foreground prose"
        >
          Recover your password
        </Link>
      </div>
    </form>
  )
}
