import React, { useEffect, useState } from 'react'

import NavBrand from 'components/atoms/NavBrand'

import NavLink from 'components/atoms/NavLink'

import Container from 'components/templates/Container'

import { FiMenu, FiX } from 'react-icons/fi'

import useMobileDeviceDetection from 'hooks/useMobileDetection'

import useGetBrowserName from 'hooks/useGetBrowserName'

import { sohujiCopy } from 'constants/sohujiCopy'



const NavBar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const browserName = useGetBrowserName()

  const isMobile = useMobileDeviceDetection()

  useEffect(() => {

    window.addEventListener('scroll', () => {

      if (window.scrollY > 150) {

        setIsScrolled(true)

      } else {

        setIsScrolled(false)

      }

    })

  }, [])

  useEffect(() => {

    if (isOpen) {

      document.body.classList.add('h-screen')

      document.body.classList.add('overflow-y-hidden')

    } else {

      document.body.classList.remove('h-screen')

      document.body.classList.remove('overflow-y-hidden')

    }

  }, [isOpen])

  return (

    <>

      <nav

        className={`pt-8 w-full top-0 left-0 z-30 ${

          isScrolled ? 'fixed' : 'absolute'

        }`}

      >

        <Container>

          <div
            className={`${
              browserName == 'Firefox' ? 'bg-gray-900/80' : 'bg-light'
            } px-10 md:px-14 py-4 w-full rounded-md ${
              isScrolled || isOpen
                ? 'backdrop-blur-md'
                : 'backdrop-blur-sm lg:backdrop-blur-none lg:bg-transparent lg:px-10 xl:px-12'
            }`}
          >

            <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">

              <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">

                <NavBrand />

                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>

                  <div

                    className={`text-white text-2xl ${

                      isMobile ? 'cursor-default' : 'cursor-pointer'

                    }`}

                  >

                    {isOpen ? <FiX /> : <FiMenu />}

                  </div>

                </div>

              </div>

              <div

                className={`${

                  isOpen ? '' : 'hidden '

                }space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`}

              >

                <NavLink
                  href="/"
                  value={sohujiCopy.nav.home}
                  canActive={true}
                />

                <NavLink

                  href="/capabilities"

                  value={sohujiCopy.nav.capabilities}

                  canActive={true}

                />

                <NavLink

                  href="/principles"

                  value={sohujiCopy.nav.principles}

                  canActive={true}

                />

                <NavLink

                  href="/delivery"

                  value={sohujiCopy.nav.delivery}

                  canActive={true}

                />

                <NavLink

                  href="/contact"

                  value={sohujiCopy.nav.contact}

                  canActive={true}

                />

              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default NavBar

