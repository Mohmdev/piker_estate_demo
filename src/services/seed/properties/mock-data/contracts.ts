import type { Contract } from '@payload-types'

type CreateContract = Omit<
  Contract,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const mockContracts: CreateContract[] = [
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
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
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
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
  },
]
