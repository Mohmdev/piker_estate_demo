'use client'

import { useAuth } from '@providers/Auth'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const LogoutComponent: React.FC = () => {
  const { logout } = useAuth()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
    'loading',
  )
  const [message, setMessage] = useState('')

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout()
        setStatus('success')
        setMessage('You have been logged out.')
      } catch (_err) {
        setStatus('error')
        setMessage('There was an error logging you out. Please try again.')
      }
    }

    void performLogout()
  }, [logout])

  return (
    <div className="flex flex-col gap-2">
      {status === 'loading' ? (
        <h1 className="prose font-semibold text-2xl">Logging out...</h1>
      ) : (
        <>
          <h1
            className={`prose font-semibold text-2xl ${status === 'error' ? 'text-error' : ''}`}
          >
            {message}
          </h1>
          <p className="prose text-muted-foreground text-xs">
            {'What would you like to do next? '}
            <Link href="/" className="text-foreground">
              Click here
            </Link>
            {` to go to the home page. `}
            {status === 'success' && (
              <>
                {'To log back in, '}
                <Link href="/login" className="text-foreground">
                  click here
                </Link>
                .
              </>
            )}
          </p>
        </>
      )}
    </div>
  )
}
