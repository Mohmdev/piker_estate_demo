import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import { revalidateDelete, revalidatePage } from '@CMS/_hooks/revalidatePage'
import { Archive } from '@CMS/blocks/ArchiveBlock/config'
import { CallToAction } from '@CMS/blocks/CallToAction/config'
import { Content } from '@CMS/blocks/Content/config'
import { FormBlock } from '@CMS/blocks/Form/config'
import { MediaBlock } from '@CMS/blocks/MediaBlock/config'
import { ListingArchiveBlock } from '@CMS/blocks/real-estate/ListingArchive/config'
import { ListingBlock } from '@CMS/blocks/real-estate/ListingBlock/config'
import { authorsField } from '@CMS/fields/shared/authorsField'
import { noindexField } from '@CMS/fields/shared/noindexField'
import { populateAuthorsField } from '@CMS/fields/shared/populatedAuthorsField'
import { publishedAtField } from '@CMS/fields/shared/publishedAtField'
import { seoTab } from '@CMS/fields/shared/seoTab'
import { slugField } from '@CMS/fields/shared/slug/config'
import { tagsField } from '@CMS/fields/shared/tagsField'
import { herosInterface } from '@CMS/heros/config.heros'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { isAdminOrSelf } from '@auth/access/isAdminOrSelf'
import { publishedOnly } from '@auth/access/publishedOnly'
import { getCollectionLivePreviewURL } from '@services/live-preview/getCollectionLivePreviewURL'
import { getCollectionPreviewURL } from '@services/live-preview/getCollectionPreviewURL'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    read: publishedOnly,
    create: isAdminOrEditor,
    delete: isAdminOrSelf,
    update: isAdminOrSelf,
    readVersions: isAdminOrEditor,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: [
      'title',
      'populatedAuthors',
      'slug',
      'updatedAt',
      'createdAt',
    ],
    livePreview: getCollectionLivePreviewURL('pages'),
    preview: getCollectionPreviewURL('pages'),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      index: true,
      unique: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero Section',
          fields: [herosInterface],
        },
        {
          label: 'Blocks',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                ListingBlock,
                ListingArchiveBlock,
              ],
              admin: {
                initCollapsed: false,
              },
            },
          ],
        },
        seoTab,
      ],
    },
    noindexField,
    tagsField,
    authorsField,
    populateAuthorsField,
    publishedAtField,
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDelete],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
