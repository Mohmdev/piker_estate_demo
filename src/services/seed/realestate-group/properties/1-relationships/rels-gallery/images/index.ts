import type { Media } from '@payload-types'
import type { PropertyGallery } from '..'
import { A1 } from './A1'

type PropertyImages = PropertyGallery['images']
type CreateImages = Record<string, PropertyImages>
export type ImagesArray = Omit<Media, 'id' | 'createdAt' | 'updatedAt'>[]

export const imagesIndex: CreateImages = {
  // 1. barshaApartment
  barshaApartment: A1,
  // 2. jvcResidence
  jvcResidence: [
    {
      //
    },
  ],
  // 3. siliconOasisStudio
  siliconOasisStudio: [
    {
      //
    },
  ],
  // 4. alQuozLoft
  alQuozLoft: [
    {
      //
    },
  ],
  // 5. businessBayFlat
  businessBayFlat: [
    {
      //
    },
  ],
  // 6. alNahdaHome
  alNahdaHome: [
    {
      //
    },
  ],
  // 7. mirdifVilla
  mirdifVilla: [
    {
      //
    },
  ],
  // 8. internationalCityFlat
  internationalCityFlat: [
    {
      //
    },
  ],
  // 9. sportsCityApartment
  sportsCityApartment: [
    {
      //
    },
  ],
  // 10. alQusaisResidence
  alQusaisResidence: [
    {
      //
    },
  ],
  // 11. discoveryGardens
  discoveryGardens: [
    {
      //
    },
  ],
  // 12. remramApartment
  remramApartment: [
    {
      //
    },
  ],
  // 13. dubailandTownhouse
  dubailandTownhouse: [
    {
      //
    },
  ],
  // 14. warqaaResidence
  warqaaResidence: [
    {
      //
    },
  ],
  // 15. karamaFlat
  karamaFlat: [
    {
      //
    },
  ],
  // 16. tecomApartment
  tecomApartment: [
    {
      //
    },
  ],
  // 17. deiraCondo
  deiraCondo: [
    {
      //
    },
  ],
  // 18. satwaResidence
  satwaResidence: [
    {
      //
    },
  ],
  // 19. rashidiyaHome
  rashidiyaHome: [
    {
      //
    },
  ],
  // 20. garhoudApartment
  garhoudApartment: [
    {
      //
    },
  ],
}
