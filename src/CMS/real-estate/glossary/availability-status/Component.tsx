'use client'

import { SelectField } from '@payloadcms/ui'
import type { Option, SelectFieldClient, SelectFieldClientProps } from 'payload'
import React from 'react'
import { availabilityStatusIcons } from './icons-map'

interface AvailabilityStatusComponentProps extends SelectFieldClientProps {
  iconSize?: number
}

export const AvailabilityStatusComponent: React.FC<
  AvailabilityStatusComponentProps
> = (props) => {
  const { field, path, schemaPath, iconSize = 16 } = props

  // Create a modified field with custom option rendering
  const modifiedField = {
    ...field,
    options: field.options?.map((option: Option) => {
      const optionValue = typeof option === 'object' ? option.value : option
      const optionLabel = typeof option === 'object' ? option.label : option
      const Icon = availabilityStatusIcons[optionValue]

      if (!Icon) return option as string

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
