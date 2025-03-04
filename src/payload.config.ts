import path from 'path'
import { fileURLToPath } from 'url'
import { Banner } from '@CMS/blocks/Banner/config'
import { CallToAction } from '@CMS/blocks/CallToAction/config'
import { Code } from '@CMS/blocks/Code/config'
import { Content } from '@CMS/blocks/Content/config'
import { FormBlock } from '@CMS/blocks/Form/config'
import { MediaBlock } from '@CMS/blocks/MediaBlock/config'
import { BlogArchive } from '@CMS/blocks/archive-blocks/blog/config'
import { ListingArchiveBlock } from '@CMS/blocks/archive-blocks/real-estate/ListingArchiveBlock/config'
import { ListingBlock } from '@CMS/blocks/archive-blocks/real-estate/ListingBlock/config'
import { UniversalArchive } from '@CMS/blocks/archive-blocks/universal/config'
import { Footer } from '@CMS/design/Footer/config'
import { GlobalSettings } from '@CMS/design/GlobalSettings/config'
import { MainMenu } from '@CMS/design/MainMenu/config'
import { Blog } from '@CMS/marketing/config.Blog'
import { BlogCategories } from '@CMS/marketing/config.BlogCategories'
import { Pages } from '@CMS/marketing/config.Pages'
import { Tags } from '@CMS/marketing/config.Tags'
import { Projects } from '@CMS/real-estate/config.Projects'
import { Properties } from '@CMS/real-estate/config.Properties'
import { Amenities } from '@CMS/real-estate/config.amenities'
import { Availability } from '@CMS/real-estate/config.availability'
import { Classifications } from '@CMS/real-estate/config.classifications'
import { Contracts } from '@CMS/real-estate/config.contracts'
import { Users } from '@auth/Users/config'
import { getServerSideURL } from '@data/getURL'
import { adminConfig } from '@services/admin/config'
import { collectionGroup, globalGroup } from '@services/admin/groupContent'
import { vercelPostgres } from '@services/database/config.vercelPostgres'
import { defaultLexical } from '@services/editor/defaultLexical'
import { emailAdapter } from '@services/email/config'
import { formBuilderService } from '@services/form-builder/config.plugin'
import { nestedDocsService } from '@services/nested-docs/config.plugin'
import { redirectsPluginConfig } from '@services/redirects/config.plugin'
import { scheduledJobsService } from '@services/scheduled-jobs/config'
import { searchService } from '@services/search/config.plugin'
import { seoService } from '@services/seo/config.plugin'
import { Assets } from '@services/storage/Assets/config.collection'
import { Media } from '@services/storage/Media/config.collection'
import { UserPhotos } from '@services/storage/UserPhotos/config.collection'
import { vercelBlob } from '@services/storage/config.plugin.vercelBlob'
import { buildConfig } from 'payload'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  collections: [
    ...collectionGroup('Real Estate', [Projects, Properties, Classifications]),
    ...collectionGroup('Marketing', [Pages, Blog, BlogCategories, Tags]),
    ...collectionGroup('Resources', [Media, Assets]),
    ...collectionGroup('Accounts', [Users, UserPhotos]),
  ],
  globals: [...globalGroup('Design', [MainMenu, Footer, GlobalSettings])],
  blocks: [
    CallToAction,
    Banner,
    Code,
    Content,
    MediaBlock,
    FormBlock,
    // Archive blocks
    BlogArchive,
    UniversalArchive,
    ListingBlock,
    ListingArchiveBlock,
  ],
  db: vercelPostgres,
  admin: adminConfig,
  editor: defaultLexical,
  email: emailAdapter,
  jobs: scheduledJobsService,
  plugins: [
    vercelBlob,
    searchService,
    formBuilderService,
    seoService,
    nestedDocsService,
    redirectsPluginConfig,
  ],
  sharp,
  cors: [getServerSideURL()].filter(Boolean),
  secret: process.env.PAYLOAD_SECRET || 'isItASecret?',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // cookiePrefix: `${process.env.COOKIE_PREFIX}`,
  // debug: true,
  telemetry: false,
})
