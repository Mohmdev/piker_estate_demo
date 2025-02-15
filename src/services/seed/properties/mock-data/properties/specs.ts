import type { Property } from '@payload-types'

export type SpecsData = Property['specs']

export const mockSpecs: Record<string, SpecsData> = {
  barshaApartment: {
    measurements: {
      sizeRange: 'medium',
      property_size: 95,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2015,
      last_renovated: 2021,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  jvcResidence: {
    measurements: {
      sizeRange: 'medium',
      property_size: 120,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 3,
      num_bathrooms: 2.5,
      num_carspaces: 2,
      num_floors: 1,
    },
    construction: {
      year_built: 2018,
      last_renovated: null,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  siliconOasisStudio: {
    measurements: {
      sizeRange: 'small',
      property_size: 45,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 0,
      num_bathrooms: 1,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2016,
      last_renovated: 2022,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  alQuozLoft: {
    measurements: {
      sizeRange: 'large',
      property_size: 150,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 2,
      num_floors: 2,
    },
    construction: {
      year_built: 2019,
      last_renovated: null,
      construction_type: 'steel',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  businessBayFlat: {
    measurements: {
      sizeRange: 'medium',
      property_size: 85,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 1,
      num_bathrooms: 1.5,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2017,
      last_renovated: 2023,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'A',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  alNahdaHome: {
    measurements: {
      sizeRange: 'medium',
      property_size: 110,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2010,
      last_renovated: 2020,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'C',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  mirdifVilla: {
    measurements: {
      sizeRange: 'large',
      property_size: 280,
      block_size: 400,
      frontage: 12,
      depth: 25,
    },
    rooms: {
      num_bedrooms: 4,
      num_bathrooms: 4.5,
      num_carspaces: 2,
      num_floors: 2,
    },
    construction: {
      year_built: 2012,
      last_renovated: 2021,
      construction_type: 'brick',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  internationalCityFlat: {
    measurements: {
      sizeRange: 'small',
      property_size: 65,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 1,
      num_bathrooms: 1,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2008,
      last_renovated: 2019,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'C',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  sportsCityApartment: {
    measurements: {
      sizeRange: 'medium',
      property_size: 105,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2015,
      last_renovated: 2022,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  alQusaisResidence: {
    measurements: {
      sizeRange: 'medium',
      property_size: 90,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2009,
      last_renovated: 2020,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'C',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  discoveryGardens: {
    measurements: {
      sizeRange: 'small',
      property_size: 75,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 1,
      num_bathrooms: 1.5,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2007,
      last_renovated: 2018,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'C',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  remramApartment: {
    measurements: {
      sizeRange: 'medium',
      property_size: 95,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2016,
      last_renovated: 2022,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  dubailandTownhouse: {
    measurements: {
      sizeRange: 'large',
      property_size: 200,
      block_size: 250,
      frontage: 8,
      depth: 20,
    },
    rooms: {
      num_bedrooms: 3,
      num_bathrooms: 3.5,
      num_carspaces: 2,
      num_floors: 2,
    },
    construction: {
      year_built: 2019,
      last_renovated: null,
      construction_type: 'brick',
    },
    utilities: {
      energy_rating: 'A',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  warqaaResidence: {
    measurements: {
      sizeRange: 'medium',
      property_size: 130,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 3,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2011,
      last_renovated: 2021,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'C',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  karamaFlat: {
    measurements: {
      sizeRange: 'small',
      property_size: 70,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 1,
      num_bathrooms: 1,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2005,
      last_renovated: 2019,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'C',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  tecomApartment: {
    measurements: {
      sizeRange: 'medium',
      property_size: 100,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2014,
      last_renovated: 2022,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
  deiraCondo: {
    measurements: {
      sizeRange: 'medium',
      property_size: 85,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 1.5,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2008,
      last_renovated: 2020,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'C',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  satwaResidence: {
    measurements: {
      sizeRange: 'small',
      property_size: 60,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 1,
      num_bathrooms: 1,
      num_carspaces: 0,
      num_floors: 1,
    },
    construction: {
      year_built: 2000,
      last_renovated: 2018,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'D',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  rashidiyaHome: {
    measurements: {
      sizeRange: 'medium',
      property_size: 115,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2010,
      last_renovated: 2021,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'C',
      heating_type: 'none',
      cooling_type: 'split',
    },
  },
  garhoudApartment: {
    measurements: {
      sizeRange: 'medium',
      property_size: 95,
      block_size: null,
      frontage: null,
      depth: null,
    },
    rooms: {
      num_bedrooms: 2,
      num_bathrooms: 2,
      num_carspaces: 1,
      num_floors: 1,
    },
    construction: {
      year_built: 2013,
      last_renovated: 2022,
      construction_type: 'concrete',
    },
    utilities: {
      energy_rating: 'B',
      heating_type: 'none',
      cooling_type: 'central',
    },
  },
}
