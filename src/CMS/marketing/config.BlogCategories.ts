import type { CollectionConfig } from 'payload'

import { slugField } from '@CMS/fields/shared/slug/config'
import { anyone } from '@auth/access/anyone'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { minimalLexical } from '@services/editor/minimalLexical'

export const BlogCategories: CollectionConfig<'blog-categories'> = {
  slug: 'blog-categories',
  labels: {
    singular: 'Blog Category',
    plural: 'Blog Categories',
  },
  access: {
    read: anyone,
    create: isAdminOrEditor,
    delete: isAdminOrEditor,
    update: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'richText',
      editor: minimalLexical,
      admin: {
        description: 'Optional',
      },
    },
    {
      label: 'Blog Posts',
      name: 'records',
      type: 'join',
      collection: 'blog',
      on: 'categories',
    },
    ...slugField(),
  ],
}
