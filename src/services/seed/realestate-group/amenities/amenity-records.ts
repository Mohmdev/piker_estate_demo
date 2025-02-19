import type { Amenity } from '@payload-types'

type CreateAmenity = Omit<
  Amenity,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const amenityRecords: CreateAmenity[] = [
  // Security & Access Group
  {
    title: 'Security & Access',
    isPremium: false,
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
                text: 'Security and access control features for the property',
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
    slug: 'security-and-access',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b439b',
        doc: 100,
        url: '/security-and-access',
        label: 'Security & Access',
      },
    ],
    _status: 'published',
  },
  {
    title: '24/7 Security & CCTV',
    isPremium: false,
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
                text: 'Round-the-clock security personnel and CCTV surveillance system',
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
    slug: '24-7-security-and-cctv',
    slugLock: true,
    parent: 100,
    breadcrumbs: [
      {
        id: '67b0b7de9a1e4304421b43a0',
        doc: 100,
        url: '/security-and-access',
        label: 'Security & Access',
      },
      {
        id: '67b0b7de9a1e4304421b43a1',
        doc: 101,
        url: '/security-and-access/24-7-security-and-cctv',
        label: '24/7 Security & CCTV',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Access Control System',
    isPremium: false,
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
                text: 'Electronic access control system for enhanced security',
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
    slug: 'access-control-system',
    slugLock: true,
    parent: 100,
    breadcrumbs: [
      {
        id: '67b0b8449a1e4304421b43a7',
        doc: 100,
        url: '/security-and-access',
        label: 'Security & Access',
      },
      {
        id: '67b0b8449a1e4304421b43a8',
        doc: 102,
        url: '/security-and-access/access-control-system',
        label: 'Access Control System',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Intercom System',
    isPremium: false,
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
                text: 'Modern intercom system for visitor management',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:52:50.276Z',
    slug: 'intercom-system',
    slugLock: true,
    parent: 100,
    breadcrumbs: [
      {
        id: '67b0b8449a1e4304421b43a9',
        doc: 100,
        url: '/security-and-access',
        label: 'Security & Access',
      },
      {
        id: '67b0b8449a1e4304421b43aa',
        doc: 103,
        url: '/security-and-access/intercom-system',
        label: 'Intercom System',
      },
    ],
    _status: 'published',
  },
  // Parking Group
  {
    title: 'Parking',
    isPremium: false,
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
                text: 'Parking facilities and services',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:53:17.675Z',
    slug: 'parking',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b439c',
        doc: 200,
        url: '/parking',
        label: 'Parking',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Covered Parking',
    isPremium: false,
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
                text: 'Protected parking spaces for vehicles',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:54:17.675Z',
    slug: 'covered-parking',
    slugLock: true,
    parent: 200,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b439d',
        doc: 200,
        url: '/parking',
        label: 'Parking',
      },
      {
        id: '67b0b7b99a1e4304421b439e',
        doc: 201,
        url: '/parking/covered-parking',
        label: 'Covered Parking',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Valet Service',
    isPremium: true,
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
                text: 'Professional valet parking service',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:55:17.675Z',
    slug: 'valet-service',
    slugLock: true,
    parent: 200,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b439f',
        doc: 200,
        url: '/parking',
        label: 'Parking',
      },
      {
        id: '67b0b7b99a1e4304421b43a0',
        doc: 202,
        url: '/parking/valet-service',
        label: 'Valet Service',
      },
    ],
    _status: 'published',
  },
  {
    title: 'EV Charging Stations',
    isPremium: true,
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
                text: 'Electric vehicle charging facilities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:56:17.675Z',
    slug: 'ev-charging-stations',
    slugLock: true,
    parent: 200,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43a1',
        doc: 200,
        url: '/parking',
        label: 'Parking',
      },
      {
        id: '67b0b7b99a1e4304421b43a2',
        doc: 203,
        url: '/parking/ev-charging-stations',
        label: 'EV Charging Stations',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Bicycle Storage',
    isPremium: false,
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
                text: 'Secure storage facilities for bicycles',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:57:17.675Z',
    slug: 'bicycle-storage',
    slugLock: true,
    parent: 200,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43a3',
        doc: 200,
        url: '/parking',
        label: 'Parking',
      },
      {
        id: '67b0b7b99a1e4304421b43a4',
        doc: 204,
        url: '/parking/bicycle-storage',
        label: 'Bicycle Storage',
      },
    ],
    _status: 'published',
  },
  // Wellness & Recreation Group
  {
    title: 'Wellness & Recreation',
    isPremium: false,
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
                text: 'Wellness and recreational facilities for residents',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:58:17.675Z',
    slug: 'wellness-and-recreation',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b439d',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Swimming Pool',
    isPremium: true,
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
                text: 'Temperature-controlled swimming pool for residents',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T15:59:17.675Z',
    slug: 'swimming-pool',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b439e',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b439f',
        doc: 301,
        url: '/wellness-and-recreation/swimming-pool',
        label: 'Swimming Pool',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Fitness Center',
    isPremium: true,
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
                text: 'Modern fitness center with professional equipment',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:00:17.675Z',
    slug: 'fitness-center',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43a0',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b43a1',
        doc: 302,
        url: '/wellness-and-recreation/fitness-center',
        label: 'Fitness Center',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Spa Facilities',
    isPremium: true,
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
                text: 'Luxurious spa facilities for relaxation and wellness',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:01:17.675Z',
    slug: 'spa-facilities',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43a2',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b43a3',
        doc: 303,
        url: '/wellness-and-recreation/spa-facilities',
        label: 'Spa Facilities',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Sauna & Steam Room',
    isPremium: true,
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
                text: 'Professional sauna and steam room facilities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:02:17.675Z',
    slug: 'sauna-and-steam-room',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43a4',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b43a5',
        doc: 304,
        url: '/wellness-and-recreation/sauna-and-steam-room',
        label: 'Sauna & Steam Room',
      },
    ],
    _status: 'published',
  },
  {
    title: "Children's Play Area",
    isPremium: false,
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
                text: 'Safe and engaging play area designed for children',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:03:17.675Z',
    slug: 'childrens-play-area',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43a6',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b43a7',
        doc: 305,
        url: '/wellness-and-recreation/childrens-play-area',
        label: "Children's Play Area",
      },
    ],
    _status: 'published',
  },
  {
    title: 'Sports Courts',
    isPremium: false,
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
                text: 'Multi-purpose sports courts for various activities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:04:17.675Z',
    slug: 'sports-courts',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43a8',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b43a9',
        doc: 306,
        url: '/wellness-and-recreation/sports-courts',
        label: 'Sports Courts',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Walking/Jogging Track',
    isPremium: false,
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
                text: 'Dedicated track for walking and jogging activities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:05:17.675Z',
    slug: 'walking-jogging-track',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43aa',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b43ab',
        doc: 307,
        url: '/wellness-and-recreation/walking-jogging-track',
        label: 'Walking/Jogging Track',
      },
    ],
    _status: 'published',
  },
  {
    title: 'BBQ Area',
    isPremium: false,
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
                text: 'Outdoor barbecue area for social gatherings',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:06:17.675Z',
    slug: 'bbq-area',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43ac',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b43ad',
        doc: 308,
        url: '/wellness-and-recreation/bbq-area',
        label: 'BBQ Area',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Games Room',
    isPremium: false,
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
                text: 'Indoor entertainment space with various gaming facilities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:07:17.675Z',
    slug: 'games-room',
    slugLock: true,
    parent: 300,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43ae',
        doc: 300,
        url: '/wellness-and-recreation',
        label: 'Wellness & Recreation',
      },
      {
        id: '67b0b7b99a1e4304421b43af',
        doc: 309,
        url: '/wellness-and-recreation/games-room',
        label: 'Games Room',
      },
    ],
    _status: 'published',
  },
  // Business & Work Group
  {
    title: 'Business & Work',
    isPremium: false,
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
                text: 'Professional business and work facilities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:08:17.675Z',
    slug: 'business-and-work',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43b0',
        doc: 400,
        url: '/business-and-work',
        label: 'Business & Work',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Business Center',
    isPremium: true,
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
                text: 'Fully equipped business center with essential office amenities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:09:17.675Z',
    slug: 'business-center',
    slugLock: true,
    parent: 400,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43b1',
        doc: 400,
        url: '/business-and-work',
        label: 'Business & Work',
      },
      {
        id: '67b0b7b99a1e4304421b43b2',
        doc: 401,
        url: '/business-and-work/business-center',
        label: 'Business Center',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Co-working Space',
    isPremium: true,
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
                text: 'Modern co-working space with high-speed internet and workstations',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:10:17.675Z',
    slug: 'co-working-space',
    slugLock: true,
    parent: 400,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43b3',
        doc: 400,
        url: '/business-and-work',
        label: 'Business & Work',
      },
      {
        id: '67b0b7b99a1e4304421b43b4',
        doc: 402,
        url: '/business-and-work/co-working-space',
        label: 'Co-working Space',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Meeting Rooms',
    isPremium: true,
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
                text: 'Professional meeting rooms with presentation facilities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:11:17.675Z',
    slug: 'meeting-rooms',
    slugLock: true,
    parent: 400,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43b5',
        doc: 400,
        url: '/business-and-work',
        label: 'Business & Work',
      },
      {
        id: '67b0b7b99a1e4304421b43b6',
        doc: 403,
        url: '/business-and-work/meeting-rooms',
        label: 'Meeting Rooms',
      },
    ],
    _status: 'published',
  },
  // Building Services Group
  {
    title: 'Building Services',
    isPremium: false,
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
                text: 'Essential building maintenance and support services',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:12:17.675Z',
    slug: 'building-services',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43b7',
        doc: 500,
        url: '/building-services',
        label: 'Building Services',
      },
    ],
    _status: 'published',
  },
  {
    title: '24/7 Maintenance',
    isPremium: false,
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
                text: 'Round-the-clock maintenance and repair services',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:13:17.675Z',
    slug: '24-7-maintenance',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43b8',
        doc: 500,
        url: '/building-services',
        label: 'Building Services',
      },
      {
        id: '67b0b7b99a1e4304421b43b9',
        doc: 501,
        url: '/building-services/24-7-maintenance',
        label: '24/7 Maintenance',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Concierge Service',
    isPremium: true,
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
                text: 'Professional concierge services for residents',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:14:17.675Z',
    slug: 'concierge-service',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43ba',
        doc: 500,
        url: '/building-services',
        label: 'Building Services',
      },
      {
        id: '67b0b7b99a1e4304421b43bb',
        doc: 502,
        url: '/building-services/concierge-service',
        label: 'Concierge Service',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Building Management',
    isPremium: false,
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
                text: 'Professional building management and administration services',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:15:17.675Z',
    slug: 'building-management',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43bc',
        doc: 500,
        url: '/building-services',
        label: 'Building Services',
      },
      {
        id: '67b0b7b99a1e4304421b43bd',
        doc: 503,
        url: '/building-services/building-management',
        label: 'Building Management',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Package Reception',
    isPremium: false,
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
                text: 'Secure package reception and storage service',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:16:17.675Z',
    slug: 'package-reception',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43be',
        doc: 500,
        url: '/building-services',
        label: 'Building Services',
      },
      {
        id: '67b0b7b99a1e4304421b43bf',
        doc: 504,
        url: '/building-services/package-reception',
        label: 'Package Reception',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Housekeeping Services',
    isPremium: true,
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
                text: 'Professional housekeeping and cleaning services',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:17:17.675Z',
    slug: 'housekeeping-services',
    slugLock: true,
    parent: 500,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43c0',
        doc: 500,
        url: '/building-services',
        label: 'Building Services',
      },
      {
        id: '67b0b7b99a1e4304421b43c1',
        doc: 505,
        url: '/building-services/housekeeping-services',
        label: 'Housekeeping Services',
      },
    ],
    _status: 'published',
  },
  // Core Unit Features Group
  {
    title: 'Core Unit Features',
    isPremium: false,
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
                text: 'Essential features and amenities within residential units',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:18:17.675Z',
    slug: 'core-unit-features',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43c2',
        doc: 600,
        url: '/core-unit-features',
        label: 'Core Unit Features',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Central Air Conditioning',
    isPremium: false,
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
                text: 'Modern central air conditioning system with temperature control',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:19:17.675Z',
    slug: 'central-air-conditioning',
    slugLock: true,
    parent: 600,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43c3',
        doc: 600,
        url: '/core-unit-features',
        label: 'Core Unit Features',
      },
      {
        id: '67b0b7b99a1e4304421b43c4',
        doc: 601,
        url: '/core-unit-features/central-air-conditioning',
        label: 'Central Air Conditioning',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Smart Home System',
    isPremium: true,
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
                text: 'Integrated smart home automation system for lighting, climate, and security',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:20:17.675Z',
    slug: 'smart-home-system',
    slugLock: true,
    parent: 600,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43c5',
        doc: 600,
        url: '/core-unit-features',
        label: 'Core Unit Features',
      },
      {
        id: '67b0b7b99a1e4304421b43c6',
        doc: 602,
        url: '/core-unit-features/smart-home-system',
        label: 'Smart Home System',
      },
    ],
    _status: 'published',
  },
  {
    title: 'High-speed Internet Infrastructure',
    isPremium: false,
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
                text: 'Built-in high-speed internet connectivity infrastructure',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:21:17.675Z',
    slug: 'high-speed-internet-infrastructure',
    slugLock: true,
    parent: 600,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43c7',
        doc: 600,
        url: '/core-unit-features',
        label: 'Core Unit Features',
      },
      {
        id: '67b0b7b99a1e4304421b43c8',
        doc: 603,
        url: '/core-unit-features/high-speed-internet-infrastructure',
        label: 'High-speed Internet Infrastructure',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Built-in Wardrobes',
    isPremium: false,
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
                text: 'Custom-designed built-in wardrobes in bedrooms',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:22:17.675Z',
    slug: 'built-in-wardrobes',
    slugLock: true,
    parent: 600,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43c9',
        doc: 600,
        url: '/core-unit-features',
        label: 'Core Unit Features',
      },
      {
        id: '67b0b7b99a1e4304421b43ca',
        doc: 604,
        url: '/core-unit-features/built-in-wardrobes',
        label: 'Built-in Wardrobes',
      },
    ],
    _status: 'published',
  },
  // Kitchen & Laundry Group
  {
    title: 'Kitchen & Laundry',
    isPremium: false,
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
                text: 'Kitchen and laundry facilities and amenities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:23:17.675Z',
    slug: 'kitchen-and-laundry',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43cb',
        doc: 700,
        url: '/kitchen-and-laundry',
        label: 'Kitchen & Laundry',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Fully Fitted Kitchen',
    isPremium: false,
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
                text: 'Modern kitchen with premium cabinetry and countertops',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:24:17.675Z',
    slug: 'fully-fitted-kitchen',
    slugLock: true,
    parent: 700,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43cc',
        doc: 700,
        url: '/kitchen-and-laundry',
        label: 'Kitchen & Laundry',
      },
      {
        id: '67b0b7b99a1e4304421b43cd',
        doc: 701,
        url: '/kitchen-and-laundry/fully-fitted-kitchen',
        label: 'Fully Fitted Kitchen',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Built-in Appliances',
    isPremium: true,
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
                text: 'High-end built-in kitchen appliances including refrigerator, oven, and dishwasher',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:25:17.675Z',
    slug: 'built-in-appliances',
    slugLock: true,
    parent: 700,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43ce',
        doc: 700,
        url: '/kitchen-and-laundry',
        label: 'Kitchen & Laundry',
      },
      {
        id: '67b0b7b99a1e4304421b43cf',
        doc: 702,
        url: '/kitchen-and-laundry/built-in-appliances',
        label: 'Built-in Appliances',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Laundry Room',
    isPremium: false,
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
                text: 'Dedicated laundry room with washer and dryer connections',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:26:17.675Z',
    slug: 'laundry-room',
    slugLock: true,
    parent: 700,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43d0',
        doc: 700,
        url: '/kitchen-and-laundry',
        label: 'Kitchen & Laundry',
      },
      {
        id: '67b0b7b99a1e4304421b43d1',
        doc: 703,
        url: '/kitchen-and-laundry/laundry-room',
        label: 'Laundry Room',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Washer/Dryer Connections',
    isPremium: false,
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
                text: 'Pre-installed connections for washer and dryer units',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:27:17.675Z',
    slug: 'washer-dryer-connections',
    slugLock: true,
    parent: 700,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43d2',
        doc: 700,
        url: '/kitchen-and-laundry',
        label: 'Kitchen & Laundry',
      },
      {
        id: '67b0b7b99a1e4304421b43d3',
        doc: 704,
        url: '/kitchen-and-laundry/washer-dryer-connections',
        label: 'Washer/Dryer Connections',
      },
    ],
    _status: 'published',
  },
  // Outdoor Features Group
  {
    title: 'Outdoor Features',
    isPremium: false,
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
                text: 'Outdoor amenities and features for enhanced living experience',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:28:17.675Z',
    slug: 'outdoor-features',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43d4',
        doc: 800,
        url: '/outdoor-features',
        label: 'Outdoor Features',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Balcony/Terrace',
    isPremium: false,
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
                text: 'Private outdoor space with scenic views',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:29:17.675Z',
    slug: 'balcony-terrace',
    slugLock: true,
    parent: 800,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43d5',
        doc: 800,
        url: '/outdoor-features',
        label: 'Outdoor Features',
      },
      {
        id: '67b0b7b99a1e4304421b43d6',
        doc: 801,
        url: '/outdoor-features/balcony-terrace',
        label: 'Balcony/Terrace',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Private Garden',
    isPremium: true,
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
                text: 'Exclusive landscaped garden space for personal use',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:30:17.675Z',
    slug: 'private-garden',
    slugLock: true,
    parent: 800,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43d7',
        doc: 800,
        url: '/outdoor-features',
        label: 'Outdoor Features',
      },
      {
        id: '67b0b7b99a1e4304421b43d8',
        doc: 802,
        url: '/outdoor-features/private-garden',
        label: 'Private Garden',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Scenic Views',
    isPremium: true,
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
                text: 'Premium views of city skyline, water, or natural landscapes',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:31:17.675Z',
    slug: 'scenic-views',
    slugLock: true,
    parent: 800,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43d9',
        doc: 800,
        url: '/outdoor-features',
        label: 'Outdoor Features',
      },
      {
        id: '67b0b7b99a1e4304421b43da',
        doc: 803,
        url: '/outdoor-features/scenic-views',
        label: 'Scenic Views',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Pet-friendly Areas',
    isPremium: false,
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
                text: 'Designated areas for pet recreation and exercise',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:32:17.675Z',
    slug: 'pet-friendly-areas',
    slugLock: true,
    parent: 800,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43db',
        doc: 800,
        url: '/outdoor-features',
        label: 'Outdoor Features',
      },
      {
        id: '67b0b7b99a1e4304421b43dc',
        doc: 804,
        url: '/outdoor-features/pet-friendly-areas',
        label: 'Pet-friendly Areas',
      },
    ],
    _status: 'published',
  },
  // Premium Features Group
  {
    title: 'Premium Features',
    isPremium: true,
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
                text: 'Exclusive luxury amenities and features',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:33:17.675Z',
    slug: 'premium-features',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43dd',
        doc: 900,
        url: '/premium-features',
        label: 'Premium Features',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Private Pool',
    isPremium: true,
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
                text: 'Exclusive private swimming pool for personal use',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:34:17.675Z',
    slug: 'private-pool',
    slugLock: true,
    parent: 900,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43de',
        doc: 900,
        url: '/premium-features',
        label: 'Premium Features',
      },
      {
        id: '67b0b7b99a1e4304421b43df',
        doc: 901,
        url: '/premium-features/private-pool',
        label: 'Private Pool',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Private Elevator',
    isPremium: true,
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
                text: 'Dedicated private elevator access to the residence',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:35:17.675Z',
    slug: 'private-elevator',
    slugLock: true,
    parent: 900,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43e0',
        doc: 900,
        url: '/premium-features',
        label: 'Premium Features',
      },
      {
        id: '67b0b7b99a1e4304421b43e1',
        doc: 902,
        url: '/premium-features/private-elevator',
        label: 'Private Elevator',
      },
    ],
    _status: 'published',
  },
  {
    title: "Maid's Room",
    isPremium: true,
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
                text: 'Separate living quarters for household staff',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:36:17.675Z',
    slug: 'maids-room',
    slugLock: true,
    parent: 900,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43e2',
        doc: 900,
        url: '/premium-features',
        label: 'Premium Features',
      },
      {
        id: '67b0b7b99a1e4304421b43e3',
        doc: 903,
        url: '/premium-features/maids-room',
        label: "Maid's Room",
      },
    ],
    _status: 'published',
  },
  {
    title: "Driver's Room",
    isPremium: true,
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
                text: 'Dedicated accommodation for personal driver',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:37:17.675Z',
    slug: 'drivers-room',
    slugLock: true,
    parent: 900,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43e4',
        doc: 900,
        url: '/premium-features',
        label: 'Premium Features',
      },
      {
        id: '67b0b7b99a1e4304421b43e5',
        doc: 904,
        url: '/premium-features/drivers-room',
        label: "Driver's Room",
      },
    ],
    _status: 'published',
  },
  // Nearby Amenities Group
  {
    title: 'Nearby Amenities',
    isPremium: false,
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
                text: 'Convenient access to essential services and facilities in the vicinity',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:38:17.675Z',
    slug: 'nearby-amenities',
    slugLock: true,
    parent: null,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43e6',
        doc: 1000,
        url: '/nearby-amenities',
        label: 'Nearby Amenities',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Retail & Dining',
    isPremium: false,
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
                text: 'Easy access to shopping centers, restaurants, and cafes',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:39:17.675Z',
    slug: 'retail-and-dining',
    slugLock: true,
    parent: 1000,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43e7',
        doc: 1000,
        url: '/nearby-amenities',
        label: 'Nearby Amenities',
      },
      {
        id: '67b0b7b99a1e4304421b43e8',
        doc: 1001,
        url: '/nearby-amenities/retail-and-dining',
        label: 'Retail & Dining',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Educational Institutions',
    isPremium: false,
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
                text: 'Proximity to schools, colleges, and educational facilities',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:40:17.675Z',
    slug: 'educational-institutions',
    slugLock: true,
    parent: 1000,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43e9',
        doc: 1000,
        url: '/nearby-amenities',
        label: 'Nearby Amenities',
      },
      {
        id: '67b0b7b99a1e4304421b43ea',
        doc: 1002,
        url: '/nearby-amenities/educational-institutions',
        label: 'Educational Institutions',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Healthcare Facilities',
    isPremium: false,
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
                text: 'Close proximity to hospitals, clinics, and medical centers',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:41:17.675Z',
    slug: 'healthcare-facilities',
    slugLock: true,
    parent: 1000,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43eb',
        doc: 1000,
        url: '/nearby-amenities',
        label: 'Nearby Amenities',
      },
      {
        id: '67b0b7b99a1e4304421b43ec',
        doc: 1003,
        url: '/nearby-amenities/healthcare-facilities',
        label: 'Healthcare Facilities',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Public Transportation',
    isPremium: false,
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
                text: 'Easy access to metro stations, bus stops, and other public transport',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:42:17.675Z',
    slug: 'public-transportation',
    slugLock: true,
    parent: 1000,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43ed',
        doc: 1000,
        url: '/nearby-amenities',
        label: 'Nearby Amenities',
      },
      {
        id: '67b0b7b99a1e4304421b43ee',
        doc: 1004,
        url: '/nearby-amenities/public-transportation',
        label: 'Public Transportation',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Places of Worship',
    isPremium: false,
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
                text: 'Proximity to mosques and other religious establishments',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:43:17.675Z',
    slug: 'places-of-worship',
    slugLock: true,
    parent: 1000,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43ef',
        doc: 1000,
        url: '/nearby-amenities',
        label: 'Nearby Amenities',
      },
      {
        id: '67b0b7b99a1e4304421b43f0',
        doc: 1005,
        url: '/nearby-amenities/places-of-worship',
        label: 'Places of Worship',
      },
    ],
    _status: 'published',
  },
  {
    title: 'Parks & Recreation',
    isPremium: false,
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
                text: 'Close proximity to public parks, recreational areas, and green spaces',
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
    relatedDocs: [],
    meta: {
      title: null,
      image: null,
      description: null,
    },
    noindex: null,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2025-02-15T16:44:17.675Z',
    slug: 'parks-and-recreation',
    slugLock: true,
    parent: 1000,
    breadcrumbs: [
      {
        id: '67b0b7b99a1e4304421b43f1',
        doc: 1000,
        url: '/nearby-amenities',
        label: 'Nearby Amenities',
      },
      {
        id: '67b0b7b99a1e4304421b43f2',
        doc: 1006,
        url: '/nearby-amenities/parks-and-recreation',
        label: 'Parks & Recreation',
      },
    ],
    _status: 'published',
  },
]
