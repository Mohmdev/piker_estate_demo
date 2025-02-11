import { hasSiblingField } from '@utils/siblingFieldCondition'
import type { Block } from 'payload'
import { listingCardOptions } from '../glossary/listing-card-options'

export const ListingBlock: Block = {
  slug: 'listingBlock',
  labels: {
    singular: 'Listing Block',
    plural: 'Listing Blocks',
  },
  interfaceName: 'ListingBlock',
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
          value: 'gridView',
          label: 'Grid View',
        },
        {
          value: 'listView',
          label: 'List View',
        },
        {
          value: 'featured',
          label: 'Featured',
        },
        {
          value: 'carousel',
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
      name: 'gridView',
      label: 'Options',
      type: 'group',
      fields: [
        {
          label: false,
          type: 'collapsible',
          admin: {
            condition: hasSiblingField('displayOptions', 'gridView'),
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
      label: 'Options',
      name: 'listView',
      type: 'group',
      fields: [
        {
          label: 'List view options',
          type: 'collapsible',
          admin: {
            condition: hasSiblingField('displayOptions', 'listView'),
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
      label: 'Options',
      name: 'featured',
      type: 'group',
      fields: [
        {
          label: 'Featured options',
          type: 'collapsible',
          admin: {
            condition: hasSiblingField('displayOptions', 'featured'),
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
