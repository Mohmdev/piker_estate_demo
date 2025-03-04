import type { SelectField } from 'payload'

export const amenitiesInterface: SelectField = {
  type: 'select',
  name: 'amenitiesSelect',
  label: 'Amenities',
  interfaceName: 'PropertyAmenities',
  hasMany: true,
  admin: {
    components: {
      Field: {
        path: '@CMS/real-estate/glossary/amenities/Component#AmenitiesComponent',
      },
    },
  },
  // typescriptSchema: {
  // },

  options: [
    {
      label: 'High-Speed Internet',
      value: 'fastInternet',
    },
    {
      label: 'Washer/Dryer',
      value: 'washerDryer',
    },
    {
      label: 'Air Conditioning',
      value: 'airConditioning',
    },
    {
      label: 'Heating',
      value: 'heating',
    },
    {
      label: 'Parking',
      value: 'parking',
    },
    {
      label: 'Swimming Pool',
      value: 'swimmingPool',
    },
    {
      label: 'Gym/Fitness Center',
      value: 'gym',
    },
    {
      label: 'Pet Friendly',
      value: 'petFriendly',
    },
    {
      label: 'Furnished',
      value: 'furnished',
    },
    {
      label: 'Security System',
      value: 'securitySystem',
    },
  ],
}
