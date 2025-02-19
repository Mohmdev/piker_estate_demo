import type { Availability } from '@payload-types'

type CreateAvailability = Omit<
  Availability,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const activeRecords: CreateAvailability[] = [
  // Active Properties (Parent)
  {
    title: 'Active',
    allowInquiries: true,
    showInSearch: true,
    color: 'green',
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
    publishedAt: '2025-02-15T15:50:17.675Z',
    slug: 'active',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b439b',
        doc: 1,
        url: '/active',
        label: 'Active',
      },
    ],
    _status: 'published',
  },
  // Available (Child of Active Properties)
  {
    title: 'Available',
    allowInquiries: true,
    showInSearch: true,
    color: 'green',
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
    publishedAt: '2025-02-15T15:50:54.156Z',
    slug: 'available',
    slugLock: true,
    parent: 1,
    breadcrumbs: [
      {
        id: '67b0b7de9a1e4304421b43a0',
        doc: 1,
        url: '/active',
        label: 'Active',
      },
      {
        id: '67b0b7de9a1e4304421b43a1',
        doc: 2,
        url: '/active/available',
        label: 'Available',
      },
    ],
    _status: 'published',
  },
  // New (Child of Active Properties)
  {
    title: 'New',
    allowInquiries: true,
    showInSearch: true,
    color: 'green',
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
    publishedAt: '2025-02-15T15:51:50.276Z',
    slug: 'new',
    slugLock: true,
    parent: 1,
    breadcrumbs: [
      {
        id: '67b0b8449a1e4304421b43a7',
        doc: 1,
        url: '/active',
        label: 'Active',
      },
      {
        id: '67b0b8449a1e4304421b43a8',
        doc: 3,
        url: '/active/new',
        label: 'New',
      },
    ],
    _status: 'published',
  },
  // Pre-Launch Registration (Child of Active Properties)
  {
    title: 'Pre-Launch Registration',
    allowInquiries: true,
    showInSearch: true,
    color: 'blue',
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
    publishedAt: '2025-02-15T15:53:45.972Z',
    slug: 'pre-launch-registration',
    slugLock: true,
    parent: 1,
    breadcrumbs: [
      {
        id: '67b0b8899a1e4304421b43ba',
        doc: 1,
        url: '/active',
        label: 'Active',
      },
      {
        id: '67b0b8899a1e4304421b43bb',
        doc: 4,
        url: '/active/pre-launch-registration',
        label: 'Pre-Launch Registration',
      },
    ],
    _status: 'published',
  },
]
