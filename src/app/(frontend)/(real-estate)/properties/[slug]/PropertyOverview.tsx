import RichText from '@components/RichText'
import type { Property } from '@payload-types'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { MapPin, Star } from 'lucide-react'
import React from 'react'

export const PropertyOverview: React.FC<{
  data: Property
}> = ({ data: property }) => {
  //   if (isLoading) return <>Loading...</>
  //   if (isError || !property) {
  //     return <>Property not Found</>
  //   }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">
          {property.location?.countrySelect} / {property.location?.state} /{' '}
          <span className="font-semibold text-gray-600">
            {property.location?.city}
          </span>
        </div>
        <h1 className="text-3xl font-bold my-5">{property.title}</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-gray-700" />
            {property.location?.city}, {property.location?.state},{' '}
            {property.location?.countrySelect}
          </span>
          <div className="flex justify-between items-center gap-3">
            <span className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {/* TODO: Add average rating and number of reviews */}
              {/* {property.averageRating.toFixed(1)} ({property.numberOfReviews}{' '}
              Reviews) */}
            </span>
            <span className="text-green-600">Verified Listing</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="border border-primary-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center gap-4 px-5">
          <div>
            <div className="text-sm text-gray-500">Monthly Rent</div>
            <div className="font-semibold">
              ${property.price.toLocaleString()}
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bedrooms</div>
            <div className="font-semibold">
              {property.specs?.rooms?.num_bedrooms} bd
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bathrooms</div>
            <div className="font-semibold">
              {property.specs?.rooms?.num_bathrooms} ba
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Square Feet</div>
            <div className="font-semibold">
              {property.specs?.measurements?.property_size?.toLocaleString()}
              sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5">About {property.title}</h2>
        <RichText
          className="max-w-[48rem] mx-auto"
          data={property.description as SerializedEditorState}
          enableGutter={false}
        />
      </div>
    </div>
  )
}
