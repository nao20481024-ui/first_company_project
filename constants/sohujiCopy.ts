export const sohujiCopy = {
  brand: {
    name: 'Dokyoai',
    tagline:
      'Dokyoai is a software engineering studio focused on production AI systems, workflow automation, and operator facing products.',
    footerLine:
      'We design, build, and operate LLM applications, retrieval pipelines, integrations, and internal tools for teams that need reliable software, not prototypes.',
    copyright: (year: number) =>
      `© ${year} Dokyoai. All rights reserved.`,
  },
  meta: {
    description:
      'Dokyoai builds production LLM systems, agentic AI workflows, RAG pipelines, and automation platforms with observability, security, and release discipline.',
  },
  nav: {
    home: 'Home',
    capabilities: 'Capabilities',
    principles: 'Principles',
    delivery: 'Delivery',
    contact: 'Contact',
  },
  home: {
    badge: 'LLM · AGENTS · EVALS',
    title: 'Production AI systems built for real operations',
    description:
      'We help teams ship agentic assistants, retrieval pipelines, and workflow automation with clear contracts, offline evaluation, and production telemetry, so model behavior stays measurable after launch.',
    ctaContact: 'Contact us',
    ctaCapabilities: 'View capabilities',
    studio: {
      badge: 'ABOUT',
      title: 'Engineering partner for AI led product and platform work',
      description:
        'Dokyoai is a software studio that ships full stack applications, production LLM systems, and workflow automation. Our work is scoped to measurable outcomes, with staging paths, rollback plans, and runbooks included from day one.',
      bullets: [
        'Customer and internal web apps with performance, accessibility, and maintainable frontends aligned to your design system.',
        'Agentic and RAG workloads with evaluation harnesses, tool schemas, and guardrails suited to support, GTM, and operations teams.',
        'Workflow orchestration at scale: sub workflows, error handling, credential hygiene, and metrics that surface issues before users do.',
      ],
      closing:
        'Whether you are starting from a greenfield portal or hardening an existing stack, we deliver working software with documentation, monitoring, and a clear handoff plan.',
    },
    capabilitiesSection: {
      badge: 'SCOPE OF WORK',
      title: 'Capabilities',
      description:
        'Agentic AI, retrieval systems, integration layers, workflow orchestration, and operator grade product surfaces, delivered as production systems, not experiments.',
      items: [
        {
          title: 'Agentic AI & copilots',
          description:
            'Production assistants with tool calling, structured outputs, and human in the loop checkpoints, grounded in your tickets, docs, and CRM data with offline evals and production telemetry.',
        },
        {
          title: 'Integration fabric',
          description:
            'Typed tool surfaces and HTTP contracts that connect LLMs and workflows to warehouses, CRMs, support stacks, and internal APIs, with governed access and least privilege.',
        },
        {
          title: 'Workflow orchestration & AI nodes',
          description:
            'Graphs built for scale: sub workflows, explicit error and dead letter branches, queue friendly execution, streaming where UX needs it, and native AI agent nodes.',
        },
        {
          title: 'RAG & knowledge operations',
          description:
            'Ingestion pipelines, chunking and metadata design, hybrid and vector retrieval, refresh jobs, citations, scope limits, and redaction.',
        },
        {
          title: 'Observability, evals & safety',
          description:
            'End to end traces, prompt and graph versioning, token and latency SLOs, PII handling, and audit ready logs.',
        },
        {
          title: 'Product surfaces & internal tooling',
          description:
            'Operator UIs on top of your automations: review queues, approvals, admin consoles, and customer portals.',
        },
      ],
    },
    principlesSection: {
      badge: 'OPERATING MODEL',
    },
    deliverySection: {
      badge: 'ENGAGEMENT LIFECYCLE',
    },
    faqSection: {
      badge: 'REFERENCE',
      title: 'FAQ: production patterns',
      hint: 'Tap a question to expand. For architecture reviews or procurement packets, use the contact page.',
    },
    engagement: {
      badge: 'GET STARTED',
      title: 'Engagements mapped to measurable outcomes',
      phases: [
        {
          title: 'Discovery',
          features: [
            'Outcome alignment',
            'Data class review',
            'Risk framing',
            'Architecture sketch',
          ],
        },
        {
          title: 'Build & Integrate',
          features: [
            'UIs & model routes',
            'Workflow graphs & connectors',
            'Feature flagged staging',
            'Rollback paths',
          ],
        },
        {
          title: 'Operate & Iterate',
          features: [
            'Dashboards & alerts',
            'Eval driven improvements',
            'Trace correlation',
            'Runbook handoff',
          ],
        },
      ],
    },
  },
  principles: {
    badge: 'OPERATING MODEL',
    title: 'Production bar for AI, workflows, and product',
    description:
      'SLO minded delivery: KPI linked scope, failure mode aware automation, traceable model and graph changes, and one accountable team from UI through integration contracts.',
    items: [
      {
        title: 'KPI anchored scope',
        description:
          'Engagements map to metrics you already instrument, including MTTR, lead velocity, cost to serve, and cycle time, so agent and workflow work is justified by production signals, not narrative alone.',
      },
      {
        title: 'Modern systems design',
        description:
          'RAG with eval harnesses, typed tool interfaces, queue aware orchestration, and versioned prompts and graphs: architectures your platform team can trace, diff, and operate under real concurrency and failure modes.',
      },
      {
        title: 'Failure mode first automation',
        description:
          'Idempotency keys, bounded retries, poison message handling, and crisp boundaries between orchestration, domain services, and persistence, so graphs degrade predictably when load and edge cases spike.',
      },
      {
        title: 'Single thread: UX and integrations',
        description:
          'One accountable team ships operator UI and the integration layer together, with tighter feedback loops from first tool spec to a workflow your team runs daily.',
      },
    ],
  },
  capabilities: {
    badge: 'SCOPE OF WORK',
    title: 'Capabilities',
    description:
      'Agentic AI, retrieval systems, integrations, workflow orchestration, and operator grade product surfaces, delivered as production systems, not experiments.',
    agentic: {
      badge: 'AGENTIC AI',
      title:
        'Production assistants with tool calling, structured outputs, and human in the loop checkpoints',
      paragraph:
        'Grounded in your tickets, docs, and CRM data with offline evals and production telemetry so quality compounds instead of drifting.',
    },
    ragMcp: {
      badge: 'RAG & INTEGRATIONS',
      title: 'Retrieval pipelines and integration fabric',
      paragraph:
        'Ingestion pipelines, chunking, hybrid and vector retrieval, citations, and typed HTTP contracts.',
    },
    n8nObs: {
      badge: 'WORKFLOWS & OBSERVABILITY',
      title: 'Queue aware orchestration with traces, evals, and operator interfaces',
      paragraph:
        'Sub workflows, error and dead letter paths, streaming where UX needs it, and dashboards that surface failure before users do.',
    },
  },
  delivery: {
    badge: 'DELIVERY',
    title: 'From discovery through operated systems',
    description:
      'Structured phases: risk framing, written contracts, staged integration, and trace driven iteration.',
    steps: [
      {
        badge: '01',
        title: 'Discovery & risk framing',
        paragraph:
          'We align on outcomes, data classes, compliance boundaries, and the split between exploratory agents and deterministic workflow steps.',
      },
      {
        badge: '02',
        title: 'Architecture & contracts',
        paragraph:
          'We document retrieval strategy, tool schemas, workflow topology, SLOs, and how you will measure quality, cost, and reliability once traffic is real.',
      },
      {
        badge: '03',
        title: 'Build, integrate & stage',
        paragraph:
          'We ship UIs, workflow graphs, model routes, and connectors behind feature flags, synthetic and sampled test data, and rollback friendly release paths.',
      },
      {
        badge: '04',
        title: 'Operate, observe & iterate',
        paragraph:
          'Cutover includes dashboards and alerts; improvements are driven by traces, eval scores, and operator feedback, not ad hoc prompt edits in production.',
      },
    ],
  },
  contact: {
    badge: 'CONTACT',
    title: 'Talk to our team',
    description:
      'Share your current stack, data boundaries, workflow volume, and roadmap. We will respond within two business days with next steps or a time to meet.',
    bookCall: {
      label: 'Book a call',
      value: 'Schedule a 30 minute discovery session',
      url: 'https://calendly.com/ryotaroaraki015/30min',
    },
    emailLabel: 'Email',
    emailAddress: 'nao20481024@gmail.com',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Message sent. We will get back to you within two business days.',
      error: 'Something went wrong. Please try again or email us directly.',
    },
  },
  faq: {
    badge: 'FAQ',
    title:
      'Production patterns: RAG, agents, workflows, observability, and operator software',
    items: [
      {
        title: 'How do you ship RAG that survives production traffic?',
        description:
          'Retrieval is treated as a data product: connectors, chunking and metadata, hybrid search where ROI is clear, staleness detection, and answers constrained to cited context. We gate rollout behind scope limits, policy prompts, and PII redaction.',
      },
      {
        title: 'Where do you draw the line between agents and deterministic workflows?',
        description:
          'Ambiguous work gets tool augmented agent loops with budgets and timeouts; SLA critical steps live in explicit graphs with typed I/O and idempotency keys. Human in the loop gates and mutation guards prevent silent changes to authoritative state.',
      },
      {
        title: 'Which workflow patterns do you standardize for scale?',
        description:
          'Composable sub workflows, dedicated error and dead letter paths, queue mode and horizontal workers, secrets via your vault, execution records suitable for replay, and alerting on failure rate, p95 latency, and queue depth.',
      },
      {
        title: 'How do you keep LLM calls inside workflows maintainable?',
        description:
          'Orchestration stays in the graph; model policy lives in versioned prompts, structured outputs, and explicit schemas. Streaming when UX demands it; batching otherwise for simpler retries and cost attribution.',
      },
      {
        title: 'What does observability and cost control look like end to end?',
        description:
          'Correlated request IDs, token and latency dashboards by route, redacted failure payloads for replays, concurrency caps aligned with provider limits, and staged rollouts: shadow, canary, or cohort based.',
      },
      {
        title: 'How do you satisfy security, residency, and vendor diligence?',
        description:
          'Data flow maps across CRM, tickets, warehouse, and model vendors; regional endpoints or self hosted workflow and inference where policy requires it. Written controls for encryption, RBAC, audit logs, and non use of customer content for training unless contractually allowed.',
      },
      {
        title: 'Do you build operator software on top of automations?',
        description:
          'Yes. Review queues, approvals, admin consoles, and external portals so teams override, annotate, and replay runs without touching the canvas. Those surfaces often close the loop into eval labels and improved retrieval or prompt versions.',
      },
    ],
  },
  callout: {
    title:
      'Ready to harden your AI and automation footprint? We bring evals, tracing, and release hygiene your platform team expects.',
    ctaContact: 'Contact us',
    ctaFaq: 'View FAQ',
  },
}
