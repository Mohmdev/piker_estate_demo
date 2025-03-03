'use client'

import { getPropertyBySlug } from '@data/real-estate/getProperty'
// import { useAuth } from '@providers/Auth'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { ContactModal } from '../../properties/[slug]/ContactModal'
import { ContactWidget } from './ContactWidget'
import { ImagePreviews } from './ImagePreviews'
// import { PropertyDetails } from './PropertyDetails'
import { PropertyLocation } from './PropertyLocation'
import { PropertyOverview } from './PropertyOverview'

export default function SingleListingClient() {
  const { slug } = useParams()
  // const { user } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['properties', slug],
    queryFn: () => {
      if (!slug) {
        throw new Error('Slug is required')
      }
      return getPropertyBySlug({
        slug: slug as string,
      })
    },
  })

  const property = data ? data : null

  return (
    <div>
      <ImagePreviews data={property?.gallery} />
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
        <div className="order-2 md:order-1">
          <PropertyOverview
            data={property}
            isLoading={isLoading}
            isError={isError}
          />
          {/* <PropertyDetails
            data={property}
            isLoading={isLoading}
            isError={isError}
          /> */}
          <PropertyLocation
            data={property}
            isLoading={isLoading}
            isError={isError}
          />
        </div>

        <div className="order-1 md:order-2">
          <ContactWidget onOpenModal={() => setIsModalOpen(true)} />
        </div>
      </div>

      {/* {user && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={property}
        />
      )} */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        propertyTitle={property?.title}
      />
    </div>
  )
}
