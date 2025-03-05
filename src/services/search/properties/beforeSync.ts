import type { Classification, Media, Property, Search } from '@payload-types'
import { BeforeSync, DocToSync } from '@payloadcms/plugin-search/types'
import { parseAmenitiesMeta } from '../../../CMS/real-estate/glossary/amenities/types'

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
    // slug,
    id,
    // meta
    // title,
    // price,
    gallery,
    meta,
    // specs: {
    //   areaSize,
    //   rooms,
    //   bathrooms,
    //   // petsAllowed,
    //   // hasParking,
    //   yearBuilt,
    // } = {},
    // location: { neighborhood, city, country } = {},
    // taxonomies
    classification: classifications,
    amenitiesMeta,
    // availabilityStatus,
    // listingType,
    // condition,
  } = originalDoc

  const generatedSearchDoc: DocToSync = {
    ...searchDoc,
    slug: originalDoc.slug || undefined,
    meta: {
      title: originalDoc.meta?.title || originalDoc.title,
      images:
        // if meta.image is available
        (meta?.image
          ? typeof meta.image === 'number'
            ? meta.image
            : meta.image.id
          : null) ||
        // if gallery.images is available
        (gallery?.images && gallery?.images.slice(0, 5)) ||
        [],
    },
    specs: {
      price: originalDoc.price || undefined,
      areaSize: originalDoc.specs?.areaSize || undefined,
      rooms: originalDoc.specs?.rooms || undefined,
      bathrooms: originalDoc.specs?.bathrooms || undefined,
      yearBuilt: originalDoc.specs?.yearBuilt || undefined,
    },
    location: {
      neighborhood: originalDoc.location?.neighborhood || undefined,
      city: originalDoc.location?.city || undefined,
      country: originalDoc.location?.country || undefined,
    },
    taxonomies: {
      classifications,
      amenitiesMeta,
      //
      listingType: originalDoc.listingType || undefined,
      availabilityStatus: originalDoc.availabilityStatus || undefined,
      condition: originalDoc.condition || undefined,
      petsAllowed: originalDoc.specs?.petsAllowed || undefined,
      hasParking: originalDoc.specs?.hasParking || undefined,
    },
  }

  const imagesArray = gallery?.images
  if (imagesArray && Array.isArray(imagesArray) && imagesArray.length > 0) {
    try {
      const firstFiveImages = imagesArray.slice(0, 5)

      generatedSearchDoc.images = firstFiveImages.map((image) => ({
        id: typeof image === 'number' ? image : image.id,
        relationTo: 'media',
      }))
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
        const { title } = classification as Classification

        return {
          relationTo: 'classifications',
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
  if (amenitiesMeta) {
    try {
      const parsedAmenitiesMeta = parseAmenitiesMeta(amenitiesMeta)

      if (parsedAmenitiesMeta) {
        generatedSearchDoc.taxonomies.amenities = parsedAmenitiesMeta.map(
          (amenity) => ({
            label: amenity.label,
            value: amenity.value,
          }),
        )
      }
    } catch (err) {
      console.error(
        `Failed to process amenitiesMeta when syncing collection '${collection}' with id: '${id}' to search. | ${err}`,
      )
    }
  }

  // availabilityStatus
  // if (availabilityStatus) {
  //   generatedSearchDoc.taxonomies.availabilityStatus = availabilityStatus
  // }

  // // listingType
  // if (listingType) {
  //   generatedSearchDoc.taxonomies.listingType = listingType
  // }

  // condition
  // if (condition) {
  //   generatedSearchDoc.taxonomies.condition = condition
  // }

  return generatedSearchDoc
}
