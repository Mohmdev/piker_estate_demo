import type { PropertyType } from '@payload-types'

type CreatePropertyType = Omit<
  PropertyType,
  'id' | 'createdAt' | 'updatedAt' | 'sizes'
>

export const mockPropertyTypes: CreatePropertyType[] = [
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
  },
]
