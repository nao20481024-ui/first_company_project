import { useEffect, useState } from 'react'

const useMobileDeviceDetection: () => boolean = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(hover: none) and (pointer: coarse)')

    const update = () => {
      setIsMobile(media.matches)
    }

    update()
    media.addEventListener('change', update)

    return () => {
      media.removeEventListener('change', update)
    }
  }, [])

  return isMobile
}

export default useMobileDeviceDetection
