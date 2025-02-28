import type { Media } from '@payload-types'
import type { PropertyGallery } from '..'

type PropertyDocuments = PropertyGallery['documents']
type CreateDocuments = Record<string, PropertyDocuments>
export type DocumentsArray = Omit<Media, 'id' | 'createdAt' | 'updatedAt'>[]

export const documentsIndex: CreateDocuments = {
  // 1. barshaApartment
  barshaApartment: [],
  // 2. jvcResidence
  jvcResidence: [
    {
      url: 'https://res.cloudinary.com/weboracloud/image/upload/v1740735744/_2_v2apx6.jpg',
    },
    {
      url: 'https://res.cloudinary.com/weboracloud/image/upload/v1740735744/_1_d1udfk.jpg',
    },
  ],
  // 3. siliconOasisStudio
  siliconOasisStudio: [],
  // 4. alQuozLoft
  alQuozLoft: [],
  // 5. businessBayFlat
  businessBayFlat: [],
  // 6. alNahdaHome
  alNahdaHome: [],
  // 7. mirdifVilla
  mirdifVilla: [],
  // 8. internationalCityFlat
  internationalCityFlat: [],
  // 9. sportsCityApartment
  sportsCityApartment: [],
  // 10. alQusaisResidence
  alQusaisResidence: [],
  // 11. discoveryGardens
  discoveryGardens: [],
  // 12. remramApartment
  remramApartment: [],
  // 13. dubailandTownhouse
  dubailandTownhouse: [],
  // 14. warqaaResidence
  warqaaResidence: [],
  // 15. karamaFlat
  karamaFlat: [],
  // 16. tecomApartment
  tecomApartment: [],
  // 17. deiraCondo
  deiraCondo: [],
  // 18. satwaResidence
  satwaResidence: [],
  // 19. rashidiyaHome
  rashidiyaHome: [],
  // 20. garhoudApartment
  garhoudApartment: [],
}
