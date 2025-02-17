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
  contract: Partial<Contract>
  availability: Partial<Availability>
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - Due to its size (95m²) and 2bed/2bath configuration
    ],
    contract: {
      // Parent: Sales Contracts
      // - Multiple Cheques - New property suitable for flexible payment structure
    },
    availability: {
      // New (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - Due to its large size (120m²) and 3bed/2.5bath family configuration
    ],
    contract: {
      // Parent: Sales Contracts
      // - Outright Purchase - Ready family home in established community
    },
    availability: {
      // Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105) - Studio configuration with 45m²
    ],
    contract: {
      // Parent: Sales Contracts
      // - Installments - Affordable studio suitable for first-time buyers
    },
    availability: {
      // Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - Due to its duplex design and 150m² size
    ],
    contract: {
      // Parent: Sales Contracts
      // - Outright Purchase - Unique property in artistic area
    },
    availability: {
      // Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105) - Executive style 85m² with 1bed/1.5bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Developer Finance - Premium property with financing options
    },
    availability: {
      // Reserved (Inactive Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - 110m² family-oriented with 2bed/2bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Multiple Cheques - Family home with flexible payment terms
    },
    availability: {
      // Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Single Family Apartment (106) - Luxury 280m² villa with 4bed/4.5bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Extended Payment Terms - Luxury villa with extended payment plan
    },
    availability: {
      // Reserved (Inactive Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105) - Starter home 65m² with 1bed/1bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Installments - Affordable starter home with payment plan
    },
    availability: {
      // Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - 105m² with 2bed/2bath modern family layout
    ],
    contract: {
      // Parent: Sales Contracts
      // - Multiple Cheques - Modern apartment with payment flexibility
    },
    availability: {
      // Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - 90m² with 2bed/2bath family configuration
    ],
    contract: {
      // Parent: Sales Contracts
      // - Developer Finance - New property with developer financing options
    },
    availability: {
      // New (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105) - Mediterranean style 75m² with 1bed/1.5bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Flexible Terms - Mediterranean-style apartment with adaptable terms
    },
    availability: {
      // Reserved (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - 95m² with 2bed/2bath family layout
    ],
    contract: {
      // Parent: Sales Contracts
      // - Multiple Cheques - Updated apartment with payment options
    },
    availability: {
      // Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Single Family Apartment (106) - Elegant 200m² townhouse with 3bed/3.5bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Pre-Launch Purchase - New development with early-bird pricing
    },
    availability: {
      // Status: Pre-Launch Registration (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - 130m² with 3bed/2bath family design
    ],
    contract: {
      // Parent: Sales Contracts
      // - Multiple Cheques - Spacious family home with payment plan
    },
    availability: {
      // Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105) - Urban 70m² with 1bed/1bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Pre-Launch Purchase - New development in launch preparation
    },
    availability: {
      // Launch Preparation (Special States)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - Professional 100m² with 2bed/2bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Developer Finance - New property with attractive financing
    },
    availability: {
      // Status: New (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - Traditional 85m² with 2bed/1.5bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Flexible Terms - Traditional property with adaptable payment structure
    },
    availability: {
      // Status: Reserved (Inactive Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105) - Budget 60m² with 1bed/1bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Installments - Budget-friendly option with installment plan
    },
    availability: {
      // Status: Available (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - 115m² with 2bed/2bath family layout
    ],
    contract: {
      // Parent: Sales Contracts
      // - Developer Finance - New property with developer support
    },
    availability: {
      // Status: New (Active Properties)
    },
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
      // Parent: Residential Units (100)
      // - Apartment (105)
      // - Single Family Apartment (106) - Upscale 95m² with 2bed/2bath
    ],
    contract: {
      // Parent: Sales Contracts
      // - Multiple Cheques - Upscale property with flexible payments
    },
    availability: {
      // Status: Available (Active Properties)
    },
    amenities: [],
    gallery: {},
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: propertiesMetadata.garhoudApartment?.meta,
    authors: [],
  },
}
