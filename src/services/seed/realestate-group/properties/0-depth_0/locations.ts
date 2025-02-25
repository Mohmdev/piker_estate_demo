import type { Property } from '@payload-types'

type LocationInterface = Property['location']
type CreateLocation = Record<string, LocationInterface>

export const locationData: CreateLocation = {
  // 1. barshaApartment
  barshaApartment: {
    address_line1: '12B Al Barsha Heights',
    unit: '304',
    postcode: '12345',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.1021,
      longitude: 55.1736,
    },
    neighborhood: {
      area: 'Al Barsha',
      landmarks: [
        {
          name: 'Mall of the Emirates',
          distance: 1.5,
        },
      ],
    },
  },
  // 2. jvcResidence
  jvcResidence: {
    address_line1: 'District 14, JVC',
    unit: '1205',
    postcode: '23456',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.0549,
      longitude: 55.2198,
    },
    neighborhood: {
      area: 'Jumeirah Village Circle',
      landmarks: [
        {
          name: 'Circle Mall',
          distance: 0.7,
        },
      ],
    },
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    address_line1: 'Silicon Heights',
    unit: '506',
    postcode: '34567',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.1279,
      longitude: 55.3847,
    },
    neighborhood: {
      area: 'Dubai Silicon Oasis',
      landmarks: [
        {
          name: 'DSO Mall',
          distance: 0.5,
        },
      ],
    },
  },
  // 4. alQuozLoft
  alQuozLoft: {
    address_line1: 'Al Quoz Industrial Area 1',
    unit: '203',
    postcode: '45678',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.1437,
      longitude: 55.2316,
    },
    neighborhood: {
      area: 'Al Quoz',
      landmarks: [
        {
          name: 'Alserkal Avenue',
          distance: 1.2,
        },
      ],
    },
  },
  // 5. businessBayFlat
  businessBayFlat: {
    address_line1: 'The Residences at Business Central',
    unit: '1102',
    postcode: '56789',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.1857,
      longitude: 55.2766,
    },
    neighborhood: {
      area: 'Business Bay',
      landmarks: [
        {
          name: 'Bay Avenue Mall',
          distance: 0.3,
        },
      ],
    },
  },
  // 6. alNahdaHome
  alNahdaHome: {
    address_line1: 'Al Nahda Residence Complex',
    unit: '705',
    postcode: '67890',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2866,
      longitude: 55.3372,
    },
    neighborhood: {
      area: 'Al Nahda',
      landmarks: [
        {
          name: 'Al Nahda Pond Park',
          distance: 0.6,
        },
      ],
    },
  },
  // 7. mirdifVilla
  mirdifVilla: {
    address_line1: '15 Mirdif Villas',
    postcode: '78901',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2169,
      longitude: 55.4184,
    },
    neighborhood: {
      area: 'Mirdif',
      landmarks: [
        {
          name: 'City Centre Mirdif',
          distance: 1.0,
        },
      ],
    },
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    address_line1: 'England Cluster',
    unit: '408',
    postcode: '89012',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.1608,
      longitude: 55.4089,
    },
    neighborhood: {
      area: 'International City',
      landmarks: [
        {
          name: 'Dragon Mart',
          distance: 1.8,
        },
      ],
    },
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    address_line1: 'Victory Heights',
    unit: '903',
    postcode: '90123',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.0461,
      longitude: 55.2269,
    },
    neighborhood: {
      area: 'Dubai Sports City',
      landmarks: [
        {
          name: 'ICC Academy',
          distance: 0.9,
        },
      ],
    },
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    address_line1: 'Al Qusais Residential Area',
    unit: '605',
    postcode: '01234',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2697,
      longitude: 55.3697,
    },
    neighborhood: {
      area: 'Al Qusais',
      landmarks: [
        {
          name: 'Al Qusais Metro Station',
          distance: 0.4,
        },
      ],
    },
  },
  // 11. discoveryGardens
  discoveryGardens: {
    address_line1: 'Mediterranean Cluster',
    unit: '802',
    postcode: '12346',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.0478,
      longitude: 55.1377,
    },
    neighborhood: {
      area: 'Discovery Gardens',
      landmarks: [
        {
          name: 'Ibn Battuta Mall',
          distance: 1.3,
        },
      ],
    },
  },
  // 12. remramApartment
  remramApartment: {
    address_line1: 'Remram Community',
    unit: '405',
    postcode: '23457',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 24.9982,
      longitude: 55.2217,
    },
    neighborhood: {
      area: 'Remram',
      landmarks: [
        {
          name: 'Remram Center',
          distance: 0.3,
        },
      ],
    },
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    address_line1: 'Mudon Community',
    unit: '27',
    postcode: '34568',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.0234,
      longitude: 55.2876,
    },
    neighborhood: {
      area: 'Dubailand',
      landmarks: [
        {
          name: 'Mudon Central Park',
          distance: 0.5,
        },
      ],
    },
  },
  // 14. warqaaResidence
  warqaaResidence: {
    address_line1: 'Al Warqaa 1',
    unit: '503',
    postcode: '45679',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2286,
      longitude: 55.3758,
    },
    neighborhood: {
      area: 'Al Warqaa',
      landmarks: [
        {
          name: 'Warqaa Mall',
          distance: 0.8,
        },
      ],
    },
  },
  // 15. karamaFlat
  karamaFlat: {
    address_line1: 'Karama Shopping Complex',
    unit: '304',
    postcode: '56790',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2479,
      longitude: 55.3015,
    },
    neighborhood: {
      area: 'Karama',
      landmarks: [
        {
          name: 'Zabeel Park',
          distance: 1.1,
        },
      ],
    },
  },
  // 16. tecomApartment
  tecomApartment: {
    address_line1: 'Two Towers',
    unit: '1504',
    postcode: '67891',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.0972,
      longitude: 55.1738,
    },
    neighborhood: {
      area: 'TECOM',
      landmarks: [
        {
          name: 'Internet City Metro',
          distance: 0.7,
        },
      ],
    },
  },
  // 17. deiraCondo
  deiraCondo: {
    address_line1: 'Abu Hail Road',
    unit: '902',
    postcode: '78902',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2777,
      longitude: 55.3222,
    },
    neighborhood: {
      area: 'Deira',
      landmarks: [
        {
          name: 'Abu Hail Metro Station',
          distance: 0.4,
        },
      ],
    },
  },
  // 18. satwaResidence
  satwaResidence: {
    address_line1: 'Al Satwa Road',
    unit: '205',
    postcode: '89013',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2352,
      longitude: 55.2867,
    },
    neighborhood: {
      area: 'Al Satwa',
      landmarks: [
        {
          name: 'Satwa Bus Station',
          distance: 0.6,
        },
      ],
    },
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    address_line1: 'Al Rashidiya Buildings',
    unit: '703',
    postcode: '90124',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2497,
      longitude: 55.3758,
    },
    neighborhood: {
      area: 'Al Rashidiya',
      landmarks: [
        {
          name: 'Rashidiya Metro Station',
          distance: 0.9,
        },
      ],
    },
  },
  // 20. garhoudApartment
  garhoudApartment: {
    address_line1: 'Garhoud Views',
    unit: '1103',
    postcode: '01235',
    city: 'Dubai',
    state: 'Dubai',
    countrySelect: 'AE',
    coordinates: {
      latitude: 25.2397,
      longitude: 55.3515,
    },
    neighborhood: {
      area: 'Garhoud',
      landmarks: [
        {
          name: 'Irish Village',
          distance: 1.2,
        },
      ],
    },
  },
}
