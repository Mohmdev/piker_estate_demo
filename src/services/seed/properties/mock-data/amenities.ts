import type { Amenity } from '@payload-types'

type CreateAmenity = Omit<
  Amenity,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const mockAmenities: CreateAmenity[] = [
  // Building Amenities (Parent)
  {
    title: 'Building Amenities',
    isPremium: false,
    description: null,
    image: null,
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
    slug: 'building-amenities',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b439b',
        doc: 26,
        url: '/building-amenities',
        label: 'Building Amenities',
      },
    ],
    _status: 'published',
  },
  // Security (Child of Building Amenities)
  {
    title: 'Security',
    isPremium: false,
    description: null,
    image: null,
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
    slug: 'security',
    slugLock: true,
    parent: 26,
    breadcrumbs: [
      {
        id: '67b0b7de9a1e4304421b43a0',
        doc: 26,
        url: '/building-amenities',
        label: 'Building Amenities',
      },
      {
        id: '67b0b7de9a1e4304421b43a1',
        doc: 27,
        url: '/building-amenities/security',
        label: 'Security',
      },
    ],
    _status: 'published',
  },
  // CCTV Surveillance (Child of Security)
  {
    title: 'CCTV Surveillance',
    isPremium: false,
    description: null,
    image: null,
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
    slug: 'cctv-surveillance',
    slugLock: true,
    parent: 27,
    breadcrumbs: [
      {
        id: '67b0b8449a1e4304421b43a7',
        doc: 26,
        url: '/building-amenities',
        label: 'Building Amenities',
      },
      {
        id: '67b0b8449a1e4304421b43a8',
        doc: 27,
        url: '/building-amenities/security',
        label: 'Security',
      },
      {
        id: '67b0b8449a1e4304421b43a9',
        doc: 28,
        url: '/building-amenities/security/cctv-surveillance',
        label: 'CCTV Surveillance',
      },
    ],
    _status: 'published',
  },
  // Unit Amenities (Parent)
  {
    title: 'Unit Amenities',
    isPremium: false,
    description: null,
    image: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:53:08.351Z',
    slug: 'unit-amenities',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b8649a1e4304421b43ae',
        doc: 29,
        url: '/unit-amenities',
        label: 'Unit Amenities',
      },
    ],
    _status: 'published',
  },
  // Climate Control (Child of Unit Amenities)
  {
    title: 'Climate Control',
    isPremium: false,
    description: null,
    image: null,
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:53:30.807Z',
    slug: 'climate-control',
    slugLock: true,
    parent: 29,
    breadcrumbs: [
      {
        id: '67b0b87a9a1e4304421b43b5',
        doc: 29,
        url: '/unit-amenities',
        label: 'Unit Amenities',
      },
      {
        id: '67b0b87a9a1e4304421b43b6',
        doc: 30,
        url: '/unit-amenities/climate-control',
        label: 'Climate Control',
      },
    ],
    _status: 'published',
  },
  // Central Air Conditioning (Child of Climate Control)
  {
    title: 'Central Air Conditioning',
    isPremium: false,
    description: null,
    image: null,
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
    slug: 'central-air-conditioning',
    slugLock: true,
    parent: 30,
    breadcrumbs: [
      {
        id: '67b0b8899a1e4304421b43ba',
        doc: 29,
        url: '/unit-amenities',
        label: 'Unit Amenities',
      },
      {
        id: '67b0b8899a1e4304421b43bb',
        doc: 30,
        url: '/unit-amenities/climate-control',
        label: 'Climate Control',
      },
      {
        id: '67b0b8899a1e4304421b43bc',
        doc: 31,
        url: '/unit-amenities/climate-control/central-air-conditioning',
        label: 'Central Air Conditioning',
      },
    ],
    _status: 'published',
  },
]
