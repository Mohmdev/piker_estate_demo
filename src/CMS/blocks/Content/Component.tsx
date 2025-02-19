import RichText from '@components/RichText'
import { cn } from '@utils/ui'
import React from 'react'

import type { ContentBlock as ContentBlockProps } from '@payload-types'

import { CMSLink } from '@components/CMSLink'

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  const { columns } = props

  // Grid is made up of 18 columns.
  // we have 4 components with 4 different styless
  const colsSpanClasses = {
    full: 'xs:col-span-18 lg:col-span-18', // 18/18
    oneThird: 'xs:col-span-9 lg:col-span-6', // 6/18
    half: 'xs:col-span-9 lg:col-span-9', // 9/18
    twoThirds: 'xs:col-span-9 lg:col-span-12', // 12/18
  }

  // We want to add gap-x between the components in the grid
  // Not the columns as it would destroy the grid

  return (
    <div className="container my-16">
      <div
        className={cn(
          //
          'grid grid-cols-18',
          'gap-y-8',
          'gap-x-0 -mx-4',
        )}
      >
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size } = col

            return (
              <div
                className={cn(
                  //
                  'col-span-18 px-4',
                  colsSpanClasses[size!],
                )}
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
