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
import { slugField } from '@CMS/fields/shared/slug/config'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { isAdminOrSelf } from '@auth/access/isAdminOrSelf'
import { publishedOnly } from '@auth/access/publishedOnly'
import { extendedLexical } from '@services/editor/extendedLexical'
import type { CollectionConfig } from 'payload'

export const Availability: CollectionConfig<'availability'> = {
  slug: 'availability',
  labels: {
    singular: 'Availability Status',
    plural: 'Availability',
  },
  access: {
    read: publishedOnly,
    create: isAdminOrEditor,
    delete: isAdminOrSelf,
    update: isAdminOrSelf,
  },
  admin: {
    group: 'Real Estate',
    description:
      'Define and manage different states a property listing can have',
    useAsTitle: 'title',
    defaultColumns: ['color', 'image', 'title', '_status', 'updatedAt'],
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Availability Status Title',
      required: true,
      index: true,
      unique: true,
      admin: {
        placeholder: 'e.g. Available, Sold, Leased',
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
              label: 'Properties with this Availability Status',
              collection: 'properties',
              on: 'availability',
              hasMany: true,
              defaultSort: 'updatedAt',
              admin: {
                allowCreate: false,
              },
            },
          ],
        },
        {
          label: 'Options',
          fields: [
            {
              type: 'richText',
              name: 'description',
              label: false,
              editor: extendedLexical({ enableToolbar: true }),
              admin: {
                description: 'Describe what this availability status means',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'select',
                  name: 'color',
                  label: 'Status Color',
                  defaultValue: 'blue',
                  options: [
                    { label: 'Green (Available)', value: 'green' },
                    { label: 'Blue (New)', value: 'blue' },
                    { label: 'Yellow (Pending)', value: 'yellow' },
                    { label: 'Red (Sold/Leased)', value: 'red' },
                    { label: 'Gray (Off Market)', value: 'gray' },
                  ],
                  admin: {
                    description: 'Color used to visually identify this status',
                  },
                },
                {
                  type: 'upload',
                  name: 'image',
                  label: 'Status Image',
                  relationTo: 'media',
                  hasMany: false,
                  admin: {
                    description:
                      'Representative image for this availability status',
                  },
                },
                {
                  type: 'upload',
                  name: 'icon',
                  label: 'Status Icon',
                  relationTo: 'media',
                  hasMany: false,
                  admin: {
                    description: 'Icon for this availability status',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Extra',
          fields: [
            {
              type: 'group',
              name: 'extra',
              label: false,
              fields: [
                {
                  type: 'checkbox',
                  name: 'allowInquiries',
                  label: 'Allow Inquiries',
                  defaultValue: true,
                  admin: {
                    description:
                      'Can users make inquiries about properties with this status?',
                  },
                },
                {
                  type: 'checkbox',
                  name: 'showInSearch',
                  label: 'Show in Search',
                  defaultValue: true,
                  admin: {
                    description:
                      'Should properties with this status appear in search results?',
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
    // afterChange: [revalidateListingStatus],
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
