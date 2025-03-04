import type { SelectField } from 'payload'

export const listingTypeInterface: SelectField = {
  type: 'select',
  name: 'listingType',
  label: 'Listing Type',
  interfaceName: 'ListingTypeInterface',
  hasMany: true,
  admin: {
    components: {
      Field: {
        path: '@CMS/real-estate/glossary/listing-type/Component#ListingTypeComponent',
      },
    },
  },
  options: [
    {
      label: 'Sale',
      value: 'sale',
    },
    {
      label: 'Rent',
      value: 'rent',
    },
  ],
}
