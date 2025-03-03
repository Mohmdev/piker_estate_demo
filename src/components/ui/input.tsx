import { cn } from '@utils/ui'
import * as React from 'react'

const Input: React.FC<
  {
    ref?: React.Ref<HTMLInputElement>
  } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type, className, ref, ...props }) => {
  return (
    <input
      className={cn(
        [
          // Base layout
          'flex h-10 w-full',
          // Appearance
          'rounded border border-border bg-background',
          // Spacing
          'px-3 py-2',
          // Typography
          'text-sm text-foreground',
          // File input styling
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          // Placeholder
          'placeholder:text-muted-foreground',
          // Focus state
          // 'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          // 'ring-offset-background',
          // Disabled state
          'disabled:cursor-not-allowed disabled:opacity-50',
        ].join(' '),
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  )
}

export { Input }
