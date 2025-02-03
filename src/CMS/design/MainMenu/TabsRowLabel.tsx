'use client'

import type { MainMenu } from '@payload-types'
import { useRowLabel } from '@payloadcms/ui'

import { PayloadClientReactComponent, RowLabelComponent } from 'payload'

export const TabsRowLabel: PayloadClientReactComponent<
  RowLabelComponent
> = () => {
  const { data } = useRowLabel<NonNullable<MainMenu['tabs']>[number]>()

  return data?.label || '...'
}
