import { buildingAmenities } from './building'
import { communityAmenities } from './community'
import { premiumAmenities } from './premium'
import { unitAmenities } from './unit'

export const mockAmenities = [
  // doc numbers offset by 100
  ...buildingAmenities,
  // doc numbers offset by 200
  ...unitAmenities,
  // doc numbers offset by 300
  ...premiumAmenities,
  // doc numbers offset by 400
  ...communityAmenities,
]

export {
  buildingAmenities,
  unitAmenities,
  communityAmenities,
  premiumAmenities,
}
