'use client'

import mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { getProperties } from '@data/real-estate/getProperty'
// import { useGetPropertiesQuery } from '@/state/api'
// import { useAppSelector } from '@/state/redux'
// #TODO: Replace `Property` with `Search`
import type { Property } from '@payload-types'
import { useQuery } from '@tanstack/react-query'
import { useFilters } from './components/filters-context'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string

export const MapBox = () => {
  const mapContainerRef = useRef(null)
  // const filters = useAppSelector((state) => state.global.filters)
  // const {
  //   data: properties,
  //   isLoading,
  //   isError,
  // } = useGetPropertiesQuery(filters)
  // const { user } = useAuth()
  const { filters } = useFilters()
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

  const properties = data?.docs

  useEffect(() => {
    if (isLoading || isError || !properties) return

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/majesticglue/cm6u301pq008b01sl7yk1cnvb',
      center: filters.coordinates || [-74.5, 40],
      zoom: 9,
    })

    for (const property of properties) {
      const marker = createPropertyMarker(property, map)
      if (marker) {
        const markerElement = marker.getElement()
        const path = markerElement.querySelector("path[fill='#3FB1CE']")
        if (path) path.setAttribute('fill', '#000000')
      }
    }

    const resizeMap = () => {
      if (map) setTimeout(() => map.resize(), 700)
    }
    resizeMap()

    return () => map.remove()
  }, [isLoading, isError, properties, filters.coordinates])

  if (isLoading) return <>Loading...</>
  if (isError || !properties) return <div>Failed to fetch properties</div>

  return (
    <div className="basis-5/12 grow relative rounded-xl">
      <div
        className="map-container rounded-xl"
        ref={mapContainerRef}
        style={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  )
}

const createPropertyMarker = (property: Property, map: mapboxgl.Map) => {
  if (
    !property.location?.coordinates?.latitude ||
    !property.location?.coordinates?.longitude
  ) {
    console.warn(
      `Property "${property.title}" is missing coordinates; Skipping marker.`,
    )
    return null
  }

  const marker = new mapboxgl.Marker()
    .setLngLat([
      property.location.coordinates.longitude,
      property.location.coordinates.latitude,
    ])

    .setPopup(
      new mapboxgl.Popup().setHTML(
        `
        <div class="marker-popup">
          <div class="marker-popup-image"></div>
          <div>
            <a href="/search/${property.id}" target="_blank" class="marker-popup-title">${property.title}</a>
            <p class="marker-popup-price">
              $${property.price}
              <span class="marker-popup-price-unit"> / month</span>
            </p>
          </div>
        </div>
        `,
      ),
    )

    .addTo(map)
  //
  return marker
}
