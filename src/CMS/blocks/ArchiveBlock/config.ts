import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import type { Block } from 'payload'

export const Archive: Block = {
  slug: 'archive',
  interfaceName: 'ArchiveBlock',
  fields: [
    {
      name: 'introContent',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Intro Content',
    },
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      name: 'relationTo',
      type: 'select',
      admin: {
        condition: isIncludedInSibling('populateBy', 'collection'),
      },
      defaultValue: 'blog',
      label: 'Collections To Show',
      options: [
        {
          label: 'Blog Posts',
          value: 'blog',
        },
        {
          label: 'Properties',
          value: 'properties',
        },
        {
          label: 'Projects',
          value: 'projects',
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      admin: {
        condition: isIncludedInSibling('populateBy', 'collection'),
      },
      hasMany: true,
      label: 'Categories To Show',
      relationTo: ['blog-categories', 'classifications'],
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: isIncludedInSibling('populateBy', 'collection'),
        step: 1,
      },
      defaultValue: 10,
      label: 'Limit',
    },
    {
      name: 'selectedDocs',
      type: 'relationship',
      admin: {
        condition: isIncludedInSibling('populateBy', 'selection'),
      },
      hasMany: true,
      label: 'Selection',
      relationTo: ['blog', 'properties', 'projects'],
    },
  ],
  labels: {
    plural: 'Archives',
    singular: 'Archive',
  },
}
