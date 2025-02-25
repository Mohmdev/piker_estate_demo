'use client'

import type { Property } from '@payload-types'
import { Compass, MapPin } from 'lucide-react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useEffect, useRef, useState } from 'react'

// Set Mapbox access token from environment variable
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string

export const PropertyLocation: React.FC<{
  data: Property
}> = ({ data: property }) => {
  const { location } = property || {}
  const {
    coordinates,
    address_line1,
    address_line2,
    city,
    state,
    postcode,
    countrySelect,
  } = location || {}

  const [mapError, setMapError] = useState<string | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // Initialize map when component mounts
  useEffect(() => {
    if (!property || !mapContainerRef.current) return

    // Validate Mapbox token
    if (!mapboxgl.accessToken) {
      setMapError('Mapbox access token is missing')
      return
    }

    // Validate coordinates
    if (!coordinates?.latitude || !coordinates?.longitude) {
      setMapError('Property coordinates are not available')
      return
    }

    let map: mapboxgl.Map | null = null

    try {
      // Initialize map
      map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 14,
      })

      // Add navigation control (zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), 'top-right')

      // Add a marker at the property location
      new mapboxgl.Marker({ color: '#000000' })
        .setLngLat([coordinates.longitude, coordinates.latitude])
        .addTo(map)

      // Set map as loaded when ready
      map.on('load', () => setMapLoaded(true))

      // Handle map errors
      map.on('error', (e) => {
        setMapError(`Map error: ${e.error?.message || 'Unknown error'}`)
      })
    } catch (error) {
      setMapError('Failed to initialize map')
      console.error('Mapbox initialization error:', error)
    }

    // Clean up on unmount
    return () => {
      if (map) map.remove()
    }
  }, [property, coordinates])

  // Handle property not found
  if (!property) {
    return <>Property not Found</>
  }

  // Construct a full address for Google Maps directions
  const fullAddress = [
    address_line1,
    address_line2,
    city,
    state,
    postcode,
    countrySelect === 'AE' ? 'United Arab Emirates' : countrySelect,
  ]
    .filter(Boolean)
    .join(', ')

  return (
    <div className="py-16">
      <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
        Map and Location
      </h3>

      <div className="flex justify-between items-center text-sm text-primary-500 mt-2">
        {/* Property Address */}
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-1 text-gray-700" />
          Property Address:
          <span className="ml-2 font-semibold text-gray-700">
            {address_line1 || 'Address not available'}
            {city && `, ${city}`}
            {state && `, ${state}`}
          </span>
        </div>

        {/* Get Directions Link */}
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            fullAddress || `${coordinates?.latitude},${coordinates?.longitude}`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:underline gap-2 text-primary-600"
        >
          <Compass className="w-5 h-5" />
          Get Directions
        </a>
      </div>

      {/* Map Container */}
      <div
        className="relative mt-4 h-[300px] rounded-lg overflow-hidden bg-gray-100"
        ref={mapContainerRef}
      >
        {/* Error State */}
        {mapError && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-100 p-4 text-center">
            <p>{mapError}</p>
          </div>
        )}

        {/* Loading State */}
        {!mapLoaded && !mapError && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-100">
            <p>Loading map...</p>
          </div>
        )}
      </div>
    </div>
  )
}
