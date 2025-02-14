import type { GroupField } from 'payload'

export const propertyGallery: GroupField = {
  type: 'group',
  name: 'gallery',
  label: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
      minRows: 1,
      maxRows: 24,
      required: true,
      admin: {
        description:
          'Upload up to 24 high-quality images. The first image will be used as the main image.',
      },
    },
    {
      type: 'collapsible',
      label: 'Video / 360° Tour',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          label: 'Tour Video',
          admin: {
            description: 'Upload a walkthrough video (MP4 format recommended)',
          },
        },
        {
          name: 'virtualTourUrl',
          type: 'text',
          label: '360° Tour URL',
          admin: {
            description: 'External virtual tour link (e.g., Matterport, etc.)',
            placeholder: 'https://',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Documents & Floor Plans',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'floorPlan',
          type: 'upload',
          relationTo: 'media',
          label: 'Floor Plans',
          hasMany: true,
          admin: {
            description: 'Upload floor plan documents (PDF format recommended)',
          },
        },
        {
          name: 'propertyDocs',
          type: 'upload',
          relationTo: 'media',
          label: 'Additional Documents',
          hasMany: true,
          admin: {
            description:
              'Upload additional property documents (brochures, certificates, etc.)',
          },
        },
      ],
    },
  ],
}
