'use client'

import type { Property } from '@payload-types'
import { useQuery } from '@tanstack/react-query'
import { cn } from '@utils/ui'
import React, { useContext } from 'react'
import FiltersBar from './FiltersBar'
import FiltersFull from './FiltersFull'
import { Listings } from './Listings'
import { MapBox } from './MapBox'
import { NAVBAR_HEIGHT } from './components/_constants'
import { FiltersContext } from './components/filters-context'

type SearchParams = {
  location?: string
  lat?: string
  lng?: string
  beds?: string
  baths?: string
  propertyType?: string
  priceMin?: string
  priceMax?: string
  squareFeetMin?: string
  squareFeetMax?: string
  amenities?: string
}

interface SearchPageClientProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export const SearchPageClient: React.FC<SearchPageClientProps> = ({
  searchParams,
}) => {
  const { location } = searchParams as SearchParams
  const { isFiltersFullOpen } = useContext(FiltersContext)

  // Use the prefetched query data
  // @ts-ignore - TanStack Query type issues
  const { data: propertiesData } = useQuery({
    queryKey: ['properties'],
  })

  // Safely access properties
  // @ts-ignore - Type checking for propertiesData
  const properties = propertiesData?.docs || []

  return (
    <div
      className="w-full mx-auto px-5 mt-20 flex flex-col"
      style={{
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <FiltersBar />
      <div className="flex justify-between flex-1 overflow-hidden gap-3 mb-5">
        <div
          className={cn(
            'h-full overflow-auto transition-all duration-300 ease-in-out',
            isFiltersFullOpen
              ? 'w-3/12 opacity-100 visible'
              : 'w-0 opacity-0 invisible',
          )}
        >
          {/* @ts-ignore - Component prop types */}
          <FiltersFull
            initialFilters={searchParams}
            totalProperties={properties.length}
          />
        </div>
        <h1 className="text-4xl font-bold mb-8">
          {location ? `Properties in ${location}` : 'All Properties'}
        </h1>
        {/* @ts-ignore - Component prop types */}
        <MapBox records={properties} />
        <div className="basis-4/12 overflow-y-auto">
          {/* @ts-ignore - Component prop types */}
          <Listings records={properties} />
        </div>
      </div>
    </div>
  )
}
