import {
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Config } from 'payload'

interface ExtendedLexicalOptions {
  enableToolbar?: boolean
  placeholder?: string
  hideGutter?: boolean
}

export const extendedLexical = (
  options: ExtendedLexicalOptions = {
    enableToolbar: false,
    placeholder: undefined,
    hideGutter: true,
  },
): Config['editor'] =>
  lexicalEditor({
    admin: {
      placeholder: options.placeholder,
      hideGutter: options.hideGutter,
    },
    features: ({ defaultFeatures, rootFeatures }) => {
      const features = [...defaultFeatures, ...rootFeatures]

      if (options.enableToolbar) {
        features.push(FixedToolbarFeature())
      }

      return features
    },
  })
