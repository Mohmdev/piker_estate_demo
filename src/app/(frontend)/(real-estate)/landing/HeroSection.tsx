'use client'

import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { cn } from '@utils/ui'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim()
      if (!trimmedQuery) return

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery,
        )}.json?access_token=${
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        }&fuzzyMatch=true`,
      )
      const data = await response.json()
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center

        // Create URL parameters
        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng.toString(),
        })

        // Navigate to search page with search parameters
        router.push(`/search?${params.toString()}`)
      }
    } catch (error) {
      console.error('Error searching location:', error)
    }
  }

  return (
    <div
      className={cn(
        'relative full-dynamic-height w-screen',
        'mx-auto flex justify-center items-center',
      )}
    >
      <Image
        // src="/landing-splash.jpg"
        src="/property-image/1.png"
        alt="Webora Estates Hero Section"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={cn(
          'absolute top-[45%] left-1/2 w-full',
          'transform -translate-x-1/2 -translate-y-1/2',
          'text-center',
        )}
      >
        <div className="max-w-4xl mx-auto px-16 sm:px-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Start your journey to finding the perfect place to call home
          </h1>
          <p className="text-xl text-white mb-8">
            Explore our wide range of properties tailored to fit your lifestyle
            and needs!
          </p>

          <div className="flex justify-center gap-0">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, neighborhood or address"
              className={cn(
                'w-full max-w-lg h-12',
                'px-5',
                'rounded-none rounded-l-xl border-0 bg-white',
                'text-accent',
              )}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleLocationSearch()
                }
              }}
            />
            <Button
              onClick={handleLocationSearch}
              className={cn(
                'h-12',
                'rounded-none rounded-r-xl ',
                'hover:bg-sky-700',
                'bg-transparent backdrop-blur-sm',
                'border-y-2 border-r-2 border-white',
                'text-white',
              )}
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
