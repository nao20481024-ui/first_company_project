import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PricingCard from 'components/molecules/Card/PricingCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { sohujiCopy } from 'constants/sohujiCopy'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const { home, faq, brand } = sohujiCopy

const Pricing = () => {
  return (
    <PageTemplate title={`Engagement - ${brand.name}`}>
      <section className="grid grid-cols-1 place-items-center">
        <div
          className="sm:w-10/12 md:8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge={home.engagement.badge}
            title="Discovery through operated systems—scoped to measurable outcomes"
          />
        </div>
      </section>
      <LineDivider />
      <section className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {home.engagement.phases.map((phase) => (
          <div key={phase.title} data-aos="fade-up">
            <PricingCard
              price="Scoped"
              title={phase.title}
              features={phase.features}
            />
          </div>
        ))}
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence badge={faq.badge} title={faq.title} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faq.items.slice(0, 6).map((item) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={item.title} />
                <Text textStyle="FAQDescription" value={item.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium text-center">
          {"Didn't find an answer?"}{' '}
          <div className="sm:hidden"></div>
          <div className="text-primary inline select-none">
            <Link href={'/contact'}>
              Contact our team for a consultation.
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Pricing
