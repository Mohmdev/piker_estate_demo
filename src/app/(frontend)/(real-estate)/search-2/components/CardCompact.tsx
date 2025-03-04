import type { Media } from '@payload-types'
import { Bath, Bed, Heart, House, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const CardCompact: React.FC<CardCompactProps> = ({
  property,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  propertyLink,
}) => {
  const firstImage = property.gallery?.images?.[0]
  const imageUrl =
    typeof firstImage === 'object' && firstImage !== null
      ? (firstImage as Media)?.url || '/placeholder-property.jpg'
      : '/placeholder-property.jpg'

  const [imgSrc, setImgSrc] = useState(imageUrl)

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full flex h-40 mb-5">
      <div className="relative w-1/3">
        <Image
          src={imgSrc}
          alt={property.title || 'Property Image'}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc('/placeholder.jpg')}
        />
        <div className="absolute bottom-2 left-2 flex gap-1 flex-col">
          {property.specs?.isPetsAllowed && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full w-fit">
              Pets
            </span>
          )}
          {property.specs?.isParkingIncluded && (
            <span className="bg-white/80 text-black text-xs font-semibold px-2 py-1 rounded-full">
              Parking
            </span>
          )}
        </div>
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold mb-1">
              {propertyLink ? (
                <Link
                  href={propertyLink}
                  className="hover:underline hover:text-blue-600"
                  scroll={false}
                >
                  {property.title}
                </Link>
              ) : (
                property.title
              )}
            </h2>
            {showFavoriteButton && (
              <button
                className="bg-white rounded-full p-1"
                onClick={onFavoriteToggle}
              >
                <Heart
                  className={`w-4 h-4 ${
                    isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'
                  }`}
                />
              </button>
            )}
          </div>
          <p className="text-gray-600 mb-1 text-sm">
            {property?.location?.neighborhood}, {property?.location?.city}
          </p>
          <div className="flex text-sm items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="font-semibold">
              {property.specs?.averageRating?.toFixed(1)}
            </span>
            <span className="text-gray-600 ml-1">
              ({property.specs?.numberOfReviews})
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-2 text-gray-600">
            <span className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {property.specs?.rooms?.num_bedrooms}
            </span>
            <span className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {property.specs?.rooms?.num_bathrooms}
            </span>
            <span className="flex items-center">
              <House className="w-4 h-4 mr-1" />
              {property.specs?.measurements?.property_size}
            </span>
          </div>

          <p className="text-base font-bold">
            ${property.price?.toFixed(0)}
            <span className="text-gray-600 text-xs font-normal"> /mo</span>
          </p>
        </div>
      </div>
    </div>
  )
}
