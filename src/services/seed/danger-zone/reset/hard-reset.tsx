'use client'

import { toast } from '@payloadcms/ui'
import { cn } from '@utils/ui'
import React, { useCallback, useState } from 'react'
import { InteractionButton } from '../interaction-button'

const RESET_DELAY = 5000

const SuccessMessage: React.FC = () => (
  <div>
    Database reset complete! You can now{' '}
    <a target="_blank" href="/" rel="noreferrer">
      visit your website
    </a>
  </div>
)
const LoadingMessage: React.FC = () => (
  <div>Resetting database and clearing data...</div>
)
const ErrorMessage: React.FC = () => (
  <div>An error occurred while resetting the database.</div>
)

interface HardResetDatabaseProps {
  className?: string
}

export const HardResetDatabase: React.FC<HardResetDatabaseProps> = ({
  className = '',
}) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const getButtonText = () => {
    if (loading) return 'Resetting...'
    if (success) return 'Database reset complete'
    if (error) return 'Reset failed - Click to retry'
    return '⚠ Full database reset'
  }

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (loading) {
        toast.info('Reset already in progress.')
        return
      }

      if (success) {
        toast.info('Database already reset.')
        return
      }

      if (error) {
        setError(null)
      }

      setLoading(true)

      const callDatabase = fetch('/next/data/hard-reset', {
        method: 'POST',
        credentials: 'include',
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error('Failed to establish connection to the database')
        }
        return response.json()
      })

      toast.promise(callDatabase, {
        loading: <LoadingMessage />,
        success: <SuccessMessage />,
        error: <ErrorMessage />,
      })

      try {
        await callDatabase

        setSuccess(true)
        setLoading(false)

        setTimeout(() => {
          setSuccess(false)
        }, RESET_DELAY)
      } catch (err) {
        setLoading(false)
        setError(err as Error)
        setTimeout(() => {
          setError(null)
        }, RESET_DELAY)
      }
    },
    [loading, success, error],
  )

  return (
    <InteractionButton
      onClick={handleClick}
      loading={loading}
      success={success}
      error={!!error}
      className={cn(className)}
    >
      {getButtonText()}
    </InteractionButton>
  )
}
