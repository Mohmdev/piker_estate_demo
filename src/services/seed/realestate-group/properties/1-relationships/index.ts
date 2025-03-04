import type {
  Classification,
  Media,
  Meta,
  Project,
  Property,
  Tag,
  User,
} from '@payload-types'
import { classificationRelationships } from './rels-classification'
import { galleryRelationships } from './rels-gallery'
import { metadataRelationships } from './rels-metadata'

export type PropertyRelationships = {
  classification: Partial<Classification>[]
  gallery?: {
    images?: Partial<Media>[]
    videos?: Partial<Media>[]
    virtualTourUrl?: string
    floorPlan?: Partial<Media>[]
    documents?: Partial<Media>[]
  }
  categories?: {
    relationTo: 'classifications'
  }[]
  tags?: Partial<Tag>[]
  relatedDocs?: {
    relationTo: 'properties' | 'projects'
    value: Property | Project
  }[]
  meta?: Partial<Meta>
  authors?: Partial<User>[]
}

export const propertiesRelationships: Record<string, PropertyRelationships> = {
  // 1. barshaApartment
  barshaApartment: {
    classification: classificationRelationships.barshaApartment ?? [],
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
    gallery: galleryRelationships.garhoudApartment,
    categories: [],
    tags: [],
    relatedDocs: [],
    meta: metadataRelationships.garhoudApartment,
    authors: [],
  },
}
