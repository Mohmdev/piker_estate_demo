import type { Property } from '@payload-types'

type LocationInterface = Property['location']
type CreateLocation = Record<string, LocationInterface>

export const locationData: CreateLocation = {
  // 1. barshaApartment
  barshaApartment: {
    buildingName: 'Al Barsha Heights',
    neighborhood: 'Al Barsha',
    address_line1: '12B Al Barsha Heights',
    unit: '304',
    postcode: '12345',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.1021,
      longitude: 55.1736,
    },
    landmarks: [
      {
        name: 'Mall of the Emirates',
        distance: 1.5,
      },
    ],
  },
  // 2. jvcResidence
  jvcResidence: {
    buildingName: 'JVC Residences',
    neighborhood: 'Jumeirah Village Circle',
    address_line1: 'District 14, JVC',
    unit: '1205',
    postcode: '23456',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.0549,
      longitude: 55.2198,
    },
    landmarks: [
      {
        name: 'Circle Mall',
        distance: 0.7,
      },
    ],
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    buildingName: 'Silicon Heights',
    neighborhood: 'Dubai Silicon Oasis',
    address_line1: 'Silicon Heights',
    unit: '506',
    postcode: '34567',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.1279,
      longitude: 55.3847,
    },
    landmarks: [
      {
        name: 'DSO Mall',
        distance: 0.5,
      },
    ],
  },
  // 4. alQuozLoft
  alQuozLoft: {
    buildingName: 'Al Quoz Industrial Complex',
    neighborhood: 'Al Quoz',
    address_line1: 'Al Quoz Industrial Area 1',
    unit: '203',
    postcode: '45678',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.1437,
      longitude: 55.2316,
    },
    landmarks: [
      {
        name: 'Alserkal Avenue',
        distance: 1.2,
      },
    ],
  },
  // 5. businessBayFlat
  businessBayFlat: {
    buildingName: 'The Residences at Business Central',
    neighborhood: 'Business Bay',
    address_line1: 'The Residences at Business Central',
    unit: '1102',
    postcode: '56789',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.1857,
      longitude: 55.2766,
    },
    landmarks: [
      {
        name: 'Bay Avenue Mall',
        distance: 0.3,
      },
    ],
  },
  // 6. alNahdaHome
  alNahdaHome: {
    buildingName: 'Al Nahda Residence Complex',
    neighborhood: 'Al Nahda',
    address_line1: 'Al Nahda Residence Complex',
    unit: '705',
    postcode: '67890',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2866,
      longitude: 55.3372,
    },
    landmarks: [
      {
        name: 'Al Nahda Pond Park',
        distance: 0.6,
      },
    ],
  },
  // 7. mirdifVilla
  mirdifVilla: {
    buildingName: 'Mirdif Villas',
    neighborhood: 'Mirdif',
    address_line1: '15 Mirdif Villas',
    postcode: '78901',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2169,
      longitude: 55.4184,
    },
    landmarks: [
      {
        name: 'City Centre Mirdif',
        distance: 1.0,
      },
    ],
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    buildingName: 'England Cluster',
    neighborhood: 'International City',
    address_line1: 'England Cluster',
    unit: '408',
    postcode: '89012',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.1608,
      longitude: 55.4089,
    },
    landmarks: [
      {
        name: 'Dragon Mart',
        distance: 1.8,
      },
    ],
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    buildingName: 'Victory Heights',
    neighborhood: 'Dubai Sports City',
    address_line1: 'Victory Heights',
    unit: '903',
    postcode: '90123',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.0461,
      longitude: 55.2269,
    },
    landmarks: [
      {
        name: 'ICC Academy',
        distance: 0.9,
      },
    ],
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    buildingName: 'Al Qusais Residential Complex',
    neighborhood: 'Al Qusais',
    address_line1: 'Al Qusais Residential Area',
    unit: '605',
    postcode: '01234',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2697,
      longitude: 55.3697,
    },
    landmarks: [
      {
        name: 'Al Qusais Metro Station',
        distance: 0.4,
      },
    ],
  },
  // 11. discoveryGardens
  discoveryGardens: {
    buildingName: 'Mediterranean Cluster',
    neighborhood: 'Discovery Gardens',
    address_line1: 'Mediterranean Cluster',
    unit: '802',
    postcode: '12346',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.0478,
      longitude: 55.1377,
    },
    landmarks: [
      {
        name: 'Ibn Battuta Mall',
        distance: 1.3,
      },
    ],
  },
  // 12. remramApartment
  remramApartment: {
    buildingName: 'Remram Community',
    neighborhood: 'Remram',
    address_line1: 'Remram Community',
    unit: '405',
    postcode: '23457',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 24.9982,
      longitude: 55.2217,
    },
    landmarks: [
      {
        name: 'Remram Center',
        distance: 0.3,
      },
    ],
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    buildingName: 'Mudon Community',
    neighborhood: 'Dubailand',
    address_line1: 'Mudon Community',
    unit: '27',
    postcode: '34568',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.0234,
      longitude: 55.2876,
    },
    landmarks: [
      {
        name: 'Mudon Central Park',
        distance: 0.5,
      },
    ],
  },
  // 14. warqaaResidence
  warqaaResidence: {
    buildingName: 'Al Warqaa Residences',
    neighborhood: 'Al Warqaa',
    address_line1: 'Al Warqaa 1',
    unit: '503',
    postcode: '45679',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2286,
      longitude: 55.3758,
    },
    landmarks: [
      {
        name: 'Warqaa Mall',
        distance: 0.8,
      },
    ],
  },
  // 15. karamaFlat
  karamaFlat: {
    buildingName: 'Karama Shopping Complex',
    neighborhood: 'Karama',
    address_line1: 'Karama Shopping Complex',
    unit: '304',
    postcode: '56790',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2479,
      longitude: 55.3015,
    },
    landmarks: [
      {
        name: 'Zabeel Park',
        distance: 1.1,
      },
    ],
  },
  // 16. tecomApartment
  tecomApartment: {
    buildingName: 'Two Towers',
    neighborhood: 'TECOM',
    address_line1: 'Two Towers',
    unit: '1504',
    postcode: '67891',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.0972,
      longitude: 55.1738,
    },
    landmarks: [
      {
        name: 'Internet City Metro',
        distance: 0.7,
      },
    ],
  },
  // 17. deiraCondo
  deiraCondo: {
    buildingName: 'Abu Hail Residences',
    neighborhood: 'Deira',
    address_line1: 'Abu Hail Road',
    unit: '902',
    postcode: '78902',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2777,
      longitude: 55.3222,
    },
    landmarks: [
      {
        name: 'Abu Hail Metro Station',
        distance: 0.4,
      },
    ],
  },
  // 18. satwaResidence
  satwaResidence: {
    buildingName: 'Al Satwa Apartments',
    neighborhood: 'Al Satwa',
    address_line1: 'Al Satwa Road',
    unit: '205',
    postcode: '89013',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2352,
      longitude: 55.2867,
    },
    landmarks: [
      {
        name: 'Satwa Bus Station',
        distance: 0.6,
      },
    ],
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    buildingName: 'Al Rashidiya Buildings',
    neighborhood: 'Al Rashidiya',
    address_line1: 'Al Rashidiya Buildings',
    unit: '703',
    postcode: '90124',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2497,
      longitude: 55.3758,
    },
    landmarks: [
      {
        name: 'Rashidiya Metro Station',
        distance: 0.9,
      },
    ],
  },
  // 20. garhoudApartment
  garhoudApartment: {
    buildingName: 'Garhoud Views',
    neighborhood: 'Garhoud',
    address_line1: 'Garhoud Views',
    unit: '1103',
    postcode: '01235',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      plusCode: undefined,
      latitude: 25.2397,
      longitude: 55.3515,
    },
    landmarks: [
      {
        name: 'Irish Village',
        distance: 1.2,
      },
    ],
  },
}
