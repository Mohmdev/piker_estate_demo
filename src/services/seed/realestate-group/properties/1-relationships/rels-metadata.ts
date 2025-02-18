import type { PropertyRelationships } from '.'

type PropertyMetadata = PropertyRelationships['meta']
type CreateMetadataRelationship = Record<string, PropertyMetadata>

export const metadataRelationships: CreateMetadataRelationship = {
  // 1. barshaApartment
  barshaApartment: {
    title: 'Modern Al Barsha Heights Apartment',
    description: 'Modern Al Barsha Heights Apartment',
    //   image: '{{BARSHA_APARTMENT_MAIN}}',
  },
  // 2. jvcResidence
  jvcResidence: {
    title: 'Spacious JVC Family Home',
    description: 'Spacious JVC Family Home',
    //   image: '{{JVC_RESIDENCE_MAIN}}',
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    title: 'Luxury Silicon Oasis Studio',
    description: 'Luxury Silicon Oasis Studio',
    //   image: '{{SILICON_OASIS_STUDIO_MAIN}}',
  },
  // 4. alQuozLoft
  alQuozLoft: {
    title: 'Artistic Al Quoz Loft',
    description: 'Artistic Al Quoz Loft',
    //   image: '{{AL_QUOZ_LOFT_MAIN}}',
  },
  // 5. businessBayFlat
  businessBayFlat: {
    title: 'Premium Business Bay Flat',
    description: 'Premium Business Bay Flat',
    //   image: '{{BUSINESS_BAY_FLAT_MAIN}}',
  },
  // 6. alNahdaHome
  alNahdaHome: {
    title: 'Spacious Al Nahda Home',
    description: 'Spacious Al Nahda Home',
    //   image: '{{AL_NAHDA_HOME_MAIN}}',
  },
  // 7. mirdifVilla
  mirdifVilla: {
    title: 'Luxury Mirdif Villa',
    description: 'Luxury Mirdif Villa',
    //   image: '{{MIRDIF_VILLA_MAIN}}',
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    title: 'Premium International City Flat',
    description: 'Premium International City Flat',
    //   image: '{{INTERNATIONAL_CITY_FLAT_MAIN}}',
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    title: 'Luxury Sports City Apartment',
    description: 'Luxury Sports City Apartment',
    //   image: '{{SPORTS_CITY_APARTMENT_MAIN}}',
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    title: 'Luxury Al Qusais Residence',
    description: 'Luxury Al Qusais Residence',
    //   image: '{{AL_QUSAIS_RESIDENCE_MAIN}}',
  },
  // 11. discoveryGardens
  discoveryGardens: {
    title: 'Luxury Discovery Gardens',
    description: 'Luxury Discovery Gardens',
    //   image: '{{DISCOVERY_GARDENS_MAIN}}',
  },
  // 12. remramApartment
  remramApartment: {
    title: 'Luxury Remram Apartment',
    description: 'Luxury Remram Apartment',
    //   image: '{{REMRA_APARTMENT_MAIN}}',
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    title: 'Luxury Dubai Land Townhouse',
    description: 'Luxury Dubai Land Townhouse',
    //   image: '{{DUBAI_LAND_TOWNHOUSE_MAIN}}',
  },
  // 14. warqaaResidence
  warqaaResidence: {
    title: 'Luxury Dubai Land Townhouse',
    description: 'Luxury Dubai Land Townhouse',
    //   image: '{{DUBAI_LAND_TOWNHOUSE_MAIN}}',
  },
  // 15. karamaFlat
  karamaFlat: {
    title: 'Luxury Karama Flat',
    description: 'Luxury Karama Flat',
    //   image: '{{KARAMA_FLAT_MAIN}}',
  },
  // 16. tecomApartment
  tecomApartment: {
    title: 'Luxury Tecom Apartment',
    description: 'Luxury Tecom Apartment',
    //   image: '{{TECOM_APARTMENT_MAIN}}',
  },
  // 17. deiraCondo
  deiraCondo: {
    title: 'Luxury Deira Condo',
    description: 'Luxury Deira Condo',
    //   image: '{{DEIRA_CONDO_MAIN}}',
  },
  // 18. satwaResidence
  satwaResidence: {
    title: 'Luxury Satwa Residence',
    description: 'Luxury Satwa Residence',
    //   image: '{{SATWA_RESIDENCE_MAIN}}',
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    title: 'Luxury Rashidiya Home',
    description: 'Luxury Rashidiya Home',
    //   image: '{{RASHIDIYA_HOME_MAIN}}',
  },
  // 20. garhoudApartment
  garhoudApartment: {
    title: 'Luxury Garhoud Apartment',
    description: 'Luxury Garhoud Apartment',
    //   image: '{{GARHOUD_APARTMENT_MAIN}}',
  },
}
