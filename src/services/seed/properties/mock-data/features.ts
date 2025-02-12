import type { Feature } from '@payload-types'

type CreateFeature = Omit<Feature, 'id' | 'createdAt' | 'updatedAt' | 'sizes'>

export const mockFeatures: CreateFeature[] = [
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
    _status: 'published',
    slug: 'air-conditioning',
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
    _status: 'published',
    slug: 'swimming-pool',
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
    _status: 'published',
    slug: 'security-system',
  },
]
