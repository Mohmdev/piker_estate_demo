import { GlobalSlug, PayloadRequest } from 'payload'

type Props = {
  global: GlobalSlug
  slug: string
  req: PayloadRequest
}

export const generateGlobalPreviewPath = ({ global, slug, req }: Props) => {
  const encodedParams = new URLSearchParams({
    slug,
    global,
    path: '/theme-editor',
    previewSecret: process.env.PREVIEW_SECRET || 'PREVIEW_KEY',
  })

  const isProduction =
    process.env.NODE_ENV === 'production' ||
    Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL)

  const protocol = isProduction ? 'https:' : req.protocol

  return `${protocol}//${req.host}/next/preview-global?${encodedParams.toString()}`
}
