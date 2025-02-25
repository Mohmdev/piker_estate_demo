'use client'

import { cn } from '@utils/ui'
import React from 'react'
import { ResetAmenities } from './amenities/reset'
import { SeedAmenities } from './amenities/seed'
import { ResetAvailability } from './availability/reset'
import { SeedAvailability } from './availability/seed'
import { ResetClassifications } from './classifications/reset'
import { SeedClassifications } from './classifications/seed'
import { ResetContracts } from './contracts/reset'
import { SeedContracts } from './contracts/seed'
import { ResetSiteGeneralData } from './general/reset'
import { SeedSiteGeneralData } from './general/seed'
import { ResetProjects } from './projects/reset'
import { SeedProjects } from './projects/seed'
import { ResetProperties } from './properties/reset'
import { SeedProperties } from './properties/seed'
// import { ResetRealEstateGroupData } from './realestate-group/reset'
// import { SeedRealEstateGroupData } from './realestate-group/seed'
import { HardResetDatabase } from './reset/hard-reset'

export const DbInteractionZone: React.FC = () => {
  return (
    <div
      className={cn(
        'flex flex-col flex-nowrap justify-start items-start',
        'min-w-[80px] gap-8 mt-10 mb-4',
      )}
    >
      <div className="flex flex-col grow shrink-0 gap-2">
        <h5 className="text-zinc-500">⚠ Use with caution</h5>
        <p>
          The following actions will reset the database and seed it with demo
          data.
          <br />
          This will delete all existing data and create new records.
        </p>
      </div>
      <div
        className={cn(
          'flex flex-row flex-wrap gap-4',
          'justify-between items-start',
          'w-full',
        )}
      >
        <div className="flex flex-col justify-start items-start flex-nowrap gap-2 w-full max-w-xl">
          <h5 className="text-muted-foreground">Site</h5>

          <div
            className={cn(
              'flex flex-row flex-nowrap gap-4',
              'justify-between items-center w-full',
            )}
          >
            <SeedSiteGeneralData />
            <ResetSiteGeneralData />
          </div>
          <HardResetDatabase className="w-full" />
        </div>

        <div className="flex flex-col justify-start items-start flex-nowrap gap-2 w-full max-w-xl">
          <h5 className="text-muted-foreground">Main Collections</h5>
          <div
            className={cn(
              'flex flex-row flex-nowrap gap-4',
              'justify-between items-center w-full',
            )}
          >
            <SeedProperties />
            <ResetProperties />
          </div>
          <div
            className={cn(
              'flex flex-row flex-nowrap gap-4',
              'justify-between items-center w-full',
            )}
          >
            <SeedProjects />
            <ResetProjects />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start flex-nowrap gap-2 w-full max-w-xl">
          <h5 className="text-muted-foreground">Taxonomies</h5>
          <div
            className={cn(
              'flex flex-row flex-nowrap gap-4',
              'justify-between items-center w-full',
            )}
          >
            <SeedClassifications />
            <ResetClassifications />
          </div>
          <div
            className={cn(
              'flex flex-row flex-nowrap gap-4',
              'justify-between items-center w-full',
            )}
          >
            <SeedContracts />
            <ResetContracts />
          </div>
          <div
            className={cn(
              'flex flex-row flex-nowrap gap-4',
              'justify-between items-center w-full',
            )}
          >
            <SeedAvailability />
            <ResetAvailability />
          </div>
          <div
            className={cn(
              'flex flex-row flex-nowrap gap-4',
              'justify-between items-center w-full',
            )}
          >
            <SeedAmenities />
            <ResetAmenities />
          </div>
        </div>

        {/* <div className="flex flex-col justify-start items-start flex-nowrap gap-2 w-full max-w-xl">
          <h5 className="text-muted-foreground">Real Estate Group</h5>
          <div
            className={cn(
              'flex flex-col flex-nowrap gap-4',
              'justify-start items-stretch w-full',
            )}
          >
            <SeedRealEstateGroupData />
            <ResetRealEstateGroupData />
          </div>
        </div> */}
      </div>
    </div>
  )
}
