import { getCachedGlobal } from '@data/getGlobal'
import type { MainMenu as MainMenuType } from '@payload-types'
import { draftMode } from 'next/headers'
import React from 'react'
import { MainMenuClient } from './index.client'

export const MainMenu = async () => {
  const { isEnabled: isDraft } = await draftMode()
  const mainMenuData: MainMenuType = (await getCachedGlobal(
    'main-menu',
    1,
    isDraft,
  )()) as MainMenuType

  return <MainMenuClient data={mainMenuData} />
}
