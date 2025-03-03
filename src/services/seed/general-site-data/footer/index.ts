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
      label: 'Resources',
      navItems: [
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/pricing',
            label: 'Pricing',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/case-studies',
            label: 'Case Studies',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/blog',
            label: 'Blog',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/compare',
            label: 'Compare',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/security',
            label: 'Security',
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
            url: 'https://webora.app/talk-to-us',
            label: 'Talk to us',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/partners',
            label: 'Partner With Us',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/partners',
            label: 'Find a Partner',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/contact',
            label: 'Contact',
          },
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/cloud-terms',
            label: 'Terms of Service',
          },
          id: '65e09da839c8d261526eba48',
        },
        {
          link: {
            type: 'custom',
            url: 'https://webora.app/privacy',
            label: 'Privacy Policy',
          },
          id: '65e09db439c8d261526eba49',
        },
      ],
    },
  ],
}
