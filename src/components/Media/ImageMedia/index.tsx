'use client'

import { cssVariables } from '@/cssVariables'
import { Spinner } from '@components/ui/spinner'
import { getClientSideURL } from '@data/getURL'
import { cn } from '@utils/ui'
import type { StaticImageData } from 'next/image'
import NextImage from 'next/image'
import React, { useState } from 'react'
import type { Props as MediaProps } from '../types'
const { breakpoints } = cssVariables

export const ImageMedia: React.FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    imgClassName,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
    loading: loadingFromProps,
  } = props

  const [isLoading, setIsLoading] = useState(true)

  let width: number | undefined
  let height: number | undefined
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps || ''

  if (!src && resource && typeof resource === 'object') {
    const {
      alt: altFromResource,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resource

    width = fullWidth!
    height = fullHeight!
    alt = altFromResource || ''

    const cacheTag = resource.updatedAt

    src = `${getClientSideURL()}${url}?${cacheTag}`
  }

  const loading = loadingFromProps || (!priority ? 'lazy' : undefined)

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value * 2}w`)
        .join(', ')

  return (
    <>
      {isLoading && (
        <div
          className={cn(
            'absolute inset-0 z-[-1]',
            'grid place-content-center bg-card',
            'animate-pulse',
          )}
        >
          {/* <Spinner size="sm" /> */}
        </div>
      )}
      <NextImage
        alt={alt || ''}
        fill={fill}
        priority={priority}
        quality={100}
        loading={loading}
        sizes={sizes}
        src={src}
        height={!fill ? height : undefined}
        width={!fill ? width : undefined}
        className={cn(
          imgClassName,
          'transition-opacity duration-250 ease-linear bg-deep-blue',
          isLoading ? 'opacity-0' : 'opacity-100',
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </>
  )
}
