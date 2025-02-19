'use client'
import type { Page } from '@payload-types'
import { useHeaderTheme } from '@providers/HeaderTheme'
import { cn } from '@utils/ui'
import React, { useEffect } from 'react'
import { BackgroundMedia } from './components/background-media'
import { IconGrid } from './components/icon-grid'
import { MiniSlider } from './components/mini-slider'
import { SearchFiltersForm } from './components/search-component/search-filters-form'

export const AdvancedComponentsHero: React.FC<Page['hero']> = ({
  links,
  media,
  richText,
  searchComponent,
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
          'flex-col justify-start gap-6',
          'md:flex-row md:justify-between lg:gap-22',
        )}
      >
        {links && (
          <MiniSlider
            richText={richText}
            links={links}
            className="shrink-1 grow-0 w-full max-w-full lg:max-w-[60%]"
          />
        )}

        {searchComponent && (
          <SearchFiltersForm
            searchComponent={searchComponent}
            className="min-w-max"
          />
        )}

        {iconGrid && iconGrid.length > 0 && <IconGrid iconGrid={iconGrid} />}
      </div>
      {/*  */}

      <BackgroundMedia media={media} />
      {/*  */}
    </div>
  )
}
