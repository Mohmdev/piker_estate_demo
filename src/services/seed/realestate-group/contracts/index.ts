import { mockRentalContracts } from './rentals'
import { mockSalesContracts } from './sales'

export const mockContracts = [
  // doc numbers offset by 100
  ...mockRentalContracts,
  // doc numbers offset by 200
  ...mockSalesContracts,
]

export { mockRentalContracts, mockSalesContracts }
