import { hasSiblingField } from '@utils/siblingFieldCondition'
import type { Field } from 'payload'

export const heroSearchComponent: Field = {
  name: 'searchComponent',
  label: 'Search Component',
  type: 'group',
  admin: {
    condition: hasSiblingField('type', 'advancedComponents'),
  },
  fields: [
    {
      name: 'enablePropertyStatus',
      type: 'checkbox',
      defaultValue: true,
      label: 'Property Status Filter',
    },
    {
      name: 'enablePropertyType',
      type: 'checkbox',
      defaultValue: true,
      label: 'Property Type Filter',
    },
    {
      name: 'enableRooms',
      type: 'checkbox',
      defaultValue: true,
      label: 'Rooms Filter',
    },
    {
      name: 'enableBeds',
      type: 'checkbox',
      defaultValue: true,
      label: 'Beds Filter',
    },
    {
      name: 'enableBaths',
      type: 'checkbox',
      defaultValue: true,
      label: 'Baths Filter',
    },
    {
      name: 'priceRange',
      label: 'Price Range Filter',
      type: 'group',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'min',
              type: 'number',
              defaultValue: 2500,
              label: 'Minimum Price',
            },
            {
              name: 'max',
              type: 'number',
              defaultValue: 8500,
              label: 'Maximum Price',
            },
          ],
        },
      ],
    },
    {
      name: 'areaRange',
      label: 'Area Range Filter',
      type: 'group',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Area Range',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'min',
              type: 'number',
              defaultValue: 2500,
              label: 'Minimum Area (sq ft)',
            },
            {
              name: 'max',
              type: 'number',
              defaultValue: 8500,
              label: 'Maximum Area (sq ft)',
            },
          ],
        },
      ],
    },
    {
      name: 'button',
      label: 'Search Button',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'style',
          type: 'select',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
          ],
        },
        {
          name: 'icon',
          type: 'select',
          options: [
            { label: 'House', value: 'house' },
            { label: 'Booking', value: 'booking' },
            { label: 'Garage', value: 'garage' },
          ],
        },
      ],
    },
  ],
}
