// TODO: Replace Property with Search
import type { Property } from '@payload-types'

declare global {
  interface CardCompactProps {
    property: Property
    // TODO: Remove the optional flag once we have a way to get the favorite status
    isFavorite?: boolean
    onFavoriteToggle?: () => void
    showFavoriteButton?: boolean
    propertyLink?: string
  }

  interface ListingCardProps {
    property: Property
    // TODO: Remove the optional flag once we have a way to get the favorite status
    isFavorite?: boolean
    onFavoriteToggle?: () => void
    showFavoriteButton?: boolean
    propertyLink?: string
  }
}
