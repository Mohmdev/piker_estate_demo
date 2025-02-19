import { Property } from '@payload-types'
import { cn } from '@utils/ui'
import React from 'react'
import { ListingCard } from '../glossary/listing-card'
export type Props = {
  properties: Property[]
  className?: string
}

export const ListingGrid: React.FC<Props> = (props) => {
  const { properties, className } = props

  return (
    <div className={cn('container', className)}>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 gap-y-4 gap-x-4 lg:gap-y-8 lg:gap-x-8 xl:gap-x-8">
          {properties?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4" key={index}>
                  <ListingCard className="h-full" property={result} />
                </div>
              )
            } else {
              return (
                <div className="size-full flex items-center justify-center">
                  <p className="text-muted-foreground prose text-sm">
                    No properties found
                  </p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}
