'use client'

import type { MainMenu } from '@payload-types'
import { useRowLabel } from '@payloadcms/ui'

import { PayloadClientReactComponent, RowLabelComponent } from 'payload'

export const NavGroupRowLabel: PayloadClientReactComponent<
  RowLabelComponent
> = () => {
  const { data } = useRowLabel<NonNullable<MainMenu['navGroups']>[number]>()

  return data?.groupLabel || '...'
}
