import { populateAuthors } from '@CMS/_hooks/populateAuthors'
import { populatePublishedAt } from '@CMS/_hooks/populatePublishedAt'
import { revalidateDelete } from '@CMS/_hooks/revalidateProperty'
import { revalidateProperty } from '@CMS/_hooks/revalidateProperty'
import { authorsField } from '@CMS/fields/shared/authorsField'
import { noindexField } from '@CMS/fields/shared/noindexField'
import { populateAuthorsField } from '@CMS/fields/shared/populatedAuthorsField'
import { publishedAtField } from '@CMS/fields/shared/publishedAtField'
import { seoTab } from '@CMS/fields/shared/seoTab'
import { slugField } from '@CMS/fields/shared/slug/config'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { isAdminOrSelf } from '@auth/access/isAdminOrSelf'
import { publishedOnly } from '@auth/access/publishedOnly'
import { getCollectionLivePreviewURL } from '@services/live-preview/getCollectionLivePreviewURL'
import { getCollectionPreviewURL } from '@services/live-preview/getCollectionPreviewURL'
import type { CollectionConfig } from 'payload'
import { FinanceInterface } from './glossary/interface.finance'
import { LocationInterface } from './glossary/interface.location'
import { SpecificationsInterface } from './glossary/interface.specifications'
import { EssentialInformationTab } from './glossary/tab.essentialInformation'
import { MetaDataTab } from './glossary/tab.metaData'

export const Properties: CollectionConfig<'properties'> = {
  slug: 'properties',
  labels: {
    singular: 'Property',
    plural: 'Properties',
  },
  access: {
    read: publishedOnly,
    create: isAdminOrEditor,
    delete: isAdminOrSelf,
    update: isAdminOrSelf,
  },
  admin: {
    group: 'Real Estate',
    useAsTitle: 'title',
    defaultColumns: ['gallery', 'price', 'title', '_status', 'updatedAt'],
    preview: getCollectionPreviewURL('properties'),
    livePreview: getCollectionLivePreviewURL('properties'),
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Property Title',
      required: true,
      index: true,
      unique: true,
      admin: {
        placeholder:
          'e.g. Luxury Penthouse in Downtown, Cozy Cottage in the Suburbs',
      },
    },
    {
      type: 'tabs',
      tabs: [
        EssentialInformationTab,
        SpecificationsInterface,
        LocationInterface,
        FinanceInterface,
        MetaDataTab,
        seoTab,
      ],
    },
    noindexField,
    authorsField,
    populateAuthorsField,
    publishedAtField,
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateProperty],
    afterDelete: [revalidateDelete],
    afterRead: [populateAuthors],
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
