import type { GroupField } from 'payload'
import { countryOptions } from './country-options'

export const propertyLocation: GroupField = {
  type: 'group',
  name: 'location',
  label: 'Property Location',
  fields: [
    {
      name: 'address_line1',
      type: 'text',
      label: 'Address',
      admin: {
        placeholder: 'e.g., 123',
      },
    },
    {
      type: 'collapsible',
      label: 'More Details',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'address_line2',
          type: 'text',
          label: 'Address Line 2',
          admin: {
            placeholder: 'e.g., Main Street',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'unit',
              type: 'text',
              label: 'Unit/Apartment Number',
              admin: {
                placeholder: 'e.g., Apt 4B (if applicable)',
              },
            },
            {
              name: 'postcode',
              type: 'text',
              label: 'Postal/ZIP Code',
              validate: (value: string | null | undefined) => {
                if (value && value.length < 3)
                  return 'Please enter a valid postal code'
                return true
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'city',
              type: 'text',
              label: 'City/Town',
            },
            {
              name: 'state',
              type: 'text',
              label: 'State/Province',
            },
            {
              name: 'country',
              type: 'select',
              label: 'Country',
              defaultValue: 'US',
              options: countryOptions,
            },
          ],
        },
        {
          name: 'coordinates',
          type: 'group',
          label: 'GPS Coordinates',
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
                  },
                },
                {
                  name: 'longitude',
                  type: 'number',
                  label: 'Longitude',
                  admin: {
                    step: 0.000001,
                    placeholder: 'e.g., -74.0060',
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
