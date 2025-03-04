'use client'

import { SelectField } from '@payloadcms/ui'
import {
  Car,
  Dog,
  Dumbbell,
  Fan,
  Shield,
  Sofa,
  Thermometer,
  WashingMachine,
  Waves,
  Wifi,
} from 'lucide-react'
import type {
  Option,
  SelectFieldClient,
  SelectFieldClientComponent,
  SelectFieldClientProps,
} from 'payload'
import React from 'react'

// Create a mapping of amenity values to their respective icons
const amenityIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  fastInternet: Wifi,
  washerDryer: WashingMachine,
  airConditioning: Fan,
  heating: Thermometer,
  parking: Car,
  swimmingPool: Waves,
  gym: Dumbbell,
  petFriendly: Dog,
  furnished: Sofa,
  securitySystem: Shield,
}

interface AmenitiesComponentProps extends SelectFieldClientProps {
  iconSize?: number
}

export const AmenitiesComponent: React.FC<AmenitiesComponentProps> = (
  props,
) => {
  const { field, path, schemaPath, iconSize = 16 } = props

  // Create a modified field with custom option rendering
  const modifiedField = {
    ...field,
    options: field.options?.map((option: Option) => {
      const optionValue = typeof option === 'object' ? option.value : option
      const optionLabel = typeof option === 'object' ? option.label : option
      const Icon = amenityIcons[optionValue]

      return {
        // Preserve the original option structure
        ...(typeof option === 'object' ? option : { value: option }),
        // Override the label with our custom component
        label: (
          <div className="flex items-center gap-2">
            {Icon && <Icon size={iconSize} />}
            <span>{optionLabel as string}</span>
          </div>
        ),
      }
    }),
  }

  return (
    <SelectField
      field={modifiedField as unknown as SelectFieldClient}
      path={path}
      schemaPath={schemaPath}
    />
  )
}
