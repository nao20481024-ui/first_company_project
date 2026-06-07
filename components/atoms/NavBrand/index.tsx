import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection()
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <Link href={'/'} passHref>
          <div className="w-fit h-fit">
            <Image
              src={'/images/brand.svg'}
              width={240}
              height={52}
              alt="Sohuji (ソウフジ)"
              className="h-12 sm:h-14 w-auto"
              loading="lazy"
            />
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrand
