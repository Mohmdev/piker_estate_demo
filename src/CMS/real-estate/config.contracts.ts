import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import {
  revalidateContract,
  revalidateDelete,
} from '@CMS/_hooks/revalidateContract'
import { authorsField } from '@CMS/fields/shared/authorsField'
import { noindexField } from '@CMS/fields/shared/noindexField'
import { populateAuthorsField } from '@CMS/fields/shared/populatedAuthorsField'
import { publishedAtField } from '@CMS/fields/shared/publishedAtField'
import { relatedDocsField } from '@CMS/fields/shared/relatedDocsField'
import { seoTab } from '@CMS/fields/shared/seoTab'
import { slugField } from '@CMS/fields/shared/slug/config'
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
    defaultColumns: [
      'image',
      'title',
      'description',
      'properties',
      'updatedAt',
    ],
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
          label: 'List',
          fields: [
            {
              type: 'join',
              name: 'properties',
              label: 'Properties with this Contract',
              collection: 'properties',
              on: 'contract',
              hasMany: true,
              defaultSort: 'updatedAt',
              admin: {
                allowCreate: false,
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
              editor: extendedLexical({ enableToolbar: true }),
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
    afterChange: [revalidateContract],
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
