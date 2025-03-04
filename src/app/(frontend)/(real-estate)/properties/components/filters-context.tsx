'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

export interface FiltersState {
  location: string
  beds: string
  baths: string
  propertyType: string
  // amenities: string[]
  availableFrom: string
  priceRange: [number, number] | [null, null]
  squareFeet: [number, number] | [null, null]
  coordinates: [number, number]
}

interface FiltersContextType {
  isFiltersFullOpen: boolean
  setIsFiltersFullOpen: (isOpen: boolean) => void
  toggleFiltersFullOpen: () => void
  viewMode: 'grid' | 'list'
  setViewMode: (mode: 'grid' | 'list') => void
  filters: FiltersState
  setFilters: (filters: Partial<FiltersState>) => void
}

const defaultFilters: FiltersState = {
  location: 'Los Angeles',
  beds: 'any',
  baths: 'any',
  propertyType: 'any',
  // amenities: [],
  availableFrom: 'any',
  priceRange: [null, null],
  squareFeet: [null, null],
  coordinates: [-118.25, 34.05],
}

export const FiltersContext = createContext<FiltersContextType>({
  isFiltersFullOpen: false,
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  setIsFiltersFullOpen: () => {},
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  toggleFiltersFullOpen: () => {},
  viewMode: 'grid',
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  setViewMode: () => {},
  filters: defaultFilters,
  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  setFilters: () => {},
})

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isFiltersFullOpen, setIsFiltersFullOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filters, setFiltersState] = useState<FiltersState>(defaultFilters)

  const toggleFiltersFullOpen = () => {
    setIsFiltersFullOpen((prev) => !prev)
  }

  const setFilters = (newFilters: Partial<FiltersState>) => {
    setFiltersState((prev) => ({ ...prev, ...newFilters }))
  }

  return (
    <FiltersContext.Provider
      value={{
        isFiltersFullOpen,
        setIsFiltersFullOpen,
        toggleFiltersFullOpen,
        viewMode,
        setViewMode,
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

// Custom hook for easier usage
export const useFilters = () => useContext(FiltersContext)
