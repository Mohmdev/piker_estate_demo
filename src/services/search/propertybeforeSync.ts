import type { Classification, Property } from '@payload-types'
import { BeforeSync, DocToSync } from '@payloadcms/plugin-search/types'

type beforeSyncProps = {
  originalDoc: Partial<Property>
  searchDoc: DocToSync
}

export const propertyBeforeSyncWithSearch: BeforeSync = async ({
  originalDoc,
  searchDoc,
}: beforeSyncProps) => {
  const {
    doc: { relationTo: collection },
  } = searchDoc

  const {
    slug,
    id,
    // meta
    title,
    price,
    description,
    gallery,
    // taxonomies
    classification: classifications,
    amenities,
    availabilityStatus,
    listingType,
    condition,
  } = originalDoc

  const generatedSearchDoc: DocToSync = {
    ...searchDoc,
    slug,
    meta: {
      title,
      price,
      description,
      gallery,
    },
    taxonomies: {
      classifications,
      amenities,
      availabilityStatus,
      listingType,
      condition,
    },
  }

  // classifications
  if (
    classifications &&
    Array.isArray(classifications) &&
    classifications.length > 0
  ) {
    try {
      const mappedClassifications = classifications.map((classification) => {
        const { title } = classification as Classification

        return {
          relationTo: 'classifications',
          // id,
          title,
        }
      })

      generatedSearchDoc.taxonomies.classifications = mappedClassifications
    } catch (err) {
      console.error(
        `Failed. Classification not found when syncing collection '${collection}' with id: '${id}' to search. | ${err}`,
      )
    }
  }

  // amenities
  if (amenities) {
    generatedSearchDoc.taxonomies.amenities = amenities.map(
      (amenity, index) => ({
        value: amenity,
        id: `amenity_${index}`,
      }),
    )
  }

  // availabilityStatus
  if (availabilityStatus) {
    generatedSearchDoc.taxonomies.availabilityStatus = availabilityStatus
  }

  // listingType
  if (listingType) {
    generatedSearchDoc.taxonomies.listingType = listingType
  }

  // condition
  if (condition) {
    generatedSearchDoc.taxonomies.condition = condition
  }

  return generatedSearchDoc
}
