import type { UIField } from 'payload'

type ThumbnailUrl = (
  fieldToUse?: string,
  overrides?: {
    thumbnailOverrides?: Partial<UIField>
  },
  description?: string,
) => UIField

export const galleryThumbnailField: ThumbnailUrl = (
  fieldToUse = 'gallery.images',
  overrides = {},
  description = 'The first image will be used as the main image.',
) => {
  const { thumbnailOverrides } = overrides

  const componentConfig: UIField = {
    name: 'galleryThumbnail',
    type: 'ui',
    label: 'Gallery Thumbnail',
    ...(thumbnailOverrides || {}),
    admin: {
      position: 'sidebar',
      ...(thumbnailOverrides?.admin || {}),
      components: {
        Field: {
          path: '@CMS/real-estate/glossary/gallery/thumbnail/client#GalleryThumbnail',
          clientProps: {
            fieldToUse,
            description,
          },
        },
      },
      // className: 'p-0 m-0',
    },
  }

  return componentConfig
}
