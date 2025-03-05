import type { Search } from '@payload-types'
import { cn } from '@utils/ui'
import React from 'react'
// import { Card1 } from '../listing-card/card-1'
import { Card2 } from '../listing-card/card-2'
export type BasicArchiveProps = {
  records: Search[]
  className?: string
  relationTo?: 'properties' | 'projects'
}

export const BasicArchive: React.FC<BasicArchiveProps> = (props) => {
  const { records, className, relationTo = 'properties' } = props

  return (
    <div className={cn('container', className)}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {records?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <Card2
                    className="h-full"
                    record={result}
                    relationTo={relationTo}
                  />
                  {/* <Card1
                    className="h-full"
                    record={result}
                    relationTo={relationTo}
                    showCategories
                  /> */}
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
