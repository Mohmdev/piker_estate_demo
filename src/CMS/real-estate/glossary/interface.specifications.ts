import type { NamedTab } from 'payload'

export const SpecificationsInterface: NamedTab = {
  name: 'specs',
  label: 'Specifications',
  interfaceName: 'SpecificationsInterface',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'number',
          name: 'averageRating',
          label: 'Average Rating',
        },
        {
          type: 'number',
          name: 'numberOfReviews',
          label: 'Number of Reviews',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'checkbox',
          name: 'petsAllowed',
          label: 'Pets Allowed?',
        },
        {
          type: 'checkbox',
          name: 'hasParking',
          label: 'Has Parking?',
        },
      ],
    },
    {
      type: 'row',
      admin: {
        className: 'm-0 p-0 py-12 pt-4',
      },
      fields: [
        {
          name: 'areaSize',
          type: 'number',
          label: 'Living Area',
          // required: true,
          min: 0,
          admin: {
            step: 0.1,
            placeholder: 'e.g., 150.5',
            description: 'Interior living space in square meters',
          },
        },
        {
          name: 'landAreaSize',
          type: 'number',
          label: 'Land Area',
          min: 0,
          admin: {
            step: 0.1,
            placeholder: 'e.g., 500.0',
            description: 'Total land area in square meters',
          },
        },
      ],
    },
    {
      type: 'row',
      admin: {
        className: 'm-0 p-0 py-12 pt-4',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'rooms',
              type: 'number',
              label: 'Bedrooms',
              // required: true,
              min: 0,
              admin: {
                step: 1,
                description: 'Number of bedrooms',
              },
            },
            {
              name: 'bathrooms',
              type: 'number',
              label: 'Bathrooms',
              // required: true,
              min: 0,
              admin: {
                step: 0.5,
                description: 'Number of bathrooms (0.5 = powder room)',
              },
            },
            {
              name: 'parkingSpaces',
              type: 'number',
              label: 'Parking Spaces',
              min: 0,
              admin: {
                step: 1,
                description: 'Number of car parking spaces',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      admin: {
        className: 'm-0 p-0 py-12 pt-4',
      },
      fields: [
        {
          name: 'floors',
          type: 'number',
          label: 'Floors/Levels',
          min: 1,
          admin: {
            step: 1,
            description: 'Number of floors in the property',
          },
        },
        {
          name: 'yearBuilt',
          type: 'number',
          label: 'Year Built',
          min: 1800,
          max: new Date().getFullYear(),
          admin: {
            step: 1,
            description: 'Year the property was constructed',
          },
        },
        {
          name: 'lastRenovated',
          type: 'number',
          label: 'Last Renovated',
          min: 1800,
          max: new Date().getFullYear(),
          admin: {
            step: 1,
            description: 'Year of last major renovation',
          },
        },
      ],
    },
  ],
}
