import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import {
  revalidateDelete,
  revalidatePropertyType,
} from '@CMS/_hooks/revalidatePropertyCategories'
import { authorsField } from '@CMS/fields/shared/authorsField'
import { noindexField } from '@CMS/fields/shared/noindexField'
import { populateAuthorsField } from '@CMS/fields/shared/populatedAuthorsField'
import { publishedAtField } from '@CMS/fields/shared/publishedAtField'
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
          label: 'Properties',
          fields: [
            {
              type: 'join',
              name: 'properties',
              label: 'Properties listed with this classification',
              collection: 'properties',
              on: 'classification',
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
              label: false,
              editor: extendedLexical,
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
    // afterChange: [revalidatePropertyType],
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
