import React from 'react'
import { FaHouseCircleCheck, FaHouseLaptop } from 'react-icons/fa6'
import { GiSparkles } from 'react-icons/gi'
import { MdConstruction } from 'react-icons/md'

export const propertyConditionIcons: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  brandNew: GiSparkles,
  renovated: FaHouseCircleCheck,
  wellMaintained: FaHouseLaptop,
  needsRenovation: MdConstruction,
}
