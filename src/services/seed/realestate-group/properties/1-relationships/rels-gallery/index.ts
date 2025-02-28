import type { PropertyRelationships } from '..'
import { documentsIndex } from './documents'
import { imagesIndex } from './images'
import { videosIndex } from './videos'

export type PropertyGallery = NonNullable<PropertyRelationships['gallery']>

export const galleryRelationships: Record<string, PropertyGallery> = {
  // 1. barshaApartment
  barshaApartment: {
    images: imagesIndex.barshaApartment,
    videos: videosIndex.barshaApartment,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.barshaApartment,
  },
  // 2. jvcResidence
  jvcResidence: {
    images: imagesIndex.jvcResidence,
    videos: videosIndex.jvcResidence,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.jvcResidence,
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    images: imagesIndex.siliconOasisStudio,
    videos: videosIndex.siliconOasisStudio,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.siliconOasisStudio,
  },
  // 4. alQuozLoft
  alQuozLoft: {
    images: imagesIndex.alQuozLoft,
    videos: videosIndex.alQuozLoft,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.alQuozLoft,
  },
  // 5. businessBayFlat
  businessBayFlat: {
    images: imagesIndex.businessBayFlat,
    videos: videosIndex.businessBayFlat,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.businessBayFlat,
  },
  // 6. alNahdaHome
  alNahdaHome: {
    images: imagesIndex.alNahdaHome,
    videos: videosIndex.alNahdaHome,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.alNahdaHome,
  },
  // 7. mirdifVilla
  mirdifVilla: {
    images: imagesIndex.mirdifVilla,
    videos: videosIndex.mirdifVilla,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.mirdifVilla,
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    images: imagesIndex.internationalCityFlat,
    videos: videosIndex.internationalCityFlat,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.internationalCityFlat,
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    images: imagesIndex.sportsCityApartment,
    videos: videosIndex.sportsCityApartment,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.sportsCityApartment,
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    images: imagesIndex.alQusaisResidence,
    videos: videosIndex.alQusaisResidence,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.alQusaisResidence,
  },
  // 11. discoveryGardens
  discoveryGardens: {
    images: imagesIndex.discoveryGardens,
    videos: videosIndex.discoveryGardens,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.discoveryGardens,
  },
  // 12. remramApartment
  remramApartment: {
    images: imagesIndex.remramApartment,
    videos: videosIndex.remramApartment,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.remramApartment,
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    images: imagesIndex.dubailandTownhouse,
    videos: videosIndex.dubailandTownhouse,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.dubailandTownhouse,
  },
  // 14. warqaaResidence
  warqaaResidence: {
    images: imagesIndex.warqaaResidence,
    videos: videosIndex.warqaaResidence,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.warqaaResidence,
  },
  // 15. karamaFlat
  karamaFlat: {
    images: imagesIndex.karamaFlat,
    videos: videosIndex.karamaFlat,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.karamaFlat,
  },
  // 16. tecomApartment
  tecomApartment: {
    images: imagesIndex.tecomApartment,
    videos: videosIndex.tecomApartment,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.tecomApartment,
  },
  // 17. deiraCondo
  deiraCondo: {
    images: imagesIndex.deiraCondo,
    videos: videosIndex.deiraCondo,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.deiraCondo,
  },
  // 18. satwaResidence
  satwaResidence: {
    images: imagesIndex.satwaResidence,
    videos: videosIndex.satwaResidence,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.satwaResidence,
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    images: imagesIndex.rashidiyaHome,
    videos: videosIndex.rashidiyaHome,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.rashidiyaHome,
  },
  // 20. garhoudApartment
  garhoudApartment: {
    images: imagesIndex.garhoudApartment,
    videos: videosIndex.garhoudApartment,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: documentsIndex.garhoudApartment,
  },
}
