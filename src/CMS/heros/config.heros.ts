import { linkGroup } from '@fields/linkGroup'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { hasSiblingField } from '@utils/siblingFieldCondition'
import type { Field } from 'payload'
import { iconGridComponent } from './RealEstate/components/icon-grid/config.field'
import { heroSearchComponent } from './RealEstate/components/search-component/config.field'

export const herosInterface: Field = {
  name: 'heros',
  type: 'group',
  interfaceName: 'herosInterface',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'advancedComponents',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Advanced Components',
          value: 'advancedComponents',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
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
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: hasSiblingField('type', [
          'highImpact',
          'mediumImpact',
          'advancedComponents',
        ]),
      },
      relationTo: 'media',
      required: true,
    },
    heroSearchComponent,
    iconGridComponent,
  ],
  label: false,
}
