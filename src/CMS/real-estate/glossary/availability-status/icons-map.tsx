import React from 'react'
import { BsFillHouseCheckFill } from 'react-icons/bs'
import { FaCalendarAlt, FaCheck, FaUserClock } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa6'
import { MdCancel, MdHomeWork, MdPauseCircle } from 'react-icons/md'

export const availabilityStatusIcons: Record<
  string,
  React.ComponentType<{ size?: number }>
> = {
  // Active
  available: FaCheck,
  preLaunchRegistration: FaCalendarAlt,
  // Inactive
  reserved: FaUserClock,
  occupied: MdHomeWork,
  rented: BsFillHouseCheckFill,
  sold: FaHandshake,
  onHold: MdPauseCircle,
  noLongerAvailable: MdCancel,
}
