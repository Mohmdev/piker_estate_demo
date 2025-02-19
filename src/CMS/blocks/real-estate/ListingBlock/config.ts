import type { Block } from 'payload'
import { CardSettingsInterface } from '../glossary/config.CardSettingsInterface'
import { ViewSettingsInterface } from '../glossary/config.ViewSettingsInterface'

export const ListingBlock: Block = {
  slug: 'listingBlock',
  labels: {
    singular: 'Listing Block',
    plural: 'Listing Blocks',
  },
  interfaceName: 'ListingBlock',
  dbName: 'listingBlock',
  fields: [
    {
      label: 'Override Default Listings',
      name: 'listings',
      type: 'relationship',
      relationTo: 'properties',
      hasMany: true,
      minRows: 0,
      maxRows: 120,
      admin: {
        description:
          'Note: By default, the latest listings are displayed. This setting will override that behavior.',
      },
    },
    //
    ViewSettingsInterface,
    CardSettingsInterface,
  ],
}
