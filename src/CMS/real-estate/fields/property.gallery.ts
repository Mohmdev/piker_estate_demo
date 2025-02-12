import type { GroupField } from 'payload'

export const propertyGallery: GroupField = {
  type: 'group',
  name: 'gallery',
  label: 'Media Gallery',
  admin: {
    description: 'Upload and manage property images and virtual tours',
  },
  fields: [
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      minRows: 1,
      maxRows: 24,
      required: true,
      admin: {
        description:
          'Upload up to 24 high-quality images (min 1200x800px recommended)',
      },
    },
    {
      type: 'group',
      name: 'mainImage',
      label: 'Main Image Settings',
      admin: {
        description: 'Configure the primary image display',
      },
      fields: [
        {
          name: 'useFirstImage',
          type: 'checkbox',
          label: 'Use First Image as Main',
          defaultValue: true,
          admin: {
            description:
              'Automatically use the first image as the main property image',
          },
        },
        {
          name: 'mainImageIndex',
          type: 'number',
          label: 'Custom Main Image',
          admin: {
            description: 'Select which image to use as main (1-24)',
            condition: (_data, siblingData) => !siblingData?.useFirstImage,
          },
          min: 1,
          max: 24,
        },
      ],
    },
    {
      type: 'group',
      name: 'virtualTour',
      label: 'Virtual Tour',
      admin: {
        description: 'Add virtual tour content',
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
      type: 'group',
      name: 'documents',
      label: 'Property Documents',
      admin: {
        description: 'Upload relevant property documents',
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
