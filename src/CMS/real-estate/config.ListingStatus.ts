import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import {
  revalidateDelete,
  revalidateListingStatus,
} from '@CMS/_hooks/revalidateListingStatus'
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
import type { CollectionConfig } from 'payload'

export const ListingStatus: CollectionConfig<'listing-status'> = {
  slug: 'listing-status',
  labels: {
    singular: 'Listing Status',
    plural: 'Listing Status Types',
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
              editor: minimalLexical,
            },
            {
              type: 'upload',
              name: 'image',
              relationTo: 'media',
            },
            {
              name: 'properties',
              type: 'join',
              collection: 'properties',
              on: 'listingStatus',
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
    afterChange: [revalidateListingStatus],
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
