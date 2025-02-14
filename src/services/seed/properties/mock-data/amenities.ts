import type { Amenity } from '@payload-types'

type CreateAmenity = Omit<
  Amenity,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const mockAmenities: CreateAmenity[] = [
  {
    title: 'Air Conditioning',
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
                text: 'Climate control system for cooling.',
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
    isPremium: false,
    _status: 'published',
    slug: 'air-conditioning',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
  },
  {
    title: 'Swimming Pool',
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
                text: 'Private swimming pool within the property.',
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
    isPremium: true,
    _status: 'published',
    slug: 'swimming-pool',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
  },
  {
    title: 'Security System',
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
                text: 'Modern security system with alarms and monitoring.',
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
    isPremium: true,
    _status: 'published',
    slug: 'security-system',
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slugLock: true,
    parent: null,
    breadcrumbs: [],
  },
]
