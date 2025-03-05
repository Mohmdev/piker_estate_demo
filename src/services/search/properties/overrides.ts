import { galleryThumbnailField } from '@CMS/real-estate/glossary/gallery/thumbnail/config'
import { Field } from 'payload'

export const propertyOverrides: Field[] = [
  {
    name: 'slug',
    type: 'text',
    index: true,
    admin: {
      readOnly: true,
      position: 'sidebar',
    },
  },
  {
    name: 'meta',
    label: false,
    type: 'group',
    index: true,
    admin: {
      readOnly: true,
      components: {
        Cell: {
          path: '@CMS/real-estate/glossary/gallery/cell-thumbnail/client#GalleryCellThumbnail',
          clientProps: {
            cellData: 'meta.images',
            collectionSlug: 'search',
            field: 'meta.images',
            link: true,
          },
        },
      },
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            type: 'text',
            name: 'title',
            label: 'Meta Title',
          },
        ],
      },
      {
        type: 'row',
        admin: {
          className:
            '*:grid *:grid-cols-1 md:*:grid-cols-[max-content_1fr] *:gap-10',
        },
        fields: [
          galleryThumbnailField('meta.images'),
          {
            name: 'images',
            label: 'Meta Images',
            type: 'upload',
            relationTo: 'media',
            hasMany: true,
            maxRows: 5,
          },
        ],
      },
    ],
  },
  {
    name: 'specs',
    label: 'Specifications',
    type: 'group',
    index: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            type: 'number',
            name: 'price',
            label: 'Meta Price',
          },
          {
            type: 'number',
            name: 'areaSize',
            label: 'Area Size',
          },
        ],
      },
      {
        type: 'row',
        fields: [
          {
            type: 'number',
            name: 'rooms',
            label: 'Rooms',
          },
          {
            type: 'number',
            name: 'bathrooms',
            label: 'Bathrooms',
          },
          {
            type: 'number',
            name: 'yearBuilt',
            label: 'Year Built',
          },
        ],
      },
    ],
  },
  {
    name: 'location',
    label: 'Location',
    type: 'group',
    index: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            type: 'text',
            name: 'neighborhood',
            label: 'Neighborhood',
          },
          {
            type: 'text',
            name: 'city',
            label: 'City',
          },
          {
            type: 'text',
            name: 'country',
            label: 'Country',
          },
        ],
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
        type: 'row',
        fields: [
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
      {
        label: 'Classifications',
        name: 'classifications',
        type: 'array',
        admin: {
          readOnly: true,
          initCollapsed: true,
          components: {
            RowLabel:
              '@services/search/properties/RowLabel#ClassificationRowLabel',
          },
        },
        fields: [
          {
            name: 'relationTo',
            type: 'text',
          },
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
          initCollapsed: true,
          components: {
            RowLabel: '@services/search/properties/RowLabel#AmenityRowLabel',
          },
        },
        fields: [
          {
            name: 'label',
            type: 'text',
          },
          {
            name: 'value',
            type: 'text',
          },
        ],
      },
      {
        type: 'row',
        fields: [
          {
            type: 'checkbox',
            name: 'hasParking',
            label: 'Has Parking?',
          },
          {
            type: 'checkbox',
            name: 'petsAllowed',
            label: 'Pets Allowed?',
          },
        ],
      },
    ],
  },
]
