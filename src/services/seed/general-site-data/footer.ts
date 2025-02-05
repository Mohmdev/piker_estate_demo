//@ts-nocheck
import type { Footer } from '@payload-types'

export const footerMock: Partial<Footer> = {
  columns: [
    {
      label: 'Use Cases',
      navItems: [
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '65aecafefa327a41786d6431',
                title: 'Headless CMS',
                slug: 'headless-cms',
                breadcrumbs: [
                  {
                    doc: '65dd43d561b3c803918e03d4',
                    url: '/use-cases',
                    label: 'Use Cases',
                    id: '66e9a8dc67e341109bc09e55',
                  },
                  {
                    doc: '65aecafefa327a41786d6431',
                    url: '/use-cases/headless-cms',
                    label: 'Headless CMS',
                    id: '66e9a8dc67e341109bc09e56',
                  },
                ],
              },
            },
            label: 'Content Management System',
          },
          id: '65e09c6139c8d261526eba36',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '65d8c8e5fa0a8be86415cde0',
                title: 'Enterprise App Builder ',
                slug: 'enterprise-app-builder',
                breadcrumbs: [
                  {
                    doc: '65dd43d561b3c803918e03d4',
                    url: '/use-cases',
                    label: 'Use Cases',
                    id: '679bd79ecb75e60003c710f5',
                  },
                  {
                    doc: '65d8c8e5fa0a8be86415cde0',
                    url: '/use-cases/enterprise-app-builder',
                    label: 'Enterprise App Builder ',
                    id: '679bd79ecb75e60003c710f6',
                  },
                ],
              },
            },
            label: 'Enterprise App Builder',
          },
          id: '65e09c7139c8d261526eba37',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '6515c182679a6536704e5988',
                title: 'Headless E-commerce',
                slug: 'headless-ecommerce',
                breadcrumbs: [
                  {
                    doc: '65dd43d561b3c803918e03d4',
                    url: '/use-cases',
                    label: 'Use Cases',
                    id: '66e9a8dd67e341109bc09e67',
                  },
                  {
                    doc: '6515c182679a6536704e5988',
                    url: '/use-cases/headless-ecommerce',
                    label: 'Headless E-commerce',
                    id: '66e9a8dd67e341109bc09e68',
                  },
                ],
              },
            },
            label: 'Headless E-Commerce',
          },
          id: '65e09c7e39c8d261526eba38',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '65d78062fa286280ee430772',
                title: 'Digital Asset Management',
                slug: 'digital-asset-management',
                breadcrumbs: [
                  {
                    doc: '65dd43d561b3c803918e03d4',
                    url: '/use-cases',
                    label: 'Use Cases',
                    id: '673b8d00f2827c000311de9e',
                  },
                  {
                    doc: '65d78062fa286280ee430772',
                    url: '/use-cases/digital-asset-management',
                    label: 'Digital Asset Management',
                    id: '673b8d00f2827c000311de9f',
                  },
                ],
              },
            },
            label: 'Digital Asset Management',
          },
          id: '65e09c8c39c8d261526eba39',
        },
      ],
      id: '65e09c5f39c8d261526eba35',
    },
    {
      label: 'Developers',
      navItems: [
        {
          link: {
            type: 'custom',
            reference: {
              relationTo: 'pages',
              value: '636c1a8b74e94056f1fada16',
            },
            url: 'https://payloadcms.com/new',
            label: 'Payload Cloud',
          },
          id: '65e09c9f39c8d261526eba3b',
        },
        {
          link: {
            type: 'custom',
            reference: null,
            url: '/docs/getting-started/what-is-payload',
            label: 'Documentation',
          },
          id: '65e09cb639c8d261526eba3c',
        },
        {
          link: {
            type: 'custom',
            reference: null,
            url: '/community-help',
            label: 'Community Help',
          },
          id: '65e09cd839c8d261526eba3d',
        },
        {
          link: {
            type: 'custom',
            newTab: true,
            reference: null,
            url: 'https://github.com/payloadcms/payload/discussions/categories/roadmap?discussions_q=category%3ARoadmap+',
            label: 'Roadmap',
          },
          id: '65e09cea39c8d261526eba3e',
        },
        {
          link: {
            type: 'custom',
            newTab: true,
            reference: null,
            url: 'https://github.com/payloadcms/payload/tree/main/templates',
            label: 'Templates',
          },
          id: '65e09d3039c8d261526eba3f',
        },
        {
          link: {
            type: 'custom',
            newTab: true,
            reference: null,
            url: 'https://github.com/payloadcms/payload/releases',
            label: 'Releases',
          },
          id: '6736575db51317b8269142a9',
        },
      ],
      id: '65e09c9939c8d261526eba3a',
    },
    {
      label: 'Company',
      navItems: [
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '6429f73faea011d1b4735131',
                title: 'Payload Cloud Pricing',
                slug: 'cloud-pricing',
                breadcrumbs: [
                  {
                    doc: '6429f73faea011d1b4735131',
                    url: '/cloud-pricing',
                    label: 'Payload Cloud Pricing',
                    id: '677c28f515dc880003820f8f',
                  },
                ],
              },
            },
            label: 'Pricing',
          },
          id: '65e09d5e39c8d261526eba42',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '6362714c8500b86c17b16b78',
                title: 'Talk to us',
                slug: 'talk-to-us',
                breadcrumbs: [
                  {
                    doc: '6362714c8500b86c17b16b78',
                    url: '/talk-to-us',
                    label: 'Talk to us',
                    id: '6740b4f18939b700031acbe9',
                  },
                ],
              },
            },
            label: 'Enterprise',
          },
          id: '65e09d7239c8d261526eba43',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '6363f57fe2d7a415f906bf57',
                title: 'Case Studies',
                slug: 'case-studies',
                breadcrumbs: [
                  {
                    doc: '6363f57fe2d7a415f906bf57',
                    url: '/case-studies',
                    label: 'Case Studies',
                    id: '6789328fc448e50003813b22',
                  },
                ],
              },
            },
            label: 'Case Studies',
          },
          id: '65e09d9239c8d261526eba46',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '65e62d33ce19cad022049171',
                title: 'Become a Payload Partner',
                slug: 'become-a-partner',
                breadcrumbs: [
                  {
                    doc: '65e62d33ce19cad022049171',
                    url: '/become-a-partner',
                    label: 'Become a Payload Partner',
                    id: '66e9a8da67e341109bc09e35',
                  },
                ],
              },
            },
            label: 'Partner With Us',
          },
          id: '65e09d7e39c8d261526eba44',
        },
        {
          link: {
            type: 'custom',
            reference: null,
            url: '/partners',
            label: 'Find a Partner',
          },
          id: '66d0912d92e684b1f3e1bed9',
        },
        {
          link: {
            type: 'custom',
            reference: null,
            url: '/blog',
            label: 'Blog',
          },
          id: '65e09d9b39c8d261526eba47',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '65b1beb3fa327a417876b63d',
                title: 'Security',
                slug: 'security',
                breadcrumbs: [
                  {
                    doc: '65b1beb3fa327a417876b63d',
                    url: '/security',
                    label: 'Security',
                    id: '66e9a8dc67e341109bc09e53',
                  },
                ],
              },
            },
            label: 'Security',
          },
          id: '65e76c53590a277ae5ad8cbb',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '636d5408969bcf4617bd7971',
                title: 'Compare',
                slug: 'compare',
                breadcrumbs: [
                  {
                    doc: '636d5408969bcf4617bd7971',
                    url: '/compare',
                    label: 'Compare',
                    id: '66e9a8df67e341109bc09e8d',
                  },
                ],
              },
            },
            label: 'Compare Payload',
          },
          id: '65e09d8939c8d261526eba45',
        },
        {
          link: {
            type: 'custom',
            reference: {
              relationTo: 'pages',
              value: {
                id: '636d859b0e6e763e9a571056',
                title: 'Terms',
                slug: 'terms',
                breadcrumbs: [
                  {
                    doc: '636d859b0e6e763e9a571056',
                    url: '/terms',
                    label: 'Terms',
                    id: '66e9a8de67e341109bc09e8b',
                  },
                ],
              },
            },
            url: '/cloud-terms',
            label: 'Terms of Service',
          },
          id: '65e09da839c8d261526eba48',
        },
        {
          link: {
            type: 'custom',
            reference: null,
            url: '/privacy',
            label: 'Privacy Policy',
          },
          id: '65e09db439c8d261526eba49',
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: {
                id: '636d818f0e6e763e9a56f09d',
                title: 'Contact',
                slug: 'contact',
                breadcrumbs: [
                  {
                    doc: '636d818f0e6e763e9a56f09d',
                    url: '/contact',
                    label: 'Contact',
                    id: '66e9a8de67e341109bc09e8c',
                  },
                ],
              },
            },
            label: 'Contact',
          },
          id: '65e8e2887a897c4ca1a59be5',
        },
      ],
      id: '65e09d5839c8d261526eba41',
    },
  ],
  globalType: 'footer',
  createdAt: '2022-11-04T18:46:31.302Z',
  updatedAt: '2025-01-10T18:02:25.516Z',
  id: '63655e0793374a39945c71e5',
}
