import { CMSLink } from '@components/CMSLink'
import { Logo } from '@components/Logo/Logo'
import type { Footer as FooterType } from '@payload-types'
import { ThemeSelector } from '@providers/Theme/ThemeSelector'
import { cn } from '@utils/ui'
import Link from 'next/link'
import React from 'react'

import { DynamicLinks } from './dynamic-links'
import { FlatRow } from './flat-row'
import { SocialLinks } from './social-links'

export const FooterTemplate2: React.FC<FooterType> = ({ ...props }) => {
  return (
    <footer className="">
      <div
        className={cn(
          'py-20',
          'flex flex-col justify-between items-center',
          'shadow-md',
        )}
      >
        <div
          className={cn(
            'container',
            'flex flex-col md:flex-row justify-between items-center',
          )}
        >
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold" scroll={false}>
              Webora Estates
            </Link>
          </div>

          <FlatRow />

          <SocialLinks />
        </div>

        <div
          className={cn(
            'container',
            'py-8 gap-8 flex flex-row flex-wrap justify-between',
          )}
        >
          <DynamicLinks data={props} />

          <div className="flex flex-col items-end gap-4 justify-between">
            {/* <Link href="/">
              <Logo />
            </Link> */}
            <ThemeSelector />
          </div>
        </div>
      </div>
      <div
        className={cn(
          'container',
          'flex flex-row justify-between items-center',
          'py-2 gap-2',
          'text-center text-sm text-gray-500',
        )}
      >
        <span>
          © {new Date().getFullYear()} Webora Estates. All rights reserved.
        </span>
        <div className="flex flex-row gap-4">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}
