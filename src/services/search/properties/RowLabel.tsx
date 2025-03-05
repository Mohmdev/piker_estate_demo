'use client'

import { Search } from '@payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const ClassificationRowLabel: React.FC<RowLabelProps> = () => {
  const { data: classification } =
    useRowLabel<
      NonNullable<NonNullable<Search['taxonomies']>['classifications']>[number]
    >()

  const label = classification?.title || '...'

  return <span>{label}</span>
}

export const AmenityRowLabel: React.FC<RowLabelProps> = () => {
  const { data: amenity } =
    useRowLabel<
      NonNullable<NonNullable<Search['taxonomies']>['amenities']>[number]
    >()

  const label = amenity?.label || '...'

  return <span>{label}</span>
}
