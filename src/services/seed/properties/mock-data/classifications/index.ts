import { mockConditions } from './conditions'
import { mockLocationTypes } from './location-types'
import { mockMarketSegments } from './market-segments'
import { mockPropertyClasses } from './property-classes'
import { mockPropertyTypes } from './property-types'
import { mockUsageTypes } from './usage-types'

export const mockClassifications = [
  // doc numbers offset by 100
  ...mockPropertyTypes,
  // doc numbers offset by 200
  ...mockPropertyClasses,
  // doc numbers offset by 300
  ...mockUsageTypes,
  // doc numbers offset by 400
  ...mockMarketSegments,
  // doc numbers offset by 500
  ...mockConditions,
  // doc numbers offset by 600
  ...mockLocationTypes,
]

export {
  mockPropertyTypes,
  mockUsageTypes,
  mockPropertyClasses,
  mockMarketSegments,
  mockLocationTypes,
  mockConditions,
}
