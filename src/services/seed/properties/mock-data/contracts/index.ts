import { mockRentalContracts } from './rentals'
import { mockSalesContracts } from './sales'
import { mockSpecialArrangements } from './special-arrangements'

export const mockContracts = [
  // doc numbers offset by 100
  ...mockRentalContracts,
  // doc numbers offset by 200
  ...mockSalesContracts,
  // doc numbers offset by 300
  ...mockSpecialArrangements,
]

export { mockRentalContracts, mockSalesContracts, mockSpecialArrangements }
