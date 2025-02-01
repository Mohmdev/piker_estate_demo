import RichText from '@components/RichText'
import { cn } from '@utils/ui'
import React from 'react'

import type { ContentBlock as ContentBlockProps } from '@payload-types'

import { CMSLink } from '@components/CMSLink'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: 'xl:col-span-12',
    half: 'xl:col-span-6',
    oneThird: 'xl:col-span-4',
    twoThirds: 'xl:col-span-8',
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 xl:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <div
                className={cn('col-span-4', colsSpanClasses[size!], {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                {richText && <RichText data={richText} enableGutter={false} />}

                {enableLink && <CMSLink {...link} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}
