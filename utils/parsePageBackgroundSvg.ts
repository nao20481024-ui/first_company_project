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

export const PAGE_BACKGROUND: {
  blobs: ParsedBackgroundBlob[]
  viewBox: BackgroundViewBox
} = {
  viewBox: { width: 1440, height: 5463 },
  blobs: [
    {
      rx: 392.146,
      ry: 385.089,
      tx: 688.182,
      ty: 340.376,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#16FCD2',
    },
    {
      rx: 219.466,
      ry: 215.517,
      tx: 355.533,
      ty: 1525.21,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#FCA016',
    },
    {
      rx: 178.305,
      ry: 175.096,
      tx: 584.357,
      ty: 1318.36,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#16FCD2',
    },
    {
      rx: 219.466,
      ry: 215.517,
      tx: 893.533,
      ty: 2162.85,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#FC165B',
    },
    {
      rx: 178.305,
      ry: 175.096,
      tx: 1122.36,
      ty: 1956.01,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#6016FC',
    },
    {
      rx: 392.146,
      ry: 385.089,
      tx: 151.033,
      ty: 475.626,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#FCA016',
    },
    {
      rx: 392.146,
      ry: 385.089,
      tx: 1010.47,
      ty: 259.226,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#FC165B',
    },
    {
      rx: 219.466,
      ry: 215.517,
      tx: 1058.25,
      ty: 5200.04,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#16FCD2',
    },
    {
      rx: 178.305,
      ry: 175.096,
      tx: 341.357,
      ty: 5122.9,
      matrix: '0.969732 -0.244172 0.253855 0.967242',
      fill: '#6016FC',
    },
  ],
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
