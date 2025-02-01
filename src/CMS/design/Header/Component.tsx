import { getCachedGlobal } from '@utils/getGlobals'
import React from 'react'
import { HeaderClient } from './Component.client'

import type { Header as HeaderType } from '@payload-types'

export const Header = async () => {
  const headerData: HeaderType = await getCachedGlobal('header', 1)()

  return <HeaderClient data={headerData} />
}
