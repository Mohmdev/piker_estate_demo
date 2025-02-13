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
    useAsTitle: 'title',
    defaultColumns: ['image', 'title', 'price', '_status', 'updatedAt'],
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
        placeholder:
          'e.g. Luxury Penthouse in Downtown, Cozy Cottage in the Suburbs',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
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
                  },
                },
              ],
            },
            {
              type: 'richText',
              name: 'description',
              label: 'Detailed description of the property',
              editor: extendedLexical,
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'relationship',
                  name: 'availability',
                  label: 'Availability',
                  relationTo: 'availability',
                  hasMany: false,
                  required: true,
                  admin: {
                    description: 'Current status of this property',
                  },
                },
              ],
            },
            propertyGallery,
          ],
        },
        {
          label: 'Classification',
          fields: [
            {
              type: 'select',
              name: 'market',
              label: 'Market Segment',
              options: [
                { label: 'Economy', value: 'economy' },
                { label: 'Mid-Market', value: 'mid-market' },
                { label: 'Luxury', value: 'luxury' },
                { label: 'Ultra-Luxury', value: 'ultra-luxury' },
              ],
            },
            {
              type: 'relationship',
              name: 'classification',
              label: 'Classification',
              relationTo: 'classifications',
              // required: true,
              hasMany: true,
              admin: {
                isSortable: true,
                allowEdit: true,
              },
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'checkbox',
                  name: 'hasUnits',
                  label: 'Has Multiple Units',
                  defaultValue: false,
                  admin: {
                    description:
                      'Does this type typically have multiple units? (e.g., apartment buildings)',
                  },
                },
                {
                  type: 'checkbox',
                  name: 'isLandOnly',
                  label: 'Land Only',
                  defaultValue: false,
                  admin: {
                    description: 'Is this a land-only property type?',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Amenities',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'select',
                  name: 'facilityType',
                  label: 'Facility Type',
                  options: [
                    { label: 'Interior Features', value: 'interior' },
                    { label: 'Exterior Features', value: 'exterior' },
                    { label: 'Security', value: 'security' },
                    { label: 'Community', value: 'community' },
                    { label: 'Utilities', value: 'utilities' },
                    { label: 'Smart Home', value: 'smart-home' },
                  ],
                  admin: {
                    description: 'Group similar amenities together',
                  },
                },
                {
                  type: 'checkbox',
                  name: 'isPremium',
                  label: 'Premium Amenity',
                  defaultValue: false,
                  admin: {
                    description: 'Mark if this is a premium or luxury amenity',
                  },
                },
              ],
            },
            {
              type: 'row',
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
                    description:
                      'Features and facilities available in this property',
                    isSortable: true,
                    allowEdit: true,
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Contract',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'relationship',
                  name: 'contract',
                  label: 'Contract',
                  relationTo: 'contracts',
                  hasMany: false,
                  admin: {
                    description: 'How is this property being offered?',
                  },
                },
                {
                  type: 'checkbox',
                  name: 'requiresContract',
                  label: 'Requires Contract',
                  defaultValue: true,
                  admin: {
                    description:
                      'Does this property require a formal contract?',
                  },
                },
                {
                  type: 'checkbox',
                  name: 'requiresDeposit',
                  label: 'Requires Deposit',
                  defaultValue: false,
                  admin: {
                    description:
                      'Does this transaction type require a deposit?',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Specifications',
          fields: [propertySpecifications],
        },
        {
          label: 'Location',
          fields: [propertyLocation],
        },
        {
          label: 'Metadata',
          description:
            'Setting categories and tags helps the built-in Search Engine within the Software',
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
