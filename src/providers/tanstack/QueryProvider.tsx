'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { getQueryClient } from './get-query-client'

export const QueryProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
