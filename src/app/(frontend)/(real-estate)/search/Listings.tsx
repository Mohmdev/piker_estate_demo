'use client'

import type { Property } from '@payload-types'
// import { useAuth } from '@providers/Auth'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { SearchCard } from './components/Card'
import { CardCompact } from './components/CardCompact'
import { useFilters } from './components/filters-context'
import { fetchProperties } from './utils/client-api'

interface ListingsProps {
  records?: Property[]
}

export const Listings: React.FC<ListingsProps> = ({ records = [] }) => {
  // const { user } = useAuth()
  const { viewMode, filters } = useFilters()

  // Only fetch if no records are provided
  const { data, isLoading, isError } = useQuery({
    queryKey: ['properties', filters],
    queryFn: () =>
      fetchProperties({
        where: filters as unknown as Record<string, unknown>,
      }),
    // Skip query if records are provided
    enabled: records.length === 0,
  })

  // Use provided records or fallback to fetched data
  const properties = records.length > 0 ? records : data?.docs || []

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading properties</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          {properties.length} Properties Found
        </h2>
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded ${
              viewMode === 'grid' ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => {
              // Update view mode to grid
            }}
          >
            Grid
          </button>
          <button
            className={`p-2 rounded ${
              viewMode === 'list' ? 'bg-gray-200' : 'bg-white'
            }`}
            onClick={() => {
              // Update view mode to list
            }}
          >
            List
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {properties.length > 0 ? (
          properties.map((property: Property) => (
            <div key={property.id}>
              {viewMode === 'grid' ? (
                <CardCompact property={property} />
              ) : (
                <SearchCard
                  property={property}
                  isFavorite={false}
                  onFavoriteToggle={() => {
                    // Handle favorite toggle
                  }}
                />
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No properties found</p>
          </div>
        )}
      </div>
    </div>
  )
}
