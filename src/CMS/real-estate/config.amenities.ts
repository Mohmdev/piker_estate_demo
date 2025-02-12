import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import {
  revalidateDelete,
  revalidateFeature,
} from '@CMS/_hooks/revalidateFeature'
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

export const Amenities: CollectionConfig<'amenities'> = {
  slug: 'amenities',
  labels: {
    singular: 'Amenity',
    plural: 'Amenities',
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
      'Manage property amenities and features that can be assigned to properties',
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
        description: 'Name of the amenity or feature',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Amenity Details',
          description: 'Basic information about this amenity',
          fields: [
            {
              type: 'select',
              name: 'category',
              label: 'Amenity Category',
              required: true,
              options: [
                { label: 'Interior Features', value: 'interior' },
                { label: 'Exterior Features', value: 'exterior' },
                { label: 'Security', value: 'security' },
                { label: 'Community', value: 'community' },
                { label: 'Utilities', value: 'utilities' },
                { label: 'Smart Home', value: 'smart-home' },
              ],
              admin: {
                description: 'Group similar amenities together',
              },
            },
            {
              type: 'richText',
              name: 'description',
              editor: minimalLexical,
              admin: {
                description:
                  'Brief description of this amenity and its benefits',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'upload',
                  name: 'image',
                  label: 'Amenity Icon',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    description: 'Upload an icon or representative image',
                  },
                },
                {
                  type: 'checkbox',
                  name: 'isPremium',
                  label: 'Premium Amenity',
                  defaultValue: false,
                  admin: {
                    description: 'Mark if this is a premium or luxury amenity',
                    style: {
                      backgroundColor: '#f0f9ff',
                      padding: '10px',
                      borderRadius: '4px',
                    },
                  },
                },
              ],
            },
            {
              type: 'group',
              name: 'displayOptions',
              label: 'Display Options',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'select',
                      name: 'displayPriority',
                      label: 'Display Priority',
                      defaultValue: 'normal',
                      options: [
                        { label: 'High', value: 'high' },
                        { label: 'Normal', value: 'normal' },
                        { label: 'Low', value: 'low' },
                      ],
                      admin: {
                        description:
                          'Control where this amenity appears in lists',
                      },
                    },
                    {
                      type: 'checkbox',
                      name: 'showInFilters',
                      label: 'Show in Search Filters',
                      defaultValue: true,
                      admin: {
                        description:
                          'Allow users to filter properties by this amenity',
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'array',
              name: 'specifications',
              label: 'Additional Specifications',
              admin: {
                description: 'Add any specific details about this amenity',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'value',
                      type: 'text',
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              type: 'join',
              name: 'properties',
              label: 'Properties with this Amenity',
              collection: 'properties',
              on: 'amenities',
              admin: {
                description:
                  'Properties that have this amenity (automatically populated)',
              },
            },
          ],
        },
        {
          label: 'Classification',
          description: 'Organize and categorize this amenity',
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
    // afterChange: [revalidateFeature],
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
