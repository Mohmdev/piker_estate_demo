'use client'

import { cn } from '@utils/ui'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { Message } from './Message'

export const RenderParams: React.FC<{
  className?: string
  message?: string
  params?: string[]
}> = ({ className, message, params = ['error', 'message', 'success'] }) => {
  const searchParams = useSearchParams()
  const paramValues = params
    .map((param) => searchParams.get(param))
    .filter(Boolean)

  if (paramValues.length) {
    return (
      <div className={cn(className)}>
        {paramValues.map((paramValue) => (
          <Message
            key={paramValue}
            message={(message || 'PARAM')?.replace('PARAM', paramValue || '')}
          />
        ))}
      </div>
    )
  }

  return null
}
