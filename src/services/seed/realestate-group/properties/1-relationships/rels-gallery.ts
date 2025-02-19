import type { PropertyRelationships } from '.'

type PropertyGallery = PropertyRelationships['gallery']

const imagesTemp = [
  {
    alt: 'Japanese Dragon Sleeve Tattoo',
    url: 'https://res.cloudinary.com/mohmdevcloud/image/upload/v1735920720/pikertattoos/mock/ykpvl9ajtzadjwusn4dy.jpg',
    filename: 'sample-tattoo-image.jpg',
    mimeType: 'image/jpeg',
    width: 731,
    height: 977,
  },
  {
    alt: 'Traditional Rose Tattoo',
    url: 'https://res.cloudinary.com/mohmdevcloud/image/upload/v1735920721/pikertattoos/mock/bv4bu9vttjtqhth8mg0n.jpg',
    filename: 'sample-tattoo-image.jpg',
    mimeType: 'image/jpeg',
    width: 736,
    height: 1104,
  },
  {
    alt: 'Geometric Wolf Tattoo',
    url: 'https://res.cloudinary.com/mohmdevcloud/image/upload/v1735920720/pikertattoos/mock/wmrcsg3ubakmjys2tv5d.jpg',
    filename: 'sample-tattoo-image.jpg',
    mimeType: 'image/jpeg',
    width: 720,
    height: 907,
  },
  {
    alt: 'Celtic Cross Cover-up Tattoo',
    url: 'https://res.cloudinary.com/mohmdevcloud/image/upload/v1735920720/pikertattoos/mock/augjyyr6hziqpwcfimte.jpg',
    filename: 'sample-tattoo-image.jpg',
    mimeType: 'image/jpeg',
    width: 736,
    height: 736,
  },
]

export const galleryRelationships: Record<string, PropertyGallery> = {
  // 1. barshaApartment
  barshaApartment: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 2. jvcResidence
  jvcResidence: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 3. siliconOasisStudio
  siliconOasisStudio: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 4. alQuozLoft
  alQuozLoft: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 5. businessBayFlat
  businessBayFlat: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 6. alNahdaHome
  alNahdaHome: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 7. mirdifVilla
  mirdifVilla: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 8. internationalCityFlat
  internationalCityFlat: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 9. sportsCityApartment
  sportsCityApartment: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 10. alQusaisResidence
  alQusaisResidence: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 11. discoveryGardens
  discoveryGardens: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 12. remramApartment
  remramApartment: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 13. dubailandTownhouse
  dubailandTownhouse: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 14. warqaaResidence
  warqaaResidence: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 15. karamaFlat
  karamaFlat: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 16. tecomApartment
  tecomApartment: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 17. deiraCondo
  deiraCondo: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 18. satwaResidence
  satwaResidence: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 19. rashidiyaHome
  rashidiyaHome: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
  // 20. garhoudApartment
  garhoudApartment: {
    images: imagesTemp,
    video: undefined,
    virtualTourUrl: undefined,
    floorPlan: undefined,
    documents: undefined,
  },
}
