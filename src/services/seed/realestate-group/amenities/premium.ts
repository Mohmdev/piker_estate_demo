import type { Amenity } from '@payload-types'

type CreateAmenity = Omit<
  Amenity,
  'id' | 'createdAt' | 'updatedAt' | 'properties'
>

export const premiumAmenities: CreateAmenity[] = [
  // Premium Amenities (Parent)
  {
    title: 'Luxury Features',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Premium luxury features available in select high-end properties',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'luxury-features',
    _status: 'published',
  },
  // Luxury Features Children
  {
    title: 'Private Pool',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Exclusive private swimming pool for personal use',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'private-pool',
    breadcrumbs: [
      {
        doc: 300,
        label: 'Luxury Features',
      },
    ],
    parent: 300,
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
            children: [
              {
                text: 'Direct elevator access to your residence',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'private-elevator',
    breadcrumbs: [
      {
        doc: 300,
        label: 'Luxury Features',
      },
    ],
    parent: 300,
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
            children: [
              {
                text: 'Dedicated quarters for household staff',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'maids-room',
    breadcrumbs: [
      {
        doc: 300,
        label: 'Luxury Features',
      },
    ],
    parent: 300,
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
            children: [
              {
                text: 'Separate accommodation for personal driver',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'drivers-room',
    breadcrumbs: [
      {
        doc: 300,
        label: 'Luxury Features',
      },
    ],
    parent: 300,
    _status: 'published',
  },
  {
    title: 'Walk-in Closets',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Spacious walk-in closets with custom storage solutions',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'walk-in-closets',
    breadcrumbs: [
      {
        doc: 300,
        label: 'Luxury Features',
      },
    ],
    parent: 300,
    _status: 'published',
  },
  {
    title: 'Premium Finishes',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'High-end materials and finishes throughout the property',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'premium-finishes',
    breadcrumbs: [
      {
        doc: 300,
        label: 'Luxury Features',
      },
    ],
    parent: 300,
    _status: 'published',
  },
  {
    title: 'Smart Home Automation',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Comprehensive smart home system for complete home control',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'smart-home-automation',
    breadcrumbs: [
      {
        doc: 300,
        label: 'Luxury Features',
      },
    ],
    parent: 300,
    _status: 'published',
  },
  {
    title: 'Home Theater Setup',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Dedicated entertainment space with professional audio-visual equipment',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'home-theater-setup',
    breadcrumbs: [
      {
        doc: 300,
        label: 'Luxury Features',
      },
    ],
    parent: 300,
    _status: 'published',
  },
  // Concierge Services (Parent)
  {
    title: 'Concierge Services',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Premium concierge services available to luxury property residents',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'concierge-services',
    _status: 'published',
  },
  // Concierge Services Children
  {
    title: '24/7 Concierge',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Round-the-clock concierge service for all resident needs',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: '24-7-concierge',
    breadcrumbs: [
      {
        doc: 310,
        label: 'Concierge Services',
      },
    ],
    parent: 310,
    _status: 'published',
  },
  {
    title: 'Package Reception',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Secure package receiving and storage service',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'package-reception',
    breadcrumbs: [
      {
        doc: 310,
        label: 'Concierge Services',
      },
    ],
    parent: 310,
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
            children: [
              {
                text: 'Professional housekeeping and cleaning services',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'housekeeping-services',
    breadcrumbs: [
      {
        doc: 310,
        label: 'Concierge Services',
      },
    ],
    parent: 310,
    _status: 'published',
  },
  {
    title: 'Dry Cleaning Services',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'Convenient dry cleaning pickup and delivery service',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'dry-cleaning-services',
    breadcrumbs: [
      {
        doc: 310,
        label: 'Concierge Services',
      },
    ],
    parent: 310,
    _status: 'published',
  },
  {
    title: 'Car Washing Services',
    isPremium: true,
    description: {
      root: {
        type: 'root',
        children: [
          {
            type: 'paragraph',
            children: [
              {
                text: 'On-site car washing and detailing services',
                version: 1,
              },
            ],
            version: 1,
          },
        ],
        direction: 'ltr',
        format: 'left',
        indent: 0,
        version: 1,
      },
    },
    slug: 'car-washing-services',
    breadcrumbs: [
      {
        doc: 310,
        label: 'Concierge Services',
      },
    ],
    parent: 310,
    _status: 'published',
  },
]
