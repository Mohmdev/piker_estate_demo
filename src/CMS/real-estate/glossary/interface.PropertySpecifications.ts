import type { NamedTab } from 'payload'

export const propertySpecifications: NamedTab = {
  name: 'specs',
  label: 'Specifications',
  interfaceName: 'PropertySpecifications',
  fields: [
    {
      type: 'group',
      name: 'facility',
      label: 'Facility',
      admin: {
        hideGutter: true,
        className: 'm-0 p-0 py-12 pt-4',
      },
      fields: [
        {
          type: 'select',
          name: 'facilityType',
          label: 'Facility Type',
          options: [
            { label: 'Security', value: 'security' },
            { label: 'Community', value: 'community' },
            { label: 'Utilities', value: 'utilities' },
            { label: 'Smart Home', value: 'smart-home' },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              type: 'checkbox',
              name: 'hasUnits',
              label: 'Has Multiple Units',
              defaultValue: false,
              admin: {
                description:
                  'Does this type typically have multiple units? (e.g., apartment buildings)',
              },
            },
            {
              type: 'checkbox',
              name: 'isLandOnly',
              label: 'Land Only',
              defaultValue: false,
              admin: {
                description: 'Is this a land-only property type?',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'measurements',
      label: 'Measurements',
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
              name: 'sizeRange',
              label: 'Size Range',
              options: [
                { label: 'Small (< 1000 sq ft)', value: 'small' },
                {
                  label: 'Medium (1000-2500 sq ft)',
                  value: 'medium',
                },
                { label: 'Large (2500-5000 sq ft)', value: 'large' },
                {
                  label: 'Extra Large (> 5000 sq ft)',
                  value: 'xlarge',
                },
              ],
            },
            {
              name: 'property_size',
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
              name: 'block_size',
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
          fields: [
            {
              name: 'frontage',
              type: 'number',
              label: 'Frontage Width',
              min: 0,
              admin: {
                step: 0.1,
                placeholder: 'e.g., 15.0',
                description: 'Property frontage in meters',
              },
            },
            {
              name: 'depth',
              type: 'number',
              label: 'Block Depth',
              min: 0,
              admin: {
                step: 0.1,
                placeholder: 'e.g., 30.0',
                description: 'Property depth in meters',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'rooms',
      label: 'Rooms and Spaces',
      admin: {
        hideGutter: true,
        className: 'm-0 p-0 py-12',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'num_bedrooms',
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
              name: 'num_bathrooms',
              type: 'number',
              label: 'Bathrooms',
              // required: true,
              min: 0,
              admin: {
                step: 0.5,
                description: 'Number of bathrooms (0.5 = powder room)',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'num_carspaces',
              type: 'number',
              label: 'Parking Spaces',
              min: 0,
              admin: {
                step: 1,
                description: 'Number of car parking spaces',
              },
            },
            {
              name: 'num_floors',
              type: 'number',
              label: 'Floors/Levels',
              min: 1,
              admin: {
                step: 1,
                description: 'Number of floors in the property',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'construction',
      label: 'Construction Details',
      admin: {
        hideGutter: true,
        className: 'm-0 p-0 py-12',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'year_built',
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
              name: 'last_renovated',
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
        {
          type: 'select',
          name: 'construction_type',
          label: 'Construction Type',
          options: [
            { label: 'Brick', value: 'brick' },
            { label: 'Timber Frame', value: 'timber' },
            { label: 'Concrete', value: 'concrete' },
            { label: 'Steel Frame', value: 'steel' },
            { label: 'Mixed', value: 'mixed' },
          ],
          admin: {
            description: 'Primary construction material/method',
          },
        },
      ],
    },
    {
      type: 'group',
      name: 'utilities',
      label: 'Utilities & Systems',
      admin: {
        hideGutter: true,
        className: 'm-0 p-0 py-12',
      },
      fields: [
        {
          type: 'select',
          name: 'energy_rating',
          label: 'Energy Rating',
          options: [
            { label: 'A (Excellent)', value: 'A' },
            { label: 'B (Good)', value: 'B' },
            { label: 'C (Average)', value: 'C' },
            { label: 'D (Poor)', value: 'D' },
            { label: 'E (Very Poor)', value: 'E' },
          ],
          admin: {
            description: 'Energy efficiency rating',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'heating_type',
              type: 'select',
              label: 'Heating System',
              options: [
                { label: 'Central', value: 'central' },
                { label: 'Electric', value: 'electric' },
                { label: 'Gas', value: 'gas' },
                { label: 'Heat Pump', value: 'heat-pump' },
                { label: 'None', value: 'none' },
              ],
            },
            {
              name: 'cooling_type',
              type: 'select',
              label: 'Cooling System',
              options: [
                { label: 'Central Air', value: 'central' },
                { label: 'Split System', value: 'split' },
                { label: 'Window Units', value: 'window' },
                { label: 'None', value: 'none' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
