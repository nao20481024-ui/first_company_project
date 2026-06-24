import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { ja, sohujiCopy } from 'constants/sohujiCopy'
import Image from 'next/image'
import React from 'react'

const { delivery, brand } = sohujiCopy
const stepImages = [
  '/images/discuss-illustration.webp',
  '/images/development-illustration-2.svg',
  '/images/project-asset-illustration.svg',
  '/images/how-we-work-illustration.svg',
]
const stepAlts = [
  'Discovery and risk framing',
  'Architecture and contracts',
  'Build and stage',
  'Operate and iterate',
]

const HowWeWork = () => {
  return (
    <PageTemplate title={`${delivery.badge} - ${brand.name}`}>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge={delivery.badge}
            title={delivery.title}
            description={delivery.description}
          />
        </div>
      </section>
      <LineDivider />
      {delivery.steps.map((step, index) => {
        const imageFirst = index % 2 === 0
        const imageAside = (
          <aside className="w-full" data-aos={imageFirst ? 'fade-up-right' : 'fade-up-left'}>
            <div className="w-full h-[410px] relative">
              <Image
                src={stepImages[index]}
                quality={100}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
                alt={stepAlts[index]}
              />
            </div>
          </aside>
        )
        const textAside = (
          <aside
            className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left"
            data-aos={imageFirst ? 'fade-up-left' : 'fade-up-right'}
          >
            <SectionSentence
              badge={step.badge}
              title={step.title}
              paragraph={step.paragraph}
            />
          </aside>
        )
        return (
          <section
            key={step.badge}
            className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5"
          >
            {imageFirst ? (
              <>
                {imageAside}
                {textAside}
              </>
            ) : (
              <>
                {textAside}
                {imageAside}
              </>
            )}
          </section>
        )
      })}
      <LineDivider />
    </PageTemplate>
  )
}

export default HowWeWork
