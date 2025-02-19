import { link } from '@fields/link'
import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import type { Field } from 'payload'

export const iconGridComponent: Field = {
  name: 'iconGrid',
  type: 'array',
  admin: {
    condition: isIncludedInSibling('type', 'advancedComponents'),
  },
  fields: [
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'House', value: 'house' },
        { label: 'Booking', value: 'booking' },
        { label: 'Garage', value: 'garage' },
        { label: 'Bath', value: 'bath' },
        { label: 'Bed', value: 'bed' },
        { label: 'Area', value: 'area' },
        { label: 'Price', value: 'price' },
        { label: 'Rooms', value: 'rooms' },
        { label: 'Parking', value: 'parking' },
        { label: 'Pool', value: 'pool' },
        { label: 'Garden', value: 'garden' },
        { label: 'Land', value: 'land' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'label',
      type: 'text',
    },
    link({
      appearances: false,
      disableLabel: true,
      overrides: {
        admin: {
          description: 'Optional link when clicking the icon',
        },
      },
    }),
  ],
}
