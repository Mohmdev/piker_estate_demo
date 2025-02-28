import type { Media } from '@payload-types'
import type { PropertyGallery } from '..'

type PropertyVideos = PropertyGallery['videos']
type CreateVideos = Record<string, PropertyVideos>
export type VideosArray = Omit<Media, 'id' | 'createdAt' | 'updatedAt'>[]

export const videosIndex: CreateVideos = {
  // 1. barshaApartment
  barshaApartment: [
    {
      url: 'https://res.cloudinary.com/weboracloud/video/upload/v1740735766/Exquisite_3-Bedroom_Vida_Hotel_Apartment_Emirates_Hills_Dubai_Extensively_Renovated_Furnished_-_The_Luxury_Address_Real_Estate_1080p_h264_imt9ie.mp4',
    },
  ],
  // 2. jvcResidence
  jvcResidence: [],
  // 3. siliconOasisStudio
  siliconOasisStudio: [],
  // 4. alQuozLoft
  alQuozLoft: [],
  // 5. businessBayFlat
  businessBayFlat: [
    {
      url: 'https://res.cloudinary.com/weboracloud/video/upload/v1740735725/_1_kc2htz.webm',
    },
  ],
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
