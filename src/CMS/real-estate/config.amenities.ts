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
import { slugField } from '@CMS/fields/shared/slug/config'
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
    defaultColumns: ['image', 'title', '_status', 'updatedAt'],
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
      label: 'Amenity Title',
      index: true,
      unique: true,
      admin: {
        placeholder: 'e.g. Swimming Pool, Gym, Parking',
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
              label: 'Properties with this Amenity',
              collection: 'properties',
              on: 'amenities',
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
              type: 'checkbox',
              name: 'isPremium',
              label: 'Premium Amenity',
              defaultValue: false,
              admin: {
                description: 'Mark if this is a premium or luxury amenity',
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
                  admin: {
                    description: 'Upload an image or icon for this amenity',
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
