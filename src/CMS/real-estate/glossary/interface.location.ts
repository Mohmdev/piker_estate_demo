import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import type { NamedTab } from 'payload'
import { countrySelectField } from './interface.countrySelect'

export const LocationInterface: NamedTab = {
  name: 'location',
  label: 'Location',
  interfaceName: 'LocationInterface',
  fields: [
    {
      type: 'row',
      admin: {
        className: 'm-0 p-0 pt-4',
      },
      fields: [
        {
          name: 'address_line1',
          type: 'text',
          label: 'Street Address',
          // required: true,
          admin: {
            placeholder: 'e.g., 123 Main Street',
            className: 'p-0 my-2',
          },
        },
        {
          name: 'unit',
          type: 'text',
          label: 'Unit/Suite',
          admin: {
            placeholder: 'e.g., Apt 4B, Suite 200',
            className: 'p-0 my-2',
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
        className: 'p-0 my-2',
      },
    },
    {
      type: 'row',
      admin: {
        className: 'm-0 p-0',
      },
      fields: [
        {
          name: 'city',
          type: 'text',
          label: 'City/Town',
          // required: true,
          admin: {
            className: 'p-0 my-2',
          },
        },
        {
          name: 'state',
          type: 'text',
          label: 'State/Province',
          // required: true,
          admin: {
            className: 'p-0 my-2',
          },
        },
        {
          name: 'postcode',
          type: 'text',
          label: 'ZIP/Postal Code',
          // required: true,
          validate: (value: string | null | undefined) => {
            if (!value || value.length < 3)
              return 'Please enter a valid postal code'
            return true
          },
          admin: {
            placeholder: 'e.g., 12345',
            className: 'p-0 my-2',
          },
        },
        countrySelectField,
      ],
    },
    {
      type: 'row',
      admin: {
        className: 'p-0 my-2 pb-12',
      },
      fields: [
        {
          type: 'select',
          name: 'accessibility',
          label: 'Accessibility',
          options: [
            { label: 'Metro Connected', value: 'metro-connected' },
            { label: 'Bus Connected', value: 'bus-connected' },
            { label: 'Car Dependent', value: 'car-dependent' },
            { label: 'Walk-friendly', value: 'walk-friendly' },
            { label: 'Custom', value: 'custom' },
          ],
        },
        {
          type: 'text',
          name: 'customAccessibility',
          label: 'Custom Accessibility',
          admin: {
            condition: isIncludedInSibling('accessibility', 'custom'),
          },
        },
      ],
    },
    {
      type: 'group',
      name: 'coordinates',
      label: 'Geolocation',
      admin: {
        description: 'Precise geographical coordinates for mapping',
        hideGutter: true,
        className: 'm-0 p-0 py-12',
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
        hideGutter: true,
        className: 'm-0 p-0 py-12',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              type: 'select',
              name: 'neighborhoodType',
              label: 'Neighborhood Type',
              dbName: 'neighborhoodType',
              options: [
                { label: 'City Center', value: 'city-center' },
                { label: 'Business District', value: 'business-district' },
                { label: 'Suburban Area', value: 'suburban-area' },
                { label: 'Industrial Area', value: 'industrial-area' },
                { label: 'Mixed Development', value: 'mixed-development' },
                { label: 'Custom', value: 'custom' },
              ],
            },
            {
              type: 'text',
              name: 'customNeighborhoodType',
              label: 'Custom Neighborhood Type',
              admin: {
                condition: isIncludedInSibling('neighborhoodType', 'custom'),
              },
            },
          ],
        },
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
