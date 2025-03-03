import React from 'react'

import { CallToActionSection } from './CallToActionSection'
import { DiscoverSection } from './DiscoverSection'
import { FeaturesSection } from './FeaturesSection'
import { HeroSection } from './HeroSection'

export default function Landing() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
    </>
  )
}
