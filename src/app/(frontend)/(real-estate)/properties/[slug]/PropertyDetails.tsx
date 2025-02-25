'use client'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
// import { AmenityIcons, HighlightIcons } from '@constants/amenities'
import type { Property } from '@payload-types'
import { TransitionPanel } from '@ui/transition-panel'
import { formatEnumString } from '@utils/formatEnumString'
import { HelpCircle } from 'lucide-react'
import React, { useState } from 'react'

export const PropertyDetails: React.FC<{
  data: Property
}> = ({ data: property }) => {
  // if (isLoading) return <>Loading...</>
  // if (isError || !property) {
  //   return <>Property not Found</>
  // }

  return (
    <div className="mb-6">
      {/* Amenities */}
      <div>
        <h2 className="text-xl font-semibold my-3">Property Amenities</h2>
        {/* TODO: Implement Amenities section once AmenityIcons and AmenityEnum are defined */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {property.amenities?.map((amenity) => {
            const Icon = HelpCircle
            return (
              <div
                key={String(typeof amenity === 'object' ? amenity.id : amenity)}
                className="flex flex-col items-center border rounded-xl py-8 px-4"
              >
                <Icon className="w-8 h-8 mb-2 text-gray-700" />
                <span className="text-sm text-center text-gray-700">
                  {typeof amenity === 'object' ? amenity.title : 'Amenity'}
                </span>
              </div>
            )
          })}
        </div> */}
        <div className="text-sm text-gray-500 italic">
          Amenities will be displayed here
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-12 mb-16">
        <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100">
          Highlights
        </h3>
        {/* TODO: Implement Highlights section once HighlightIcons and HighlightEnum are defined */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4 w-full">
          {property.highlights?.map((highlight) => {
            const Icon = HelpCircle
            return (
              <div
                key={highlight}
                className="flex flex-col items-center border rounded-xl py-8 px-4"
              >
                <Icon className="w-8 h-8 mb-2 text-primary-600 dark:text-primary-300" />
                <span className="text-sm text-center text-primary-600 dark:text-primary-300">
                  {highlight}
                </span>
              </div>
            )
          })}
        </div> */}
        <div className="text-sm text-gray-500 italic">
          Highlights will be displayed here
        </div>
      </div>

      {/* Fees and Policies Section */}
      <div>
        <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-100 mb-5">
          Fees and Policies
        </h3>
        <p className="text-sm text-primary-600 dark:text-primary-300 mt-2 mb-6">
          The fees below are based on community-supplied data and may exclude
          additional fees and utilities.
        </p>
        <FeesAndPoliciesPanel property={property} />
      </div>
    </div>
  )
}

function FeesAndPoliciesPanel({ property }: { property: Property }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const ITEMS = [
    {
      title: 'Required Fees',
      subtitle: 'One time move in fees',
      content: (
        <div className="w-full">
          <div className="flex justify-between py-2 bg-secondary-50 dark:bg-secondary-900 px-4 rounded-t-md">
            <span className="text-primary-700 dark:text-primary-300 font-medium">
              Application Fee
            </span>
            <span className="text-primary-700 dark:text-primary-300">
              {/* TODO: Replace with actual property.applicationFee once available */}
              $
              {property.specs?.applicationFee ||
                property.finance?.depositAmount ||
                'N/A'}
            </span>
          </div>
          <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-1" />
          <div className="flex justify-between py-2 bg-secondary-50 dark:bg-secondary-900 px-4 rounded-b-md">
            <span className="text-primary-700 dark:text-primary-300 font-medium">
              Security Deposit
            </span>
            <span className="text-primary-700 dark:text-primary-300">
              {/* TODO: Replace with actual property.securityDeposit once available */}
              $
              {property.specs?.securityDeposit ||
                property.finance?.depositAmount ||
                'N/A'}
            </span>
          </div>
        </div>
      ),
    },
    {
      title: 'Pets',
      subtitle: 'Pet Policy',
      content: (
        <div className="py-2 px-4 bg-secondary-50 dark:bg-secondary-900 rounded-md">
          <p className="text-primary-700 dark:text-primary-300">
            {/* TODO: Replace with actual property.isPetsAllowed once available */}
            Pets are {property.specs?.isPetsAllowed ? 'allowed' : 'not allowed'}
          </p>
        </div>
      ),
    },
    {
      title: 'Parking',
      subtitle: 'Parking Policy',
      content: (
        <div className="py-2 px-4 bg-secondary-50 dark:bg-secondary-900 rounded-md">
          <p className="text-primary-700 dark:text-primary-300">
            {/* TODO: Replace with actual property.isParkingIncluded once available */}
            Parking is{' '}
            {property.specs?.isParkingIncluded ? 'included' : 'not included'}
          </p>
        </div>
      ),
    },
  ]

  return (
    <div>
      <div className="mb-4 flex space-x-2">
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="overflow-hidden border-t border-zinc-200 dark:border-zinc-700">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className="py-4">
              <h3 className="mb-3 font-medium text-zinc-800 dark:text-zinc-100">
                {item.subtitle}
              </h3>
              {item.content}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  )
}
