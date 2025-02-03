'use client'

import { Button, type ButtonProps } from '@components/ui/button'
import type { Page, Post, Property } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

type NavLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts' | 'properties'
    value: Page | Post | Property | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  //
  FlyoutContent?: React.ElementType
  children?: React.ReactNode
}

export const NavLink: React.FC<NavLinkType> = (props) => {
  const {
    children,
    FlyoutContent,
    url,
    type,
    size: sizeFromProps,
    reference,
    newTab,
    label,
    appearance = 'inline',
  } = props

  const [open, setOpen] = useState(false)

  const showFlyout = FlyoutContent && open

  console.log('NavLink render:', { label, FlyoutContent, open, showFlyout })

  const href =
    type === 'reference' &&
    typeof reference?.value === 'object' &&
    reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  console.log('Inside NavLink', href, url, type, reference)

  if (!href) return null

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {}

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      {appearance === 'inline' ? (
        <Link
          href={href || url || ''}
          {...newTabProps}
          //
          className="relative"
        >
          {label && label}
          {children && children}
          <span
            style={{
              transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
          />
        </Link>
      ) : (
        <Button asChild size={size} variant={appearance}>
          <Link
            href={href || url || ''}
            {...newTabProps}
            //
            className="relative"
          >
            {label && label}
            {children && children}
            <span
              style={{
                transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
              }}
              className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
            />
          </Link>
        </Button>
      )}
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
