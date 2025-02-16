# Classification Structure Creation Instructions

## Overview
We're creating a hierarchical structure of classifications where each classification type is nested within its parent category. Each document has a unique ID offset based on its category (e.g., Property Types start at 100, Property Classes at 200, Usage Types at 300, Market Segments at 400, Location Types at 500, and Conditions at 600) to prevent ID conflicts.

## Structure Pattern
1. Each classification entry follows this template:
   ```typescript
   {
     title: string;
     description: null;
     image: null;
     icon: null;
     relatedDocs: [];
     meta: {
       title: null,
       image: null,
       description: null,
     };
     noindex: null;
     authors: [];
     populatedAuthors: [];
     publishedAt: string; // ISO date format
     slug: string; // URL-friendly version of title
     slugLock: true;
     parent: number | null; // ID of parent classification
     breadcrumbs: [
       {
         id: string; // Unique MongoDB-style ID
         doc: number; // Document ID
         url: string; // Full path from root
         label: string; // Display name
       }
     ];
     _status: 'published';
   }
   ```

## Implementation Steps
1. Start with the root category (e.g., 'Property Types' or 'Property Class')
   - Give each root category the base offset ID
   - No parent reference
   - Single breadcrumb pointing to itself

2. For each child category:
   - Increment the doc ID sequentially
   - Set parent to the parent category's ID
   - Include full breadcrumb trail from root to current item
   - Create URL path by joining all slugs with forward slashes

3. For nested items:
   - Maintain consistent parent references
   - Build complete breadcrumb trails
   - Keep URLs reflecting the full hierarchy

## Naming Conventions
1. Slugs: lowercase, hyphenated versions of titles
2. URLs: full path from root, e.g., 'classifications/property-types/apartment/studio
3. IDs: sequential numbers starting from category base (100, 200, etc.)

## Important Rules
1. Never reuse IDs across different classification types
2. Maintain consistent date patterns (increment by 1 minute for each entry)
3. Keep breadcrumbs showing complete hierarchy
4. Ensure parent references point to correct parent IDs
5. Use slugLock: true for all entries
6. Keep _status: 'published' for all entries

## Example Structure
Root Category (ID: x00)
└── Main Category (ID: x01)
    └── Sub-Category (ID: x02)
        └── Item (ID: x03)
        └── Item (ID: x04)
    └── Sub-Category (ID: x05)
        └── Item (ID: x06)
        └── Item (ID: x07)