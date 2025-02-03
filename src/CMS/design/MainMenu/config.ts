import { revalidateMainMenu } from '@CMS/_hooks/revalidateMainMenu'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { publishedOnly } from '@auth/access/publishedOnly'
import { link } from '@fields/link'
import { generateGlobalPreviewPath } from '@services/live-preview/generateGlobalPreviewPath'
import { getGlobalPreviewUrl } from '@services/live-preview/getPreviewUrl'
import type { GlobalConfig } from 'payload'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: publishedOnly,
    update: isAdminOrEditor,
    readVersions: isAdminOrEditor,
    readDrafts: isAdminOrEditor,
  },
  admin: {
    livePreview: {
      url: ({ req }) => {
        return generateGlobalPreviewPath({
          global: 'main-menu',
          slug: 'main-menu',
          req,
        })
      },
    },
    preview: getGlobalPreviewUrl('main-menu'),
  },
  fields: [
    {
      name: 'tabs',
      type: 'array',
      admin: {
        components: {
          RowLabel: '@CMS/design/MainMenu/TabsRowLabel#TabsRowLabel',
        },
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'enableDirectLink',
              type: 'checkbox',
            },
            {
              name: 'enableDropdown',
              type: 'checkbox',
            },
          ],
        },
        {
          type: 'collapsible',
          admin: {
            condition: (_, siblingData) => siblingData.enableDirectLink,
          },
          fields: [
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
          label: 'Direct Link',
        },
        {
          type: 'collapsible',
          admin: {
            condition: (_, siblingData) => siblingData.enableDropdown,
          },
          fields: [
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'descriptionLinks',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                  overrides: {
                    label: false,
                  },
                }),
              ],
            },
            {
              name: 'items',
              type: 'array',
              admin: {
                components: {
                  RowLabel: '@CMS/design/MainMenu/ItemsRowLabel#ItemsRowLabel',
                },
              },
              fields: [
                {
                  name: 'style',
                  type: 'select',
                  defaultValue: 'default',
                  options: [
                    {
                      label: 'Default',
                      value: 'default',
                    },
                    {
                      label: 'Featured',
                      value: 'featured',
                    },
                    {
                      label: 'List',
                      value: 'list',
                    },
                  ],
                },
                {
                  name: 'defaultLink',
                  type: 'group',
                  admin: {
                    condition: (_, siblingData) =>
                      siblingData.style === 'default',
                  },
                  fields: [
                    link({
                      appearances: false,
                      overrides: {
                        label: false,
                      },
                    }),
                    {
                      name: 'description',
                      type: 'textarea',
                    },
                  ],
                },
                {
                  name: 'ftrdLink',
                  type: 'group',
                  admin: {
                    condition: (_, siblingData) =>
                      siblingData.style === 'featured',
                  },
                  fields: [
                    {
                      name: 'tag',
                      type: 'text',
                    },
                    {
                      name: 'label',
                      type: 'richText',
                    },
                    {
                      name: 'links',
                      type: 'array',
                      fields: [
                        link({
                          appearances: false,
                          overrides: {
                            label: false,
                          },
                        }),
                      ],
                    },
                  ],
                },
                {
                  name: 'listLinks',
                  type: 'group',
                  admin: {
                    condition: (_, siblingData) => siblingData.style === 'list',
                  },
                  fields: [
                    {
                      name: 'tag',
                      type: 'text',
                    },
                    {
                      name: 'links',
                      type: 'array',
                      fields: [
                        link({
                          appearances: false,
                          overrides: {
                            label: false,
                          },
                        }),
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          label: 'Dropdown Menu',
        },
      ],
      label: 'Main Menu Items',
    },
    {
      label: 'Call to Action Button',
      type: 'group',
      name: 'menuCta',

      fields: [
        {
          name: 'enableCta',
          type: 'checkbox',
          label: 'Enable Button',
          defaultValue: true,
        },
        {
          type: 'collapsible',
          label: 'Button Link',
          admin: {
            condition: (_, siblingData) => siblingData.enableCta,
          },
          fields: [
            link({
              appearances: false,
              overrides: {
                label: false,
              },
            }),
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateMainMenu],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    max: 50,
  },
}
