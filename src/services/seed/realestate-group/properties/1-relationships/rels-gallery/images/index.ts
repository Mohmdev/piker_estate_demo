import type { Media } from '@payload-types'
import type { PropertyGallery } from '..'
import { A1 } from './A1'
import { A2 } from './A2'
import { A3 } from './A3'
import { A4 } from './A4'
import { A5 } from './A5'
import { A6 } from './A6'
import { A7 } from './A7'
import { A8 } from './A8'
import { A9 } from './A9'
import { A10 } from './A10'
import { A11 } from './A11'
import { A12 } from './A12'
import { A13 } from './A13'
import { A14 } from './A14'
import { A15 } from './A15'
import { A16 } from './A16'
import { A17 } from './A17'
import { A18 } from './A18'
import { A19 } from './A19'
import { A20 } from './A20'

type PropertyImages = PropertyGallery['images']
type CreateImages = Record<string, PropertyImages>
export type ImagesArray = Omit<Media, 'id' | 'createdAt' | 'updatedAt'>[]

export const imagesIndex: CreateImages = {
  // 1. barshaApartment
  barshaApartment: A1,
  // 2. jvcResidence
  jvcResidence: A2,
  // 3. siliconOasisStudio
  siliconOasisStudio: A3,
  // 4. alQuozLoft
  alQuozLoft: A4,
  // 5. businessBayFlat
  businessBayFlat: A5,
  // 6. alNahdaHome
  alNahdaHome: A6,
  // 7. mirdifVilla
  mirdifVilla: A7,
  // 8. internationalCityFlat
  internationalCityFlat: A8,
  // 9. sportsCityApartment
  sportsCityApartment: A9,
  // 10. alQusaisResidence
  alQusaisResidence: A10,
  // 11. discoveryGardens
  discoveryGardens: A11,
  // 12. remramApartment
  remramApartment: A12,
  // 13. dubailandTownhouse
  dubailandTownhouse: A13,
  // 14. warqaaResidence
  warqaaResidence: A14,
  // 15. karamaFlat
  karamaFlat: A15,
  // 16. tecomApartment
  tecomApartment: A16,
  // 17. deiraCondo
  deiraCondo: A17,
  // 18. satwaResidence
  satwaResidence: A18,
  // 19. rashidiyaHome
  rashidiyaHome: A19,
  // 20. garhoudApartment
  garhoudApartment: A20,
}
