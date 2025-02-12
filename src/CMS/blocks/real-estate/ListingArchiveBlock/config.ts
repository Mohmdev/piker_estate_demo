import { essentialsLexical } from '@services/editor/essentialsLexical'
import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import { Block } from 'payload'
import { listingCardOptions } from '../glossary/config.cardOptions'

export const ListingArchiveBlock: Block = {
  slug: 'listingArchiveBlock',
  labels: {
    singular: 'Listing Archive',
    plural: 'Listing Archives',
  },
  interfaceName: 'ListingArchiveBlock',
  dbName: 'listingArchiveBlock',
  fields: [
    {
      label: 'Main Title',
      name: 'mainTitle',
      type: 'text',
      defaultValue: 'Latest Listings',
    },
    {
      name: 'subTitle',
      label: 'Subtitle',
      type: 'richText',
      editor: essentialsLexical,
      admin: {
        description: 'Optional',
      },
    },
    {
      type: 'tabs',
      tabs: [
        // Base Settings
        {
          label: 'Layout',
          name: 'layout',
          fields: [
            {
              label: 'Layout Type',
              name: 'layoutType',
              type: 'select',
              defaultValue: 'grid',
              hasMany: false,
              options: [
                { label: 'Grid', value: 'grid' },
                { label: 'List', value: 'list' },
                { label: 'Carousel', value: 'carousel' },
              ],
            },
          ],
        },
        // Archive Settings
        {
          label: 'Archive',
          name: 'archive',
          fields: [
            {
              name: 'populateBy',
              type: 'select',
              hasMany: false,
              options: [
                { label: 'Latest Listings', value: 'latest' },
                { label: 'Custom Selection', value: 'custom' },
              ],
              defaultValue: 'latest',
            },
            {
              type: 'collapsible',
              label: false,
              fields: [
                {
                  name: 'selection',
                  type: 'relationship',
                  relationTo: 'properties',
                  hasMany: true,
                  admin: {
                    description: 'Select the listings to display',
                    condition: isIncludedInSibling('populateBy', 'custom'),
                  },
                },
              ],
            },
            {
              name: 'categories',
              type: 'relationship',
              relationTo: [
                'blog-categories',
                'property-types',
                'listing-status',
                'listing-types',
              ],
              hasMany: true,
              admin: {
                description: 'Select the categories to display',
              },
            },
            {
              name: 'limit',
              type: 'number',
              defaultValue: 36,
              min: 1,
              max: 54,
              admin: {
                description:
                  'Limit the number of listings to display. (Min: 1, Max: 54)',
                step: 1,
              },
            },
            {
              name: 'pagination',
              type: 'select',
              options: [
                { label: 'Paginated', value: 'paginated' },
                { label: 'Load More', value: 'loadMore' },
              ],
              defaultValue: 'paginated',
              admin: {
                description: 'Pagination behavior',
              },
            },
          ],
        },
        // Card Settings
        {
          label: 'Listing',
          fields: [listingCardOptions],
        },
      ],
    },
  ],
}
