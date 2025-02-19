import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import {
  revalidateClassification,
  revalidateDelete,
} from '@CMS/_hooks/revalidateClassification'
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

export const Classifications: CollectionConfig<'classifications'> = {
  slug: 'classifications',
  labels: {
    singular: 'Classification',
    plural: 'Classifications',
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
      'Define different categories of properties (Residential, Commercial, Industrial, Land, etc.)',
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Classification Title',
      required: true,
      index: true,
      unique: true,
      admin: {
        placeholder: 'e.g. Residential, Commercial, Industrial',
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
              label: 'Properties with this Classification',
              collection: 'properties',
              on: 'classification',
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
              label: false,
              editor: extendedLexical({ enableToolbar: true }),
              admin: {
                description: 'Describe what this property category is',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'upload',
                  name: 'image',
                  label: 'Category Image',
                  relationTo: 'media',
                  hasMany: false,
                  admin: {
                    description:
                      'Representative image for this property category',
                  },
                },
                {
                  type: 'upload',
                  name: 'icon',
                  label: 'Category Icon',
                  relationTo: 'media',
                  hasMany: false,
                  admin: {
                    description: 'Icon for this property category',
                  },
                },
              ],
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
    afterChange: [revalidateClassification],
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
