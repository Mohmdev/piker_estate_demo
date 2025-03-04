'use client'

import type { Property } from '@payload-types'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PropertyCard } from './PropertyCard'

interface PropertyGridProps {
  properties: Property[]
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">No properties found</h3>
        <p className="text-gray-500">
          Try adjusting your search filters to find more properties.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">
          Showing <span className="font-semibold">{properties.length}</span>{' '}
          properties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <PropertyCard property={property} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
