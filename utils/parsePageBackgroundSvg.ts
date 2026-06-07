export type ParsedBackgroundBlob = {
  rx: number
  ry: number
  tx: number
  ty: number
  matrix: string
  fill: string
}

export type BackgroundViewBox = {
  width: number
  height: number
}

const getAttr = (element: string, name: string) => {
  const match = element.match(new RegExp(`${name}="([^"]+)"`))
  return match?.[1] ?? ''
}

export const parsePageBackgroundSvg = (
  raw: string,
): { blobs: ParsedBackgroundBlob[]; viewBox: BackgroundViewBox } => {
  const svg = raw
    .replace(/ns0:/g, '')
    .replace(/xmlns:ns0="[^"]*"/g, '')

  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/)
  const widthMatch = svg.match(/width="([^"]+)"/)
  const heightMatch = svg.match(/height="([^"]+)"/)

  let width = 1440
  let height = 5463

  if (viewBoxMatch) {
    const parts = viewBoxMatch[1].split(/\s+/).map(Number)
    if (parts.length === 4) {
      width = parts[2]
      height = parts[3]
    }
  } else {
    if (widthMatch) width = Number(widthMatch[1])
    if (heightMatch) height = Number(heightMatch[1])
  }

  const blobs: ParsedBackgroundBlob[] = []

  const ellipseMatches = svg.match(/<ellipse[^>]*\/?>/gi) ?? []

  for (const element of ellipseMatches) {
    const rx = Number(getAttr(element, 'rx'))
    const ry = Number(getAttr(element, 'ry'))
    const fill = getAttr(element, 'fill')
    const transform = getAttr(element, 'transform')
    const matrixMatch = transform.match(/matrix\(([^)]+)\)/)

    if (!matrixMatch || !rx || !ry || !fill) {
      continue
    }

    const parts = matrixMatch[1].trim().split(/[\s,]+/).map(Number)

    if (parts.length < 6) {
      continue
    }

    blobs.push({
      rx,
      ry,
      tx: parts[4],
      ty: parts[5],
      matrix: parts.slice(0, 4).join(' '),
      fill,
    })
  }

  return { blobs, viewBox: { width, height } }
}

export const BACKGROUND_ANIMATION_PRESETS = [
  { phase: 0, moveX: 90, moveY: 70, moveSpeed: 0.32, pulseSpeed: 0.48 },
  { phase: 1.4, moveX: 75, moveY: 60, moveSpeed: 0.28, pulseSpeed: 0.42 },
  { phase: 2.8, moveX: 65, moveY: 55, moveSpeed: 0.3, pulseSpeed: 0.5 },
  { phase: 0.9, moveX: 80, moveY: 65, moveSpeed: 0.27, pulseSpeed: 0.44 },
  { phase: 3.5, moveX: 70, moveY: 75, moveSpeed: 0.26, pulseSpeed: 0.46 },
  { phase: 1.9, moveX: 95, moveY: 55, moveSpeed: 0.24, pulseSpeed: 0.4 },
  { phase: 2.2, moveX: 85, moveY: 60, moveSpeed: 0.25, pulseSpeed: 0.43 },
  { phase: 0.4, moveX: 70, moveY: 80, moveSpeed: 0.29, pulseSpeed: 0.47 },
  { phase: 4.1, moveX: 60, moveY: 70, moveSpeed: 0.31, pulseSpeed: 0.52 },
]
