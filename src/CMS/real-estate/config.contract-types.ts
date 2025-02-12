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

export const ContractTypes: CollectionConfig<'contract-types'> = {
  slug: 'contract-types',
  labels: {
    singular: 'Contract Type',
    plural: 'Contract Types',
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
      'Define different types of property transactions (sale, rent, lease, etc.)',
    useAsTitle: 'title',
    defaultColumns: ['title', 'transactionCategory', '_status', 'updatedAt'],
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
        description: 'Name of the sale type',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Sale Type Details',
          description: 'Configure how this transaction type works',
          fields: [
            {
              type: 'select',
              name: 'transactionCategory',
              label: 'Transaction Category',
              required: true,
              options: [
                { label: 'Sale', value: 'sale' },
                { label: 'Rental', value: 'rental' },
                { label: 'Lease', value: 'lease' },
                { label: 'Investment', value: 'investment' },
              ],
              admin: {
                description:
                  'The general category this transaction type belongs to',
              },
            },
            {
              type: 'richText',
              name: 'description',
              editor: extendedLexical,
              admin: {
                description: 'Explain this type of transaction',
              },
            },
            {
              type: 'group',
              name: 'requirements',
              label: 'Transaction Requirements',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'checkbox',
                      name: 'requiresDeposit',
                      label: 'Requires Deposit',
                      defaultValue: false,
                      admin: {
                        description:
                          'Does this transaction type require a deposit?',
                      },
                    },
                    {
                      type: 'checkbox',
                      name: 'requiresContract',
                      label: 'Requires Contract',
                      defaultValue: true,
                      admin: {
                        description:
                          'Does this transaction type require a formal contract?',
                      },
                    },
                  ],
                },
              ],
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
                      name: 'priceLabel',
                      label: 'Price Label',
                      defaultValue: 'price',
                      options: [
                        { label: 'Price', value: 'price' },
                        { label: 'Rent/month', value: 'rent-month' },
                        { label: 'Rent/year', value: 'rent-year' },
                        { label: 'Starting from', value: 'starting-from' },
                      ],
                      admin: {
                        description: 'How should the price be labeled?',
                      },
                    },
                    {
                      type: 'number',
                      name: 'displayOrder',
                      label: 'Display Order',
                      defaultValue: 0,
                      admin: {
                        description:
                          'Order in which this type appears in lists (0 = first)',
                        step: 1,
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'upload',
              name: 'image',
              label: 'Type Icon',
              relationTo: 'media',
              admin: {
                description: 'Icon or representative image for this sale type',
              },
            },
            {
              type: 'join',
              name: 'properties',
              label: 'Properties with this Contract Type',
              collection: 'properties',
              on: 'contractType',
              admin: {
                description:
                  'Properties using this contract type (automatically populated)',
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
