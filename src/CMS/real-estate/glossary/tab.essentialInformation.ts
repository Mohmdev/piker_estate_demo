import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import type { UnnamedTab } from 'payload'
import { galleryGroup } from './gallery/config.gallery'

export const EssentialInformationTab: UnnamedTab = {
  label: 'Essential Information',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'number',
          name: 'price',
          label: 'Price',
          required: true,
          min: 0,
          admin: {
            step: 1000,
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'select',
          name: 'condition',
          label: 'Condition',
          options: [
            { label: 'Brand New', value: 'brand-new' },
            { label: 'Renovated', value: 'renovated' },
            { label: 'Well-Maintained', value: 'well-maintained' },
            { label: 'Needs Renovation', value: 'needs-renovation' },
            { label: 'Custom', value: 'custom' },
          ],
        },
        {
          type: 'text',
          name: 'customCondition',
          label: 'Custom Condition',
          admin: {
            description: 'Enter a custom condition',
            condition: isIncludedInSibling('condition', 'custom'),
          },
        },
        {
          label: 'Contract',
          name: 'contract',
          type: 'relationship',
          relationTo: 'contracts',
          hasMany: true,
          required: true,
        },
        {
          label: 'Availability',
          name: 'availability',
          type: 'relationship',
          relationTo: 'availability',
          hasMany: true,
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'relationship',
          name: 'classification',
          label: 'Classification',
          relationTo: 'classifications',
          required: true,
          hasMany: true,
          admin: {
            isSortable: true,
            allowEdit: true,
          },
        },
        {
          type: 'relationship',
          name: 'amenities',
          relationTo: 'amenities',
          hasMany: true,
          label: 'Amenities',
          admin: {
            isSortable: true,
            allowEdit: true,
          },
        },
      ],
    },
    galleryGroup,
  ],
}
