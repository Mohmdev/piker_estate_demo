import { formatPrice } from '@/app/(frontend)/(real-estate)/properties/formatters'
import type { Media, Property } from '@payload-types'
import { cn } from '@utils/ui'
import { Bath, Bed, Home, MapPin, Ruler } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PropertyCardProps {
  property: Property
  className?: string
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  className,
}) => {
  // Extract property data
  const { title, slug, price, specs, location, gallery, classification } =
    property

  // Get the first image from the gallery
  const firstImage = gallery?.images?.[0]
  const imageUrl =
    typeof firstImage === 'object' && firstImage !== null
      ? (firstImage as Media)?.url || '/placeholder-property.jpg'
      : '/placeholder-property.jpg'

  // Format property details
  const bedrooms = specs?.rooms?.num_bedrooms || 0
  const bathrooms = specs?.rooms?.num_bathrooms || 0
  const squareFeet = specs?.measurements?.property_size || 0
  const propertyType =
    Array.isArray(classification) && classification.length > 0
      ? typeof classification[0] === 'object' && classification[0] !== null
        ? classification[0].title
        : 'Property'
      : 'Property'

  return (
    <Link href={`/properties/${slug}`}>
      <div
        className={cn(
          'bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300',
          className,
        )}
      >
        {/* Property Image */}
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded text-sm font-medium">
            {propertyType}
          </div>
          <div className="absolute top-3 right-3 bg-secondary-500 text-white px-2 py-1 rounded text-sm font-medium">
            {formatPrice(price)}
          </div>
        </div>

        {/* Property Details */}
        <div className="p-4">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>

          {/* Location */}
          <div className="flex items-center text-gray-500 mt-1 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm line-clamp-1">
              {location?.city}, {location?.state}
            </span>
          </div>

          {/* Property Features */}
          <div className="flex justify-between mt-4 text-gray-600">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span className="text-sm">{bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span className="text-sm">{bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Ruler className="w-4 h-4 mr-1" />
              <span className="text-sm">{squareFeet} sqft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
