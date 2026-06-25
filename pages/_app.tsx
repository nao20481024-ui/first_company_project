import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let cancelled = false

    const initAos = async () => {
      await import('aos/dist/aos.css')
      const { default: AOS } = await import('aos')

      if (!cancelled) {
        AOS.init({
          duration: 600,
          once: true,
        })
      }
    }

    const idleId =
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(() => {
            void initAos()
          }, { timeout: 1200 })
        : window.setTimeout(() => {
            void initAos()
          }, 400)

    return () => {
      cancelled = true
      if (typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId as number)
      } else {
        window.clearTimeout(idleId as number)
      }
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
