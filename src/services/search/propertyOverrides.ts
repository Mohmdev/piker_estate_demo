import { Field } from 'payload'

export const propertyOverrides: Field[] = [
  {
    name: 'slug',
    type: 'text',
    index: true,
    admin: {
      readOnly: true,
    },
  },
  {
    name: 'meta',
    label: 'Meta',
    type: 'group',
    index: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        type: 'text',
        name: 'title',
        label: 'Title',
      },
      {
        type: 'text',
        name: 'description',
        label: 'Description',
      },
      {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo: 'media',
      },
      {
        type: 'number',
        name: 'price',
        label: 'Price',
      },
    ],
  },
  {
    name: 'taxonomies',
    label: 'Taxonomies',
    type: 'group',
    // index: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        label: 'Classifications',
        name: 'classifications',
        type: 'array',
        admin: {
          readOnly: true,
        },
        fields: [
          {
            name: 'relationTo',
            type: 'text',
          },
          // {
          //   name: 'id',
          //   type: 'text',
          // },
          {
            name: 'title',
            type: 'text',
          },
        ],
      },
      {
        label: 'Amenities',
        name: 'amenities',
        type: 'array',
        admin: {
          readOnly: true,
        },
        fields: [
          {
            name: 'value',
            type: 'text',
          },
          {
            name: 'id',
            type: 'text',
          },
        ],
      },
      {
        label: 'Availability Status',
        name: 'availabilityStatus',
        type: 'text',
        admin: {
          readOnly: true,
        },
      },
      {
        label: 'Listing Type',
        name: 'listingType',
        type: 'text',
        admin: {
          readOnly: true,
        },
      },
      {
        label: 'Condition',
        name: 'condition',
        type: 'text',
        admin: {
          readOnly: true,
        },
      },
    ],
  },
]
