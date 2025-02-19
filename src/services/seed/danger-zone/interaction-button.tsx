import React from 'react'

import { cn } from '@utils/ui'

import { Spinner } from '@components/ui/spinner'

interface InteractionButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  loading?: boolean
  success?: boolean
  error?: boolean
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

export const InteractionButton: React.FC<InteractionButtonProps> = ({
  onClick,
  loading = false,
  success = false,
  error = false,
  disabled = false,
  children,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        'flex grow shrink basis-[40%]',
        'items-center justify-center whitespace-nowrap',
        'py-1 px-4 gap-2 cursor-pointer',
        'border border-border rounded-lg shadow-xs hover:bg-muted/80 border-solid',
        'bg-semi-muted border border-border rounded-lg shadow-xs hover:bg-muted/80 border-solid',
        'text-white dark:text-muted-foreground font-[Poppins] text-base',
        'outline-0 focus-within:outline-0 focus-within:outline-offset-0 ring-0',
        'transition-all duration-150 ease-linear',
        success && 'text-emerald-700 border-emerald-700',
        error && ' text-rose-700 border-rose-700',
        disabled && 'pointer-events-none bg-muted/80 text-muted',
        className,
      )}
    >
      {loading && <Spinner size="xs" />}
      {children}
    </button>
  )
}
