import type { Footer, GlobalSetting, MainMenu } from '@payload-types'
import type {
  CollectionSlug,
  File,
  GlobalSlug,
  Payload,
  PayloadRequest,
} from 'payload'
import { fetchFileByURL } from '../fetchFile'
import { image1 } from './_images/image-1'
import { image2 } from './_images/image-2'
import { imageHero1 } from './_images/image-hero-1'
import { post1 } from './blog/post-1'
import { post2 } from './blog/post-2'
import { post3 } from './blog/post-3'
import { contactForm as contactFormData } from './contact/contact-form'
import { contact as contactPageData } from './contact/contact-page'
import { footerMock } from './footer'
import { home } from './home/home'
import { mainMenuMock } from './main-menu'

export const targetCollections: CollectionSlug[] = [
  'blog-categories',
  // 'media',
  'pages',
  'blog',
  'forms',
  'form-submissions',
  'search',
]

export const targetGlobals: GlobalSlug[] = ['main-menu', 'footer']

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')

  payload.logger.info(`— Clearing collections and globals...`)

  await Promise.all(
    targetGlobals.map((global) => {
      const globalCases = (() => {
        switch (global) {
          case 'footer':
            return { columns: [] } as unknown as Footer
          case 'main-menu':
            return {
              navGroups: [],
              menuCta: {
                enableCta: false, // has to be manually set to false
                link: {},
              },
            } as unknown as MainMenu
          case 'global-settings':
            return {
              siteIdentity: {},
              branding: {},
              contactInfo: {},
              globalSeo: {},
            } as unknown as GlobalSetting
          default:
            return {}
        }
      })()

      return payload.updateGlobal({
        slug: global,
        depth: 0,
        overrideLock: true,
        data: globalCases,
        context: {
          disableRevalidate: true,
        },
      })
    }),
  )

  await Promise.all(
    targetCollections.map((collection) =>
      payload.db.deleteMany({ collection, req, where: {} }),
    ),
  )

  await Promise.all(
    targetCollections
      .filter((collection) =>
        Boolean(payload.collections[collection].config.versions),
      )
      .map((collection) =>
        payload.db.deleteVersions({ collection, req, where: {} }),
      ),
  )

  payload.logger.info(`— Seeding demo author and user...`)

  await payload.delete({
    collection: 'users',
    depth: 0,
    where: {
      email: {
        equals: 'demo@webora.app',
      },
      username: {
        equals: 'weboraeditor',
      },
    },
  })

  payload.logger.info(`— Seeding media...`)

  const [image1Buffer, image2Buffer, image3Buffer, hero1Buffer] =
    await Promise.all([
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post1.webp',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post2.webp',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-post3.webp',
      ),
      fetchFileByURL(
        'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/main/templates/website/src/endpoints/seed/image-hero1.webp',
      ),
    ])

  const [
    demoAuthor,
    image1Doc,
    image2Doc,
    image3Doc,
    imageHomeDoc,
    technologyCategory,
    newsCategory,
    financeCategory,
    designCategory,
    softwareCategory,
    engineeringCategory,
  ] = await Promise.all([
    payload.create({
      collection: 'users',
      data: {
        firstName: 'Webora',
        lastName: 'Author',
        email: 'demo@webora.app',
        password: 'password',
        username: 'weboraeditor',
        role: 'editor',
      },
    }),
    payload.create({
      collection: 'media',
      data: image1,
      file: image1Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image2Buffer,
    }),
    payload.create({
      collection: 'media',
      data: image2,
      file: image3Buffer,
    }),
    payload.create({
      collection: 'media',
      data: imageHero1,
      file: hero1Buffer,
    }),

    payload.create({
      collection: 'blog-categories',
      data: {
        title: 'Technology',
        breadcrumbs: [
          {
            label: 'Technology',
            url: '/technology',
          },
        ],
      },
    }),

    payload.create({
      collection: 'blog-categories',
      data: {
        title: 'News',
        breadcrumbs: [
          {
            label: 'News',
            url: '/news',
          },
        ],
      },
    }),

    payload.create({
      collection: 'blog-categories',
      data: {
        title: 'Finance',
        breadcrumbs: [
          {
            label: 'Finance',
            url: '/finance',
          },
        ],
      },
    }),
    payload.create({
      collection: 'blog-categories',
      data: {
        title: 'Design',
        breadcrumbs: [
          {
            label: 'Design',
            url: '/design',
          },
        ],
      },
    }),

    payload.create({
      collection: 'blog-categories',
      data: {
        title: 'Software',
        breadcrumbs: [
          {
            label: 'Software',
            url: '/software',
          },
        ],
      },
    }),

    payload.create({
      collection: 'blog-categories',
      data: {
        title: 'Engineering',
        breadcrumbs: [
          {
            label: 'Engineering',
            url: '/engineering',
          },
        ],
      },
    }),
  ])

  let demoAuthorID: number | string = demoAuthor.id

  let image1ID: number | string = image1Doc.id
  let image2ID: number | string = image2Doc.id
  let image3ID: number | string = image3Doc.id
  let imageHomeID: number | string = imageHomeDoc.id

  if (payload.db.defaultIDType === 'text') {
    image1ID = `"${image1Doc.id}"`
    image2ID = `"${image2Doc.id}"`
    image3ID = `"${image3Doc.id}"`
    imageHomeID = `"${imageHomeDoc.id}"`
    demoAuthorID = `"${demoAuthorID}"`
  }

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedAt` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'blog',
    depth: 1,
    context: {
      disableRevalidate: true,
    },
    data: JSON.parse(
      JSON.stringify({
        ...post1,
        categories: [
          {
            relationTo: 'blog-categories',
            value: technologyCategory.id,
          },
          {
            relationTo: 'blog-categories',
            value: softwareCategory.id,
          },
        ],
      })
        .replace(/"\{\{IMAGE_1\}\}"/g, String(image1ID))
        .replace(/"\{\{IMAGE_2\}\}"/g, String(image2ID))
        .replace(/"\{\{AUTHOR\}\}"/g, String(demoAuthorID)),
    ),
  })

  const post2Doc = await payload.create({
    collection: 'blog',
    depth: 1,
    context: {
      disableRevalidate: true,
    },
    data: JSON.parse(
      JSON.stringify({
        ...post2,
        categories: [
          {
            relationTo: 'blog-categories',
            value: newsCategory.id,
          },
          {
            relationTo: 'blog-categories',
            value: designCategory.id,
          },
        ],
      })
        .replace(/"\{\{IMAGE_1\}\}"/g, String(image2ID))
        .replace(/"\{\{IMAGE_2\}\}"/g, String(image3ID))
        .replace(/"\{\{AUTHOR\}\}"/g, String(demoAuthorID)),
    ),
  })

  const post3Doc = await payload.create({
    collection: 'blog',
    depth: 1,
    context: {
      disableRevalidate: true,
    },
    data: JSON.parse(
      JSON.stringify({
        ...post3,
        categories: [
          {
            relationTo: 'blog-categories',
            value: financeCategory.id,
          },
          {
            relationTo: 'blog-categories',
            value: engineeringCategory.id,
          },
        ],
      })
        .replace(/"\{\{IMAGE_1\}\}"/g, String(image3ID))
        .replace(/"\{\{IMAGE_2\}\}"/g, String(image1ID))
        .replace(/"\{\{AUTHOR\}\}"/g, String(demoAuthorID)),
    ),
  })

  // update each post with related posts
  await payload.update({
    id: post1Doc.id,
    collection: 'blog',
    data: {
      relatedDocs: [
        { relationTo: 'blog', value: post2Doc.id },
        { relationTo: 'blog', value: post3Doc.id },
      ],
    },
  })
  await payload.update({
    id: post2Doc.id,
    collection: 'blog',
    data: {
      relatedDocs: [
        { relationTo: 'blog', value: post1Doc.id },
        { relationTo: 'blog', value: post3Doc.id },
      ],
    },
  })
  await payload.update({
    id: post3Doc.id,
    collection: 'blog',
    data: {
      relatedDocs: [
        { relationTo: 'blog', value: post1Doc.id },
        { relationTo: 'blog', value: post2Doc.id },
      ],
    },
  })

  payload.logger.info(`— Seeding contact form...`)

  const contactForm = await payload.create({
    collection: 'forms',
    depth: 0,
    data: JSON.parse(JSON.stringify(contactFormData)),
  })

  let contactFormID: number | string = contactForm.id

  if (payload.db.defaultIDType === 'text') {
    contactFormID = `"${contactFormID}"`
  }

  payload.logger.info(`— Seeding pages...`)

  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  const [_, contactPage] = await Promise.all([
    payload.create({
      collection: 'pages',
      depth: 1,
      data: JSON.parse(
        JSON.stringify(home)
          .replace(/"\{\{IMAGE_1\}\}"/g, String(imageHomeID))
          .replace(/"\{\{IMAGE_2\}\}"/g, String(image2ID)),
      ),
    }),
    payload.create({
      collection: 'pages',
      depth: 0,
      data: JSON.parse(
        JSON.stringify(contactPageData).replace(
          /"\{\{CONTACT_FORM_ID\}\}"/g,
          String(contactFormID),
        ),
      ),
    }),
  ])

  payload.logger.info(`— Seeding globals...`)

  await Promise.all([
    payload.updateGlobal({
      slug: 'main-menu',
      depth: 0,
      data: mainMenuMock,
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: footerMock,
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}
