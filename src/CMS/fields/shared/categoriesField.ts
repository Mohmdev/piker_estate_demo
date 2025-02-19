import { SEARCH_CATEGORIES } from '@services/control-board'
import type { Field } from 'payload'

export const categoriesField: Field = {
  name: 'categories',
  label: 'Categories',
  type: 'relationship',
  relationTo: SEARCH_CATEGORIES,
  hasMany: true,
  admin: {
    position: 'sidebar',
    description:
      'General categorization for the built-in Search Engine and filtering purposes',
  },
}
