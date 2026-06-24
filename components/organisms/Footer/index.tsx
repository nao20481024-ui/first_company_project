import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import { sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'

const { brand, nav } = sohujiCopy

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand variant="footer" />
            <div className="max-w-sm">
              <Text value={brand.tagline} textStyle="SectionParagraph" />
              <Text value={brand.footerLine} textStyle="SectionParagraph" />
              <Text
                value={brand.copyright(new Date().getFullYear())}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="SERVICES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="Agentic AI & RAG" href="/capabilities/detail" />
                <NavLink value="Integrations" href="/capabilities/detail" />
                <NavLink value="Workflow orchestration" href="/capabilities/detail" />
                <NavLink value="Observability & evals" href="/capabilities/detail" />
                <NavLink value="Operator UIs" href="/capabilities/detail" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value={nav.capabilities} href="/capabilities" />
                <NavLink value={nav.principles} href="/principles" />
                <NavLink value={nav.delivery} href="/delivery" />
                <NavLink value={nav.contact} href="/contact" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="RESOURCES" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="FAQ" href="/faq" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
