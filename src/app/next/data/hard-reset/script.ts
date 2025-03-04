import type { Footer, GlobalSetting, MainMenu } from '@payload-types'
import { Payload } from 'payload'
import type { CollectionSlug, GlobalSlug, PayloadRequest } from 'payload'

const collections: CollectionSlug[] = [
  'search',
  'media',
  'assets',
  'blog-categories',
  'tags',
  'payload-jobs',
  'payload-locked-documents',
  'payload-preferences',
  'redirects',
  'pages',
  'blog',
  'forms',
  'form-submissions',
  'classifications',
  'properties',
  'projects',
]

const globals: GlobalSlug[] = ['footer', 'main-menu', 'global-settings']

export async function clearDBScript({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> {
  try {
    payload.logger.info('↪ Script initiated')

    payload.logger.info(`— Clearing Globals...`)

    // This complexity is due to the fact that enableCta is true by default,
    // and it needs special handling.
    await Promise.all(
      globals.map((global) => {
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

    payload.logger.info(`— Clearing Collections...`)

    await Promise.all(
      collections.map((collection) =>
        payload.db.deleteMany({ collection, req, where: {} }),
      ),
    )

    payload.logger.info(`— Clearing CollectionVersions...`)

    await Promise.all(
      collections
        .filter((collection) =>
          Boolean(payload.collections[collection].config.versions),
        )
        .map((collection) =>
          payload.db.deleteVersions({ collection, req, where: {} }),
        ),
    )

    payload.logger.info('✓ Successfully cleared all data')
  } catch (error) {
    payload.logger.info(`Script failed. - ${error}`)
    throw error
  }
}
