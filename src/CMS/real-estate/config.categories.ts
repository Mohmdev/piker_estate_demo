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
import { tagsField } from '@CMS/fields/shared/tagsField'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { isAdminOrSelf } from '@auth/access/isAdminOrSelf'
import { publishedOnly } from '@auth/access/publishedOnly'
import { extendedLexical } from '@services/editor/extendedLexical'
import type { CollectionConfig } from 'payload'

export const PropertyCategories: CollectionConfig<'property-categories'> = {
  slug: 'property-categories',
  labels: {
    singular: 'Property Category',
    plural: 'Categories',
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
      'Define different categories of properties (house, apartment, etc.)',
    useAsTitle: 'title',
    defaultColumns: ['image', 'title', 'category', '_status', 'updatedAt'],
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
        description: 'Name of the property category',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Category Details',
          description: 'Basic information about this property category',
          fields: [
            {
              type: 'select',
              name: 'category',
              label: 'Main Category',
              required: true,
              options: [
                { label: 'Residential', value: 'residential' },
                { label: 'Commercial', value: 'commercial' },
                { label: 'Industrial', value: 'industrial' },
                { label: 'Land', value: 'land' },
              ],
              admin: {
                description: 'The primary classification of this property type',
              },
            },
            {
              type: 'richText',
              name: 'description',
              editor: extendedLexical,
              admin: {
                description: 'Describe this type of property',
              },
            },
            {
              type: 'group',
              name: 'specifications',
              label: 'Category Specifications',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'checkbox',
                      name: 'hasUnits',
                      label: 'Has Multiple Units',
                      defaultValue: false,
                      admin: {
                        description:
                          'Does this type typically have multiple units? (e.g., apartment buildings)',
                      },
                    },
                    {
                      type: 'checkbox',
                      name: 'isLandOnly',
                      label: 'Land Only',
                      defaultValue: false,
                      admin: {
                        description: 'Is this a land-only property type?',
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'select',
                      name: 'typicalSize',
                      label: 'Typical Size Range',
                      options: [
                        { label: 'Small (< 1000 sq ft)', value: 'small' },
                        { label: 'Medium (1000-2500 sq ft)', value: 'medium' },
                        { label: 'Large (2500-5000 sq ft)', value: 'large' },
                        {
                          label: 'Extra Large (> 5000 sq ft)',
                          value: 'xlarge',
                        },
                      ],
                      admin: {
                        description:
                          'What is the typical size range for this type?',
                      },
                    },
                    {
                      type: 'select',
                      name: 'market',
                      label: 'Market Segment',
                      options: [
                        { label: 'Economy', value: 'economy' },
                        { label: 'Mid-Market', value: 'mid-market' },
                        { label: 'Luxury', value: 'luxury' },
                        { label: 'Ultra-Luxury', value: 'ultra-luxury' },
                      ],
                      admin: {
                        description: 'Primary market segment for this type',
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
                      type: 'upload',
                      name: 'image',
                      label: 'Category Image',
                      relationTo: 'media',
                      required: true,
                      admin: {
                        description:
                          'Representative image for this property category',
                      },
                    },
                    {
                      type: 'number',
                      name: 'displayOrder',
                      label: 'Display Order',
                      defaultValue: 0,
                      admin: {
                        description:
                          'Order in which this category appears in lists (0 = first)',
                        step: 1,
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'join',
              name: 'properties',
              label: 'Properties in this Category',
              collection: 'properties',
              on: 'propertyCategory',
              admin: {
                description:
                  'Properties of this category (automatically populated)',
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
