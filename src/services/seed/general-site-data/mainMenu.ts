import type { MainMenu } from '@payload-types'

export const mainMenuMock: Partial<MainMenu> = {
  _status: 'published',
  navGroups: [
    // Tab 1
    {
      groupLabel: 'Product',
      enableDirectLink: false,
      enableDropdown: true,
      dscrpArea: {
        enable: true,
        text: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Simplify your stack and build ',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                  {
                    mode: 'normal',
                    text: 'anything',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 1,
                    version: 1,
                  },
                  {
                    mode: 'normal',
                    text: '. Or ',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                  {
                    mode: 'normal',
                    text: 'everything',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 1,
                    version: 1,
                  },
                  {
                    mode: 'normal',
                    text: '.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
            ],
            direction: 'ltr',
          },
        },
        links: [
          {
            link: {
              type: 'custom',
              url: '/talk-to-us',
              label: 'Schedule a Demo',
            },
          },
        ],
      },
      navItems: [
        {
          style: 'list',
          defaultLink: {
            link: {
              type: 'custom',
              url: '/use-cases/headless-cms',
              label: 'Content Management System',
            },
            description:
              'Create with a minimal, powerful editing experience. Extend effortlessly.',
          },
          ftrdLink: {
            links: [],
          },
          listLinks: {
            tag: 'USE CASES',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/use-cases/headless-cms',
                  label: 'Headless CMS',
                },
                id: '67225603fdb03a0003f7b445',
              },
              {
                link: {
                  type: 'custom',
                  url: '/use-cases/enterprise-app-builder',
                  label: 'Enterprise App Builder',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/use-cases/headless-ecommerce',
                  label: 'Headless E-Commerce',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/use-cases/digital-asset-management',
                  label: 'Digital Asset Management',
                },
              },
            ],
          },
        },
        {
          style: 'list',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            links: [],
          },
          listLinks: {
            tag: 'FEATURES',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/multi-tenancy',
                  label: 'Multi-Tenancy',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/white-label-cms-admin-panel',
                  label: 'White Label',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/localization',
                  label: 'Localization',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/access-control',
                  label: 'Access Control',
                },
              },
              {
                link: {
                  type: 'custom',
                  reference: null,
                  url: '/headless-cms-auth',
                  label: 'Auth',
                },
              },
            ],
          },
        },
        {
          style: 'featured',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            tag: 'CASE STUDIES',
            label: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'See what others are building with ',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: 'Payload',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: '.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/case-studies',
                  label: 'Browse Case Studies',
                },
              },
            ],
          },
          listLinks: {
            links: [],
          },
        },
      ],
    },
    // Tab 2
    {
      groupLabel: 'Why Payload',
      enableDropdown: true,
      enableDirectLink: false,
      // link: {
      //   type: 'reference',
      //   reference: null,
      // },
      dscrpArea: {
        enable: true,
        text: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Build tomorrow’s web with a modern solution you truly own.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
            ],
            direction: 'ltr',
          },
        },
        links: [],
      },
      navItems: [
        {
          style: 'list',
          defaultLink: {
            link: {
              type: 'custom',
              url: '/marketers',
              label: 'For Marketing Teams',
            },
            description:
              'Advanced features like Visual Editing and Live Preview are giving a head back to the headless CMS.',
          },
          ftrdLink: {
            links: [],
          },
          listLinks: {
            tag: 'PAYLOAD IS FOR',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/developers',
                  label: 'Developers',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/marketers',
                  label: 'Marketing teams',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/enterprise-companies',
                  label: 'Enterprise companies',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/agencies-consultancies',
                  label: 'Agencies & Consultancies',
                },
              },
            ],
          },
        },
        {
          style: 'list',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            links: [],
          },
          listLinks: {
            tag: 'COMPARE PAYLOAD',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/compare',
                  label: 'Payload vs WordPress',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/compare/contentful',
                  label: 'Payload vs Contentful',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/compare/strapi',
                  label: 'Payload vs Strapi',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/compare/directus',
                  label: 'Payload vs Directus',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/compare/directus',
                  label: 'Payload vs Directus',
                },
              },
            ],
          },
        },
        {
          style: 'featured',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            tag: 'AGENCY TESTIMONIAL',
            label: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,
                    children: [
                      {
                        mode: 'normal',
                        text: '"',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: 'Payload',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: ' has transformed the way our clients manage content. It\'s an indispensable tool for any modern agency."',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/become-a-partner',
                  label: 'Become a Partner',
                },
              },
              {
                link: {
                  type: 'custom',
                  reference: null,
                  url: '/partners',
                  label: 'Find a Partner',
                },
              },
            ],
          },
          listLinks: {
            links: [],
          },
        },
      ],
    },
    // Tab 3
    {
      groupLabel: 'Developers',
      enableDirectLink: false,
      enableDropdown: true,
      // link: {
      //   type: 'custom',
      //   url: '/developers',
      // },
      dscrpArea: {
        enable: true,
        text: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,

            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    mode: 'normal',
                    text: 'Code-based nature means you can build on top of it to power anything.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
            ],
            direction: 'ltr',
          },
        },
        links: [],
      },
      navItems: [
        {
          style: 'list',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            links: [],
          },
          listLinks: {
            tag: 'Resources',
            links: [
              {
                link: {
                  type: 'custom',
                  reference: null,
                  url: '/docs',
                  label: 'Documentation',
                },
              },
              {
                link: {
                  type: 'custom',
                  newTab: true,
                  reference: null,
                  url: 'https://github.com/payloadcms/payload/tree/main/examples',
                  label: 'Examples',
                },
              },
              {
                link: {
                  type: 'custom',
                  newTab: true,
                  reference: null,
                  url: 'https://github.com/payloadcms/payload/tree/main/templates',
                  label: 'Templates',
                },
              },
              {
                link: {
                  type: 'custom',
                  newTab: true,
                  reference: null,
                  url: 'https://github.com/payloadcms/payload',
                  label: 'GitHub',
                },
              },
              {
                link: {
                  type: 'custom',
                  newTab: true,
                  reference: null,
                  url: 'https://github.com/payloadcms/payload/releases',
                  label: 'Releases',
                },
              },
              {
                link: {
                  type: 'custom',
                  reference: null,
                  url: '/blog',
                  label: 'Blog',
                },
              },
            ],
          },
        },
        {
          style: 'list',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            links: [],
          },
          listLinks: {
            tag: 'Community',
            links: [
              {
                link: {
                  type: 'custom',
                  newTab: true,
                  reference: null,
                  url: 'https://github.com/payloadcms/payload/discussions/categories/roadmap',
                  label: 'Roadmap',
                },
              },
              {
                link: {
                  type: 'custom',
                  newTab: true,
                  reference: null,
                  url: 'https://discord.com/invite/r6sCXqVk3v',
                  label: 'Discord',
                },
              },
              {
                link: {
                  type: 'custom',
                  reference: null,
                  url: '/community-help',
                  label: 'Community Help',
                },
              },
            ],
          },
        },
        {
          style: 'featured',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            tag: 'Payload Cloud',
            label: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,

                    children: [
                      {
                        mode: 'normal',
                        text: 'Deploy your entire stack in one place with ',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: 'Payload',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },

                      {
                        mode: 'normal',
                        text: ' Cloud.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            links: [
              {
                link: {
                  type: 'custom',
                  reference: null,
                  url: '/login',
                  label: 'Login',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/cloud-pricing',
                  label: 'Cloud Pricing',
                },
              },
            ],
          },
          listLinks: {
            links: [],
          },
        },
      ],
    },
    // Tab 4
    {
      groupLabel: 'Enterprise',
      enableDirectLink: false,
      enableDropdown: true,
      // link: {
      //   type: 'custom',
      //   url: '/enterprise',
      // },
      dscrpArea: {
        enable: true,
        text: {
          root: {
            type: 'root',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'paragraph',
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'It’s time to take back your content infrastructure.',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                textStyle: '',
                textFormat: 0,
              },
            ],
            direction: 'ltr',
          },
        },
        links: [
          {
            link: {
              type: 'custom',
              url: 'https://demo.payloadcms.com/',
              label: 'Schedule a Demo',
            },
          },
        ],
      },
      navItems: [
        // Tab 4 - Item 1
        {
          style: 'list',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            links: [],
          },
          listLinks: {
            tag: 'Enterprise Features',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/enterprise/sso',
                  label: 'SSO',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/enterprise/ai-auto-embedding',
                  label: 'AI Auto-Embedding',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/enterprise/publishing-workflows',
                  label: 'Publishing Workflows',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/visual-editor',
                  label: 'Visual Editor',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/static-ab-testing',
                  label: 'Static A/B testing',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/enterprise/ai-features',
                  label: 'AI features',
                },
              },
            ],
          },
        },
        // Tab 4 - Item 2
        {
          style: 'list',
          defaultLink: {
            link: {
              type: 'reference',
              reference: null,
              label: '',
            },
          },
          ftrdLink: {
            links: [],
          },
          listLinks: {
            tag: 'Customer Stories',
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/case-studies',
                  label: 'Microsoft',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/case-studies',
                  label: 'ASICS',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/case-studies',
                  label: 'Blue Origin',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/case-studies',
                  label: 'Hello Bello',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: '/case-studies',
                  label: 'Tekton',
                },
              },
            ],
          },
        },
        // Tab 4 - Item 3
        {
          style: 'featured',
          defaultLink: {
            link: {
              type: 'custom',
              url: '',
              label: '',
            },
          },
          ftrdLink: {
            tag: 'Featured Customer Story',
            label: {
              root: {
                type: 'root',
                format: '',
                indent: 0,
                version: 1,

                children: [
                  {
                    type: 'paragraph',
                    format: '',
                    indent: 0,
                    version: 1,
                    children: [
                      {
                        mode: 'normal',
                        text: 'Microsoft chose ',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: 'Payload',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 1,
                        version: 1,
                      },
                      {
                        mode: 'normal',
                        text: ' to tell the world about AI.',
                        type: 'text',
                        style: '',
                        detail: 0,
                        format: 0,
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    textStyle: '',
                    textFormat: 0,
                  },
                ],
                direction: 'ltr',
              },
            },
            links: [
              {
                link: {
                  type: 'custom',
                  url: '/case-studies/microsoft',
                  label: 'Read the case study',
                },
              },
              {
                link: {
                  type: 'custom',
                  url: 'case-studies',
                  label: 'Browse all',
                },
              },
            ],
          },
          listLinks: {
            links: [],
          },
        },
      ],
    },
    // Tab 5
    {
      groupLabel: 'Search',
      enableDirectLink: true,
      enableDropdown: false,
      link: {
        type: 'custom',
        newTab: false,
        reference: null,
        url: '/search',
      },
      // dscrpArea: {},
      // navItems: [],
    },
  ],
  menuCta: {
    enableCta: true,
    link: {
      type: 'custom',
      url: '/contact',
      reference: null,
      label: 'Schedule a Demo',
      newTab: true,
    },
  },
}
