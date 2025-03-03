import { cn } from '@utils/ui'
import Link from 'next/link'
import React from 'react'

type FlatRowProps = {
  className?: string
}

export const FlatRow: React.FC<FlatRowProps> = ({ className }) => {
  return (
    <nav className={cn('mb-4', className)}>
      <ul className="flex space-x-6">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/terms">Terms</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
      </ul>
    </nav>
  )
}
