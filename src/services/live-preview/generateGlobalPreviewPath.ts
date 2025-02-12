import { GlobalSlug } from 'payload'

type Props = {
  global: GlobalSlug
  slug: string
}

export const generateGlobalPreviewPath = ({ global, slug }: Props) => {
  // No need for a prefix map. All globals go to /theme-editor
  const encodedParams = new URLSearchParams({
    slug,
    global,
    path: '/theme-editor',
    previewSecret: process.env.PREVIEW_SECRET || 'DUNE_3',
  })

  const url = `/next/preview-global?${encodedParams.toString()}`

  return url
}
