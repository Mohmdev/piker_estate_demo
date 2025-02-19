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

import { amenityRelationships } from './rels-amenity'
import { availabilityRelationships } from './rels-availability'
import { classificationRelationships } from './rels-classification'
import { contractRelationships } from './rels-contract'
import { galleryRelationships } from './rels-gallery'
import { metadataRelationships } from './rels-metadata'

export const propertiesRelationships: Record<string, PropertyRelationships> = {
  // 1. barshaApartment
  barshaApartment: {
    classification: classificationRelationships.barshaApartment ?? [],
    contract: contractRelationships.barshaApartment ?? [],
    availability: availabilityRelationships.barshaApartment ?? [],
    amenities: amenityRelationships.barshaApartment ?? [],
    gallery: galleryRelationships.barshaApartment,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.barshaApartment,
    authors: [],
  },
  // 2. jvcResidence
  jvcResidence: {
    classification: classificationRelationships.jvcResidence ?? [],
    contract: contractRelationships.jvcResidence ?? [],
    availability: availabilityRelationships.jvcResidence ?? [],
    amenities: amenityRelationships.jvcResidence ?? [],
    gallery: galleryRelationships.jvcResidence,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.jvcResidence,
    authors: [],
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    classification: classificationRelationships.siliconOasisStudio ?? [],
    contract: contractRelationships.siliconOasisStudio ?? [],
    availability: availabilityRelationships.siliconOasisStudio ?? [],
    amenities: amenityRelationships.siliconOasisStudio ?? [],
    gallery: galleryRelationships.siliconOasisStudio,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.siliconOasisStudio,
    authors: [],
  },
  // 4. alQuozLoft
  alQuozLoft: {
    classification: classificationRelationships.alQuozLoft ?? [],
    contract: contractRelationships.alQuozLoft ?? [],
    availability: availabilityRelationships.alQuozLoft ?? [],
    amenities: amenityRelationships.alQuozLoft ?? [],
    gallery: galleryRelationships.alQuozLoft,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.alQuozLoft,
    authors: [],
  },
  // 5. businessBayFlat
  businessBayFlat: {
    classification: classificationRelationships.businessBayFlat ?? [],
    contract: contractRelationships.businessBayFlat ?? [],
    availability: availabilityRelationships.businessBayFlat ?? [],
    amenities: amenityRelationships.businessBayFlat ?? [],
    gallery: galleryRelationships.businessBayFlat,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.businessBayFlat,
    authors: [],
  },
  // 6. alNahdaHome
  alNahdaHome: {
    classification: classificationRelationships.alNahdaHome ?? [],
    contract: contractRelationships.alNahdaHome ?? [],
    availability: availabilityRelationships.alNahdaHome ?? [],
    amenities: amenityRelationships.alNahdaHome ?? [],
    gallery: galleryRelationships.alNahdaHome,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.alNahdaHome,
    authors: [],
  },
  // 7. mirdifVilla
  mirdifVilla: {
    classification: classificationRelationships.mirdifVilla ?? [],
    contract: contractRelationships.mirdifVilla ?? [],
    availability: availabilityRelationships.mirdifVilla ?? [],
    amenities: amenityRelationships.mirdifVilla ?? [],
    gallery: galleryRelationships.mirdifVilla,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.mirdifVilla,
    authors: [],
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    classification: classificationRelationships.internationalCityFlat ?? [],
    contract: contractRelationships.internationalCityFlat ?? [],
    availability: availabilityRelationships.internationalCityFlat ?? [],
    amenities: amenityRelationships.internationalCityFlat ?? [],
    gallery: galleryRelationships.internationalCityFlat,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.internationalCityFlat,
    authors: [],
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    classification: classificationRelationships.sportsCityApartment ?? [],
    contract: contractRelationships.sportsCityApartment ?? [],
    availability: availabilityRelationships.sportsCityApartment ?? [],
    amenities: amenityRelationships.sportsCityApartment ?? [],
    gallery: galleryRelationships.sportsCityApartment,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.sportsCityApartment,
    authors: [],
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    classification: classificationRelationships.alQusaisResidence ?? [],
    contract: contractRelationships.alQusaisResidence ?? [],
    availability: availabilityRelationships.alQusaisResidence ?? [],
    amenities: amenityRelationships.alQusaisResidence ?? [],
    gallery: galleryRelationships.alQusaisResidence,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.alQusaisResidence,
    authors: [],
  },
  // 11. discoveryGardens
  discoveryGardens: {
    classification: classificationRelationships.discoveryGardens ?? [],
    contract: contractRelationships.discoveryGardens ?? [],
    availability: availabilityRelationships.discoveryGardens ?? [],
    amenities: amenityRelationships.discoveryGardens ?? [],
    gallery: galleryRelationships.discoveryGardens,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.discoveryGardens,
    authors: [],
  },
  // 12. remramApartment
  remramApartment: {
    classification: classificationRelationships.remramApartment ?? [],
    contract: contractRelationships.remramApartment ?? [],
    availability: availabilityRelationships.remramApartment ?? [],
    amenities: amenityRelationships.remramApartment ?? [],
    gallery: galleryRelationships.remramApartment,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.remramApartment,
    authors: [],
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    classification: classificationRelationships.dubailandTownhouse ?? [],
    contract: contractRelationships.dubailandTownhouse ?? [],
    availability: availabilityRelationships.dubailandTownhouse ?? [],
    amenities: amenityRelationships.dubailandTownhouse ?? [],
    gallery: galleryRelationships.dubailandTownhouse,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.dubailandTownhouse,
    authors: [],
  },
  // 14. warqaaResidence
  warqaaResidence: {
    classification: classificationRelationships.warqaaResidence ?? [],
    contract: contractRelationships.warqaaResidence ?? [],
    availability: availabilityRelationships.warqaaResidence ?? [],
    amenities: amenityRelationships.warqaaResidence ?? [],
    gallery: galleryRelationships.warqaaResidence,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.warqaaResidence,
    authors: [],
  },
  // 15. karamaFlat
  karamaFlat: {
    classification: classificationRelationships.karamaFlat ?? [],
    contract: contractRelationships.karamaFlat ?? [],
    availability: availabilityRelationships.karamaFlat ?? [],
    amenities: amenityRelationships.karamaFlat ?? [],
    gallery: galleryRelationships.karamaFlat,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.karamaFlat,
    authors: [],
  },
  // 16. tecomApartment
  tecomApartment: {
    classification: classificationRelationships.tecomApartment ?? [],
    contract: contractRelationships.tecomApartment ?? [],
    availability: availabilityRelationships.tecomApartment ?? [],
    amenities: amenityRelationships.tecomApartment ?? [],
    gallery: galleryRelationships.tecomApartment,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.tecomApartment,
    authors: [],
  },
  // 17. deiraCondo
  deiraCondo: {
    classification: classificationRelationships.deiraCondo ?? [],
    contract: contractRelationships.deiraCondo ?? [],
    availability: availabilityRelationships.deiraCondo ?? [],
    amenities: amenityRelationships.deiraCondo ?? [],
    gallery: galleryRelationships.deiraCondo,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.deiraCondo,
    authors: [],
  },
  // 18. satwaResidence
  satwaResidence: {
    classification: classificationRelationships.satwaResidence ?? [],
    contract: contractRelationships.satwaResidence ?? [],
    availability: availabilityRelationships.satwaResidence ?? [],
    amenities: amenityRelationships.satwaResidence ?? [],
    gallery: galleryRelationships.satwaResidence,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.satwaResidence,
    authors: [],
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    classification: classificationRelationships.rashidiyaHome ?? [],
    contract: contractRelationships.rashidiyaHome ?? [],
    availability: availabilityRelationships.rashidiyaHome ?? [],
    amenities: amenityRelationships.rashidiyaHome ?? [],
    gallery: galleryRelationships.rashidiyaHome,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.rashidiyaHome,
    authors: [],
  },
  // 20. garhoudApartment
  garhoudApartment: {
    classification: classificationRelationships.garhoudApartment ?? [],
    contract: contractRelationships.garhoudApartment ?? [],
    availability: availabilityRelationships.garhoudApartment ?? [],
    amenities: amenityRelationships.garhoudApartment ?? [],
    gallery: galleryRelationships.garhoudApartment,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.garhoudApartment,
    authors: [],
  },
}
