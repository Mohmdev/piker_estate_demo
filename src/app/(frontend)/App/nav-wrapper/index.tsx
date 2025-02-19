import { Footer } from '@CMS/design/Footer'
import { FlyoutNav } from '@CMS/design/MainMenu/FlyoutNav'
import { getCachedGlobal } from '@data/getGlobal'
import type {
  Footer as FooterType,
  MainMenu as MainMenuType,
} from '@payload-types'
import { cn } from '@utils/ui'
import { draftMode } from 'next/headers'
import React from 'react'

export const NavWrapper: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const { isEnabled: isDraft } = await draftMode()
  const mainMenuData: MainMenuType = (await getCachedGlobal(
    'main-menu',
    1,
    isDraft,
  )()) as MainMenuType
  const footerData: FooterType = (await getCachedGlobal(
    'footer',
    1,
    isDraft,
  )()) as FooterType

  return (
    <>
      <FlyoutNav {...(mainMenuData || {})} />
      {children}
      <Footer {...(footerData || {})} />
    </>
  )
}
