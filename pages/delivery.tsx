import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'

const { delivery, brand } = sohujiCopy

const Delivery = () => {
  return (
    <PageTemplate title={`${delivery.badge} - ${brand.name}`}>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center">
          <PageSentence
            badge={delivery.badge}
            title={delivery.title}
            description={delivery.description}
          />
        </div>
      </section>
      <LineDivider />
      <section className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2">
        {delivery.steps.map((step) => (
          <div
            key={step.badge}
            className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left mx-auto lg:mx-0"
          >
            <SectionSentence
              badge={step.badge}
              title={step.title}
              paragraph={step.paragraph}
            />
          </div>
        ))}
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default Delivery
