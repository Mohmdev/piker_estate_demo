import { getCachedGlobal } from '@data/getGlobal'
import type { Footer as FooterType } from '@payload-types'
import { draftMode } from 'next/headers'
import React from 'react'
import { FooterClient } from './index.client'

export const Footer = async () => {
  const { isEnabled: isDraft } = await draftMode()
  const footerData: FooterType = (await getCachedGlobal(
    'footer',
    1,
    isDraft,
  )()) as FooterType

  return <FooterClient {...footerData} />
}
