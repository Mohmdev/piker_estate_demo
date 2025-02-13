import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Config } from 'payload'

export const extendedLexical: Config['editor'] = lexicalEditor({
  features: ({ defaultFeatures, rootFeatures }) => {
    return [...defaultFeatures, ...rootFeatures]
  },
})
