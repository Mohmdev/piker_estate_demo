'use client'

import { Button } from '@components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select'
import { Slider } from '@components/ui/slider'
import { cn } from '@utils/ui'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'

type PropertyFiltersProps = {
  initialFilters: {
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
  totalProperties: number
  className?: string
}

export const PropertyFilters: React.FC<PropertyFiltersProps> = ({
  initialFilters,
  totalProperties,
  className,
}) => {
  const router = useRouter()

  // State for filters
  const [beds, setBeds] = useState(initialFilters.beds || 'any')
  const [baths, setBaths] = useState(initialFilters.baths || 'any')
  const [propertyType, setPropertyType] = useState(
    initialFilters.propertyType || 'any',
  )

  // Price range state
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialFilters.priceMin ? parseInt(initialFilters.priceMin, 10) : 0,
    initialFilters.priceMax ? parseInt(initialFilters.priceMax, 10) : 5000000,
  ])

  // Square feet range state
  const [squareFeetRange, setSquareFeetRange] = useState<[number, number]>([
    initialFilters.squareFeetMin
      ? parseInt(initialFilters.squareFeetMin, 10)
      : 0,
    initialFilters.squareFeetMax
      ? parseInt(initialFilters.squareFeetMax, 10)
      : 10000,
  ])

  // Apply filters
  const applyFilters = useCallback(() => {
    const params = new URLSearchParams()

    // Preserve location and coordinates
    if (initialFilters.location) params.set('location', initialFilters.location)
    if (initialFilters.lat) params.set('lat', initialFilters.lat)
    if (initialFilters.lng) params.set('lng', initialFilters.lng)

    // Add other filters
    if (beds !== 'any') params.set('beds', beds)
    if (baths !== 'any') params.set('baths', baths)
    if (propertyType !== 'any') params.set('propertyType', propertyType)

    // Add price range
    if (priceRange[0] > 0) params.set('priceMin', priceRange[0].toString())
    if (priceRange[1] < 5000000)
      params.set('priceMax', priceRange[1].toString())

    // Add square feet range
    if (squareFeetRange[0] > 0)
      params.set('squareFeetMin', squareFeetRange[0].toString())
    if (squareFeetRange[1] < 10000)
      params.set('squareFeetMax', squareFeetRange[1].toString())

    // Navigate with the new params
    router.push(`/properties?${params.toString()}`)
  }, [
    beds,
    baths,
    propertyType,
    priceRange,
    squareFeetRange,
    initialFilters.location,
    initialFilters.lat,
    initialFilters.lng,
    router,
  ])

  // Reset filters
  const resetFilters = () => {
    setBeds('any')
    setBaths('any')
    setPropertyType('any')
    setPriceRange([0, 5000000])
    setSquareFeetRange([0, 10000])

    // Keep only location parameters
    const params = new URLSearchParams()
    if (initialFilters.location) params.set('location', initialFilters.location)
    if (initialFilters.lat) params.set('lat', initialFilters.lat)
    if (initialFilters.lng) params.set('lng', initialFilters.lng)

    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className={cn('bg-white p-6 rounded-lg shadow-md', className)}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Filter Properties</h3>
        <span className="text-sm text-gray-500">
          {totalProperties} properties
        </span>
      </div>

      {/* Property Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Property Type</label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger>
            <SelectValue placeholder="Any Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Type</SelectItem>
            <SelectItem value="Apartment">Apartment</SelectItem>
            <SelectItem value="House">House</SelectItem>
            <SelectItem value="Villa">Villa</SelectItem>
            <SelectItem value="Townhouse">Townhouse</SelectItem>
            <SelectItem value="Land">Land</SelectItem>
            <SelectItem value="Commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Bedrooms</label>
        <Select value={beds} onValueChange={setBeds}>
          <SelectTrigger>
            <SelectValue placeholder="Any Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bathrooms */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Bathrooms</label>
        <Select value={baths} onValueChange={setBaths}>
          <SelectTrigger>
            <SelectValue placeholder="Any Bathrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Price Range: ${priceRange[0].toLocaleString()} - $
          {priceRange[1].toLocaleString()}
        </label>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          min={0}
          max={5000000}
          step={50000}
          className="mt-2"
        />
      </div>

      {/* Square Feet */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Square Feet: {squareFeetRange[0]} - {squareFeetRange[1]} sq ft
        </label>
        <Slider
          value={squareFeetRange}
          onValueChange={(value) =>
            setSquareFeetRange(value as [number, number])
          }
          min={0}
          max={10000}
          step={100}
          className="mt-2"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-8">
        <Button onClick={applyFilters} className="flex-1">
          Apply Filters
        </Button>
        <Button onClick={resetFilters} variant="outline" className="flex-1">
          Reset
        </Button>
      </div>
    </div>
  )
}
