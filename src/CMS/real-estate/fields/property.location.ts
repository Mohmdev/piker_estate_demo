import type { GroupField } from 'payload'
import { countryOptions } from './country-options'

export const propertyLocation: GroupField = {
  type: 'group',
  name: 'location',
  label: 'Property Location',
  admin: {
    description: 'Enter the complete property location details',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'address_line1',
          type: 'text',
          label: 'Street Address',
          required: true,
          admin: {
            placeholder: 'e.g., 123 Main Street',
            description: 'Primary street address',
          },
        },
        {
          name: 'unit',
          type: 'text',
          label: 'Unit/Suite',
          admin: {
            placeholder: 'e.g., Apt 4B, Suite 200',
            description: 'Apartment, suite, or unit number if applicable',
          },
        },
      ],
    },
    {
      name: 'address_line2',
      type: 'text',
      label: 'Additional Address Info',
      admin: {
        placeholder: 'e.g., Building Name, Complex Name',
        description: 'Secondary address information if needed',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'city',
          type: 'text',
          label: 'City/Town',
          required: true,
          admin: {
            description: 'City or town name',
          },
        },
        {
          name: 'state',
          type: 'text',
          label: 'State/Province',
          required: true,
          admin: {
            description: 'State or province name',
          },
        },
        {
          name: 'postcode',
          type: 'text',
          label: 'ZIP/Postal Code',
          required: true,
          validate: (value: string | null | undefined) => {
            if (!value || value.length < 3)
              return 'Please enter a valid postal code'
            return true
          },
          admin: {
            placeholder: 'e.g., 12345',
            description: 'ZIP or postal code',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'country',
          type: 'select',
          label: 'Country',
          required: true,
          defaultValue: 'US',
          options: countryOptions,
          admin: {
            description: 'Select the country',
          },
        },
      ],
    },
    {
      type: 'group',
      name: 'coordinates',
      label: 'Map Location',
      admin: {
        description: 'Precise geographical coordinates for mapping',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'latitude',
              type: 'number',
              label: 'Latitude',
              admin: {
                step: 0.000001,
                placeholder: 'e.g., 40.7128',
                description: 'North-South position',
              },
            },
            {
              name: 'longitude',
              type: 'number',
              label: 'Longitude',
              admin: {
                step: 0.000001,
                placeholder: 'e.g., -74.0060',
                description: 'East-West position',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'neighborhood',
      label: 'Neighborhood Information',
      admin: {
        description: 'Additional location context',
      },
      fields: [
        {
          name: 'area',
          type: 'text',
          label: 'Area/District',
          admin: {
            placeholder: 'e.g., Downtown, West Side',
            description: 'Neighborhood or district name',
          },
        },
        {
          name: 'landmarks',
          type: 'array',
          label: 'Nearby Landmarks',
          admin: {
            description: 'Notable places near the property',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Landmark Name',
                  admin: {
                    placeholder: 'e.g., Central Park, Shopping Mall',
                  },
                },
                {
                  name: 'distance',
                  type: 'number',
                  label: 'Distance (km)',
                  admin: {
                    step: 0.1,
                    placeholder: 'e.g., 0.5',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
