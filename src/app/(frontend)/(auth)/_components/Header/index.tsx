import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Gutter } from '../Gutter'
import { Nav } from './Nav'

export const Header = () => {
  return (
    <header className="py-5 px-0">
      <Gutter className="flex justify-between items-center flex-wrap gap-6">
        <Link className="w-37" href="/">
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet="https://raw.githubusercontent.com/payloadcms/payload/master/src/admin/assets/images/payload-logo-light.svg"
            />
            <Image
              alt="Payload Logo"
              height={30}
              src="https://raw.githubusercontent.com/payloadcms/payload/master/src/admin/assets/images/payload-logo-dark.svg"
              width={150}
            />
          </picture>
        </Link>
        <Nav />
      </Gutter>
    </header>
  )
}
