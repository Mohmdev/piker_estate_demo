import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import {
  revalidateDelete,
  revalidateListingType,
} from '@CMS/_hooks/revalidateListingType'
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
import { extendedLexical } from '@services/editor/extendedLexical'
import type { CollectionConfig } from 'payload'

export const Contracts: CollectionConfig<'contracts'> = {
  slug: 'contracts',
  labels: {
    singular: 'Contract',
    plural: 'Contracts',
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
    defaultColumns: ['image', 'title', '_status', 'updatedAt'],
    description:
      'Define different types of property transactions (sale, rent, lease, etc.)',
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Contract Title',
      required: true,
      index: true,
      unique: true,
      admin: {
        placeholder: 'e.g. Sale, Investment, Rent, Lease',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Properties',
          fields: [
            {
              type: 'join',
              name: 'properties',
              label: 'Properties listed with this contract',
              collection: 'properties',
              on: 'contract',
              hasMany: true,
            },
          ],
        },
        {
          label: 'Extra',
          fields: [
            {
              type: 'richText',
              name: 'description',
              editor: extendedLexical,
              admin: {
                description: 'Describe this type of contract/transaction',
              },
            },
            {
              type: 'upload',
              name: 'image',
              label: 'Icon',
              relationTo: 'media',
              admin: {
                description: 'Icon or representative image for this sale type',
              },
            },
          ],
        },
      ],
    },
    noindexField,
    authorsField,
    populateAuthorsField,
    publishedAtField,
    ...slugField(),
  ],
  hooks: {
    // afterChange: [revalidateListingType],
    // afterDelete: [revalidateDelete],
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
