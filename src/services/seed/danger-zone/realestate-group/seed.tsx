'use client'

import { toast } from '@payloadcms/ui'
import React, { useCallback, useState } from 'react'
import { InteractionButton } from '../interaction-button'

const RESET_DELAY = 5000

const SuccessMessage: React.FC = () => (
  <div>
    Real Estate Data seeded! You can now{' '}
    <a target="_blank" href="/" rel="noreferrer">
      visit your website
    </a>
  </div>
)
const LoadingMessage: React.FC = () => <div>Seeding real estate data....</div>
const ErrorMessage: React.FC = () => (
  <div>An error occurred while seeding real estate data.</div>
)

export const SeedRealEstateGroupData: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const getButtonText = () => {
    if (loading) return 'Seeding real estate data...'
    if (success) return 'Real estate data seeded'
    if (error) return 'Seeding failed - Click to retry'
    return 'Seed real estate data'
  }

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      // Handle existing states
      if (loading) {
        toast.info('Real Estate Data seeding already in progress.')
        return
      }

      if (success) {
        toast.info('Real Estate Data already seeded.')
        return
      }

      // Clear any previous error state if user is retrying
      if (error) {
        setError(null)
      }

      setLoading(true)

      const callDatabase = fetch('/next/data/realestate-group/seed', {
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
    >
      {getButtonText()}
    </InteractionButton>
  )
}
