import type { Field, RowField } from 'payload'
import { amenityOptions } from './options'

// Define the type for amenity metadata objects
export type AmenityMeta = {
  value: string
  label: string
}

export const amenitiesMetaField: Field = {
  name: 'amenitiesMeta',
  type: 'json',
  admin: {
    hidden: true,
  },
  hooks: {
    beforeChange: [
      () => {
        // Don't store anything for this field in the database
        return undefined
      },
    ],
    afterRead: [
      ({ data }) => {
        if (!data?.amenities || !Array.isArray(data.amenities)) return null

        // Create an array of objects with label and value
        return data.amenities.map((value) => ({
          value,
          label: amenityValueToLabelMap[value] || value,
        }))
      },
    ],
  },
}

export const amenitiesInterface: RowField = {
  type: 'row',
  fields: [
    {
      type: 'select',
      name: 'amenities',
      label: 'Amenities',
      interfaceName: 'AmenitiesInterface',
      hasMany: true,
      admin: {
        components: {
          Field: {
            path: '@CMS/real-estate/glossary/amenities/Component#AmenitiesComponent',
          },
        },
        isClearable: true,
        isSortable: true,
      },
      custom: {
        // Is it possible to put our options labels and values in custom and use them in the options field?
      },
      options: amenityOptions,
    },
    amenitiesMetaField,
  ],
}

// Create a mapping of values to labels for easy lookup
export const amenityValueToLabelMap: Record<string, string> =
  amenityOptions.reduce((acc, option) => {
    if (typeof option === 'string') {
      return { ...acc, [option]: option }
    }
    return { ...acc, [option.value]: option.label }
  }, {})
