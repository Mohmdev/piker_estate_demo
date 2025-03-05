import type { Classification, Media, Property, Search } from '@payload-types'
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
      image: (gallery?.images && gallery?.images[0]) || {},
    },
    taxonomies: {
      classifications,
      amenities,
      availabilityStatus,
      listingType,
      condition,
    },
  }

  const imagesArray = gallery?.images
  if (imagesArray && Array.isArray(imagesArray) && imagesArray.length > 0) {
    try {
      const firstImage = imagesArray[0] as Media
      generatedSearchDoc.image = {
        id: firstImage.id,
        relationTo: 'media',
      }
    } catch (error) {
      console.error(
        `Failed to map image when syncing collection '${collection}' with id: '${id}' to Search. Document will be indexed without an image. | ${error}`,
      )
    }
  }

  // classifications
  if (
    classifications &&
    Array.isArray(classifications) &&
    classifications.length > 0
  ) {
    try {
      const mappedClassifications = classifications.map((classification) => {
        const { title, id } = classification as Classification

        return {
          relationTo: 'classifications',
          id,
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
