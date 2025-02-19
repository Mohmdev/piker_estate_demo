import type { PropertyRelationships } from '.'

type PropertyAvailability = PropertyRelationships['availability']
type CreateAvailabilityRelationship = Record<string, PropertyAvailability>

export const availabilityRelationships: CreateAvailabilityRelationship = {
  // 1. barshaApartment
  barshaApartment: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'New',
      slug: 'new',
    },
  ],

  // 2. jvcResidence
  jvcResidence: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 3. siliconOasisStudio
  siliconOasisStudio: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 4. alQuozLoft
  alQuozLoft: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 5. businessBayFlat
  businessBayFlat: [
    {
      title: 'Inactive',
      slug: 'inactive',
    },
    {
      title: 'Reserved',
      slug: 'reserved',
    },
  ],

  // 6. alNahdaHome
  alNahdaHome: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 7. mirdifVilla
  mirdifVilla: [
    {
      title: 'Inactive',
      slug: 'inactive',
    },
    {
      title: 'Reserved',
      slug: 'reserved',
    },
  ],

  // 8. internationalCityFlat
  internationalCityFlat: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 9. sportsCityApartment
  sportsCityApartment: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 10. alQusaisResidence
  alQusaisResidence: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'New',
      slug: 'new',
    },
  ],

  // 11. discoveryGardens
  discoveryGardens: [
    {
      title: 'Inactive',
      slug: 'inactive',
    },
    {
      title: 'Reserved',
      slug: 'reserved',
    },
  ],

  // 12. remramApartment
  remramApartment: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 13. dubailandTownhouse
  dubailandTownhouse: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Pre-Launch Registration',
      slug: 'pre-launch-registration',
    },
  ],

  // 14. warqaaResidence
  warqaaResidence: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 15. karamaFlat
  karamaFlat: [
    {
      title: 'Launch Preparation',
      slug: 'launch-preparation',
    },
  ],

  // 16. tecomApartment
  tecomApartment: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'New',
      slug: 'new',
    },
  ],

  // 17. deiraCondo
  deiraCondo: [
    {
      title: 'Inactive',
      slug: 'inactive',
    },
    {
      title: 'Reserved',
      slug: 'reserved',
    },
  ],

  // 18. satwaResidence
  satwaResidence: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],

  // 19. rashidiyaHome
  rashidiyaHome: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'New',
      slug: 'new',
    },
  ],

  // 20. garhoudApartment
  garhoudApartment: [
    {
      title: 'Active',
      slug: 'active',
    },
    {
      title: 'Available',
      slug: 'available',
    },
  ],
}
