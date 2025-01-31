'use client'

import React from 'react'
import { ResetButton } from './ResetButton'
import { SeedButton } from './SeedButton'

import { cn } from '@utils/ui'

export const DbInteractionZone: React.FC = () => {
  return (
    <div
      className={cn(
        'flex flex-col flex-nowrap justify-between items-center',
        'min-w-[80px] gap-4 mt-10 mb-4',
      )}
    >
      <div className="flex flex-col flex-grow flex-shrink-0 gap-2">
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
          'flex flex-row flex-wrap gap-8',
          'justify-between items-center w-full',
        )}
      >
        <SeedButton />
        <ResetButton />
      </div>
    </div>
  )
}
