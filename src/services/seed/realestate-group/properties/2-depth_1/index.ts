import { type PropertyDepthZero, propertiesDepthZero } from '../0-depth_0'
import {
  type PropertyRelationships,
  propertiesRelationships,
} from '../1-relationships'

type CreateProperty = PropertyDepthZero & PropertyRelationships

export const propertiesDepthOne: CreateProperty[] = [
  // 1. barshaApartment
  {
    ...(propertiesDepthZero.barshaApartment as PropertyDepthZero),
    ...(propertiesRelationships.barshaApartment as PropertyRelationships),
  },
  // 2. jvcResidence
  {
    ...(propertiesDepthZero.jvcResidence as PropertyDepthZero),
    ...(propertiesRelationships.jvcResidence as PropertyRelationships),
  },
  // 3. siliconOasisStudio
  {
    ...(propertiesDepthZero.siliconOasisStudio as PropertyDepthZero),
    ...(propertiesRelationships.siliconOasisStudio as PropertyRelationships),
  },
  // 4. alQuozLoft
  {
    ...(propertiesDepthZero.alQuozLoft as PropertyDepthZero),
    ...(propertiesRelationships.alQuozLoft as PropertyRelationships),
  },
  // 5. businessBayFlat
  {
    ...(propertiesDepthZero.businessBayFlat as PropertyDepthZero),
    ...(propertiesRelationships.businessBayFlat as PropertyRelationships),
  },
  // 6. alNahdaHome
  {
    ...(propertiesDepthZero.alNahdaHome as PropertyDepthZero),
    ...(propertiesRelationships.alNahdaHome as PropertyRelationships),
  },
  // 7. mirdifVilla
  {
    ...(propertiesDepthZero.mirdifVilla as PropertyDepthZero),
    ...(propertiesRelationships.mirdifVilla as PropertyRelationships),
  },
  // 8. internationalCityFlat
  {
    ...(propertiesDepthZero.internationalCityFlat as PropertyDepthZero),
    ...(propertiesRelationships.internationalCityFlat as PropertyRelationships),
  },
  // 9. sportsCityApartment
  {
    ...(propertiesDepthZero.sportsCityApartment as PropertyDepthZero),
    ...(propertiesRelationships.sportsCityApartment as PropertyRelationships),
  },
  // 10. alQusaisResidence
  {
    ...(propertiesDepthZero.alQusaisResidence as PropertyDepthZero),
    ...(propertiesRelationships.alQusaisResidence as PropertyRelationships),
  },
  // 11. discoveryGardens
  {
    ...(propertiesDepthZero.discoveryGardens as PropertyDepthZero),
    ...(propertiesRelationships.discoveryGardens as PropertyRelationships),
  },
  // 12. remramApartment
  {
    ...(propertiesDepthZero.remramApartment as PropertyDepthZero),
    ...(propertiesRelationships.remramApartment as PropertyRelationships),
  },
  // 13. dubailandTownhouse
  {
    ...(propertiesDepthZero.dubailandTownhouse as PropertyDepthZero),
    ...(propertiesRelationships.dubailandTownhouse as PropertyRelationships),
  },
  // 14. warqaaResidence
  {
    ...(propertiesDepthZero.warqaaResidence as PropertyDepthZero),
    ...(propertiesRelationships.warqaaResidence as PropertyRelationships),
  },
  // 15. karamaFlat
  {
    ...(propertiesDepthZero.karamaFlat as PropertyDepthZero),
    ...(propertiesRelationships.karamaFlat as PropertyRelationships),
  },
  // 16. tecomApartment
  {
    ...(propertiesDepthZero.tecomApartment as PropertyDepthZero),
    ...(propertiesRelationships.tecomApartment as PropertyRelationships),
  },
  // 17. deiraCondo
  {
    ...(propertiesDepthZero.deiraCondo as PropertyDepthZero),
    ...(propertiesRelationships.deiraCondo as PropertyRelationships),
  },
  // 18. satwaResidence
  {
    ...(propertiesDepthZero.satwaResidence as PropertyDepthZero),
    ...(propertiesRelationships.satwaResidence as PropertyRelationships),
  },
  // 19. rashidiyaHome
  {
    ...(propertiesDepthZero.rashidiyaHome as PropertyDepthZero),
    ...(propertiesRelationships.rashidiyaHome as PropertyRelationships),
  },
  // 20. garhoudApartment
  {
    ...(propertiesDepthZero.garhoudApartment as PropertyDepthZero),
    ...(propertiesRelationships.garhoudApartment as PropertyRelationships),
  },
]
