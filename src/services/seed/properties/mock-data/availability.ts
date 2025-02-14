import type { Availability } from '@payload-types'

type CreateAvailability = Omit<
  Availability,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const mockAvailability: CreateAvailability[] = [
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
    color: 'green',
    extra: {
      allowInquiries: true,
      showInSearch: true,
    },
    _status: 'published',
    slug: 'available',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
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
    color: 'yellow',
    extra: {
      allowInquiries: false,
      showInSearch: true,
    },
    _status: 'published',
    slug: 'under-contract',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
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
    color: 'red',
    extra: {
      allowInquiries: false,
      showInSearch: false,
    },
    _status: 'published',
    slug: 'sold',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
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
    color: 'gray',
    extra: {
      allowInquiries: false,
      showInSearch: false,
    },
    _status: 'published',
    slug: 'leased',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
  },
]
