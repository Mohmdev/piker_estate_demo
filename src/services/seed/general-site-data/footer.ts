import type { Footer } from '@payload-types'

export const footerMock: Partial<Footer> = {
  _status: 'published',
  columns: [
    {
      label: 'Use Cases',
      navItems: [
        {
          link: {
            type: 'custom',
            url: '/use-cases/headless-cms',
            label: 'Content Management System',
          },
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
    {
      label: 'Developers',
      navItems: [
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/cloud',
            label: 'Nexweb Cloud',
          },
        },

        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/docs',
            label: 'Documentation',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/community-help',
            label: 'Community Help',
          },
        },
        {
          link: {
            type: 'custom',
            newTab: true,
            url: 'https://github.com/nexweb-studio/nexweb/discussions/categories/roadmap?discussions_q=category%3ARoadmap+',
            label: 'Roadmap',
          },
        },
        {
          link: {
            type: 'custom',
            newTab: true,
            url: 'https://github.com/nexweb-studio/nexweb/tree/main/templates',
            label: 'Templates',
          },
        },
        {
          link: {
            type: 'custom',
            newTab: true,
            url: 'https://github.com/nexweb-studio/nexweb/releases',
            label: 'Releases',
          },
        },
      ],
    },

    {
      label: 'Company',
      navItems: [
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/pricing',
            label: 'Pricing',
          },
        },

        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/talk-to-us',
            label: 'Talk to us',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/case-studies',
            label: 'Case Studies',
          },
        },

        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/partners',
            label: 'Partner With Us',
          },
        },

        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/partners',
            label: 'Find a Partner',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/blog',
            label: 'Blog',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/security',
            label: 'Security',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/compare',
            label: 'Compare',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/cloud-terms',
            label: 'Terms of Service',
          },
          id: '65e09da839c8d261526eba48',
        },
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/privacy',
            label: 'Privacy Policy',
          },
          id: '65e09db439c8d261526eba49',
        },
        {
          link: {
            type: 'custom',
            url: 'https://nexweb.studio/contact',
            label: 'Contact',
          },
        },
      ],
    },
  ],
}
