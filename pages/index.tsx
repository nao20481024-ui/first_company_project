import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import FaqList from 'components/organisms/FaqList'
import LogoList from 'components/organisms/LogoList'
import PageTemplate from 'components/templates/PageTemplate'
import { sohujiCopy } from 'constants/sohujiCopy'
import Image from 'next/image'
import React from 'react'
import {
  FiActivity,
  FiBarChart2,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayout,
  FiLink,
  FiShield,
} from 'react-icons/fi'

const { home, delivery, principles, faq } = sohujiCopy

const capabilityIcons = [
  <FiCpu key="agentic" />,
  <FiLink key="mcp" />,
  <FiGitBranch key="n8n" />,
  <FiDatabase key="rag" />,
  <FiActivity key="obs" />,
  <FiLayout key="product" />,
]

const principleIcons = [
  <FiBarChart2 key="kpi" />,
  <FiCpu key="systems" />,
  <FiShield key="failure" />,
  <FiLink key="thread" />,
]

const Home = () => {
  return (
    <PageTemplate title={`Home - ${sohujiCopy.brand.name}`}>
      <section className="flex flex-col gap-10 items-center" data-aos="fade-up">
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

      <LogoList />

      <section className="grid grid-cols-1 gap-8 place-items-center lg:grid-cols-2">
        <aside className="w-full h-[400px] relative" data-aos="fade-right">
          <Image
            src="/images/about-illustration.webp"
            layout="fill"
            objectFit="contain"
            alt="Product and platform engineering"
          />
        </aside>
        <aside
          className="text-center sm:w-10/12 lg:text-left lg:w-full space-y-6"
          data-aos="fade-left"
        >
          <SectionSentence
            badge={home.studio.badge}
            title={home.studio.title}
            paragraph={home.studio.description}
          />
          <ul className="space-y-3 text-left">
            {home.studio.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="text-emerald-400 mt-1">•</span>
                <Text value={bullet} textStyle="SectionParagraph" />
              </li>
            ))}
          </ul>
          <Text value={home.studio.closing} textStyle="SectionParagraph" />
        </aside>
      </section>

      <LineDivider />

      <section className="flex flex-col gap-16 items-center">
        <div
          className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge={home.capabilitiesSection.badge}
            title={home.capabilitiesSection.title}
            paragraph={home.capabilitiesSection.description}
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {home.capabilitiesSection.items.map((item, index) => (
            <div key={item.title} data-aos="fade-up">
              <FeatureCard
                title={item.title}
                description={item.description}
                icon={capabilityIcons[index]}
              />
            </div>
          ))}
        </div>
        <ButtonLink
          value="View capabilities"
          href="/service"
          color="white"
          style="light"
          size="small"
        />
      </section>

      <LineDivider />

      <section className="flex flex-col gap-16 items-center">
        <div
          className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge={home.principlesSection.badge}
            title={principles.title}
            paragraph={principles.description}
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2">
          {principles.items.map((item, index) => (
            <div key={item.title} data-aos="fade-up">
              <FeatureCard
                title={item.title}
                description={item.description}
                icon={principleIcons[index]}
              />
            </div>
          ))}
        </div>
        <ButtonLink
          value="View principles"
          href="/principles"
          color="white"
          style="light"
          size="small"
        />
      </section>

      <LineDivider />

      <section className="flex flex-col gap-16 items-center">
        <div
          className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge={home.deliverySection.badge}
            title={delivery.title}
            paragraph={delivery.description}
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-2">
          {delivery.steps.map((step, index) => (
            <div key={step.badge} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <SectionSentence
                badge={step.badge}
                title={step.title}
                paragraph={step.paragraph}
              />
            </div>
          ))}
        </div>
        <ButtonLink
          value="View delivery"
          href="/how-we-work"
          color="white"
          style="light"
          size="small"
        />
      </section>

      <LineDivider />

      <section className="flex flex-col gap-10 items-center">
        <div
          className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12 space-y-4"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge={home.faqSection.badge}
            title={home.faqSection.title}
          />
          <Text value={home.faqSection.hint} textStyle="SectionParagraph" />
        </div>
        <div className="w-full" data-aos="fade-up">
          <FaqList faqs={faq.items} />
        </div>
        <ButtonLink
          value="View all FAQ"
          href="/faq"
          color="white"
          style="light"
          size="small"
        />
      </section>
    </PageTemplate>
  )
}

export default Home
