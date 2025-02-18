import { forRentRecords } from './forRent-records'
import { forSaleRecords } from './forSale-records'

export const contractsIndex = [
  // doc numbers offset by 100
  ...forRentRecords,
  // doc numbers offset by 200
  ...forSaleRecords,
]

export { forRentRecords, forSaleRecords }
