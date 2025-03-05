import type { GroupField } from 'payload'
import { galleryThumbnailField } from './thumbnail/config'

export const galleryGroup: GroupField = {
  type: 'group',
  name: 'gallery',
  label: false,
  // interfaceName: 'Gallery',
  admin: {
    components: {
      Cell: {
        path: '@CMS/real-estate/glossary/gallery/cell-thumbnail/client#GalleryCellThumbnail',
        clientProps: {
          cellData: 'gallery',
          collectionSlug: 'properties',
          field: 'gallery.images',
          link: true,
        },
      },
    },
  },
  fields: [
    {
      type: 'row',
      admin: {
        className: '*:grid *:grid-cols-[max-content_1fr] *:gap-10',
      },
      fields: [
        galleryThumbnailField('gallery.images'),
        {
          type: 'tabs',
          admin: {
            className: 'w-full m-0 [--gutter-h:0px]',
          },
          tabs: [
            {
              label: 'Images',
              fields: [
                {
                  name: 'images',
                  type: 'upload',
                  relationTo: 'media',
                  hasMany: true,
                  minRows: 1,
                  maxRows: 42,
                  displayPreview: true,
                  admin: {
                    description: 'Upload up to 24 high-quality images.',
                  },
                },
              ],
            },
            {
              label: 'Video / 360° Tour',
              fields: [
                {
                  name: 'videos',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Tour Video',
                  hasMany: true,
                  displayPreview: true,
                  minRows: 1,
                  maxRows: 6,
                  admin: {
                    description:
                      'Upload a walkthrough video (MP4 format recommended)',
                  },
                },
                {
                  name: 'virtualTourUrl',
                  type: 'text',
                  label: '360° Tour URL',
                  admin: {
                    description:
                      'External virtual tour link (e.g., Matterport, etc.)',
                    placeholder: 'https://',
                  },
                },
              ],
            },
            {
              label: 'Documents & Floor Plans',
              fields: [
                {
                  name: 'floorPlan',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Floor Plans',
                  hasMany: true,
                  admin: {
                    description:
                      'Upload floor plan documents (PDF format recommended)',
                  },
                },
                {
                  name: 'documents',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Additional Documents',
                  hasMany: true,
                  admin: {
                    description:
                      'Upload additional documents (brochures, certificates, etc.)',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
