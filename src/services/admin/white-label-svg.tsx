import * as React from 'react'

type Props = {
  className?: string
}

export const WeboraSVG: React.FC<Props> = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 50 39"
      fill="var(--theme-elevation-900)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // stroke="hsl(198.62deg 91% 21%)"
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        // fill="hsl(198.62deg 91% 21%)"
        // stroke="white"
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  )
}

export const WeboraRectangleSVG: React.FC<Props> = () => {
  return (
    <div className="RectangleWrapper">
      <div className="logoWrapper">
        <WeboraSVG />
      </div>
      <div className="textWrapper">
        <span className="textMain">Webora Estates</span>
      </div>
    </div>
  )
}
