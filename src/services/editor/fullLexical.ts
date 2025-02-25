import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { Config } from 'payload'

export const fullLexical: Config['editor'] = lexicalEditor({
  admin: {
    hideGutter: true,
  },
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      BlocksFeature({
        blocks: [
          'mediaBlock',
          'banner',
          'code',
          'cta',
          'content',
          'blog-archive',
          'universal-archive',
        ],
      }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      HorizontalRuleFeature(),
    ]
  },
})
