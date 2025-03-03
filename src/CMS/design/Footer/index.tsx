import type { Footer as FooterType } from '@payload-types'
import React from 'react'
import { Footer as FooterTemplate1 } from './templates/template-1'
import { FooterTemplate2 } from './templates/template-2'

export type FooterProps = FooterType & {
  template?: 'template-1' | 'template-2'
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { template = 'template-1', ...footerData } = props

  switch (template) {
    case 'template-2':
      return <FooterTemplate2 {...footerData} />
    case 'template-1':
    default:
      return <FooterTemplate1 {...footerData} />
  }
}
