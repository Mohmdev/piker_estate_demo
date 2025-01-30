import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import { revalidateDelete } from '@CMS/_hooks/revalidateProperty'
import { revalidateProperty } from '@CMS/_hooks/revalidateProperty'
import { authorsField } from '@CMS/fields/shared/authorsField'
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
import { getLivePreviewUrl } from '@services/live-preview/getLivePreviewUrl'
import { getPreviewUrl } from '@services/live-preview/getPreviewUrl'
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
    livePreview: getLivePreviewUrl('properties'),
    preview: getPreviewUrl('properties'),
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
            propertyLocation,
            propertySpecifications,
            propertyGallery,
            {
              type: 'richText',
              name: 'description',
              editor: minimalLexical,
            },
          ],
        },
        {
          label: 'Options',
          fields: [tagsField],
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
