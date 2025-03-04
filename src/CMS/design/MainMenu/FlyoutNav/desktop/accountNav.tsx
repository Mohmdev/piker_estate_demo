'use client'

import { useAuth } from '@providers/Auth'
import { cn } from '@utils/ui'
import Link from 'next/link'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export const AccountNav: React.FC = () => {
  const { user } = useAuth()
  return (
    <div
      className={cn(
        'flex gap-6 items-center flex-wrap *:decoration-0',
        'opacity-100 visible',
        'transition-opacity duration-100 ease-linear',
        'text-primary',
        user === undefined && 'opacity-0 invisible',
      )}
    >
      {!user && (
        <Link href="/login">
          <button className="flex items-center gap-2 rounded-lg ring-0 border-white px-4 py-1 font-medium  transition-colors hover:bg-white hover:text-black">
            <FaUserCircle />
            <span>Sign in</span>
          </button>
        </Link>
      )}
      {user && (
        <Link href="/account">
          <button className="flex items-center gap-2 rounded-lg ring-0 border-white px-4 py-1 font-medium  transition-colors hover:bg-white hover:text-black">
            <FaUserCircle />
            <span>Account</span>
          </button>
        </Link>
      )}
    </div>
  )
}
