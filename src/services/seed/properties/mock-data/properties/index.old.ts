import type { Media, Property } from '@payload-types'
import { mockLocations } from './locations'
import { mockSpecs } from './specs'

// Define slugs for reference
const CONTRACT_SLUGS = {
  FOR_SALE: 'for-sale',
  FOR_RENT: 'for-rent',
} as const

const AVAILABILITY_SLUGS = {
  AVAILABLE: 'available',
  UNDER_CONTRACT: 'under-contract',
} as const

const CLASSIFICATION_SLUGS = {
  APARTMENT: 'apartment',
  HOUSE: 'house',
} as const

const AMENITY_SLUGS = {
  AIR_CONDITIONING: 'air-conditioning',
  SWIMMING_POOL: 'swimming-pool',
} as const

export const oldMockProperties: Partial<Property>[] = [
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
    location: mockLocations.waterfrontApartment,
    specs: mockSpecs.waterfrontApartment,
    amenities: [0, 0],
    isFeatured: true,
    classification: [0],
    contract: 0,
    availability: 0,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: true,
    },
    categories: [
      {
        relationTo: 'classifications',
        value: 0,
      },
      {
        relationTo: 'contracts',
        value: 0,
      },
    ],
    tags: [],
    gallery: {
      images: [
        {
          image: '{{WATERFRONT_APARTMENT_MAIN}}' as unknown as Media,
          id: 'image1',
        },
        {
          image: '{{WATERFRONT_APARTMENT_LIVING}}' as unknown as Media,
          id: 'image2',
        },
      ],
      video: null,
      virtualTourUrl: 'https://tour.example.com/waterfront-apt',
      floorPlan: null,
      documents: null,
    },
    meta: {
      title: 'Modern Waterfront Apartment | Nexweb Real Estate',
      image: '{{WATERFRONT_APARTMENT_MAIN}}' as unknown as Media,
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
    location: mockLocations.familyHome,
    specs: mockSpecs.familyHome,
    amenities: [0, 0],
    isFeatured: false,
    classification: [0],
    contract: 0,
    availability: 0,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: true,
    },
    categories: [
      {
        relationTo: 'classifications',
        value: 0,
      },
      {
        relationTo: 'contracts',
        value: 0,
      },
    ],
    tags: [],
    gallery: {
      images: [
        {
          image: '{{FAMILY_HOME_MAIN}}' as unknown as Media,
          id: 'image3',
        },
        {
          image: '{{FAMILY_HOME_GARDEN}}' as unknown as Media,
          id: 'image4',
        },
        {
          image: '{{FAMILY_HOME_INTERIOR}}' as unknown as Media,
          id: 'image5',
        },
      ],
      video: null,
      virtualTourUrl: 'https://tour.example.com/family-home',
      floorPlan: null,
      documents: null,
    },
    meta: {
      title: 'Family Home with Garden | Nexweb Real Estate',
      image: '{{FAMILY_HOME_MAIN}}' as unknown as Media,
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

// Add metadata to help the script process the properties
export const propertyMetadata = {
  contractMappings: {
    'Modern Waterfront Apartment': CONTRACT_SLUGS.FOR_SALE,
    'Family Home with Garden': CONTRACT_SLUGS.FOR_RENT,
  },
  availabilityMappings: {
    'Modern Waterfront Apartment': AVAILABILITY_SLUGS.AVAILABLE,
    'Family Home with Garden': AVAILABILITY_SLUGS.AVAILABLE,
  },
  classificationMappings: {
    'Modern Waterfront Apartment': CLASSIFICATION_SLUGS.APARTMENT,
    'Family Home with Garden': CLASSIFICATION_SLUGS.HOUSE,
  },
  amenityMappings: {
    'Modern Waterfront Apartment': [
      AMENITY_SLUGS.AIR_CONDITIONING,
      AMENITY_SLUGS.SWIMMING_POOL,
    ],
    'Family Home with Garden': [
      AMENITY_SLUGS.AIR_CONDITIONING,
      AMENITY_SLUGS.SWIMMING_POOL,
    ],
  },
}
