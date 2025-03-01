import { getProperties } from '@/_data/real-estate/getProperty'
import type { Property } from '@payload-types'
import { Metadata } from 'next'
import React from 'react'
import { PropertyFilters } from './PropertyFilters'
import { PropertyGrid } from './PropertyGrid'

export const metadata: Metadata = {
  title: 'Properties | Webora Estates',
  description: 'Browse our selection of properties',
}

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

interface WhereClause {
  [key: string]: any
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  // Extract search parameters
  const {
    location,
    lat,
    lng,
    beds,
    baths,
    propertyType,
    priceMin,
    priceMax,
    squareFeetMin,
    squareFeetMax,
    amenities,
  } = searchParams

  // Build where clause for Payload query
  const whereClause: WhereClause = {}

  // Add location-based filtering if coordinates are provided
  if (lat && lng) {
    // This would depend on how your database stores and queries location data
    // For example, you might use a geospatial query if your database supports it
    // For now, we'll just log that we have coordinates
    console.log(`Searching near coordinates: ${lat}, ${lng}`)
  }

  // Add other filters
  if (beds && beds !== 'any') {
    whereClause['specs.rooms.num_bedrooms'] = {
      equals: parseInt(beds, 10),
    }
  }

  if (baths && baths !== 'any') {
    whereClause['specs.rooms.num_bathrooms'] = {
      equals: parseInt(baths, 10),
    }
  }

  if (propertyType && propertyType !== 'any') {
    whereClause['classification.title'] = {
      equals: propertyType,
    }
  }

  // Add price range filter
  if (priceMin || priceMax) {
    whereClause.price = {}
    if (priceMin) {
      whereClause.price.greater_than_equal = parseInt(priceMin, 10)
    }
    if (priceMax) {
      whereClause.price.less_than_equal = parseInt(priceMax, 10)
    }
  }

  // Add square feet range filter
  if (squareFeetMin || squareFeetMax) {
    whereClause['specs.measurements.property_size'] = {}
    if (squareFeetMin) {
      whereClause['specs.measurements.property_size'].greater_than_equal =
        parseInt(squareFeetMin, 10)
    }
    if (squareFeetMax) {
      whereClause['specs.measurements.property_size'].less_than_equal =
        parseInt(squareFeetMax, 10)
    }
  }

  // Add amenities filter
  if (amenities) {
    const amenitiesList = amenities.split(',')
    if (amenitiesList.length > 0) {
      whereClause['amenities.title'] = {
        in: amenitiesList,
      }
    }
  }

  // Fetch properties based on filters
  const properties = await getProperties({
    where: Object.keys(whereClause).length > 0 ? whereClause : undefined,
    limit: 12,
  })

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">
        {location ? `Properties in ${location}` : 'All Properties'}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <PropertyFilters
            initialFilters={searchParams}
            totalProperties={properties.docs.length}
          />
        </div>

        <div className="lg:col-span-3">
          <PropertyGrid properties={properties.docs as Property[]} />
        </div>
      </div>
    </div>
  )
}
