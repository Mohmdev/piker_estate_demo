import type { PropertyRelationships } from '.'

type PropertyContract = PropertyRelationships['contract']
type CreateContractRelationship = Record<string, PropertyContract>

export const contractRelationships: CreateContractRelationship = {
  // 1. barshaApartment
  barshaApartment: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Installments',
      slug: 'installments',
    },
  ],

  // 2. jvcResidence
  jvcResidence: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Outright Purchase',
      slug: 'outright-purchase',
    },
  ],

  // 3. siliconOasisStudio
  siliconOasisStudio: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Installments',
      slug: 'installments',
    },
  ],

  // 4. alQuozLoft
  alQuozLoft: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Outright Purchase',
      slug: 'outright-purchase',
    },
  ],

  // 5. businessBayFlat
  businessBayFlat: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Developer Finance',
      slug: 'developer-finance',
    },
  ],

  // 6. alNahdaHome
  alNahdaHome: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Multiple Cheques',
      slug: 'multiple-cheques',
    },
  ],

  // 7. mirdifVilla
  mirdifVilla: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Extended Payment Terms',
      slug: 'extended-payment-terms',
    },
  ],

  // 8. internationalCityFlat
  internationalCityFlat: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Installments',
      slug: 'installments',
    },
  ],

  // 9. sportsCityApartment
  sportsCityApartment: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Multiple Cheques',
      slug: 'multiple-cheques',
    },
  ],

  // 10. alQusaisResidence
  alQusaisResidence: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Developer Finance',
      slug: 'developer-finance',
    },
  ],

  // 11. discoveryGardens
  discoveryGardens: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Flexible Terms',
      slug: 'flexible-terms',
    },
  ],

  // 12. remramApartment
  remramApartment: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Multiple Cheques',
      slug: 'multiple-cheques',
    },
  ],

  // 13. dubailandTownhouse
  dubailandTownhouse: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Pre-Launch Purchase',
      slug: 'pre-launch-purchase',
    },
  ],

  // 14. warqaaResidence
  warqaaResidence: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Multiple Cheques',
      slug: 'multiple-cheques',
    },
  ],

  // 15. karamaFlat
  karamaFlat: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Pre-Launch Purchase',
      slug: 'pre-launch-purchase',
    },
  ],

  // 16. tecomApartment
  tecomApartment: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Developer Finance',
      slug: 'developer-finance',
    },
  ],

  // 17. deiraCondo
  deiraCondo: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Flexible Terms',
      slug: 'flexible-terms',
    },
  ],

  // 18. satwaResidence
  satwaResidence: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Installments',
      slug: 'installments',
    },
  ],

  // 19. rashidiyaHome
  rashidiyaHome: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Developer Finance',
      slug: 'developer-finance',
    },
  ],

  // 20. garhoudApartment
  garhoudApartment: [
    {
      title: 'For Sale',
      slug: 'for-sale',
    },
    {
      title: 'Multiple Cheques',
      slug: 'multiple-cheques',
    },
  ],
}
