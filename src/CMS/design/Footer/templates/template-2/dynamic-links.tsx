import { CMSLink } from '@components/CMSLink'
import type { Footer as FooterType } from '@payload-types'
import { cn } from '@utils/ui'
import React from 'react'

type DynamicLinksProps = {
  className?: string
  data: FooterType
}

export const DynamicLinks: React.FC<DynamicLinksProps> = ({
  className,
  data,
}) => {
  const { columns } = data

  if (!columns) return null

  return (
    <div
      className={cn(
        'flex-1',
        'flex flex-col items-start md:flex-row gap-4 md:items-center',
        className,
      )}
    >
      <nav
        className={cn(
          //
          'flex-1',
          'flex flex-row gap-14',
        )}
      >
        {data &&
          columns.map((column, columnIndex) => {
            return (
              <div
                key={columnIndex}
                className="flex flex-col gap-3 items-start justify-start"
              >
                <h3 className="text-foreground/50 prose prose-md font-semibold">
                  {column.label}
                </h3>
                <div className="flex flex-col gap-2 items-start justify-start">
                  {column?.navItems?.map(({ link }, i) => {
                    return (
                      <CMSLink
                        className="text-foreground text-sm"
                        key={i}
                        {...link}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
      </nav>
    </div>
  )
}
