'use client'

// import { getProperties } from '@data/real-estate/getProperty'
// import type { Property } from '@payload-types'
// import { useQuery } from '@tanstack/react-query'
import { cn } from '@utils/ui'
import React, { useContext } from 'react'
import FiltersBar from './FiltersBar'
import FiltersFull from './FiltersFull'
import { Listings } from './Listings'
import { MapBox } from './MapBox'
import { NAVBAR_HEIGHT } from './components/_constants'
import { FiltersContext } from './components/filters-context'

// type SearchParams = {
//   location?: string
//   lat?: string
//   lng?: string
//   beds?: string
//   baths?: string
//   propertyType?: string
//   priceMin?: string
//   priceMax?: string
//   squareFeetMin?: string
//   squareFeetMax?: string
//   amenities?: string
// }

// interface WhereClause {
//   // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//   [key: string]: any
// }

export const SearchPageClient: React.FC = () => {
  //   const {
  //     location,
  //     lat,
  //     lng,
  //     beds,
  //     baths,
  //     propertyType,
  //     priceMin,
  //     priceMax,
  //     squareFeetMin,
  //     squareFeetMax,
  //     amenities,
  //   } = searchParams

  const { isFiltersFullOpen } = useContext(FiltersContext)

  // Build where clause for Payload query
  //   const whereClause: WhereClause = {}

  //   if (lat && lng) {
  //     // Add location-based filtering if coordinates are provided
  //     // This would depend on how your database stores and queries location data
  //     // For example, you might use a geospatial query if your database supports it
  //     // For now, we'll just log that we have coordinates
  //     console.log(`Searching near coordinates: ${lat}, ${lng}`)
  //   }

  //   if (beds && beds !== 'any') {
  //     // Add other filters
  //     whereClause['specs.rooms.num_bedrooms'] = {
  //       equals: parseInt(beds, 10),
  //     }
  //   }

  //   if (baths && baths !== 'any') {
  //     whereClause['specs.rooms.num_bathrooms'] = {
  //       equals: parseInt(baths, 10),
  //     }
  //   }

  //   if (propertyType && propertyType !== 'any') {
  //     whereClause['classification.title'] = {
  //       equals: propertyType,
  //     }
  //   }

  //   if (priceMin || priceMax) {
  //     // Add price range filter
  //     whereClause.price = {}
  //     if (priceMin) {
  //       whereClause.price.greater_than_equal = parseInt(priceMin, 10)
  //     }
  //     if (priceMax) {
  //       whereClause.price.less_than_equal = parseInt(priceMax, 10)
  //     }
  //   }

  //   if (squareFeetMin || squareFeetMax) {
  //     // Add square feet range filter
  //     whereClause['specs.measurements.property_size'] = {}
  //     if (squareFeetMin) {
  //       whereClause['specs.measurements.property_size'].greater_than_equal =
  //         parseInt(squareFeetMin, 10)
  //     }
  //     if (squareFeetMax) {
  //       whereClause['specs.measurements.property_size'].less_than_equal =
  //         parseInt(squareFeetMax, 10)
  //     }
  //   }

  //   if (amenities) {
  //     // Add amenities filter
  //     const amenitiesList = amenities.split(',')
  //     if (amenitiesList.length > 0) {
  //       whereClause['amenities.title'] = {
  //         in: amenitiesList,
  //       }
  //     }
  //   }

  //   const { data: properties } = useQuery({
  //     queryKey: ['properties'],
  //     queryFn: () =>
  //       getProperties({
  //         where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
  //         limit: 12,
  //       }),
  //   })

  return (
    <div
      className="w-full mx-auto px-5 flex flex-col"
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
          <FiltersFull
          // initialFilters={searchParams}
          // totalProperties={properties?.docs.length}
          />
        </div>
        <h1 className="text-4xl font-bold mb-8">
          {location ? `Properties in ${location}` : 'All Properties'}
        </h1>
        <MapBox
        //  records={properties?.docs as Property[]}
        />
        <div className="basis-4/12 overflow-y-auto">
          <Listings
          //  records={properties?.docs as Property[]}
          />
        </div>
      </div>
    </div>
  )
}
