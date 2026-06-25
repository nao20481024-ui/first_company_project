import React, { useEffect, useState } from 'react'
import { PAGE_BACKGROUND, ParsedBackgroundBlob } from 'utils/parsePageBackgroundSvg'

const { blobs, viewBox } = PAGE_BACKGROUND
const { width, height } = viewBox

const AnimatedPageBackground = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const readyFrame = requestAnimationFrame(() => {
      setIsReady(true)
    })

    return () => {
      cancelAnimationFrame(readyFrame)
    }
  }, [])

  return (
    <div className="page-background-root" aria-hidden="true">
      <div className="page-background-gradient" />
      <svg
        className={`page-background-svg${isReady ? ' page-background-svg-ready' : ''}`}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter
            id="page-bg-blur"
            x="-80%"
            y="-80%"
            width="260%"
            height="260%"
          >
            <feGaussianBlur stdDeviation="72" />
          </filter>
        </defs>
        {blobs.map((blob: ParsedBackgroundBlob, index) => (
          <g key={index} filter="url(#page-bg-blur)">
            <ellipse
              rx={blob.rx}
              ry={blob.ry}
              transform={`matrix(${blob.matrix} ${blob.tx} ${blob.ty})`}
              fill={blob.fill}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default AnimatedPageBackground
