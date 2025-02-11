import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import {
  revalidateDelete,
  revalidatePropertyType,
} from '@CMS/_hooks/revalidatePropertyType'
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
import { essentialsLexical } from '@services/editor/essentialsLexical'
import type { CollectionConfig } from 'payload'

export const PropertyTypes: CollectionConfig<'property-types'> = {
  slug: 'property-types',
  labels: {
    singular: 'Property Type',
    plural: 'Property Types',
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
              editor: essentialsLexical,
            },
            {
              type: 'upload',
              name: 'image',
              relationTo: 'media',
            },
            {
              type: 'join',
              name: 'properties',
              collection: 'properties',
              on: 'listingType',
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
    afterChange: [revalidatePropertyType],
    afterDelete: [revalidateDelete],
    afterRead: [populateAuthors],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 50,
  },
}
