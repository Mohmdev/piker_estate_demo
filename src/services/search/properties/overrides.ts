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
          {
            type: 'number',
            name: 'price',
            label: 'Meta Price',
          },
        ],
      },
      {
        type: 'richText',
        name: 'description',
        label: 'Meta Description',
        admin: {
          readOnly: true,
          className: '*:*:*:*:*:p-0',
        },
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
            name: 'id',
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
    ],
  },
]
