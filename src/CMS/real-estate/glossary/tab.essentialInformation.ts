import type { UnnamedTab } from 'payload'
import { amenitiesInterface } from './amenities/interface.amenities'
import { availabilityStatusInterface } from './availability-status/interface.availabilityStatus'
import { propertyConditionInterface } from './condition/interface.condition'
import { galleryGroup } from './gallery/config.gallery'
import { listingTypeInterface } from './listing-type/interface.listingType'

export const EssentialInformationTab: UnnamedTab = {
  label: 'Essential Information',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'number',
          name: 'price',
          label: 'Price',
          required: true,
          min: 0,
          admin: {
            step: 1000,
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        propertyConditionInterface,
        listingTypeInterface,
        // {
        //   label: 'Contract',
        //   name: 'contract',
        //   type: 'relationship',
        //   relationTo: 'contracts',
        //   hasMany: true,
        //   required: true,
        // },
        availabilityStatusInterface,
        // {
        //   label: 'Availability',
        //   name: 'availability',
        //   type: 'relationship',
        //   relationTo: 'availability',
        //   hasMany: true,
        //   required: true,
        // },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'relationship',
          name: 'classification',
          label: 'Classification',
          relationTo: 'classifications',
          required: true,
          hasMany: true,
          admin: {
            isSortable: true,
            allowEdit: true,
          },
        },
        amenitiesInterface,
        // {
        //   type: 'relationship',
        //   name: 'amenities',
        //   relationTo: 'amenities',
        //   hasMany: true,
        //   label: 'Amenities',
        //   admin: {
        //     isSortable: true,
        //     allowEdit: true,
        //   },
        // },
      ],
    },
    galleryGroup,
  ],
}
