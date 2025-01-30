import type { GroupField } from 'payload'

export const propertyGallery: GroupField = {
  type: 'group',
  name: 'gallery',
  label: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      minRows: 1,
      maxRows: 24,
      admin: {
        description:
          'Up to 24 images; The first image will be used as the main image.',
      },
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      hasMany: false,
    },
  ],
}
