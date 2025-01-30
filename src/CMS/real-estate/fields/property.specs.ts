import type { GroupField } from 'payload'

export const propertySpecifications: GroupField = {
  type: 'group',
  name: 'specs',
  label: 'Specifications',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'property_size',
          type: 'number',
          label: 'Property Size',
          min: 0,
          admin: {
            step: 0.1,
            placeholder: 'e.g., 100.0 (SqM)',
          },
        },
        {
          name: 'block_size',
          type: 'number',
          label: 'Block Size',
          min: 0,
          admin: {
            step: 0.1,
            placeholder: 'e.g., 100.0 (SqM)',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'num_bedrooms',
          type: 'number',
          label: 'Bedrooms',
          min: 0,
          admin: {
            step: 1,
          },
        },
        {
          name: 'num_bathrooms',
          type: 'number',
          label: 'Bathrooms',
          min: 0,
          admin: {
            step: 1,
          },
        },
        {
          name: 'num_carspaces',
          type: 'number',
          label: 'Car Spaces',
          min: 0,
          admin: {
            step: 1,
          },
        },
      ],
    },
  ],
}
