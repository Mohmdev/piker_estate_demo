import type { CollectionSlug, GlobalSlug } from 'payload'
export const ROLES_WITH_ADMIN_ACCESS = ['admin', 'editor'] as const
// export const DASHBOARD_SLUG = 'dashboard'
// export const SITE_NAME_SHORT = 'Webora' as const
// export const SITE_NAME = 'Webora Studio' as const
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
export const mainCollections: CollectionSlug[] = [
  'pages',
  'blog',
  'properties',
  'projects',
] as const
export const taxonomyCollections: CollectionSlug[] = [
  'blog-categories',
  'classifications',
  // 'contracts',
  // 'availability',
  // 'amenities',
] as const
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

export const PREVIEW_ENABLED_COLLECTIONS: CollectionSlug[] = mainCollections
export const RELATABLE_COLLECTIONS: CollectionSlug[] = mainCollections // RelatedDocs field and component
/* -------------------------------- Redirects ------------------------------- */
export const REDIRECTS_ENABLED_COLLECTIONS: CollectionSlug[] = [
  ...mainCollections,
  ...taxonomyCollections,
] as const
/* ------------------------------- Nested Docs ------------------------------ */
export const NESTING_ENABLED_COLLECTIONS: CollectionSlug[] = [
  'pages',
  'blog-categories',
  'classifications',
  // 'contracts',
  // 'availability',
  // 'amenities',
] as const
/* --------------------------------- Search --------------------------------- */
export const SYNC_TO_SEARCH_ENABLED_COLLECTIONS: CollectionSlug[] = [
  // 'blog',
  'properties',
  'projects',
] as const
export const SEARCH_CATEGORIES: CollectionSlug[] = taxonomyCollections

// export const ENABLED_PLUGINS = {
//   storage: true,
//   formBuilder: true,
//   seo: true,
//   redirects: true,
//   nestedDocs: true,
//   search: true,
// } as const

/* ------------------------------- Page Blocks ------------------------------ */
// export const ENABLED_PAGE_BLOCKS = {
//   CardGrid: false,
//   Slider: false,
//   Statement: false,
//   CodeFeature: false,
//   StickyHighlights: false,
//   Callout: false,
//   Steps: false,
//   CallToAction: false,
//   Content: false,
//   ContentGrid: false,
//   FormBlock: false,
//   HoverCards: false,
//   HoverHighlights: false,
//   LinkGrid: false,
//   MediaContent: false,
//   MediaContentAccordion: false,
//   LogoGrid: false,
//   PortfolioCards: false,
//   PortfolioHighlight: false,
//   PortfolioParallax: false,
//   PricingBlock: false,
//   ReusableContent: false,
//   //
//   MediaBlock: false,
//   ExampleTabs: false,
// } as const

/* ---------------------------------- Keys ---------------------------------- */
// export const COOKIE_PREFIX = 'piker-cookie' as const
// export const COOKIE_STORE_KEY = `${COOKIE_PREFIX}-token` as const
// export const THEME_LOCAL_STORAGE_KEY = `${COOKIE_PREFIX}` as const
