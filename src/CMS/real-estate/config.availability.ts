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

export const Availability: CollectionConfig<'availability'> = {
  slug: 'availability',
  labels: {
    singular: 'Availability State',
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
    defaultColumns: ['title', 'statusType', 'color', '_status', 'updatedAt'],
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
      admin: {
        description: 'Name of the listing status',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Status Details',
          description: 'Configure how this status appears and behaves',
          fields: [
            {
              type: 'select',
              name: 'statusType',
              label: 'Status Type',
              required: true,
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Pending', value: 'pending' },
                { label: 'Closed', value: 'closed' },
                { label: 'Off Market', value: 'off-market' },
              ],
              admin: {
                description: 'The general category this status belongs to',
              },
            },
            {
              type: 'richText',
              name: 'description',
              editor: minimalLexical,
              admin: {
                description: 'Explain when this status should be used',
              },
            },
            {
              type: 'group',
              name: 'display',
              label: 'Display Settings',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'select',
                      name: 'color',
                      label: 'Status Color',
                      required: true,
                      defaultValue: 'blue',
                      options: [
                        { label: 'Green (Available)', value: 'green' },
                        { label: 'Blue (New)', value: 'blue' },
                        { label: 'Yellow (Pending)', value: 'yellow' },
                        { label: 'Red (Sold/Leased)', value: 'red' },
                        { label: 'Gray (Off Market)', value: 'gray' },
                      ],
                      admin: {
                        description:
                          'Color used to visually identify this status',
                      },
                    },
                    {
                      type: 'number',
                      name: 'displayOrder',
                      label: 'Display Order',
                      defaultValue: 0,
                      admin: {
                        description:
                          'Order in which this status appears in lists (0 = first)',
                        step: 1,
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'group',
              name: 'behavior',
              label: 'Status Behavior',
              fields: [
                {
                  type: 'row',
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
            {
              type: 'join',
              name: 'properties',
              label: 'Properties with this Availability Status',
              collection: 'properties',
              on: 'availability',
              admin: {
                description:
                  'Properties currently in this status (automatically populated)',
              },
            },
          ],
        },
        {
          label: 'Classification',
          description: 'Additional categorization options',
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
