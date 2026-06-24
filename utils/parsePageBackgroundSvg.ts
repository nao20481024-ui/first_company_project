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
  { phase: 0, moveX: 45, moveY: 35, moveSpeed: 0.08, pulseSpeed: 0.12 },
  { phase: 1.4, moveX: 38, moveY: 30, moveSpeed: 0.07, pulseSpeed: 0.11 },
  { phase: 2.8, moveX: 32, moveY: 28, moveSpeed: 0.075, pulseSpeed: 0.13 },
  { phase: 0.9, moveX: 40, moveY: 32, moveSpeed: 0.068, pulseSpeed: 0.115 },
  { phase: 3.5, moveX: 35, moveY: 38, moveSpeed: 0.065, pulseSpeed: 0.12 },
  { phase: 1.9, moveX: 48, moveY: 28, moveSpeed: 0.06, pulseSpeed: 0.105 },
  { phase: 2.2, moveX: 42, moveY: 30, moveSpeed: 0.062, pulseSpeed: 0.11 },
  { phase: 0.4, moveX: 35, moveY: 40, moveSpeed: 0.072, pulseSpeed: 0.125 },
  { phase: 4.1, moveX: 30, moveY: 35, moveSpeed: 0.078, pulseSpeed: 0.135 },
]
