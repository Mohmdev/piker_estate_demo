import type { Classification } from '@payload-types'

type CreateClassification = Omit<
  Classification,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const classificationRecords: CreateClassification[] = [
  // Root Categories
  {
    title: 'Residential Units',
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
                text: 'Properties designed for living purposes',
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
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:00:00.000Z',
    slug: 'residential-units',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f5',
        doc: 100,
        url: '/residential-units',
        label: 'Residential Units',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Commercial Units',
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
                text: 'Properties designed for business purposes',
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
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:01:00.000Z',
    slug: 'commercial-units',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f6',
        doc: 101,
        url: '/commercial-units',
        label: 'Commercial Units',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Industrial Units',
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
                text: 'Properties designed for industrial purposes',
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
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:02:00.000Z',
    slug: 'industrial-units',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f7',
        doc: 102,
        url: '/industrial-units',
        label: 'Industrial Units',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Land',
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
                text: 'Undeveloped or raw land properties',
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
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:03:00.000Z',
    slug: 'land',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f8',
        doc: 103,
        url: '/land',
        label: 'Land',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Other',
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
                text: 'Special property classifications',
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
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:04:00.000Z',
    slug: 'other',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f9',
        doc: 104,
        url: '/other',
        label: 'Other',
      },
    ],
    _status: 'published',
  },
  // Residential Units Subcategories
  {
    title: 'Apartment',
    description: null,
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:05:00.000Z',
    slug: 'apartment',
    slugLock: true,
    parent: 100,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f5',
        doc: 100,
        url: '/residential-units',
        label: 'Residential Units',
      },
      {
        id: '65f1c1a1e4b0a1b2c3d4e5fa',
        doc: 105,
        url: '/residential-units/apartment',
        label: 'Apartment',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Single Family Apartment',
    description: null,
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:06:00.000Z',
    slug: 'single-family-apartment',
    slugLock: true,
    parent: 100,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f5',
        doc: 100,
        url: '/residential-units',
        label: 'Residential Units',
      },
      {
        id: '65f1c1a1e4b0a1b2c3d4e5fb',
        doc: 106,
        url: '/residential-units/single-family-apartment',
        label: 'Single Family Apartment',
      },
    ],
    _status: 'published',
  },
  // Commercial Units Subcategories
  {
    title: 'Office',
    description: null,
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:07:00.000Z',
    slug: 'office',
    slugLock: true,
    parent: 101,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f6',
        doc: 101,
        url: '/commercial-units',
        label: 'Commercial Units',
      },
      {
        id: '65f1c1a1e4b0a1b2c3d4e5fc',
        doc: 107,
        url: '/commercial-units/office',
        label: 'Office',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Retail',
    description: null,
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:08:00.000Z',
    slug: 'retail',
    slugLock: true,
    parent: 101,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f6',
        doc: 101,
        url: '/commercial-units',
        label: 'Commercial Units',
      },
      {
        id: '65f1c1a1e4b0a1b2c3d4e5fd',
        doc: 108,
        url: '/commercial-units/retail',
        label: 'Retail',
      },
    ],
    _status: 'published',
  },
  // Industrial Units Subcategories
  {
    title: 'Warehouse',
    description: null,
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:09:00.000Z',
    slug: 'warehouse',
    slugLock: true,
    parent: 102,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f7',
        doc: 102,
        url: '/industrial-units',
        label: 'Industrial Units',
      },
      {
        id: '65f1c1a1e4b0a1b2c3d4e5fe',
        doc: 109,
        url: '/industrial-units/warehouse',
        label: 'Warehouse',
      },
    ],
    _status: 'published',
  },
  // Land Subcategories
  {
    title: 'Plot',
    description: null,
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:10:00.000Z',
    slug: 'plot',
    slugLock: true,
    parent: 103,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f8',
        doc: 103,
        url: '/land',
        label: 'Land',
      },
      {
        id: '65f1c1a1e4b0a1b2c3d4e5ff',
        doc: 110,
        url: '/land/plot',
        label: 'Plot',
      },
    ],
    _status: 'published',
  },
  // Other Subcategories
  {
    title: 'Marina',
    description: null,
    image: null,
    icon: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-01-01T00:11:00.000Z',
    slug: 'marina',
    slugLock: true,
    parent: 104,
    breadcrumbs: [
      {
        id: '65f1c1a1e4b0a1b2c3d4e5f9',
        doc: 104,
        url: '/other',
        label: 'Other',
      },
      {
        id: '65f1c1a1e4b0a1b2c3d4e600',
        doc: 111,
        url: '/other/marina',
        label: 'Marina',
      },
    ],
    _status: 'published',
  },
]
