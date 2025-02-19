'use client'

import { cn } from '@utils/ui'
import Link from 'next/link'
import type { ElementType } from 'react'
import React from 'react'

export type Props = {
  appearance?: 'default' | 'primary' | 'secondary' | 'theme'
  className?: string
  disabled?: boolean
  el?: 'a' | 'button' | 'link'
  href?: string
  invert?: boolean
  label?: string
  newTab?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
}

export const Button: React.FC<Props> = ({
  type = 'button',
  appearance,
  className: classNameFromProps,
  disabled,
  el: elFromProps = 'link',
  href,
  invert,
  label,
  newTab,
  onClick,
}) => {
  let el = elFromProps
  const newTabProps = newTab
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {}

  const className = cn(
    'border-1 border-border cursor-pointer rounded-lg',
    'bg-transparent text-decoration-none font-medium prose',
    'inline-flex justify-center',
    'py-2 px-6',
    classNameFromProps,
    appearance === 'primary' && 'bg-primary text-primary-foreground',
    appearance === 'secondary' && 'bg-transparent shadow-2xs shadow-inner',
    appearance === 'default' && 'bg-transparent text-black',
    appearance === 'theme' &&
      'bg-violet-700 text-foreground hover:bg-violet-600 py-1.5',
    invert && appearance && 'invert-30',
  )

  const content = (
    <div className="flex items-center justify-around">
      <span className="text-sm text-center flex items-center">{label}</span>
    </div>
  )

  if (onClick || type === 'submit') {
    el = 'button'
  }

  if (el === 'link') {
    return (
      <Link
        className={className}
        href={href || ''}
        {...newTabProps}
        onClick={onClick}
      >
        {content}
      </Link>
    )
  }

  const Element: ElementType = el

  return (
    <Element
      className={className}
      href={href}
      type={type}
      {...newTabProps}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </Element>
  )
}
