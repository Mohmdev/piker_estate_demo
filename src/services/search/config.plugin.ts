import { searchPlugin } from '@payloadcms/plugin-search'
import { SYNC_TO_SEARCH_ENABLED_COLLECTIONS } from '@services/control-board'
import { beforeSyncWithSearch } from '@services/search/beforeSync'
import { searchFields } from '@services/search/fieldOverrides'

import type { Plugin } from 'payload'

export const searchService: Plugin = searchPlugin({
  collections: [...SYNC_TO_SEARCH_ENABLED_COLLECTIONS],
  beforeSync: beforeSyncWithSearch,
  searchOverrides: {
    fields: ({ defaultFields }) => {
      return [...defaultFields, ...searchFields]
    },
    admin: {
      group: 'Resources',
    },
  },
})
