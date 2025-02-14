import type { Classification } from '@payload-types'

type CreateClassification = Omit<
  Classification,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const mockClassifications: CreateClassification[] = [
  {
    title: 'Apartment',
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
                text: 'Modern residential units in multi-story buildings.',
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
    slug: 'apartment',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
  },
  {
    title: 'House',
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
                text: 'Single-family detached homes with private land.',
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
    slug: 'house',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
  },
  {
    title: 'Townhouse',
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
                text: 'Multi-level attached homes with shared walls.',
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
    slug: 'townhouse',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
  },
]
