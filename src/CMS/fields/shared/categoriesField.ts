import type { Field } from 'payload'

export const categoriesField: Field = {
  name: 'categories',
  label: 'Categories',
  type: 'relationship',
  relationTo: [
    'blog-categories',
    'classifications',
    'amenities',
    'contracts',
    'availability',
  ],
  hasMany: true,
  admin: {
    position: 'sidebar',
    description:
      'Setting categories helps the built-in Search Engine within the Software to find relevant content',
  },
}
