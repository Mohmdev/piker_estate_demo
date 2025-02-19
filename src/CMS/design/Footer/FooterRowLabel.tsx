'use client'

import { Footer } from '@payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const FooterRowLabel: React.FC<RowLabelProps> = () => {
  const data =
    useRowLabel<
      NonNullable<NonNullable<Footer['columns']>[number]['navItems']>[number]
    >()

  const label = data?.data?.link?.label
    ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.link?.label}`
    : 'Row'

  return <div>{label}</div>
}
