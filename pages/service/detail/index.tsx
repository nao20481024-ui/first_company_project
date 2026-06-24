import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard, {
  FeatureCardProps,
} from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FiActivity,
  FiCpu,
  FiGitBranch,
  FiLayers,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi'
import randomString from 'utils/randomString'

const ServiceDetail = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `How do you ship RAG that survives production traffic?`,
      description: `Retrieval is treated as a data product: connectors, chunking and metadata, hybrid search where ROI is clear, staleness detection, and answers constrained to cited context. We gate rollout behind scope limits, policy prompts, and PII redaction.`,
    },
    {
      title: `Where do you draw the line between agents and deterministic workflows?`,
      description: `Ambiguous work gets tool-augmented agent loops with budgets and timeouts; money-moving and SLA-critical steps live in explicit graphs with typed I/O and idempotency keys. HITL gates prevent silent changes to authoritative state.`,
    },
    {
      title: `Which n8n patterns do you standardize for scale?`,
      description: `Composable sub-workflows, dedicated error and DLQ paths, queue mode when throughput requires it, secrets via your vault, execution records suitable for replay, and alerting on failure rate, p95 latency, and queue depth.`,
    },
    {
      title: `How do you keep LLM calls inside n8n maintainable?`,
      description: `Orchestration stays in the graph; model policy lives in versioned prompts, structured outputs, and explicit schemas for tools and HTTP steps. Streaming when UX demands it; batching otherwise for simpler retries and cost attribution.`,
    },
    {
      title: `What does observability and cost control look like end to end?`,
      description: `Correlated request IDs across workflows and model calls, token and latency dashboards by route, redacted failure payloads for replays, concurrency caps aligned with provider limits, and staged rollouts when changes touch customer-visible behavior.`,
    },
    {
      title: `Do you build operator software on top of automations?`,
      description: `Yes—review queues, approvals, admin consoles, and external portals so teams override, annotate, and replay runs without touching the canvas. Those surfaces often close the loop into eval labels and improved retrieval or prompt versions.`,
    },
  ]
  const features: FeatureCardProps[] = [
    {
      title: 'Eval harnesses',
      description:
        'Held-out eval sets, precision/recall proxies, and refusal rates tracked before and after rollout.',
      icon: <FiActivity />,
    },
    {
      title: 'Tool contracts',
      description: `MCP-style typed surfaces with governed access and replay-friendly execution.`,
      icon: <FiLayers />,
    },
    {
      title: 'Versioned prompts',
      description: `Model policy in versioned prompts and explicit schemas—not ad-hoc canvas edits in production.`,
      icon: <FiCpu />,
    },
    {
      title: 'Trace correlation',
      description:
        'End-to-end traces across workflows and model calls with token and latency SLOs.',
      icon: <FiTrendingUp />,
    },
    {
      title: 'Failure-mode design',
      description: `Idempotency keys, bounded retries, poison-message handling, and crisp orchestration boundaries.`,
      icon: <FiShield />,
    },
    {
      title: 'Queue-aware n8n',
      description:
        'Sub-workflows, DLQ branches, and horizontal workers when throughput or long jobs require it.',
      icon: <FiGitBranch />,
    },
  ]
  return (
    <PageTemplate title="Capabilities - Sohuji">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="CAPABILITIES"
            title="Harden your AI and automation footprint for production traffic"
            description="We partner on agentic systems, retrieval pipelines, MCP-style integrations, and n8n operations—with evals, tracing, and release hygiene your platform org expects."
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src="/images/development-illustration.svg"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-fill"
              alt="Production AI and workflow architecture"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`From greenfield portals to hardening existing graphs and model routes, we scope to measurable outcomes and ship with staging paths, rollback, and runbooks—not slideware. <br> <br> Customer and internal web apps, agentic and RAG workloads, and n8n at queue-aware scale—all with observability, contracts, and release discipline expected of core infrastructure.`}
                textStyle={'SectionParagraph'}
              />
            </div>
            <ul className="list-square text-white text-base font-medium pl-5 grid gap-2.5">
              <li>RAG with eval harnesses, tool schemas, and guardrails</li>
              <li>MCP-style exposure with HITL gates and mutation guards</li>
              <li>Operator UIs for review queues, approvals, and replay</li>
              <li>Trace-driven iteration after cutover, not ad-hoc prompt edits</li>
            </ul>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="DELIVERY"
            title="Production patterns we standardize across engagements"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            return (
              <div key={randomString(64)} data-aos="fade-up">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isNaked={true}
                />
              </div>
            )
          })}
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Production patterns: RAG, agents, n8n, observability, and operator software"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium">
          {`Need an architecture review? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline">
            <Link href={'/contact'}>Book a technical discovery session.</Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default ServiceDetail
