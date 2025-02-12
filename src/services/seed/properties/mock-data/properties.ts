import type { Media, Property } from '@payload-types'

export const mockProperties: Partial<Property>[] = [
  {
    title: 'Modern Waterfront Apartment',
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
                text: 'Stunning waterfront apartment with panoramic harbor views. Recently renovated with high-end finishes throughout.',
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
    location: {
      address_line1: '123 Harbor View Drive',
      address_line2: 'Level 15',
      unit: '1502',
      postcode: '2000',
      city: 'Sydney',
      state: 'NSW',
      country: 'AU',
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
    },
    specs: {
      property_size: 120,
      block_size: 120,
      num_bedrooms: 3,
      num_bathrooms: 2,
      num_carspaces: 2,
    },
    features: [],
    isFeatured: true,
    listingStatus: 1,
    listingType: 1,
    propertyType: 1,
    categories: [
      {
        relationTo: 'property-types',
        value: 1,
      },
      {
        relationTo: 'listing-types',
        value: 1,
      },
    ],
    tags: [],
    gallery: {
      images: [
        '{{IMAGE_1}}' as unknown as Media,
        '{{IMAGE_2}}' as unknown as Media,
      ],
      video: null,
    },
    meta: {
      title: 'Modern Waterfront Apartment | Nexweb Real Estate',
      description:
        'Luxury 3-bedroom waterfront apartment with stunning harbor views in Sydney CBD',
    },
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slug: 'modern-waterfront-apartment',
    slugLock: true,
    _status: 'published',
  },
  {
    title: 'Family Home with Garden',
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
                text: 'Spacious family home in a quiet suburban neighborhood. Features a beautiful garden and modern amenities.',
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
    location: {
      address_line1: '45 Greenview Street',
      postcode: '2220',
      city: 'Hurstville',
      state: 'NSW',
      country: 'AU',
      coordinates: {
        latitude: -33.9672,
        longitude: 151.1022,
      },
    },
    specs: {
      property_size: 185,
      block_size: 450,
      num_bedrooms: 4,
      num_bathrooms: 2,
      num_carspaces: 2,
    },
    features: [],
    isFeatured: false,
    listingStatus: 1,
    listingType: 2,
    propertyType: 2,
    categories: [
      {
        relationTo: 'property-types',
        value: 2,
      },
      {
        relationTo: 'listing-types',
        value: 2,
      },
    ],
    tags: [],
    gallery: {
      images: [
        '{{IMAGE_2}}' as unknown as Media,
        '{{IMAGE_3}}' as unknown as Media,
      ],
      video: null,
    },
    meta: {
      title: 'Family Home with Garden | Nexweb Real Estate',
      description:
        'Spacious 4-bedroom family home with large garden in Hurstville',
    },
    noindex: false,
    authors: [],
    populatedAuthors: [],
    publishedAt: '2024-03-19T00:00:00.000Z',
    slug: 'family-home-with-garden',
    slugLock: true,
    _status: 'published',
  },
]
