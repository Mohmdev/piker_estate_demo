import { activeAvailability } from './active'
import { inactiveAvailability } from './inactive'
import { specialAvailability } from './special'

export const mockAvailability = [
  ...activeAvailability,
  ...inactiveAvailability,
  ...specialAvailability,
]

export { activeAvailability, inactiveAvailability, specialAvailability }
