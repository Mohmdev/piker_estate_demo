import { activeRecords } from './active-records'
import { inactiveRecords } from './inactive-records'
import { otherRecords } from './other-records'

export const availabilitiesIndex = [
  ...activeRecords,
  ...inactiveRecords,
  ...otherRecords,
]

export { activeRecords, inactiveRecords, otherRecords }
