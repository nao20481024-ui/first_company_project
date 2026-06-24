import FeatureCard from 'components/molecules/Card/FeatureCard'
import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiActivity,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiShield,
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
import { sohujiCopy } from 'constants/sohujiCopy'

const { capabilities, brand, home } = sohujiCopy

const capabilityIcons = [
  <FiCpu key="agentic" />,
  <FiDatabase key="rag" />,
  <FiGitBranch key="n8n" />,
  <FiLayers key="mcp" />,
  <FiActivity key="obs" />,
  <FiShield key="product" />,
]

const Capabilities = () => {
  return (
    <>
      <PageTemplate title={`${capabilities.badge} - ${brand.name}`}>
        <section className="grid place-items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge={capabilities.badge}
              title={capabilities.title}
              description={capabilities.description}
            />
          </div>
        </section>
        <LineDivider />
        <section className="flex flex-col gap-16 items-center">
          <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {home.capabilitiesSection.items.map((item, index) => (
              <div key={item.title}>
                <FeatureCard
                  title={item.title}
                  description={item.description}
                  icon={capabilityIcons[index]}
                />
              </div>
            ))}
          </div>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full">
            <figure className="w-full h-[315px] relative">
              <Image
                src="/images/ui-design-illustration.svg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-fill"
                alt="Agentic AI systems"
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge={capabilities.agentic.badge}
                title={capabilities.agentic.title}
                paragraph={capabilities.agentic.paragraph}
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Tool schemas"
                  description="Typed function calling with guardrails for support, GTM, and ops."
                  icon={<FiCpu />}
                />
                <SmallCardIcon
                  title="Eval harnesses"
                  description="Offline eval sets and refusal tracking before customer-facing rollout."
                  icon={<FiActivity />}
                />
              </aside>
              <TextArrowLink label="Capability detail" href="/capabilities/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge={capabilities.ragMcp.badge}
                title={capabilities.ragMcp.title}
                paragraph={capabilities.ragMcp.paragraph}
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiDatabase />}
                  title="RAG & knowledge operations"
                />
                <CardListIcon
                  icon={<FiLayers />}
                  title="Integration tool surfaces"
                />
                <CardListIcon
                  icon={<FiShield />}
                  title="Least-privilege access"
                />
              </aside>
              <TextArrowLink label="Capability detail" href="/capabilities/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full">
            <figure className="w-full h-[450px] relative">
              <Image
                src="/images/development-illustration.svg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-fill"
                alt="Integration and retrieval architecture"
              />
            </figure>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full">
            <figure className="w-full h-[545px] relative">
              <Image
                src="/images/maintenance-illustration.svg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-fill"
                alt="Workflow operations"
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge={capabilities.n8nObs.badge}
                title={capabilities.n8nObs.title}
                paragraph={capabilities.n8nObs.paragraph}
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem
                  icon={<FiGitBranch />}
                  value="Sub-workflows & dead-letter paths"
                />
                <IconListItem
                  icon={<FiActivity />}
                  value="Token & latency SLOs"
                />
                <IconListItem
                  icon={<FiCpu />}
                  value="Native AI agent nodes"
                />
                <IconListItem
                  icon={<FiShield />}
                  value="Audit-ready logs"
                />
              </aside>
              <TextArrowLink label="Capability detail" href="/capabilities/detail" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Capabilities
