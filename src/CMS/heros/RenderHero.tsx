import React from 'react'

import type { Page } from '@payload-types'

import { HighImpactHero } from '@heros/HighImpact'
import { LowImpactHero } from '@heros/LowImpact'
import { MediumImpactHero } from '@heros/MediumImpact'
import { AdvancedComponentsHero } from '@heros/RealEstate/AdvancedComponents'
const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  advancedComponents: AdvancedComponentsHero,
}

export const RenderHero: React.FC<Page['heros']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
