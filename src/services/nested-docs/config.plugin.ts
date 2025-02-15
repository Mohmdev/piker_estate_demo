import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { NESTING_ENABLED_COLLECTIONS } from '@services/control-board'
import type { Plugin } from 'payload'

export const nestedDocsService: Plugin = nestedDocsPlugin({
  collections: NESTING_ENABLED_COLLECTIONS,
  generateLabel: (_, doc) => doc.title as string,
  generateURL: (docs) =>
    docs.reduce((url, doc) => `${url}/${doc.slug as string}`, ''),
})
