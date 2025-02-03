import { getCachedGlobal } from '@data/getGlobal'
import type { MainMenu as MainMenuType } from '@payload-types'
import React from 'react'
import { MainMenuClient } from './index.client'

export const MainMenu = async () => {
  const mainMenuData: MainMenuType = (await getCachedGlobal(
    'main-menu',
    1,
  )()) as MainMenuType

  return <MainMenuClient data={mainMenuData} />
}
