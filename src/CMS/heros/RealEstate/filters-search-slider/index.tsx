'use client'
import type { Page } from '@payload-types'
import { useHeaderTheme } from '@providers/HeaderTheme'
import { cn } from '@utils/ui'
import React, { useEffect } from 'react'
import { IconGrid } from '../icon-grid'
import { BackgroundMedia } from './background-media'
import { MiniSlider } from './mini-slider'
import { SearchFiltersForm } from './search-filters-form'

export const FiltersSearchSlider: React.FC<Page['hero']> = ({
  links,
  media,
  richText,
  searchFiltersConfig,
  iconGrid,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className={cn(
        'min-h-[80vh]',
        'relative flex flex-col items-center justify-center text-white border-b-1 border-border/50',
        'pt-[calc(var(--base-header-height)_+_2rem)] pb-6',
      )}
      data-theme="dark"
    >
      {/* Main Content Section */}
      <div
        className={cn(
          'container z-10 relative flex flex-1',
          // 'flex-row flex-wrap gap-6 lg:gap-22',
          // 'justify-start items-start',
          'flex-col justify-start gap-6',
          'md:flex-row md:justify-between lg:gap-22',
          // 'md:text-center space-y-4',
        )}
      >
        {/* Mini Slider */}
        {links && (
          <MiniSlider
            richText={richText}
            links={links}
            className="shrink-1 grow-0 w-full max-w-full lg:max-w-[60%]"
          />
        )}

        {/* Search Filters Form */}
        {searchFiltersConfig && (
          <SearchFiltersForm
            searchFiltersConfig={searchFiltersConfig}
            className="min-w-max"
          />
        )}

        {/* Icon Grid */}
        {iconGrid && iconGrid.length > 0 && <IconGrid iconGrid={iconGrid} />}
      </div>

      {/* Background Image */}
      <BackgroundMedia media={media} />
    </div>
  )
}
