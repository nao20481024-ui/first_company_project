import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import { sohujiCopy } from 'constants/sohujiCopy'
import Image from 'next/image'
import React from 'react'
import { FiCpu, FiLink, FiGitBranch } from 'react-icons/fi'

const { home } = sohujiCopy
const featureIcons = [<FiCpu key="cpu" />, <FiLink key="link" />, <FiGitBranch key="git" />]

const Home = () => {
  return (
    <>
      <PageTemplate title={`Home - ${sohujiCopy.brand.name}`}>
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title={home.title}
              description={home.description}
              badge={home.badge}
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value={home.ctaDiscovery} href="/quote" />
            <ButtonLink
              value={home.ctaCapabilities}
              color="white"
              style="light"
              href="/service"
            />
          </div>
        </section>
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          {home.features.map((feature, index) => (
            <div key={feature.title} data-aos="fade-up">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={featureIcons[index]}
              />
            </div>
          ))}
        </section>
        <LogoList />
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title={home.delivery.title}
              paragraph={home.delivery.paragraph}
              badge={home.delivery.badge}
            />
          </aside>
        </section>
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title={home.operatingModel.title}
                paragraph={home.operatingModel.paragraph}
                badge={home.operatingModel.badge}
              />
              <ButtonLink
                value={home.operatingModel.cta}
                href="/contact"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title={home.solutions.title}
              badge={home.solutions.badge}
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            {home.solutions.items.map((project, index) => (
              <div
                key={project.title}
                data-aos={index === 0 ? 'flip-left' : 'flip-right'}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  bottomSquareSize={index === 1 ? 'big' : undefined}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title={home.engagement.title}
              badge={home.engagement.badge}
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {home.engagement.phases.map((phase, index) => (
              <div
                key={phase.title}
                data-aos={
                  index === 0
                    ? 'fade-up-right'
                    : index === 1
                    ? 'fade-up'
                    : 'fade-up-left'
                }
                {...(index === 1 ? { 'data-aos-delay': '300' } : {})}
              >
                <PricingCard
                  price="Scoped"
                  title={phase.title}
                  features={phase.features}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title={home.reference.title}
              badge={home.reference.badge}
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
