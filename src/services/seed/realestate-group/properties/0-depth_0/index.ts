import type { Property } from '@payload-types'
import { mockDescriptions } from './descriptions'
import { mockLocations } from './locations'
import { mockSpecs } from './specs'

export type PropertyDepthZero = Pick<
  Property,
  | 'title'
  | 'slug'
  | 'description'
  | 'market'
  | 'condition'
  | 'price'
  | 'contractDetails'
  | 'isFeatured'
  | 'location'
  | 'specs'
  // | 'populatedAuthors'
>

export const propertiesDepthZero: Record<string, PropertyDepthZero> = {
  // 1. barshaApartment
  barshaApartment: {
    title: 'Modern Al Barsha Heights Apartment',
    slug: 'modern-al-barsha-heights-apartment',
    price: 425000,
    market: 'mid-market', // Good location, recent renovation, standard specs
    condition: 'renovated', // Renovated in 2021
    isFeatured: true,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.barshaApartment,
    location: mockLocations.barshaApartment,
    specs: mockSpecs.barshaApartment,
  },
  // 2. jvcResidence
  jvcResidence: {
    title: 'Spacious JVC Family Home',
    slug: 'spacious-jvc-family-home',
    price: 520000,
    market: 'mid-market', // Family-oriented area, good specs
    condition: 'well-maintained', // Built in 2018, no renovations needed yet
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.jvcResidence,
    location: mockLocations.jvcResidence,
    specs: mockSpecs.jvcResidence,
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    title: 'Silicon Oasis Smart Studio',
    slug: 'silicon-oasis-smart-studio',
    price: 165000,
    market: 'economy', // Studio apartment, basic specs
    condition: 'renovated', // Renovated in 2022
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.siliconOasisStudio,
    location: mockLocations.siliconOasisStudio,
    specs: mockSpecs.siliconOasisStudio,
  },
  // 4. alQuozLoft
  alQuozLoft: {
    title: 'Al Quoz Industrial Loft',
    slug: 'al-quoz-industrial-loft',
    price: 480000,
    market: 'industrial', // Industrial area conversion
    condition: 'well-maintained', // Built in 2019, modern design
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.alQuozLoft,
    location: mockLocations.alQuozLoft,
    specs: mockSpecs.alQuozLoft,
  },
  // 5. businessBayFlat
  businessBayFlat: {
    title: 'Business Bay Executive Apartment',
    slug: 'business-bay-executive-apartment',
    price: 495000,
    market: 'luxury', // Premium location, high-end finishes
    condition: 'renovated', // Renovated in 2023
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.businessBayFlat,
    location: mockLocations.businessBayFlat,
    specs: mockSpecs.businessBayFlat,
  },
  // 6. alNahdaHome
  alNahdaHome: {
    title: 'Al Nahda Family Residence',
    slug: 'al-nahda-family-residence',
    price: 380000,
    market: 'mid-market', // Standard family apartment
    condition: 'renovated', // Renovated in 2020
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.alNahdaHome,
    location: mockLocations.alNahdaHome,
    specs: mockSpecs.alNahdaHome,
  },
  // 7. mirdifVilla
  mirdifVilla: {
    title: 'Mirdif Luxury Villa',
    slug: 'mirdif-luxury-villa',
    price: 980000,
    market: 'ultra-luxury', // Large villa, premium finishes
    condition: 'renovated', // Renovated in 2021
    isFeatured: true,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.mirdifVilla,
    location: mockLocations.mirdifVilla,
    specs: mockSpecs.mirdifVilla,
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    title: 'International City Starter Home',
    slug: 'international-city-starter-home',
    price: 195000,
    market: 'economy', // Budget-friendly area
    condition: 'well-maintained', // Renovated in 2019
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.internationalCityFlat,
    location: mockLocations.internationalCityFlat,
    specs: mockSpecs.internationalCityFlat,
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    title: 'Sports City Modern Apartment',
    slug: 'sports-city-modern-apartment',
    price: 385000,
    market: 'mid-market', // Modern community, standard specs
    condition: 'renovated', // Renovated in 2022
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.sportsCityApartment,
    location: mockLocations.sportsCityApartment,
    specs: mockSpecs.sportsCityApartment,
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    title: 'Al Qusais Metro Apartment',
    slug: 'al-qusais-metro-apartment',
    price: 320000,
    market: 'economy', // Basic specs, older area
    condition: 'renovated', // Renovated in 2020
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.alQusaisResidence,
    location: mockLocations.alQusaisResidence,
    specs: mockSpecs.alQusaisResidence,
  },
  // 11. discoveryGardens
  discoveryGardens: {
    title: 'Discovery Gardens Mediterranean Apartment',
    slug: 'discovery-gardens-mediterranean-apartment',
    price: 275000,
    market: 'economy', // Affordable community
    condition: 'well-maintained', // Renovated in 2018
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.discoveryGardens,
    location: mockLocations.discoveryGardens,
    specs: mockSpecs.discoveryGardens,
  },
  // 12. remramApartment
  remramApartment: {
    title: 'Remram Community Residence',
    slug: 'remram-community-residence',
    price: 340000,
    market: 'mid-market', // Standard community specs
    condition: 'renovated', // Renovated in 2022
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.remramApartment,
    location: mockLocations.remramApartment,
    specs: mockSpecs.remramApartment,
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    title: 'Dubailand Townhouse',
    slug: 'dubailand-townhouse',
    price: 720000,
    market: 'luxury', // Premium townhouse, high-end community
    condition: 'brand-new', // Built in 2019, no renovations needed
    isFeatured: true,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.dubailandTownhouse,
    location: mockLocations.dubailandTownhouse,
    specs: mockSpecs.dubailandTownhouse,
  },
  // 14. warqaaResidence
  warqaaResidence: {
    title: 'Al Warqaa Family Apartment',
    slug: 'al-warqaa-family-apartment',
    price: 420000,
    market: 'mid-market', // Family area, standard specs
    condition: 'renovated', // Renovated in 2021
    isFeatured: true,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.warqaaResidence,
    location: mockLocations.warqaaResidence,
    specs: mockSpecs.warqaaResidence,
  },
  // 15. karamaFlat
  karamaFlat: {
    title: 'Karama Urban Apartment',
    slug: 'karama-urban-apartment',
    price: 245000,
    market: 'economy', // Older area, basic specs
    condition: 'well-maintained', // Renovated in 2019
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.karamaFlat,
    location: mockLocations.karamaFlat,
    specs: mockSpecs.karamaFlat,
  },
  // 16. tecomApartment
  tecomApartment: {
    title: 'TECOM Professional Residence',
    slug: 'tecom-professional-residence',
    price: 460000,
    market: 'luxury', // Premium location, high-end specs
    condition: 'renovated', // Renovated in 2022
    isFeatured: true,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.tecomApartment,
    location: mockLocations.tecomApartment,
    specs: mockSpecs.tecomApartment,
  },
  // 17. deiraCondo
  deiraCondo: {
    title: 'Deira City Apartment',
    slug: 'deira-city-apartment',
    price: 295000,
    market: 'economy', // Traditional area, basic specs
    condition: 'renovated', // Renovated in 2020
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.deiraCondo,
    location: mockLocations.deiraCondo,
    specs: mockSpecs.deiraCondo,
  },
  // 18. satwaResidence
  satwaResidence: {
    title: 'Satwa Budget Studio',
    slug: 'satwa-budget-studio',
    price: 185000,
    market: 'economy', // Budget area, basic amenities
    condition: 'well-maintained', // Renovated in 2018
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.satwaResidence,
    location: mockLocations.satwaResidence,
    specs: mockSpecs.satwaResidence,
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    title: 'Al Rashidiya Metro Home',
    slug: 'al-rashidiya-metro-home',
    price: 365000,
    market: 'mid-market', // Standard specs, good connectivity
    condition: 'renovated', // Renovated in 2021
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.rashidiyaHome,
    location: mockLocations.rashidiyaHome,
    specs: mockSpecs.rashidiyaHome,
  },
  // 20. garhoudApartment
  garhoudApartment: {
    title: 'Garhoud Premium Apartment',
    slug: 'garhoud-premium-apartment',
    price: 410000,
    market: 'luxury', // Upscale area, premium finishes
    condition: 'renovated', // Renovated in 2022
    isFeatured: false,
    contractDetails: {
      requiresContract: true,
      requiresDeposit: null,
    },
    description: mockDescriptions.garhoudApartment,
    location: mockLocations.garhoudApartment,
    specs: mockSpecs.garhoudApartment,
  },
}
