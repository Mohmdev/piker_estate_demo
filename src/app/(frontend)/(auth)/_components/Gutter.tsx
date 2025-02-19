import { cn } from '@utils/ui'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  left?: boolean
  ref?: React.Ref<HTMLDivElement>
  right?: boolean
  distance?: number
}

export const Gutter: React.FC<Props & { ref?: React.Ref<HTMLDivElement> }> = (
  props,
) => {
  const {
    children,
    className,
    left = true,
    right = true,
    ref,
    distance = 6,
  } = props

  return (
    <div
      className={cn(
        'max-w-[1920px] mx-auto',
        left && `pl-${distance}`,
        right && `pr-${distance}`,
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  )
}
