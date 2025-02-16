import { activeAvailability } from './active'
import { inactiveAvailability } from './inactive'
import { specialAvailability } from './special'

export const mockAvailabilities = [
  ...activeAvailability,
  ...inactiveAvailability,
  ...specialAvailability,
]

export { activeAvailability, inactiveAvailability, specialAvailability }
