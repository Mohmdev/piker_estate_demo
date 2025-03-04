'use client'

import mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import type { Property } from '@payload-types'
import { useQuery } from '@tanstack/react-query'
import { useFilters } from './components/filters-context'
import { fetchProperties } from './utils/client-api'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string

interface MapBoxProps {
  records?: Property[]
}

export const MapBox: React.FC<MapBoxProps> = ({ records = [] }) => {
  const mapContainerRef = useRef(null)
  const { filters } = useFilters()

  // Only fetch if no records are provided
  const { data } = useQuery({
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

  useEffect(() => {
    if (!mapContainerRef.current) return

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-118.25, 34.05], // Default to Los Angeles
      zoom: 10,
    })

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    // Add markers for each property
    properties.forEach((property: Property) => {
      createPropertyMarker(property, map)
    })

    // Clean up on unmount
    return () => map.remove()
  }, [properties])

  const resizeMap = () => {
    // This function can be used to trigger a map resize if needed
    // For example, when the container size changes
  }

  return (
    <div className="basis-8/12 h-full rounded-lg overflow-hidden">
      <div
        ref={mapContainerRef}
        className="w-full h-full"
        style={{ minHeight: '400px' }}
      />
    </div>
  )
}

const createPropertyMarker = (property: Property, map: mapboxgl.Map) => {
  // Check if property has coordinates
  if (
    property.location?.coordinates?.longitude &&
    property.location?.coordinates?.latitude
  ) {
    const { longitude, latitude } = property.location.coordinates

    // Create a marker element
    const el = document.createElement('div')
    el.className = 'property-marker'
    el.style.backgroundColor = '#FF5A5F'
    el.style.width = '25px'
    el.style.height = '25px'
    el.style.borderRadius = '50%'
    el.style.display = 'flex'
    el.style.justifyContent = 'center'
    el.style.alignItems = 'center'
    el.style.color = 'white'
    el.style.fontWeight = 'bold'
    el.style.cursor = 'pointer'
    el.innerHTML = '$'

    // Add a popup
    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
      <div>
        <h3>${property.title}</h3>
        <p>${property.price ? `$${property.price.toLocaleString()}` : 'Price on request'}</p>
        <a href="/properties/${property.slug}" target="_blank">View Details</a>
      </div>
    `)

    // Add marker to map
    new mapboxgl.Marker(el)
      .setLngLat([longitude, latitude])
      .setPopup(popup)
      .addTo(map)
  }
}
