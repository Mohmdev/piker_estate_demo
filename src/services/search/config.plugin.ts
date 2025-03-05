import { searchPlugin } from '@payloadcms/plugin-search'
import { SYNC_TO_SEARCH_ENABLED_COLLECTIONS } from '@services/control-board'
import { propertyOverrides } from '@services/search/properties/overrides'
import type { Plugin } from 'payload'
import { propertyBeforeSyncWithSearch } from './properties/beforeSync'

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
      defaultColumns: ['meta', 'title', 'taxonomies', 'updatedAt'],
    },
  },
})
