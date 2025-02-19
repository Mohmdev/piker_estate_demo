import { categoriesField } from '@CMS/fields/shared/categoriesField'
import { relatedDocsField } from '@CMS/fields/shared/relatedDocsField'
import { tagsField } from '@CMS/fields/shared/tagsField'
import { extendedLexical } from '@services/editor/extendedLexical'
import type { UnnamedTab } from 'payload'

export const MetaDataTab: UnnamedTab = {
  label: 'Metadata',
  fields: [
    {
      type: 'richText',
      name: 'description',
      label: false,
      editor: extendedLexical({
        enableToolbar: true,
        placeholder:
          "Press '/' or Select Text to see the list of available Tools and Commands.",
        hideGutter: true,
      }),
      admin: {
        description: 'Describe the property in a few sentences.',
        className: 'border-0 border-b-1 border-border pb-8',
      },
    },
    {
      type: 'checkbox',
      name: 'isFeatured',
      label: 'Featured Property',
      defaultValue: false,
      admin: {
        description: 'Show this property in featured sections',
      },
    },
    categoriesField,
    tagsField,
    relatedDocsField,
  ],
}
