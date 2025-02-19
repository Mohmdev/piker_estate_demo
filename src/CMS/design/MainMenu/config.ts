import { revalidateMainMenu } from '@CMS/_hooks/revalidateMainMenu'
import { isAdminOrEditor } from '@auth/access/isAdminOrEditor'
import { publishedOnly } from '@auth/access/publishedOnly'
import { link } from '@fields/link'
import { extendedLexical } from '@services/editor/extendedLexical'
import { getGlobalLivePreviewURL } from '@services/live-preview/getGlobalLivePreviewURL'
import { getGlobalPreviewURL } from '@services/live-preview/getGlobalPreviewURL'
import { isIncludedInSibling } from '@utils/siblingFieldCondition'
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
    livePreview: getGlobalLivePreviewURL('main-menu'),
    preview: getGlobalPreviewURL('main-menu'),
  },
  fields: [
    {
      labels: {
        singular: 'Navigation Group',
        plural: 'Navigation Groups',
      },
      name: 'navGroups',
      dbName: 'navGroups',
      type: 'array',
      admin: {
        components: {
          RowLabel: '@CMS/design/MainMenu/NavGroupRowLabel#NavGroupRowLabel',
        },
        initCollapsed: true,
      },
      fields: [
        {
          name: 'groupLabel',
          type: 'text',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'enableDirectLink',
              type: 'checkbox',
              admin: {
                description:
                  'If enabled, this group will link directly to the provided URL.',
              },
            },
            {
              name: 'enableDropdown',
              type: 'checkbox',
              admin: {
                description:
                  'If enabled, this group will display a dropdown menu with multiple options & links.',
              },
            },
          ],
        },
        {
          type: 'collapsible',
          admin: {
            condition: isIncludedInSibling('enableDirectLink', true),
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
          // Dropdown Config collapible
          type: 'collapsible',
          admin: {
            condition: isIncludedInSibling('enableDropdown', true),
          },
          fields: [
            {
              name: 'dscrpArea',
              label: 'Description Area',
              type: 'group',
              fields: [
                {
                  name: 'enable',
                  type: 'checkbox',
                  admin: {
                    description:
                      'If enabled, this group will display a dropdown menu with multiple options & links.',
                  },
                },
                {
                  type: 'collapsible',
                  label: 'Customize',
                  admin: {
                    condition: isIncludedInSibling('enable', true),
                  },
                  fields: [
                    {
                      name: 'text',
                      label: 'Group Description Area',
                      type: 'richText',
                      editor: extendedLexical(),
                      admin: {
                        description: 'Describe the group and its contents.',
                      },
                    },
                    {
                      name: 'links',
                      labels: {
                        singular: 'Additonal Link',
                        plural: 'Additonal Links',
                      },
                      type: 'array',
                      fields: [
                        link({
                          appearances: false,
                          overrides: {
                            label: false,
                          },
                        }),
                      ],
                      admin: {
                        description: 'Add links inside the description area.',
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: 'navItems',
              dbName: 'navItems',
              labels: {
                singular: 'Navigation Item',
                plural: 'Navigation Items',
              },
              type: 'array',
              admin: {
                components: {
                  RowLabel:
                    '@CMS/design/MainMenu/NavItemRowLabel#NavItemRowLabel',
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
                  label: 'Default Link',
                  type: 'group',
                  admin: {
                    condition: isIncludedInSibling('style', 'default'),
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
                  label: 'Featured Link',
                  type: 'group',
                  admin: {
                    condition: isIncludedInSibling('style', 'featured'),
                  },
                  fields: [
                    {
                      name: 'tag',
                      type: 'text',
                    },
                    {
                      name: 'label',
                      type: 'richText',
                      editor: extendedLexical(),
                      admin: {
                        description: 'Label for the featured link.',
                      },
                    },
                    {
                      name: 'links',
                      labels: {
                        singular: 'Additional Link',
                        plural: 'Additional Links',
                      },
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
                    condition: isIncludedInSibling('style', 'list'),
                  },
                  fields: [
                    {
                      name: 'tag',
                      type: 'text',
                    },
                    {
                      name: 'links',
                      labels: {
                        singular: 'List Link',
                        plural: 'List Links',
                      },
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
            condition: isIncludedInSibling('enableCta', true),
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
