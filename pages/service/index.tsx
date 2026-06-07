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
import { ja, sohujiCopy } from 'constants/sohujiCopy'

const { capabilities, brand, home } = sohujiCopy

const capabilityIcons = [
  <FiCpu key="agentic" />,
  <FiDatabase key="rag" />,
  <FiGitBranch key="n8n" />,
  <FiLayers key="mcp" />,
  <FiActivity key="obs" />,
  <FiShield key="product" />,
]

const Services = () => {
  return (
    <>
      <PageTemplate title={`${capabilities.badge} - ${brand.name}`}>
        <section className="grid place-items-center" data-aos="zoom-in-up">
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
              <div key={item.title} data-aos="fade-up">
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
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt="Agentic AI systems"
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
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
                  title={ja('Tool schemas', 'ツールスキーマ')}
                  description={ja(
                    'Typed function calling with guardrails for support, GTM, and ops.',
                    'サポート・GTM・運用向けガードレール付き関数呼び出し'
                  )}
                  icon={<FiCpu />}
                />
                <SmallCardIcon
                  title={ja('Eval harnesses', '評価ハーネス')}
                  description={ja(
                    'Offline eval sets and refusal tracking before customer-facing rollout.',
                    '顧客向けロールアウト前のオフライン評価と拒否率追跡'
                  )}
                  icon={<FiActivity />}
                />
              </aside>
              <TextArrowLink label={ja('Capability detail', '機能詳細')} href="/service/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
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
                  title={ja('RAG & knowledge operations', 'RAGとナレッジ運用')}
                />
                <CardListIcon
                  icon={<FiLayers />}
                  title={ja('MCP-style tool surfaces', 'MCP型ツール面')}
                />
                <CardListIcon
                  icon={<FiShield />}
                  title={ja('Least-privilege access', '最小権限アクセス')}
                />
              </aside>
              <TextArrowLink label={ja('Capability detail', '機能詳細')} href="/service/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt="Integration and retrieval architecture"
              />
            </figure>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt="n8n workflow operations"
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
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
                  value={ja('Sub-workflows & DLQ paths', 'サブワークフローとDLQ')}
                />
                <IconListItem
                  icon={<FiActivity />}
                  value={ja('Token & latency SLOs', 'トークン・レイテンシSLO')}
                />
                <IconListItem
                  icon={<FiCpu />}
                  value={ja('Native AI Agent nodes', 'ネイティブAI Agentノード')}
                />
                <IconListItem
                  icon={<FiShield />}
                  value={ja('Audit-ready logs', '監査対応ログ')}
                />
              </aside>
              <TextArrowLink label={ja('Capability detail', '機能詳細')} href="/service/detail" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Services
