import type {
  Amenity,
  Availability,
  Classification,
  Contract,
  Media,
  Meta,
  Project,
  Property,
  Tag,
  User,
} from '@payload-types'

export type PropertyRelationships = {
  classification: Partial<Classification>[]
  contract: Partial<Contract>[]
  availability: Partial<Availability>[]
  amenities: Partial<Amenity>[]
  gallery?: {
    images?: Partial<Media>[]
    video?: Partial<Media>
    virtualTourUrl?: string
    floorPlan?: Partial<Media>[]
    documents?: Partial<Media>[]
  }
  categories?: {
    relationTo: 'classifications' | 'contracts' | 'availability' | 'amenities'
    value: Classification | Contract | Availability | Amenity
  }[]
  tags?: Partial<Tag>[]
  relatedDocs?: {
    relationTo: 'properties' | 'projects'
    value: Property | Project
  }[]
  meta?: Partial<Meta>
  authors?: Partial<User>[]
}

import { propertiesMetadata } from './meta'

export const propertiesRelationships: Record<string, PropertyRelationships> = {
  // 1. barshaApartment
  barshaApartment: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Installments',
        slug: 'installments',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'New',
        slug: 'new',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.barshaApartment?.meta,
    authors: [],
  },
  // 2. jvcResidence
  jvcResidence: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Outright Purchase',
        slug: 'outright-purchase',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.jvcResidence?.meta,
    authors: [],
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Installments',
        slug: 'installments',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.siliconOasisStudio?.meta,
    authors: [],
  },
  // 4. alQuozLoft
  alQuozLoft: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Outright Purchase',
        slug: 'outright-purchase',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.alQuozLoft?.meta,
    authors: [],
  },
  // 5. businessBayFlat
  businessBayFlat: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Developer Finance',
        slug: 'developer-finance',
      },
    ],
    availability: [
      {
        title: 'Inactive',
        slug: 'inactive',
      },
      {
        title: 'Reserved',
        slug: 'reserved',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.businessBayFlat?.meta,
    authors: [],
  },
  // 6. alNahdaHome
  alNahdaHome: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Multiple Cheques',
        slug: 'multiple-cheques',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.alNahdaHome?.meta,
    authors: [],
  },
  // 7. mirdifVilla
  mirdifVilla: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Extended Payment Terms',
        slug: 'extended-payment-terms',
      },
    ],
    availability: [
      {
        title: 'Inactive',
        slug: 'inactive',
      },
      {
        title: 'Reserved',
        slug: 'reserved',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.mirdifVilla?.meta,
    authors: [],
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Installments',
        slug: 'installments',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.internationalCityFlat?.meta,
    authors: [],
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Multiple Cheques',
        slug: 'multiple-cheques',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.sportsCityApartment?.meta,
    authors: [],
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Developer Finance',
        slug: 'developer-finance',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'New',
        slug: 'new',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.alQusaisResidence?.meta,
    authors: [],
  },
  // 11. discoveryGardens
  discoveryGardens: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Flexible Terms',
        slug: 'flexible-terms',
      },
    ],
    availability: [
      {
        title: 'Inactive',
        slug: 'inactive',
      },
      {
        title: 'Reserved',
        slug: 'reserved',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.discoveryGardens?.meta,
    authors: [],
  },
  // 12. remramApartment
  remramApartment: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Multiple Cheques',
        slug: 'multiple-cheques',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.remramApartment?.meta,
    authors: [],
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Pre-Launch Purchase',
        slug: 'pre-launch-purchase',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Pre-Launch Registration',
        slug: 'pre-launch-registration',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.dubailandTownhouse?.meta,
    authors: [],
  },
  // 14. warqaaResidence
  warqaaResidence: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Multiple Cheques',
        slug: 'multiple-cheques',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.warqaaResidence?.meta,
    authors: [],
  },
  // 15. karamaFlat
  karamaFlat: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Pre-Launch Purchase',
        slug: 'pre-launch-purchase',
      },
    ],
    availability: [
      {
        title: 'Launch Preparation',
        slug: 'launch-preparation',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.karamaFlat?.meta,
    authors: [],
  },
  // 16. tecomApartment
  tecomApartment: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Developer Finance',
        slug: 'developer-finance',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'New',
        slug: 'new',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.tecomApartment?.meta,
    authors: [],
  },
  // 17. deiraCondo
  deiraCondo: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Flexible Terms',
        slug: 'flexible-terms',
      },
    ],
    availability: [
      {
        title: 'Inactive',
        slug: 'inactive',
      },
      {
        title: 'Reserved',
        slug: 'reserved',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.deiraCondo?.meta,
    authors: [],
  },
  // 18. satwaResidence
  satwaResidence: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Installments',
        slug: 'installments',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.satwaResidence?.meta,
    authors: [],
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Developer Finance',
        slug: 'developer-finance',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'New',
        slug: 'new',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.rashidiyaHome?.meta,
    authors: [],
  },
  // 20. garhoudApartment
  garhoudApartment: {
    classification: [
      {
        title: 'Residential Units',
        slug: 'residential-units',
      },
      {
        title: 'Apartment',
        slug: 'apartment',
      },
      {
        title: 'Single Family Apartment',
        slug: 'single-family-apartment',
      },
    ],
    contract: [
      {
        title: 'For Sale',
        slug: 'for-sale',
      },
      {
        title: 'Multiple Cheques',
        slug: 'multiple-cheques',
      },
    ],
    availability: [
      {
        title: 'Active',
        slug: 'active',
      },
      {
        title: 'Available',
        slug: 'available',
      },
    ],
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.garhoudApartment?.meta,
    authors: [],
  },
}
