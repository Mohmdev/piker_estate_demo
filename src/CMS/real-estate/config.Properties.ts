import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import { revalidateDelete } from '@CMS/_hooks/revalidateProperty'
import { revalidateProperty } from '@CMS/_hooks/revalidateProperty'
import { authorsField } from '@CMS/fields/shared/authorsField'
import { categoriesField } from '@CMS/fields/shared/categoriesField'
import { noindexField } from '@CMS/fields/shared/noindexField'
import { populateAuthorsField } from '@CMS/fields/shared/populatedAuthorsField'
import { publishedAtField } from '@CMS/fields/shared/publishedAtField'
import { relatedDocsField } from '@CMS/fields/shared/relatedDocsField'
import { seoTab } from '@CMS/fields/shared/seoTab'
import { slugField } from '@CMS/fields/shared/slug/config'
import { tagsField } from '@CMS/fields/shared/tagsField'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { isAdminOrSelf } from '@auth/access/isAdminOrSelf'
import { publishedOnly } from '@auth/access/publishedOnly'
import { extendedLexical } from '@services/editor/extendedLexical'
import { getCollectionLivePreviewURL } from '@services/live-preview/getCollectionLivePreviewURL'
import { getCollectionPreviewURL } from '@services/live-preview/getCollectionPreviewURL'
import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import type { CollectionConfig } from 'payload'
import { galleryGroup } from './glossary/field.galleryGroup'
import { LocationInterface } from './glossary/interface.location'
import { SpecificationsInterface } from './glossary/interface.specifications'

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
    defaultColumns: [
      `images.1`,
      'filename',
      'gallery',
      'thumbnail',
      'price',
      'title',
      '_status',
      'updatedAt',
    ],
    preview: getCollectionPreviewURL('properties'),
    livePreview: getCollectionLivePreviewURL('properties'),
  },
  defaultPopulate: {
    title: true,
    slug: true,
    gallery: {
      images: true,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Property Title',
      required: true,
      index: true,
      unique: true,
      admin: {
        placeholder:
          'e.g. Luxury Penthouse in Downtown, Cozy Cottage in the Suburbs',
      },
    },
    {
      type: 'ui',
      name: 'thumbnail',
      admin: {
        components: {
          Field:
            '@CMS/real-estate/components/PropertyThumbnail#PropertyThumbnail',
        },
        position: 'sidebar',
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
                  type: 'select',
                  name: 'market',
                  label: 'Market Segment',
                  options: [
                    { label: 'Economy', value: 'economy' },
                    { label: 'Mid-Market', value: 'mid-market' },
                    { label: 'Luxury', value: 'luxury' },
                    { label: 'Ultra-Luxury', value: 'ultra-luxury' },
                    { label: 'Commercial', value: 'commercial' },
                    { label: 'Industrial', value: 'industrial' },
                    { label: 'Other', value: 'other' },
                    { label: 'Custom', value: 'custom' },
                  ],
                },
                {
                  type: 'text',
                  name: 'customMarket',
                  label: 'Custom Market',
                  admin: {
                    description: 'Enter a custom market segment',
                    condition: isIncludedInSibling('market', 'custom'),
                  },
                },
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
                {
                  label: 'Contract',
                  name: 'contract',
                  type: 'relationship',
                  relationTo: 'contracts',
                  hasMany: false,
                  required: true,
                },
                {
                  label: 'Availability',
                  name: 'availability',
                  type: 'relationship',
                  relationTo: 'availability',
                  hasMany: false,
                  required: true,
                },
              ],
            },
            {
              type: 'relationship',
              name: 'amenities',
              relationTo: 'amenities',
              hasMany: true,
              label: 'Amenities',
              admin: {
                isSortable: true,
                allowEdit: true,
              },
            },
            galleryGroup,
          ],
        },
        SpecificationsInterface,
        LocationInterface,
        {
          label: 'Contract Details',
          name: 'contractDetails',
          fields: [
            {
              type: 'checkbox',
              name: 'requiresContract',
              label: 'Requires Contract',
              defaultValue: true,
              admin: {
                description: 'Does this property require a formal contract?',
              },
            },
            {
              type: 'checkbox',
              name: 'requiresDeposit',
              label: 'Requires Deposit',
              defaultValue: false,
              admin: {
                description: 'Does this transaction type require a deposit?',
              },
            },
          ],
        },
        {
          label: 'Metadata',
          fields: [
            {
              type: 'richText',
              name: 'description',
              label: false,
              editor: extendedLexical({
                enableToolbar: true,
                placeholder:
                  "Press '/' or Select Text to see the list of available Tools and Commands.",
                hideGutter: true,
              }),
              admin: {
                description: 'Describe the property in a few sentences.',
                className: 'border-0 border-b-1 border-border pb-8',
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
            categoriesField,
            tagsField,
            relatedDocsField,
          ],
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
    afterDelete: [revalidateDelete],
    afterRead: [populateAuthors],
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
