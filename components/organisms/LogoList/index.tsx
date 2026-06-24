import Image from 'next/image'
import React from 'react'

const logos = [
  { src: '/images/github-logo.svg', width: 119, height: 33, alt: 'github logo' },
  { src: '/images/forbes-logo.svg', width: 119, height: 32, alt: 'forbes logo' },
  { src: '/images/google-logo.svg', width: 119, height: 39, alt: 'google logo' },
  { src: '/images/microsoft-logo.svg', width: 119, height: 25, alt: 'microsoft logo' },
  { src: '/images/facebook-logo.svg', width: 119, height: 23, alt: 'facebook logo' },
]

const LogoList = () => {
  return (
    <section
      className="py-8 m-0 flex flex-row flex-wrap place-items-center justify-around gap-4 md:gap-0 border-y border-borderLight"
      data-aos="fade-left"
    >
      {logos.map((logo) => (
        <div key={logo.src}>
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            className="h-9 w-auto"
            style={{ width: 'auto' }}
            alt={logo.alt}
          />
        </div>
      ))}
    </section>
  )
}

export default LogoList
