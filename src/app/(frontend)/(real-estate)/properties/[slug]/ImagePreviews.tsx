'use client'

import type { Media } from '@payload-types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export const ImagePreviews: React.FC<{
  images?: Media[]
}> = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Reset current index when images change
    setCurrentImageIndex(0)
  }, [images])

  const handlePrev = () => {
    if (!images || images.length <= 1) return
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    if (!images || images.length <= 1) return
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // If no images or empty array, show placeholder
  if (!images || !Array.isArray(images) || images.length === 0) {
    return (
      <div className="relative h-[450px] w-full bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  return (
    <div className="relative h-[450px] w-full rounded-lg border-1 border-border overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image?.url || ''}
            alt={image?.alt || `Property Image ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover cursor-pointer transition-transform duration-500 ease-in-out"
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-700 bg-opacity-50 p-2 rounded-full focus:outline-none focus:ring focus:ring-secondary-300 z-10 backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-700 bg-opacity-50 p-2 rounded-full focus:outline-none focus:ring focus:ring-secondary-300 z-10 backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="text-white" />
          </button>
        </>
      )}

      {/* Image counter indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary-700 bg-opacity-50 px-3 py-1 rounded-full z-10">
        <span className="text-white text-sm">
          {currentImageIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}
