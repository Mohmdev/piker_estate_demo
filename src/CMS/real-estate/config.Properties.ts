import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import { revalidateDelete } from '@CMS/_hooks/revalidateProperty'
import { revalidateProperty } from '@CMS/_hooks/revalidateProperty'
import { authorsField } from '@CMS/fields/shared/authorsField'
import { categoriesField } from '@CMS/fields/shared/categoriesField'
import { noindexField } from '@CMS/fields/shared/noindexField'
import { populateAuthorsField } from '@CMS/fields/shared/populatedAuthorsField'
import { publishedAtField } from '@CMS/fields/shared/publishedAtField'
import { seoTab } from '@CMS/fields/shared/seoTab'
import { slugField } from '@CMS/fields/shared/slug/config'
import { tagsField } from '@CMS/fields/shared/tagsField'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { isAdminOrSelf } from '@auth/access/isAdminOrSelf'
import { publishedOnly } from '@auth/access/publishedOnly'
import { extendedLexical } from '@services/editor/extendedLexical'
import { getCollectionLivePreviewURL } from '@services/live-preview/getCollectionLivePreviewURL'
import { getCollectionPreviewURL } from '@services/live-preview/getCollectionPreviewURL'
import type { CollectionConfig } from 'payload'
import { propertyGallery } from './fields/property.gallery'
import { propertyLocation } from './fields/property.location'
import { propertySpecifications } from './fields/property.specs'

export const Properties: CollectionConfig<'properties'> = {
  slug: 'properties',
  labels: {
    singular: 'Property',
    plural: 'Properties',
  },
  access: {
    read: publishedOnly,
    create: isAdminOrEditor,
    delete: isAdminOrSelf,
    update: isAdminOrSelf,
  },
  admin: {
    group: 'Real Estate',
    description: 'Manage all property listings and their details',
    useAsTitle: 'title',
    defaultColumns: [
      'image',
      'title',
      'propertyType',
      'listingStatus',
      'price',
      '_status',
      'updatedAt',
    ],
    livePreview: getCollectionLivePreviewURL('properties'),
    preview: getCollectionPreviewURL('properties'),
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
      unique: true,
      admin: {
        description: 'Descriptive title for the property',
        placeholder:
          'e.g., "Luxury Penthouse in Downtown", "Cozy Cottage in the Suburbs"',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Essential Information',
          description: 'Basic property details and pricing',
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
                    description: 'Property price in USD',
                    step: 1000,
                  },
                },
                {
                  type: 'checkbox',
                  name: 'isFeatured',
                  label: 'Featured Property',
                  defaultValue: false,
                  admin: {
                    description: 'Show this property in featured sections',
                    style: {
                      backgroundColor: '#f0f9ff',
                      padding: '10px',
                      borderRadius: '4px',
                    },
                  },
                },
              ],
            },
            {
              type: 'richText',
              name: 'description',
              label: 'Property Description',
              editor: extendedLexical,
              admin: {
                description: 'Detailed description of the property',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'relationship',
                  name: 'propertyCategory',
                  label: 'Property Category',
                  relationTo: 'property-categories',
                  required: true,
                  admin: {
                    description: 'Select the category this property belongs to',
                  },
                },
                {
                  type: 'relationship',
                  name: 'contractType',
                  label: 'Contract Type',
                  relationTo: 'contract-types',
                  required: true,
                  admin: {
                    description: 'How is this property being offered?',
                  },
                },
                {
                  type: 'relationship',
                  name: 'availability',
                  label: 'Availability',
                  relationTo: 'availability',
                  required: true,
                  admin: {
                    description: 'Current status of this property',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Location & Specifications',
          description: 'Property location and detailed specifications',
          fields: [
            {
              type: 'collapsible',
              label: 'Property Location',
              fields: [propertyLocation],
            },
            {
              type: 'collapsible',
              label: 'Property Specifications',
              fields: [propertySpecifications],
            },
          ],
        },
        {
          label: 'Amenities & Features',
          description: 'Property features and facilities',
          fields: [
            {
              type: 'relationship',
              name: 'amenities',
              relationTo: 'amenities',
              hasMany: true,
              label: {
                singular: 'Amenity',
                plural: 'Amenities',
              },
              admin: {
                description: 'Select all amenities available in this property',
                isSortable: true,
              },
            },
          ],
        },
        {
          label: 'Media Gallery',
          description: 'Property images and virtual tours',
          fields: [
            {
              type: 'collapsible',
              label: 'Property Gallery',
              fields: [propertyGallery],
            },
          ],
        },
        {
          label: 'Classification',
          description: 'Categories and tags for better organization',
          fields: [categoriesField, tagsField],
        },
        seoTab,
      ],
    },
    noindexField,
    authorsField,
    populateAuthorsField,
    publishedAtField,
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateProperty],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
