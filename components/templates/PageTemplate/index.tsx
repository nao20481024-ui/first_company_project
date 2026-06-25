import NavBar from 'components/organisms/NavBar'
import CallOut from 'components/organisms/CallOut'
import Footer from 'components/organisms/Footer'
import React, { ReactNode } from 'react'
import Container from 'components/templates/Container'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const AnimatedPageBackground = dynamic(
  () => import('components/atoms/AnimatedPageBackground'),
  {
    ssr: false,
    loading: () => (
      <div className="page-background-root" aria-hidden="true">
        <div className="page-background-gradient" />
      </div>
    ),
  },
)

interface PageTemplateProps {
  children: ReactNode[] | JSX.Element
  title?: string
}

const PageTemplate = ({ children, title = 'Dokyoai' }: PageTemplateProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <div className="w-full h-fit min-h-screen bg-dark overflow-x-hidden relative">
        <AnimatedPageBackground />
        <div className="relative z-[1] w-full min-h-screen bg-dark/60 overflow-visible">
          <div className="h-[105px]" />
          <Container>
            {children}
            <div data-aos="fade-right">
              <CallOut />
            </div>
            <Footer />
          </Container>
        </div>
      </div>
    </>
  )
}

export default PageTemplate
