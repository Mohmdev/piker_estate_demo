import type { Media, Property } from '@payload-types'

export const mockProperties: Partial<Property>[] = [
  {
    title: 'Modern Waterfront Apartment',
    market: 'luxury',
    price: 1250000,
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
      countrySelect: {
        country: 'AU',
      },
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093,
      },
      neighborhood: {
        area: 'Sydney Harbor',
        landmarks: [
          {
            name: 'Opera House',
            distance: 1.2,
          },
        ],
      },
    },
    specs: {
      measurements: {
        property_size: 120,
        block_size: 120,
      },
      rooms: {
        num_bedrooms: 3,
        num_bathrooms: 2,
        num_carspaces: 2,
        num_floors: 1,
      },
      facility: {
        facilityType: 'security',
        hasUnits: true,
        isLandOnly: false,
      },
      construction: {
        year_built: 2020,
        construction_type: 'concrete',
      },
      utilities: {
        energy_rating: 'A',
        heating_type: 'central',
        cooling_type: 'central',
      },
    },
    amenities: [],
    isFeatured: true,
    classification: [1],
    contract: 1,
    availability: 1,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: true,
    },
    categories: [
      {
        relationTo: 'classifications',
        value: 1,
      },
      {
        relationTo: 'contracts',
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
      virtualTourUrl: 'https://tour.example.com/waterfront-apt',
      floorPlan: null,
      propertyDocs: null,
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
    market: 'mid-market',
    price: 850000,
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
      countrySelect: {
        country: 'AU',
      },
      coordinates: {
        latitude: -33.9672,
        longitude: 151.1022,
      },
      neighborhood: {
        area: 'Hurstville',
        landmarks: [
          {
            name: 'Hurstville Central',
            distance: 0.8,
          },
        ],
      },
    },
    specs: {
      measurements: {
        property_size: 185,
        block_size: 450,
      },
      rooms: {
        num_bedrooms: 4,
        num_bathrooms: 2,
        num_carspaces: 2,
        num_floors: 2,
      },
      facility: {
        facilityType: 'smart-home',
        hasUnits: false,
        isLandOnly: false,
      },
      construction: {
        year_built: 2015,
        construction_type: 'brick',
      },
      utilities: {
        energy_rating: 'B',
        heating_type: 'heat-pump',
        cooling_type: 'split',
      },
    },
    amenities: [],
    isFeatured: false,
    classification: [2],
    contract: 2,
    availability: 1,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: true,
    },
    categories: [
      {
        relationTo: 'classifications',
        value: 2,
      },
      {
        relationTo: 'contracts',
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
      virtualTourUrl: 'https://tour.example.com/family-home',
      floorPlan: null,
      propertyDocs: null,
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
