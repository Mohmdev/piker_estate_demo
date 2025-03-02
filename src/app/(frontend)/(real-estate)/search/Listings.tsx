import { getProperties } from '@data/real-estate/getProperty'
// import type { Property } from '@payload-types'
import { useAuth } from '@providers/Auth'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { SearchCard } from './components/Card'
import { CardCompact } from './components/CardCompact'
import { useFilters } from './components/filters-context'

export const Listings: React.FC = () => {
  const { user } = useAuth()
  const { viewMode, filters } = useFilters()

  // We'll need to add viewMode to our filters context
  // This query is redundant since records are passed as props
  // But keeping it for reference on how to migrate from Redux RTK Query
  const { data, isLoading, isError } = useQuery({
    queryKey: ['properties', filters],
    queryFn: () =>
      getProperties({
        where: filters
          ? {
              // Convert filters to the appropriate where clause format
              // This would depend on your API structure
              // Example:
              ...(filters.location ? { location: filters.location } : {}),
              ...(filters.beds && filters.beds !== 'any'
                ? {
                    'specs.rooms.num_bedrooms': {
                      equals: parseInt(filters.beds, 10),
                    },
                  }
                : {}),
              // Add other filters as needed
            }
          : undefined,
        limit: 12,
      }),
  })

  // const handleFavoriteToggle = async (propertyId: number) => {
  //   if (!user) return

  //   // This functionality would need to be implemented with your new data fetching approach
  //   // For example, using a mutation with React Query:
  //   /*
  //   const { mutate: toggleFavorite } = useMutation({
  //     mutationFn: ({ propertyId, isFavorite }) =>
  //       isFavorite
  //         ? removeFavorite(user.id, propertyId)
  //         : addFavorite(user.id, propertyId),
  //     onSuccess: () => {
  //       // Invalidate relevant queries
  //       queryClient.invalidateQueries({ queryKey: ['properties'] })
  //       queryClient.invalidateQueries({ queryKey: ['user', user.id] })
  //     }
  //   })

  //   const isFavorite = user.favorites?.some(fav => fav.id === propertyId)
  //   toggleFavorite({ propertyId, isFavorite })
  //   */
  // }

  // Use the records passed as props instead of the query result
  const properties = data?.docs

  if (isLoading) return <>Loading...</>
  if (isError || !properties) return <div>Failed to fetch properties</div>

  return (
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold">
        {properties.length}{' '}
        <span className="text-gray-700 font-normal">
          Places in {filters.location}
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
          {properties?.map((property) =>
            viewMode === 'grid' ? (
              <SearchCard
                key={property.id}
                property={property}
                // isFavorite={
                //   user?.favorites?.some(
                //     (fav: Property) => fav.id === property.id,
                //   ) || false
                // }
                // onFavoriteToggle={() => handleFavoriteToggle(property.id)}
                showFavoriteButton={!!user}
                propertyLink={`/search/${property.id}`}
              />
            ) : (
              <CardCompact
                key={property.id}
                property={property}
                // isFavorite={
                //   user?.favorites?.some(
                //     (fav: Property) => fav.id === property.id,
                //   ) || false
                // }
                // onFavoriteToggle={() => handleFavoriteToggle(property.id)}
                showFavoriteButton={!!user}
                propertyLink={`/search/${property.id}`}
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}
