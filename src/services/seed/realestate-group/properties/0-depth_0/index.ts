import type { Property } from '@payload-types'
import { descriptionData } from './descriptions'
import { financeData } from './finances'
import { locationData } from './locations'
import { specsData } from './specs'

export type PropertyDepthZero = Pick<
  Property,
  | 'title'
  | 'slug'
  | 'description'
  | 'condition'
  | 'price'
  | 'isFeatured'
  | 'location'
  | 'specs'
  | 'finance'
  // | 'populatedAuthors'
>

export const propertiesDepthZero: Record<string, PropertyDepthZero> = {
  // 1. barshaApartment
  barshaApartment: {
    title: 'Modern Al Barsha Heights Apartment',
    slug: 'modern-al-barsha-heights-apartment',
    price: 425000,
    condition: 'renovated', // Renovated in 2021
    isFeatured: true,
    description: descriptionData.barshaApartment,
    location: locationData.barshaApartment,
    specs: specsData.barshaApartment,
    finance: financeData.barshaApartment,
  },
  // 2. jvcResidence
  jvcResidence: {
    title: 'Spacious JVC Family Home',
    slug: 'spacious-jvc-family-home',
    price: 520000,
    condition: 'well-maintained', // Built in 2018, no renovations needed yet
    isFeatured: false,
    description: descriptionData.jvcResidence,
    location: locationData.jvcResidence,
    specs: specsData.jvcResidence,
    finance: financeData.jvcResidence,
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    title: 'Silicon Oasis Smart Studio',
    slug: 'silicon-oasis-smart-studio',
    price: 165000,
    condition: 'renovated', // Renovated in 2022
    isFeatured: false,
    description: descriptionData.siliconOasisStudio,
    location: locationData.siliconOasisStudio,
    specs: specsData.siliconOasisStudio,
    finance: financeData.siliconOasisStudio,
  },
  // 4. alQuozLoft
  alQuozLoft: {
    title: 'Al Quoz Industrial Loft',
    slug: 'al-quoz-industrial-loft',
    price: 480000,
    condition: 'well-maintained', // Built in 2019, modern design
    isFeatured: false,
    description: descriptionData.alQuozLoft,
    location: locationData.alQuozLoft,
    specs: specsData.alQuozLoft,
    finance: financeData.alQuozLoft,
  },
  // 5. businessBayFlat
  businessBayFlat: {
    title: 'Business Bay Executive Apartment',
    slug: 'business-bay-executive-apartment',
    price: 495000,
    condition: 'renovated', // Renovated in 2023
    isFeatured: false,
    description: descriptionData.businessBayFlat,
    location: locationData.businessBayFlat,
    specs: specsData.businessBayFlat,
    finance: financeData.businessBayFlat,
  },
  // 6. alNahdaHome
  alNahdaHome: {
    title: 'Al Nahda Family Residence',
    slug: 'al-nahda-family-residence',
    price: 380000,
    condition: 'renovated', // Renovated in 2020
    isFeatured: false,
    description: descriptionData.alNahdaHome,
    location: locationData.alNahdaHome,
    specs: specsData.alNahdaHome,
    finance: financeData.alNahdaHome,
  },
  // 7. mirdifVilla
  mirdifVilla: {
    title: 'Mirdif Luxury Villa',
    slug: 'mirdif-luxury-villa',
    price: 980000,
    condition: 'renovated', // Renovated in 2021
    isFeatured: true,
    description: descriptionData.mirdifVilla,
    location: locationData.mirdifVilla,
    specs: specsData.mirdifVilla,
    finance: financeData.mirdifVilla,
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    title: 'International City Starter Home',
    slug: 'international-city-starter-home',
    price: 195000,
    condition: 'well-maintained', // Renovated in 2019
    isFeatured: false,
    description: descriptionData.internationalCityFlat,
    location: locationData.internationalCityFlat,
    specs: specsData.internationalCityFlat,
    finance: financeData.internationalCityFlat,
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    title: 'Sports City Modern Apartment',
    slug: 'sports-city-modern-apartment',
    price: 385000,
    condition: 'renovated', // Renovated in 2022
    isFeatured: false,
    description: descriptionData.sportsCityApartment,
    location: locationData.sportsCityApartment,
    specs: specsData.sportsCityApartment,
    finance: financeData.sportsCityApartment,
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    title: 'Al Qusais Metro Apartment',
    slug: 'al-qusais-metro-apartment',
    price: 320000,
    condition: 'renovated', // Renovated in 2020
    isFeatured: false,
    description: descriptionData.alQusaisResidence,
    location: locationData.alQusaisResidence,
    specs: specsData.alQusaisResidence,
    finance: financeData.alQusaisResidence,
  },
  // 11. discoveryGardens
  discoveryGardens: {
    title: 'Discovery Gardens Mediterranean Apartment',
    slug: 'discovery-gardens-mediterranean-apartment',
    price: 275000,
    condition: 'well-maintained', // Renovated in 2018
    isFeatured: false,
    description: descriptionData.discoveryGardens,
    location: locationData.discoveryGardens,
    specs: specsData.discoveryGardens,
    finance: financeData.discoveryGardens,
  },
  // 12. remramApartment
  remramApartment: {
    title: 'Remram Community Residence',
    slug: 'remram-community-residence',
    price: 340000,
    condition: 'renovated', // Renovated in 2022
    isFeatured: false,
    description: descriptionData.remramApartment,
    location: locationData.remramApartment,
    specs: specsData.remramApartment,
    finance: financeData.remramApartment,
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    title: 'Dubailand Townhouse',
    slug: 'dubailand-townhouse',
    price: 720000,
    condition: 'brand-new', // Built in 2019, no renovations needed
    isFeatured: true,
    description: descriptionData.dubailandTownhouse,
    location: locationData.dubailandTownhouse,
    specs: specsData.dubailandTownhouse,
    finance: financeData.dubailandTownhouse,
  },
  // 14. warqaaResidence
  warqaaResidence: {
    title: 'Al Warqaa Family Apartment',
    slug: 'al-warqaa-family-apartment',
    price: 420000,
    condition: 'renovated', // Renovated in 2021
    isFeatured: true,
    description: descriptionData.warqaaResidence,
    location: locationData.warqaaResidence,
    specs: specsData.warqaaResidence,
    finance: financeData.warqaaResidence,
  },
  // 15. karamaFlat
  karamaFlat: {
    title: 'Karama Urban Apartment',
    slug: 'karama-urban-apartment',
    price: 245000,
    condition: 'well-maintained', // Renovated in 2019
    isFeatured: false,
    description: descriptionData.karamaFlat,
    location: locationData.karamaFlat,
    specs: specsData.karamaFlat,
    finance: financeData.karamaFlat,
  },
  // 16. tecomApartment
  tecomApartment: {
    title: 'TECOM Professional Residence',
    slug: 'tecom-professional-residence',
    price: 460000,
    condition: 'renovated', // Renovated in 2022
    isFeatured: true,
    description: descriptionData.tecomApartment,
    location: locationData.tecomApartment,
    specs: specsData.tecomApartment,
    finance: financeData.tecomApartment,
  },
  // 17. deiraCondo
  deiraCondo: {
    title: 'Deira City Apartment',
    slug: 'deira-city-apartment',
    price: 295000,
    condition: 'renovated', // Renovated in 2020
    isFeatured: false,
    description: descriptionData.deiraCondo,
    location: locationData.deiraCondo,
    specs: specsData.deiraCondo,
    finance: financeData.deiraCondo,
  },
  // 18. satwaResidence
  satwaResidence: {
    title: 'Satwa Budget Studio',
    slug: 'satwa-budget-studio',
    price: 185000,
    condition: 'well-maintained', // Renovated in 2018
    isFeatured: false,
    description: descriptionData.satwaResidence,
    location: locationData.satwaResidence,
    specs: specsData.satwaResidence,
    finance: financeData.satwaResidence,
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    title: 'Al Rashidiya Metro Home',
    slug: 'al-rashidiya-metro-home',
    price: 365000,
    condition: 'renovated', // Renovated in 2021
    isFeatured: false,
    description: descriptionData.rashidiyaHome,
    location: locationData.rashidiyaHome,
    specs: specsData.rashidiyaHome,
    finance: financeData.rashidiyaHome,
  },
  // 20. garhoudApartment
  garhoudApartment: {
    title: 'Garhoud Premium Apartment',
    slug: 'garhoud-premium-apartment',
    price: 410000,
    condition: 'renovated', // Renovated in 2022
    isFeatured: false,
    description: descriptionData.garhoudApartment,
    location: locationData.garhoudApartment,
    specs: specsData.garhoudApartment,
    finance: financeData.garhoudApartment,
  },
}
