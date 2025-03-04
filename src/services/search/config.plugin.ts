import { searchPlugin } from '@payloadcms/plugin-search'
import { SYNC_TO_SEARCH_ENABLED_COLLECTIONS } from '@services/control-board'
import { propertyOverrides } from '@services/search/propertyOverrides'
import type { Plugin } from 'payload'
import { propertyBeforeSyncWithSearch } from './propertybeforeSync'

export const searchService: Plugin = searchPlugin({
  collections: [...SYNC_TO_SEARCH_ENABLED_COLLECTIONS],
  // beforeSync: beforeSyncWithSearch,
  beforeSync: propertyBeforeSyncWithSearch,
  searchOverrides: {
    fields: ({ defaultFields }) => {
      return [
        ...defaultFields,
        //  ...searchFields
        ...propertyOverrides,
      ]
    },
    admin: {
      group: 'Resources',
    },
  },
})
