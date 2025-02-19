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
import type { Page } from '@payload-types'
import { cn } from '@utils/ui'
import { motion } from 'motion/react'
import { useCallback, useState } from 'react'

type SearchFiltersFormProps = {
  searchComponent: NonNullable<Page['hero']['searchComponent']>
  className?: string
}

export const SearchFiltersForm: React.FC<SearchFiltersFormProps> = ({
  searchComponent,
  className,
}) => {
  // State for Price Range
  const [priceRange, setPriceRange] = useState<number[]>([
    searchComponent.priceRange?.min || 2500,
    searchComponent.priceRange?.max || 8500,
  ])

  // State for Area Range
  const [areaRange, setAreaRange] = useState<number[]>([
    searchComponent.areaRange?.min || 2500,
    searchComponent.areaRange?.max || 8500,
  ])

  // useCallback for onValueChange to prevent unnecessary re-renders
  const handlePriceChange = useCallback((value: number[]) => {
    setPriceRange(value)
  }, [])

  const handleAreaChange = useCallback((value: number[]) => {
    setAreaRange(value)
  }, [])

  return (
    <div
      className={cn(
        'flex flex-col gap-4 justify-center min-w-max flex-1',
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 p-6 bg-background/80 backdrop-blur rounded-lg max-w-2xl mx-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {searchComponent.enablePropertyStatus && (
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Property Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="for-sale">For Sale</SelectItem>
                <SelectItem value="for-rent">For Rent</SelectItem>
                <SelectItem value="sold">Sold</SelectItem>
              </SelectContent>
            </Select>
          )}
          {searchComponent.enablePropertyType && (
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          )}
          {searchComponent.enableRooms && (
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Rooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Room</SelectItem>
                <SelectItem value="2">2 Rooms</SelectItem>
                <SelectItem value="3">3 Rooms</SelectItem>
                <SelectItem value="4+">4+ Rooms</SelectItem>
              </SelectContent>
            </Select>
          )}
          {searchComponent.enableBeds && (
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Bed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bed</SelectItem>
                <SelectItem value="2">2 Beds</SelectItem>
                <SelectItem value="3">3 Beds</SelectItem>
                <SelectItem value="4+">4+ Beds</SelectItem>
              </SelectContent>
            </Select>
          )}
          {searchComponent.enableBaths && (
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Bath" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bath</SelectItem>
                <SelectItem value="2">2 Baths</SelectItem>
                <SelectItem value="3">3 Baths</SelectItem>
                <SelectItem value="4+">4+ Baths</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
        {/* Price Range Slider */}
        {searchComponent.priceRange?.enabled && (
          <div className="mb-4">
            <p className="text-sm mb-2">
              Price: ${priceRange[0]} - ${priceRange[1]}
            </p>
            <Slider
              value={priceRange}
              onValueChange={handlePriceChange}
              max={searchComponent.priceRange?.max || 8500}
              min={searchComponent.priceRange?.min || 2500}
              step={100}
            />
          </div>
        )}
        {/* Area Range Slider */}
        {searchComponent.areaRange?.enabled && (
          <div className="mb-6">
            <p className="text-sm mb-2">
              Area: {areaRange[0]} - {areaRange[1]} sq ft
            </p>
            <Slider
              value={areaRange}
              onValueChange={handleAreaChange}
              max={searchComponent.areaRange?.max || 8500}
              min={searchComponent.areaRange?.min || 2500}
              step={100}
            />
          </div>
        )}
        <Button className="w-full" size="lg">
          Search
        </Button>
      </motion.div>
    </div>
  )
}
