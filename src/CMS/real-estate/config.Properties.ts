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
import { minimalLexical } from '@services/editor/minimalLexical'
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
    useAsTitle: 'title',
    defaultColumns: [
      'image',
      'title',
      //
      'createdAt',
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
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [
            {
              type: 'richText',
              name: 'description',
              editor: minimalLexical,
            },
            propertyLocation,
            propertySpecifications,
            {
              type: 'relationship',
              name: 'features',
              relationTo: 'features',
              hasMany: true,
              label: {
                singular: 'Feature',
                plural: 'Features',
              },
              index: true,
            },
          ],
        },
        {
          label: 'Listing Options',
          fields: [
            {
              type: 'checkbox',
              name: 'isFeatured',
              label: 'Featured',
              defaultValue: false,
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'relationship',
                  name: 'propertyType',
                  relationTo: 'property-types',
                },
                {
                  type: 'relationship',
                  name: 'listingStatus',
                  relationTo: 'listing-status',
                },
                {
                  type: 'relationship',
                  name: 'listingType',
                  relationTo: 'listing-types',
                },
              ],
            },
            categoriesField,
            tagsField,
          ],
        },
        {
          label: 'Gallery',
          fields: [propertyGallery],
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
