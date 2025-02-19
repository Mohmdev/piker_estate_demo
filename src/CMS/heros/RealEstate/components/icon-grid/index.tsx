'use client'

import type { Page } from '@payload-types'
import {
  Bath,
  Bed,
  Building2,
  Car,
  Home,
  Hotel,
  Landmark,
  Maximize,
  ScrollText,
  Trees,
  Warehouse,
  Waves,
} from 'lucide-react'
import { motion } from 'motion/react'

type IconGridProps = {
  iconGrid: NonNullable<Page['hero']['iconGrid']>
}

const iconMap = {
  house: Home,
  booking: Hotel,
  garage: Warehouse,
  bath: Bath,
  bed: Bed,
  area: Maximize,
  price: Landmark,
  rooms: Building2,
  parking: Car,
  pool: Waves,
  garden: Trees,
  land: ScrollText,
  other: Building2,
} as const

export const IconGrid: React.FC<IconGridProps> = ({ iconGrid }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
    >
      {iconGrid.map((item, i) => {
        const Icon = item.icon ? iconMap[item.icon] : Building2

        return (
          <div
            key={i}
            className="bg-background/80 backdrop-blur p-4 rounded-lg text-center"
          >
            <div className="text-3xl mb-2">
              <Icon className="mx-auto h-8 w-8" />
            </div>
            <div className="text-sm">{item.label}</div>
          </div>
        )
      })}
    </motion.div>
  )
}
