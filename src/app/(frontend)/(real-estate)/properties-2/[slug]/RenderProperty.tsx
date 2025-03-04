'use client'

import { RelatedDocs } from '@CMS/blocks/RelatedDocs/Component'
import type { Media, Property } from '@payload-types'
import React, { useState } from 'react'
import { ContactModal } from './ContactModal'
import { ContactWidget } from './ContactWidget'
import { ImagePreviews } from './ImagePreviews'
import { PropertyDetails } from './PropertyDetails'
import { PropertyLocation } from './PropertyLocation'
import { PropertyOverview } from './PropertyOverview'

export const RenderProperty: React.FC<{
  record: Property
}> = ({ record: property }) => {
  // Extract gallery images safely
  const galleryImages = property?.gallery?.images || []
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <article className="pt-16 pb-16">
      {/* <PropertyHero record={property} /> */}
      {/* <ImagePreviews images={galleryImages as Media[]} /> */}

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          {/* <RichText
            className="max-w-[48rem] mx-auto"
            data={property.description as SerializedEditorState}
            enableGutter={false}
          /> */}
          <ImagePreviews images={galleryImages as Media[]} />
          {property.relatedDocs && property.relatedDocs.length > 0 && (
            <RelatedDocs
              className="mt-12 max-w-[52rem] lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[2fr]"
              docs={property.relatedDocs.filter(
                (relatedDoc) => typeof relatedDoc === 'object',
              )}
            />
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
          <div className="order-2 md:order-1">
            <PropertyOverview data={property} />
            <PropertyDetails data={property} />
            <PropertyLocation data={property} />
          </div>

          <div className="order-1 md:order-2">
            <ContactWidget onOpenModal={() => setIsModalOpen(true)} />
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        propertyTitle={property.title}
      />
    </article>
  )
}
