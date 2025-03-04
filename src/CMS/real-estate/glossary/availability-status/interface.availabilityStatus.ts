import type { SelectField } from 'payload'

export const availabilityStatusInterface: SelectField = {
  type: 'select',
  name: 'availabilityStatus',
  label: 'Availability Status',
  interfaceName: 'AvailabilityStatusInterface',
  hasMany: true,
  admin: {
    components: {
      Field: {
        path: '@CMS/real-estate/glossary/availability-status/Component#AvailabilityStatusComponent',
      },
    },
  },
  options: [
    // Active
    {
      label: 'Available',
      value: 'available',
    },
    {
      label: 'Pre-Launch Registration',
      value: 'preLaunchRegistration',
    },
    // Inactive
    {
      label: 'Reserved',
      value: 'reserved',
    },
    {
      label: 'Occupied',
      value: 'occupied',
    },
    {
      label: 'Rented',
      value: 'rented',
    },
    {
      label: 'Sold',
      value: 'sold',
    },
    {
      label: 'On Hold',
      value: 'onHold',
    },
    {
      label: 'No Longer Available',
      value: 'noLongerAvailable',
    },
  ],
}
