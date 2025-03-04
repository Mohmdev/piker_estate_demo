import React from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa6'

export const listingTypeIcons: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  sale: FaHandshake,
  rent: FaMoneyBillWave,
}
