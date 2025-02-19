import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  type LinkFields,
  ParagraphFeature,
  UnderlineFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Config, type TextFieldSingleValidation } from 'payload'

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: () => {
    return [
      ParagraphFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      LinkFeature({
        enabledCollections: ['pages', 'blog', 'properties'],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ('name' in field && field.name === 'url') return false
            return true
          })

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: (_data, siblingData) =>
                  siblingData?.linkType !== 'internal',
              },
              validate: ((value, options) => {
                if (
                  (options?.siblingData as LinkFields)?.linkType === 'internal'
                ) {
                  return true // no validation needed, as no url should exist for internal links
                }
                return value ? true : 'URL is required'
              }) as TextFieldSingleValidation,
            },
          ]
        },
      }),
    ]
  },
})
