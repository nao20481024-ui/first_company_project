import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import TextArrowLink from 'components/molecules/TextArrowLink'
import PageTemplate from 'components/templates/PageTemplate'
import { sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'

const { solutions, brand } = sohujiCopy

const Solutions = () => {
  return (
    <PageTemplate title={`${solutions.badge} - ${brand.name}`}>
      <section className="grid place-items-center">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge={solutions.badge}
            title={solutions.title}
            description={solutions.description}
          />
        </div>
      </section>

      <LineDivider />

      <section className="flex flex-col gap-16 items-center">
        <div className="w-full grid grid-cols-1 gap-5">
          {solutions.lanes.map((lane, index) => (
            <div
              key={lane.title}
              className="w-full bg-light rounded-md px-8 py-8 border-2 border-transparent hover:border-borderLight transition-all duration-300"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <SectionSentence title={lane.title} paragraph={lane.description} />
                <TextArrowLink label={solutions.learnMore} href={lane.href} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <LineDivider />

      <section className="flex flex-col gap-16 items-center">
        <div
          className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge={solutions.caseStudies.badge}
            title={solutions.caseStudies.title}
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {solutions.caseStudyItems.map((project) => (
            <div key={project.title} data-aos="zoom-in-up">
              <ProjectCard title={project.title} description={project.description} />
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-center pt-8" data-aos="fade-up">
        <ButtonLink value={solutions.ctaDiscovery} href="/quote" />
      </section>
    </PageTemplate>
  )
}

export default Solutions
