import React from 'react'
import classes from './index.module.scss'

interface NoiseBackgroundProps {
  enable?: boolean
  size?: number
  opacity?: number
}

export function NoiseBackground({
  enable = true,
  size = 6.2,
  opacity = 0.05,
}: NoiseBackgroundProps) {
  if (!enable) return null

  return (
    <div
      className="absolute inset-0 m-0 z-[-1]"
      style={
        {
          '--noise-size': `${size}rem`,
          '--noise-opacity': opacity,
        } as React.CSSProperties
      }
    >
      <div className={classes.noiseBackground} />
    </div>
  )
}
