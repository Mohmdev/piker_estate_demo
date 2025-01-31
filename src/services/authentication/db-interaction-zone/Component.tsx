'use client'

import React from 'react'
import { ResetButton } from './ResetButton'
import { SeedButton } from './SeedButton'
import './index.scss'

export const DbInteractionZone: React.FC = () => {
  return (
    <div className="db-interaction-zone">
      <div className="db-interaction-zone__description">
        <h5>⚠ Use with caution</h5>
        <p>
          The following actions will reset the database and seed it with demo
          data.
          <br />
          This will delete all existing data and create new records.
        </p>
      </div>
      <div className="db-interaction-zone__buttons">
        <SeedButton />
        <ResetButton />
      </div>
    </div>
  )
}
