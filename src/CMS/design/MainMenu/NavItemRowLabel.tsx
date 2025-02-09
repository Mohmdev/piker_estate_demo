'use client'

import type { MainMenu } from '@payload-types'
import { useRowLabel } from '@payloadcms/ui'

import type { PayloadClientReactComponent, RowLabelComponent } from 'payload'

export const NavItemRowLabel: PayloadClientReactComponent<
  RowLabelComponent
> = () => {
  const { data } =
    useRowLabel<
      NonNullable<
        NonNullable<MainMenu['navGroups']>[number]['navItems']
      >[number]
    >()

  if (data?.style === 'default') {
    return data?.defaultLink?.link.label
  }
  if (data?.style === 'featured') {
    return data?.ftrdLink?.tag
  }
  if (data?.style === 'list') {
    return data?.listLinks?.tag
  }
}
