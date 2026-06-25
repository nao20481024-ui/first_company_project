import useMobileDeviceDetection from 'hooks/useMobileDetection'
import { sohujiCopy } from 'constants/sohujiCopy'
import Link from 'next/link'
import React from 'react'

type NavBrandProps = {
  variant?: 'navbar' | 'footer'
}

const NavBrand = ({ variant = 'navbar' }: NavBrandProps) => {
  const isMobile = useMobileDeviceDetection()
  const isNavbar = variant === 'navbar'

  const textClass = isNavbar
    ? 'text-lg sm:text-xl font-semibold text-white leading-none'
    : 'text-lg sm:text-xl font-semibold text-white leading-none'

  return (
    <div
      className={`select-none ${isMobile ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <Link href="/" className="shrink-0 w-fit">
        <div className={textClass}>{sohujiCopy.brand.name}</div>
      </Link>
    </div>
  )
}

export default NavBrand
