'use client'

import type { MainMenu as MainMenuType } from '@payload-types'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

type MainMenuTab = NonNullable<MainMenuType['tabs']>[number]

type NavLinkProps = {
  FlyoutContent?: React.ElementType
  children?: React.ReactNode
} & MainMenuTab

export const NavLink: React.FC<NavLinkProps> = (props) => {
  const { children, FlyoutContent, ...tab } = props

  const {
    label,
    link: { type, newTab, reference, url } = {},
  } = tab

  const [open, setOpen] = useState(false)
  const showFlyout = FlyoutContent && open

  const getPathPrefix = (relationTo: string) => {
    if (relationTo === 'posts') return '/blog'
    if (relationTo === 'pages') return '' // home page
    return `/${relationTo}`
  }

  const href =
    type === 'reference' &&
    typeof reference?.value === 'object' &&
    reference.value.slug
      ? `${getPathPrefix(reference?.relationTo)}/${reference.value.slug}`
      : url

  if (!href) return null

  const newTabProps = newTab
    ? { rel: 'noopener noreferrer', target: '_blank' }
    : {}

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
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
