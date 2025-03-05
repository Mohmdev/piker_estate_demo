/**
 * Type for amenity metadata objects that include both value and label
 */
export type AmenityMeta = {
  value: string
  label: string
}

/**
 * Type for the amenitiesMeta field in the API response
 */
export type AmenitiesMetaType = AmenityMeta[] | null

/**
 * Helper function to safely parse amenitiesMeta from API response
 * This handles cases where it might be a string or already an array
 */
export const parseAmenitiesMeta = (
  amenitiesMeta: unknown,
): AmenitiesMetaType => {
  if (!amenitiesMeta) return null

  try {
    // If it's a string, try to parse it
    if (typeof amenitiesMeta === 'string') {
      return JSON.parse(amenitiesMeta) as AmenitiesMetaType
    }

    // If it's already an array, return it
    if (Array.isArray(amenitiesMeta)) {
      return amenitiesMeta as AmenitiesMetaType
    }

    return null
  } catch (error) {
    console.error('Error parsing amenitiesMeta:', error)
    return null
  }
}

/**
 * Helper function to get amenity label from value
 * Useful when you only have the amenity value but need the label
 */
export const getAmenityLabel = (
  amenitiesMeta: AmenitiesMetaType,
  value: string,
): string | undefined => {
  if (!amenitiesMeta) return undefined

  const amenity = amenitiesMeta.find((item) => item.value === value)
  return amenity?.label
}
