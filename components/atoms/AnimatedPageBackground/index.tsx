import React, { useEffect, useRef, useState } from 'react'
import {
  BACKGROUND_ANIMATION_PRESETS,
  parsePageBackgroundSvg,
  ParsedBackgroundBlob,
  BackgroundViewBox,
} from 'utils/parsePageBackgroundSvg'

type LoadedBackground = {
  blobs: ParsedBackgroundBlob[]
  viewBox: BackgroundViewBox
}

const initEllipse = (ellipse: SVGEllipseElement, blob: ParsedBackgroundBlob) => {
  ellipse.setAttribute('rx', String(blob.rx))
  ellipse.setAttribute('ry', String(blob.ry))
  ellipse.setAttribute('transform', `matrix(${blob.matrix} ${blob.tx} ${blob.ty})`)
  ellipse.setAttribute('fill', blob.fill)
}

const AnimatedPageBackground = () => {
  const [background, setBackground] = useState<LoadedBackground | null>(null)
  const groupRefs = useRef<(SVGGElement | null)[]>([])
  const ellipseRefs = useRef<(SVGEllipseElement | null)[]>([])

  useEffect(() => {
    let cancelled = false

    fetch('/images/page-background.svg')
      .then((response) => response.text())
      .then((text) => {
        if (cancelled) {
          return
        }

        const parsed = parsePageBackgroundSvg(text)

        if (parsed.blobs.length > 0) {
          setBackground(parsed)
        }
      })
      .catch(() => {
        /* keep dark fallback */
      })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!background) {
      return
    }

    background.blobs.forEach((blob, index) => {
      const ellipse = ellipseRefs.current[index]
      if (ellipse) {
        initEllipse(ellipse, blob)
      }
    })

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      return
    }

    let frameId = 0
    let isActive = !document.hidden

    const animate = (now: number) => {
      if (isActive) {
        const t = now * 0.001

        background.blobs.forEach((blob, index) => {
          const group = groupRefs.current[index]
          const ellipse = ellipseRefs.current[index]

          if (!group || !ellipse) {
            return
          }

          const preset =
            BACKGROUND_ANIMATION_PRESETS[
              index % BACKGROUND_ANIMATION_PRESETS.length
            ]

          const dx = Math.sin(t * preset.moveSpeed + preset.phase) * preset.moveX
          const dy =
            Math.cos(t * preset.moveSpeed * 0.78 + preset.phase) * preset.moveY
          const pulse =
            1 + 0.22 * Math.sin(t * preset.pulseSpeed + preset.phase * 1.2)
          const ryPulse =
            1 + 0.18 * Math.sin(t * preset.pulseSpeed * 1.1 + preset.phase)

          group.setAttribute('transform', `translate(${dx} ${dy})`)
          ellipse.setAttribute('rx', (blob.rx * pulse).toFixed(2))
          ellipse.setAttribute('ry', (blob.ry * ryPulse).toFixed(2))
        })
      }

      frameId = requestAnimationFrame(animate)
    }

    const onVisibilityChange = () => {
      isActive = !document.hidden
    }

    document.addEventListener('visibilitychange', onVisibilityChange)
    frameId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      cancelAnimationFrame(frameId)
    }
  }, [background])

  const { width, height } = background?.viewBox ?? { width: 1440, height: 5463 }

  return (
    <div className="page-background-root" aria-hidden="true">
      <svg
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
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>
        <rect width={width} height={height} fill="#0B0B22" />
        {(background?.blobs ?? []).map((blob, index) => (
          <g
            key={index}
            ref={(element) => {
              groupRefs.current[index] = element
            }}
            filter="url(#page-bg-blur)"
          >
            <ellipse
              ref={(element) => {
                ellipseRefs.current[index] = element
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default AnimatedPageBackground
