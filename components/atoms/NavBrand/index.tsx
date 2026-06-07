import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Link from 'next/link'
import React from 'react'

type NavBrandProps = {
  variant?: 'navbar' | 'footer'
}

const BrandIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="26" stroke="#10b981" strokeWidth="3" />
    <path
      d="M32 12L32 18"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="32" cy="18" r="4" fill="none" stroke="#10b981" strokeWidth="3" />
    <circle cx="20" cy="28" r="4" fill="none" stroke="#10b981" strokeWidth="3" />
    <circle cx="44" cy="28" r="4" fill="none" stroke="#10b981" strokeWidth="3" />
    <circle cx="32" cy="42" r="5" fill="none" stroke="#10b981" strokeWidth="3" />
    <circle cx="24" cy="50" r="3.5" fill="none" stroke="#10b981" strokeWidth="3" />
    <circle cx="40" cy="50" r="3.5" fill="none" stroke="#10b981" strokeWidth="3" />
    <path
      d="M32 18L20 28"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 18L44 28"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M20 28L32 42"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M44 28L32 42"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 42L24 50"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M32 42L40 50"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M24 50L40 50"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
)

const NavBrand = ({ variant = 'navbar' }: NavBrandProps) => {
  const isMobile = useMobileDeviceDetection()
  const isNavbar = variant === 'navbar'

  const iconClass = isNavbar
    ? 'h-7 w-7 sm:h-8 sm:w-8 shrink-0'
    : 'h-8 w-8 sm:h-9 sm:w-9 shrink-0'

  const textClass = isNavbar
    ? 'text-lg sm:text-xl font-semibold text-white leading-none'
    : 'text-lg sm:text-xl font-semibold text-white leading-none'

  return (
    <div
      className={`select-none ${isMobile ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <Link href="/" className="shrink-0 w-fit">
        <div className="flex flex-row items-center gap-1.5 sm:gap-2">
          <BrandIcon className={iconClass} />
          <div className={textClass}>Sohuji</div>
        </div>
      </Link>
    </div>
  )
}

export default NavBrand
