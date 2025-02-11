import type { Field } from 'payload'

export const categoriesField: Field = {
  name: 'categories',
  type: 'relationship',
  relationTo: ['blog-categories', 'property-types', 'listing-types'],
  hasMany: true,
  label: {
    singular: 'Category',
    plural: 'Categories',
  },
  admin: {
    position: 'sidebar',
  },
}
