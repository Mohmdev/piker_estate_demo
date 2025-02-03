import { getCachedGlobal } from '@data/getGlobal'
import type { Header as HeaderType } from '@payload-types'
import React from 'react'
import { HeaderClient } from './Component.client'

export const Header = async () => {
  const headerData: HeaderType = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData} />
}
