'use client'

import type { Property } from '@payload-types'
import { Compass, MapPin } from 'lucide-react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useEffect, useRef } from 'react'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string

type PropertyDetailsProps = {
  data: Property | null
  isLoading: boolean
  isError: boolean
}

export const PropertyLocation: React.FC<PropertyDetailsProps> = (props) => {
  const { data, isLoading, isError } = props
  const { location } = data || {}
  const {
    coordinates,
    address_line1,
    address_line2,
    city,
    state,
    postcode,
    countrySelect,
    neighborhood,
  } = location || {}
  const mapContainerRef = useRef(null)

  useEffect(() => {
    if (isLoading || isError || !data) return

    const hasValidCoordinates =
      typeof coordinates?.longitude === 'number' &&
      typeof coordinates?.latitude === 'number'

    const defaultLng = 0 // e.g., London: -0.1278
    const defaultLat = 0 // e.g., London: 51.5074

    const lng = hasValidCoordinates ? coordinates.longitude! : defaultLng
    const lat = hasValidCoordinates ? coordinates.latitude! : defaultLat

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: 'mapbox://styles/majesticglue/cm6u301pq008b01sl7yk1cnvb',
      center: [lng, lat],
      zoom: 14,
    })

    const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map)

    const markerElement = marker.getElement()
    const path = markerElement.querySelector("path[fill='#3FB1CE']")
    if (path) path.setAttribute('fill', '#000000')

    return () => map.remove()
  }, [data, isError, isLoading])

  if (isLoading) return <>Loading...</>
  if (isError || !data) {
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
        <div className="flex items-center text-gray-500">
          <MapPin className="w-4 h-4 mr-1 text-gray-700" />
          Property Address:
          <span className="ml-2 font-semibold text-gray-700">
            {address_line1 || 'Address not available'}
            {city && `, ${city}`}
            {neighborhood && `, ${neighborhood}`}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(
            coordinates?.plusCode ||
              `${coordinates?.latitude},${coordinates?.longitude}` ||
              fullAddress ||
              '',
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-between items-center hover:underline gap-2 text-primary-600"
        >
          <Compass className="w-5 h-5" />
          Get Directions
        </a>
      </div>
      <div
        className="relative mt-4 h-[300px] rounded-lg overflow-hidden"
        ref={mapContainerRef}
      />
    </div>
  )
}
