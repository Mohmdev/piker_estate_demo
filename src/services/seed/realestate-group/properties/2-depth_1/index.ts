import { type PropertyDepthZero, propertiesDepthZero } from '../0-depth_0'
import {
  type PropertyRelationships,
  propertiesRelationships,
} from '../1-relationships'

type CreateProperty = PropertyDepthZero &
  PropertyRelationships & {
    _status: 'published' | 'draft'
  }

export const propertiesDepthOne: CreateProperty[] = [
  // 1. barshaApartment
  {
    ...(propertiesDepthZero.barshaApartment as PropertyDepthZero),
    ...(propertiesRelationships.barshaApartment as PropertyRelationships),
    _status: 'published',
  },
  // 2. jvcResidence
  {
    ...(propertiesDepthZero.jvcResidence as PropertyDepthZero),
    ...(propertiesRelationships.jvcResidence as PropertyRelationships),
    _status: 'published',
  },
  // 3. siliconOasisStudio
  {
    ...(propertiesDepthZero.siliconOasisStudio as PropertyDepthZero),
    ...(propertiesRelationships.siliconOasisStudio as PropertyRelationships),
    _status: 'published',
  },
  // 4. alQuozLoft
  {
    ...(propertiesDepthZero.alQuozLoft as PropertyDepthZero),
    ...(propertiesRelationships.alQuozLoft as PropertyRelationships),
    _status: 'published',
  },
  // 5. businessBayFlat
  {
    ...(propertiesDepthZero.businessBayFlat as PropertyDepthZero),
    ...(propertiesRelationships.businessBayFlat as PropertyRelationships),
    _status: 'published',
  },
  // 6. alNahdaHome
  {
    ...(propertiesDepthZero.alNahdaHome as PropertyDepthZero),
    ...(propertiesRelationships.alNahdaHome as PropertyRelationships),
    _status: 'published',
  },
  // 7. mirdifVilla
  {
    ...(propertiesDepthZero.mirdifVilla as PropertyDepthZero),
    ...(propertiesRelationships.mirdifVilla as PropertyRelationships),
    _status: 'published',
  },
  // 8. internationalCityFlat
  {
    ...(propertiesDepthZero.internationalCityFlat as PropertyDepthZero),
    ...(propertiesRelationships.internationalCityFlat as PropertyRelationships),
    _status: 'published',
  },
  // 9. sportsCityApartment
  {
    ...(propertiesDepthZero.sportsCityApartment as PropertyDepthZero),
    ...(propertiesRelationships.sportsCityApartment as PropertyRelationships),
    _status: 'published',
  },
  // 10. alQusaisResidence
  {
    ...(propertiesDepthZero.alQusaisResidence as PropertyDepthZero),
    ...(propertiesRelationships.alQusaisResidence as PropertyRelationships),
    _status: 'published',
  },
  // 11. discoveryGardens
  {
    ...(propertiesDepthZero.discoveryGardens as PropertyDepthZero),
    ...(propertiesRelationships.discoveryGardens as PropertyRelationships),
    _status: 'published',
  },
  // 12. remramApartment
  {
    ...(propertiesDepthZero.remramApartment as PropertyDepthZero),
    ...(propertiesRelationships.remramApartment as PropertyRelationships),
    _status: 'published',
  },
  // 13. dubailandTownhouse
  {
    ...(propertiesDepthZero.dubailandTownhouse as PropertyDepthZero),
    ...(propertiesRelationships.dubailandTownhouse as PropertyRelationships),
    _status: 'published',
  },
  // 14. warqaaResidence
  {
    ...(propertiesDepthZero.warqaaResidence as PropertyDepthZero),
    ...(propertiesRelationships.warqaaResidence as PropertyRelationships),
    _status: 'published',
  },
  // 15. karamaFlat
  {
    ...(propertiesDepthZero.karamaFlat as PropertyDepthZero),
    ...(propertiesRelationships.karamaFlat as PropertyRelationships),
    _status: 'published',
  },
  // 16. tecomApartment
  {
    ...(propertiesDepthZero.tecomApartment as PropertyDepthZero),
    ...(propertiesRelationships.tecomApartment as PropertyRelationships),
    _status: 'published',
  },
  // 17. deiraCondo
  {
    ...(propertiesDepthZero.deiraCondo as PropertyDepthZero),
    ...(propertiesRelationships.deiraCondo as PropertyRelationships),
    _status: 'published',
  },
  // 18. satwaResidence
  {
    ...(propertiesDepthZero.satwaResidence as PropertyDepthZero),
    ...(propertiesRelationships.satwaResidence as PropertyRelationships),
    _status: 'published',
  },
  // 19. rashidiyaHome
  {
    ...(propertiesDepthZero.rashidiyaHome as PropertyDepthZero),
    ...(propertiesRelationships.rashidiyaHome as PropertyRelationships),
    _status: 'published',
  },
  // 20. garhoudApartment
  {
    ...(propertiesDepthZero.garhoudApartment as PropertyDepthZero),
    ...(propertiesRelationships.garhoudApartment as PropertyRelationships),
    _status: 'published',
  },
]
