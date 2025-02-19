import { cn } from '@utils/ui'
import React from 'react'

export const Message: React.FC<{
  className?: string
  error?: React.ReactNode
  message?: React.ReactNode
  success?: React.ReactNode
  warning?: React.ReactNode
}> = ({ className, error, message, success, warning }) => {
  const messageToRender = message || error || success || warning

  if (messageToRender) {
    return (
      <div
        className={cn(
          'py-3 px-0 w-max leading-tight rounded-lg text-xs prose text-muted-foreground',
          error && 'text-red-500',
          success && 'bg-success text-primary-foreground',
          warning && 'bg-warning text-primary-foreground',
          !error && !success && !warning && 'bg-muted',
          className,
        )}
      >
        {messageToRender}
      </div>
    )
  }
  return null
}
