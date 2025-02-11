import { hasSiblingField } from '@utils/siblingFieldCondition'
import type { Block } from 'payload'
import { listingCardOptions } from '../glossary/config.cardOptions'

export const ListingBlock: Block = {
  slug: 'listingBlock',
  labels: {
    singular: 'Listing Block',
    plural: 'Listing Blocks',
  },
  interfaceName: 'ListingBlock',
  dbName: 'listingBlock',
  fields: [
    {
      label: 'Listings to include',
      name: 'listings',
      type: 'relationship',
      relationTo: 'properties',
      hasMany: true,
      minRows: 1,
      maxRows: 36,
      admin: {
        description:
          'The properties that you would like to feature. Pick a minimum of 1 and a maximum of 36 listings.',
      },
    },
    {
      name: 'displayOptions',
      label: 'Display options',
      type: 'select',
      options: [
        {
          value: 'grid',
          label: 'Grid View',
        },
        {
          value: 'list',
          label: 'List View',
        },
        {
          value: 'ftrd',
          label: 'Featured',
        },
        {
          value: 'crsl',
          label: 'Carousel',
        },
        // 'slider',
        // 'map',
        // 'gallery',
        // 'video',
        // 'single',
        // 'double',
        // 'featured-double',
      ],
      defaultValue: 'grid',
      admin: {
        isClearable: true,
        isSortable: true,
      },
    },
    {
      label: 'Grid View',
      name: 'grid',
      type: 'group',
      fields: [
        {
          label: false,
          type: 'collapsible',
          admin: {
            condition: hasSiblingField('displayOptions', 'grid'),
          },
          fields: [
            {
              name: 'columns',
              label: 'Columns',
              type: 'number',
              defaultValue: 3,
              min: 1,
              max: 4,
            },
            listingCardOptions,
          ],
        },
      ],
    },
    {
      label: 'List View',
      name: 'list',
      type: 'group',
      fields: [
        {
          label: false,
          type: 'collapsible',
          admin: {
            condition: hasSiblingField('displayOptions', 'list'),
          },
          fields: [
            {
              name: 'columns',
              label: 'Columns',
              type: 'number',
              defaultValue: 6,
              min: 1,
              max: 4,
            },
            listingCardOptions,
          ],
        },
      ],
    },
    {
      label: 'Featured',
      name: 'ftrd',
      type: 'group',
      fields: [
        {
          label: false,
          type: 'collapsible',
          admin: {
            condition: hasSiblingField('displayOptions', 'ftrd'),
          },
          fields: [
            {
              name: 'columns',
              label: 'Columns',
              type: 'number',
              defaultValue: 1,
              min: 1,
              max: 2,
            },
            listingCardOptions,
          ],
        },
      ],
    },
  ],
}
