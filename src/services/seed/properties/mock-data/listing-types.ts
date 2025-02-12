import type { ListingType } from '@payload-types'

type CreateListingType = Omit<
  ListingType,
  'id' | 'createdAt' | 'updatedAt' | 'sizes'
>

export const mockListingTypes: CreateListingType[] = [
  {
    title: 'For Sale',
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'Properties available for purchase.',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    _status: 'published',
    slug: 'for-sale',
  },
  {
    title: 'For Rent',
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            version: 1,
            children: [
              {
                type: 'text',
                text: 'Properties available for lease.',
                version: 1,
              },
            ],
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    _status: 'published',
    slug: 'for-rent',
  },
]
