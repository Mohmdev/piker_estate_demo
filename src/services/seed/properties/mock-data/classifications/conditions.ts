import type { Classification } from '@payload-types'

type CreateClassification = Omit<
  Classification,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const mockConditions: CreateClassification[] = [
  // Condition (Parent)
  {
    title: 'Condition',
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
    publishedAt: '2024-01-01T00:00:00.000Z',
    slug: 'condition',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '500-condition',
        doc: 500,
        url: '/condition',
        label: 'Condition',
      },
    ],
    _status: 'published',
  },
  // Brand New
  {
    title: 'Brand New',
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
    publishedAt: '2024-01-01T00:01:00.000Z',
    slug: 'brand-new',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '500-condition',
        doc: 500,
        url: '/condition',
        label: 'Condition',
      },
      {
        id: '501-brand-new',
        doc: 501,
        url: '/condition/brand-new',
        label: 'Brand New',
      },
    ],
    _status: 'published',
  },
  // Renovated
  {
    title: 'Renovated',
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
    publishedAt: '2024-01-01T00:02:00.000Z',
    slug: 'renovated',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '500-condition',
        doc: 500,
        url: '/condition',
        label: 'Condition',
      },
      {
        id: '502-renovated',
        doc: 502,
        url: '/condition/renovated',
        label: 'Renovated',
      },
    ],
    _status: 'published',
  },
  // Well-Maintained
  {
    title: 'Well-Maintained',
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
    publishedAt: '2024-01-01T00:03:00.000Z',
    slug: 'well-maintained',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '500-condition',
        doc: 500,
        url: '/condition',
        label: 'Condition',
      },
      {
        id: '503-well-maintained',
        doc: 503,
        url: '/condition/well-maintained',
        label: 'Well-Maintained',
      },
    ],
    _status: 'published',
  },
  // Needs Renovation
  {
    title: 'Needs Renovation',
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
    publishedAt: '2024-01-01T00:04:00.000Z',
    slug: 'needs-renovation',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '500-condition',
        doc: 500,
        url: '/condition',
        label: 'Condition',
      },
      {
        id: '504-needs-renovation',
        doc: 504,
        url: '/condition/needs-renovation',
        label: 'Needs Renovation',
      },
    ],
    _status: 'published',
  },
]
