import type { PropertyRelationships } from '.'

type PropertyAmenity = PropertyRelationships['amenities']
type CreateAmenityRelationship = Record<string, PropertyAmenity>

export const amenityRelationships: CreateAmenityRelationship = {
  // 1. Barsha Apartment
  barshaApartment: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Access Control System', slug: 'access-control-system' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: 'Public Transportation', slug: 'public-transportation' },
  ],

  // 2. JVC Residence
  jvcResidence: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Swimming Pool', slug: 'swimming-pool' },
    { title: 'Fitness Center', slug: 'fitness-center' },
    { title: "Children's Play Area", slug: 'childrens-play-area' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Parks & Recreation', slug: 'parks-and-recreation' },
  ],

  // 3. Silicon Oasis Studio
  siliconOasisStudio: [
    { title: 'Access Control System', slug: 'access-control-system' },
    {
      title: 'High-speed Internet Infrastructure',
      slug: 'high-speed-internet-infrastructure',
    },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: 'Public Transportation', slug: 'public-transportation' },
    { title: 'Package Reception', slug: 'package-reception' },
  ],

  // 4. Al Quoz Loft
  alQuozLoft: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    {
      title: 'High-speed Internet Infrastructure',
      slug: 'high-speed-internet-infrastructure',
    },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: 'Smart Home System', slug: 'smart-home-system' },
  ],

  // 5. Business Bay Flat
  businessBayFlat: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Smart Home System', slug: 'smart-home-system' },
    { title: 'Swimming Pool', slug: 'swimming-pool' },
    { title: 'Fitness Center', slug: 'fitness-center' },
    { title: 'Valet Service', slug: 'valet-service' },
    { title: 'Concierge Service', slug: 'concierge-service' },
    { title: 'Business Center', slug: 'business-center' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: 'Public Transportation', slug: 'public-transportation' },
  ],

  // 6. Al Nahda Home
  alNahdaHome: [
    { title: '24/7 Security & CCTV', slug: '24-7-security-and-cctv' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: "Children's Play Area", slug: 'childrens-play-area' },
    { title: 'Parks & Recreation', slug: 'parks-and-recreation' },
  ],

  // 7. Mirdif Villa
  mirdifVilla: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Smart Home System', slug: 'smart-home-system' },
    { title: 'Private Pool', slug: 'private-pool' },
    { title: 'Private Garden', slug: 'private-garden' },
    { title: "Maid's Room", slug: 'maids-room' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Walk-in Closets', slug: 'walk-in-closets' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: 'Educational Institutions', slug: 'educational-institutions' },
  ],

  // 8. International City Flat
  internationalCityFlat: [
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: 'Public Transportation', slug: 'public-transportation' },
  ],

  // 9. Sports City Apartment
  sportsCityApartment: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Swimming Pool', slug: 'swimming-pool' },
    { title: 'Fitness Center', slug: 'fitness-center' },
    { title: 'Sports Courts', slug: 'sports-courts' },
    { title: 'Walking/Jogging Track', slug: 'walking-jogging-track' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Parks & Recreation', slug: 'parks-and-recreation' },
  ],

  // 10. Al Qusais Residence
  alQusaisResidence: [
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: 'Public Transportation', slug: 'public-transportation' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: '24/7 Maintenance', slug: '24-7-maintenance' },
  ],

  // 11. Discovery Gardens
  discoveryGardens: [
    { title: 'Swimming Pool', slug: 'swimming-pool' },
    { title: "Children's Play Area", slug: 'childrens-play-area' },
    { title: 'Walking/Jogging Track', slug: 'walking-jogging-track' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: 'Public Transportation', slug: 'public-transportation' },
  ],

  // 12. Remram Apartment
  remramApartment: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: "Children's Play Area", slug: 'childrens-play-area' },
    { title: 'Parks & Recreation', slug: 'parks-and-recreation' },
  ],

  // 13. Dubailand Townhouse
  dubailandTownhouse: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Smart Home System', slug: 'smart-home-system' },
    { title: 'Swimming Pool', slug: 'swimming-pool' },
    { title: 'Private Garden', slug: 'private-garden' },
    { title: "Maid's Room", slug: 'maids-room' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Parks & Recreation', slug: 'parks-and-recreation' },
    { title: 'Educational Institutions', slug: 'educational-institutions' },
  ],

  // 14. Warqaa Residence
  warqaaResidence: [
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: "Children's Play Area", slug: 'childrens-play-area' },
    { title: 'Educational Institutions', slug: 'educational-institutions' },
  ],

  // 15. Karama Flat
  karamaFlat: [
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Public Transportation', slug: 'public-transportation' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: 'Parks & Recreation', slug: 'parks-and-recreation' },
  ],

  // 16. TECOM Apartment
  tecomApartment: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Swimming Pool', slug: 'swimming-pool' },
    { title: 'Fitness Center', slug: 'fitness-center' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Business Center', slug: 'business-center' },
    { title: 'Public Transportation', slug: 'public-transportation' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
  ],

  // 17. Deira Condo
  deiraCondo: [
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Public Transportation', slug: 'public-transportation' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: '24/7 Maintenance', slug: '24-7-maintenance' },
  ],

  // 18. Satwa Residence
  satwaResidence: [
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Public Transportation', slug: 'public-transportation' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: '24/7 Maintenance', slug: '24-7-maintenance' },
  ],

  // 19. Rashidiya Home
  rashidiyaHome: [
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: 'Public Transportation', slug: 'public-transportation' },
    { title: '24/7 Maintenance', slug: '24-7-maintenance' },
    { title: 'Educational Institutions', slug: 'educational-institutions' },
  ],

  // 20. Garhoud Apartment
  garhoudApartment: [
    { title: 'Central Air Conditioning', slug: 'central-air-conditioning' },
    { title: 'Built-in Wardrobes', slug: 'built-in-wardrobes' },
    { title: 'Covered Parking', slug: 'covered-parking' },
    { title: 'Public Transportation', slug: 'public-transportation' },
    { title: 'Retail & Dining', slug: 'retail-and-dining' },
    { title: 'Healthcare Facilities', slug: 'healthcare-facilities' },
  ],
}
