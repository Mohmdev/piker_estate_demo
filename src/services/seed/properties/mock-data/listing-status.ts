import type { ListingStatus } from '@payload-types'

type CreateListingStatus = Omit<
  ListingStatus,
  'id' | 'createdAt' | 'updatedAt' | 'sizes'
>

export const mockListingStatus: CreateListingStatus[] = [
  {
    title: 'Available',
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
                text: 'Property is currently available for sale or rent.',
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
    slug: 'available',
  },
  {
    title: 'Under Contract',
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
                text: 'Property is under contract but not yet finalized.',
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
    slug: 'under-contract',
  },
  {
    title: 'Sold',
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
                text: 'Property has been sold.',
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
    slug: 'sold',
  },
  {
    title: 'Leased',
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
                text: 'Property has been leased.',
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
    slug: 'leased',
  },
]
