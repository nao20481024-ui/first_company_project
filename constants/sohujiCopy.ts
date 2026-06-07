/** Bilingual gloss: English (Japanese) — matches sohuji.com style */
export const ja = (en: string, jp: string) => `${en} (${jp})`

export const sohujiCopy = {
  brand: {
    name: 'Sohuji (ソウフジ)',
    tagline:
      'Production-oriented software: agentic AI (エージェント型AI), retrieval (検索) and tool contracts (ツール契約), n8n orchestration (オーケストレーション), and operator interfaces (運用者向けUI)—shipped with observability (可観測性) and release discipline (リリース規律).',
    footerLine:
      'Full-stack delivery, LLM (大規模言語モデル) systems, MCP-style integrations (MCP型統合), and workflow automation (ワークフロー自動化) at operational scale.',
    copyright: (year: number) =>
      `© ${year} Sohuji (ソウフジ). All rights reserved.`,
  },
  meta: {
    description:
      'Sohuji (ソウフジ) — production LLM (本番向けLLM), agentic AI (エージェント型AI), RAG (検索拡張生成), n8n automation (自動化), and operator UIs (運用者向けUI) with observability (可観測性) and release discipline (リリース規律).',
  },
  nav: {
    home: 'Home',
    capabilities: 'Capabilities',
    principles: 'Principles',
    delivery: 'Delivery',
    contact: 'Contact',
    solutions: 'Solutions',
    discovery: 'Discovery',
  },
  home: {
    badge: 'LLM (大規模言語モデル) · AGENTS (エージェント) · EVALS (評価)',
    title:
      'Production LLM (本番向けLLM) and agentic systems (エージェント型システム)',
    description:
      'Tool use (ツール利用), structured outputs (構造化出力), offline evals (オフライン評価), and telemetry (テレメトリ) keep model behavior (モデル挙動) measurable and operable under production traffic (本番トラフィック).',
    ctaDiscovery: 'Discovery',
    ctaCapabilities: 'View capabilities',
    studio: {
      badge: 'STUDIO',
      title: 'Product and platform engineering for AI-led operations',
      description:
        'Sohuji is a Japan-based practice shipping full-stack software, production LLM systems, and n8n-backed automation—with observability, contracts, and release discipline expected of core infrastructure.',
      bullets: [
        'Customer and internal web apps: performance, accessibility, and maintainable frontends aligned to your design system.',
        'Agentic and RAG workloads with eval harnesses, tool schemas, and guardrails suited to support, GTM, and ops.',
        'n8n at queue-aware scale—sub-workflows, error topology, credentials hygiene, and metrics that surface before users do.',
      ],
      closing:
        'From greenfield portals to hardening existing graphs and model routes, we scope to measurable outcomes and ship with staging paths, rollback, and runbooks—not slideware.',
    },
    capabilitiesSection: {
      badge: 'SCOPE OF WORK',
      title: 'Capabilities',
      description:
        'Agentic AI, retrieval systems, MCP-style integrations, n8n orchestration, and operator-grade product surfaces—delivered as production systems, not experiments.',
      items: [
        {
          title: 'Agentic AI & copilots',
          description:
            'Production assistants with tool/function calling, structured outputs, and HITL checkpoints—grounded in your tickets, docs, and CRM data with offline evals and production telemetry.',
        },
        {
          title: 'MCP-style integration fabric',
          description:
            'Typed tool surfaces and HTTP contracts that connect LLMs and workflows to warehouses, CRMs, support stacks, and internal APIs.',
        },
        {
          title: 'n8n orchestration & AI nodes',
          description:
            'Graphs built for scale: sub-workflows, explicit error and DLQ branches, queue mode–friendly execution, streaming where UX needs it, and native AI Agent nodes.',
        },
        {
          title: 'RAG & knowledge operations',
          description:
            'Ingestion pipelines, chunking and metadata design, hybrid and vector retrieval, refresh jobs, citations, scope limits, and redaction.',
        },
        {
          title: 'Observability, evals & safety',
          description:
            'End-to-end traces, prompt and graph versioning, token and latency SLOs, PII handling, and audit-ready logs.',
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
      hint: 'Tap a question to expand. For architecture reviews or procurement packets, use the contact section.',
    },
    engagement: {
      badge: 'GET STARTED',
      title: 'Engagements mapped to measurable outcomes, not slideware',
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
            'n8n graphs & connectors',
            'Feature-flagged staging',
            'Rollback paths',
          ],
        },
        {
          title: 'Operate & Iterate',
          features: [
            'Dashboards & alerts',
            'Eval-driven improvements',
            'Trace correlation',
            'Runbook handoff',
          ],
        },
      ],
    },
  },
  principles: {
    badge: 'PRINCIPLES',
    title: 'Production bar for AI, workflows, and product',
    description:
      'SLO-minded delivery: KPI-linked scope, failure-mode–aware automation, traceable model and graph changes, and one squad accountable from UI through integration contracts.',
    items: [
      {
        title: 'KPI-anchored scope',
        description:
          'Engagements map to metrics you already instrument—MTTR, lead velocity, cost-to-serve, cycle time—so agent and n8n work is justified by production signals, not narrative alone.',
      },
      {
        title: '2026-shaped systems design',
        description:
          'RAG with eval harnesses, MCP-style tools, queue-aware n8n, and versioned prompts/graphs: architectures your platform org can trace, diff, and operate under real concurrency and failure modes.',
      },
      {
        title: 'Failure-mode–first automation',
        description:
          'Idempotency keys, bounded retries, poison-message handling, and crisp boundaries between orchestration, domain services, and persistence—so graphs degrade predictably when load and edge cases spike.',
      },
      {
        title: 'Single thread: UX ↔ integrations',
        description:
          'One accountable squad ships operator UI and the glue layer together—tighter feedback loops from first tool spec to a workflow your team runs daily without ping-pong across vendors.',
      },
    ],
  },
  capabilities: {
    badge: ja('CAPABILITIES', '機能'),
    title:
      'Agentic AI (エージェント型AI), retrieval systems (検索システム), MCP-style integrations (MCP型統合), n8n orchestration (オーケストレーション), and operator-grade product surfaces (運用者向けプロダクト)',
    description:
      'Delivered as production systems (本番システム), not experiments (実験)—with eval harnesses (評価ハーネス), tool schemas (ツールスキーマ), and guardrails (ガードレール).',
    agentic: {
      badge: ja('AGENTIC AI', 'エージェント型AI'),
      title:
        'Production assistants with tool/function calling (ツール／関数呼び出し), structured outputs (構造化出力), and HITL checkpoints (人による確認ポイント)',
      paragraph:
        'Grounded in your tickets, docs, and CRM (顧客管理) data with offline evals (オフライン評価) and production telemetry (本番テレメトリ) so quality compounds instead of drifting.',
    },
    ragMcp: {
      badge: ja('RAG & MCP', '検索拡張生成とMCP'),
      title:
        'Retrieval pipelines (検索パイプライン) and MCP-style integration fabric (MCP型統合基盤)',
      paragraph:
        'Ingestion pipelines (取り込みパイプライン), chunking (チャンク分割), hybrid and vector retrieval (ベクトル検索), citations (引用), and typed HTTP contracts (HTTP契約).',
    },
    n8nObs: {
      badge: ja('N8N & OBSERVABILITY', 'n8nと可観測性'),
      title:
        'Queue-aware orchestration (キュー意識オーケストレーション) with traces (トレース), evals (評価), and operator interfaces (運用者向けUI)',
      paragraph:
        'Sub-workflows, error and DLQ paths (デッドレターキュー), streaming (ストリーミング) where UX (ユーザー体験) needs it, and dashboards that surface failure before users do.',
    },
  },
  delivery: {
    badge: ja('DELIVERY', 'デリバリー'),
    title: ja('Discovery through operated systems', '運用システムまでのディスカバリー'),
    description:
      'Structured phases—risk framing (リスクの枠組み), written contracts (契約・仕様の文書化), staged integration (段階的統合), and trace-driven iteration (トレース駆動の改善).',
    steps: [
      {
        badge: '01',
        title: ja('Discovery & risk framing', 'ディスカバリーとリスクの枠組み'),
        paragraph:
          'We align on outcomes, data classes (データ分類), compliance boundaries (コンプライアンス境界), and the split between exploratory agents (探索的エージェント) and deterministic workflow steps (決定論的ワークフロー).',
      },
      {
        badge: '02',
        title: ja('Architecture & contracts', 'アーキテクチャと契約'),
        paragraph:
          'We document retrieval strategy (検索戦略), tool schemas (ツールスキーマ), workflow topology (トポロジー), SLOs (サービスレベル目標), and how you will measure quality, cost, and reliability once traffic is real.',
      },
      {
        badge: '03',
        title: ja('Build, integrate & stage', '構築・統合・ステージング'),
        paragraph:
          'We ship UIs, n8n graphs, model routes, and connectors behind feature flags (フィーチャーフラグ), synthetic and sampled test data, and rollback-friendly release paths (ロールバック).',
      },
      {
        badge: '04',
        title: ja('Operate, observe & iterate', '運用・観測・改善'),
        paragraph:
          'Cutover (本番切替) includes dashboards and alerts; improvements are driven by traces (トレース), eval scores (評価スコア), and operator feedback—not ad-hoc prompt edits in production.',
      },
    ],
  },
  contact: {
    badge: ja('CONTACT', 'お問い合わせ'),
    title: ja('Technical discovery session', '技術ディスカバリー'),
    description:
      'Reserve a slot or write below—we\'ll walk current stack (技術スタック), data boundaries (データ境界), workflow volume, and where agentic (エージェント型) vs. deterministic (決定論的) design fits your roadmap.',
    emailLabel: ja('Email', 'メール'),
    form: {
      name: ja('Name', 'お名前'),
      email: ja('Email', 'メール'),
      subject: ja('Subject', '件名'),
      message: ja('Message', 'メッセージ'),
      submit: ja('Send Message', 'メッセージを送る'),
    },
  },
  discovery: {
    badge: ja('DISCOVERY', '技術ディスカバリー'),
    title: ja('Discuss your stack', 'スタックを相談する'),
    description:
      'Tell us about agentic systems (エージェント型システム), retrieval pipelines (検索パイプライン), n8n graphs, or operator tooling (運用者向けツール)—we align on outcomes and data classes (データ分類) first.',
    submit: ja('Request discovery', 'ディスカバリーを依頼'),
  },
  faq: {
    badge: ja('FAQ', 'よくある質問'),
    title:
      'Production patterns (本番パターン): RAG (検索拡張生成), agents (エージェント), n8n, observability (可観測性), and operator software (運用者向けソフトウェア)',
    items: [
      {
        title: ja(
          'How do you ship RAG that survives production traffic?',
          '本番トラフィックに耐えるRAGの出し方'
        ),
        description:
          'Retrieval is treated as a data product: connectors, chunking (チャンク分割) and metadata, hybrid search where ROI (投資対効果) is clear, staleness detection, and answers constrained to cited context (引用コンテキスト). We gate rollout behind scope limits, policy prompts, and PII redaction (個人情報のマスキング).',
      },
      {
        title: ja(
          'Where do you draw the line between agents and deterministic workflows?',
          'エージェントとワークフローの境界'
        ),
        description:
          'Ambiguous work gets tool-augmented agent loops with budgets and timeouts; SLA (サービスレベル合意)-critical steps live in explicit graphs with typed I/O and idempotency keys (冪等性キー). HITL gates (人によるゲート) and mutation guards prevent silent changes to authoritative state.',
      },
      {
        title: ja(
          'Which n8n patterns do you standardize for scale?',
          'スケール向けn8nパターン'
        ),
        description:
          'Composable sub-workflows, dedicated error/DLQ paths (デッドレターキュー), queue mode (キューモード) and horizontal workers, secrets via your vault, execution records suitable for replay, and alerting on failure rate, p95 latency, and queue depth.',
      },
      {
        title: ja(
          'How do you keep LLM calls inside n8n maintainable?',
          'n8n内LLM呼び出しの保守性'
        ),
        description:
          'Orchestration (オーケストレーション) stays in the graph; model policy lives in versioned prompts, structured outputs (構造化出力), and explicit schemas. Streaming (ストリーミング) when UX demands it; batching otherwise for simpler retries and cost attribution.',
      },
      {
        title: ja(
          'What does observability and cost control look like end to end?',
          'エンドツーエンドの可観測性とコスト管理'
        ),
        description:
          'Correlated request IDs, token and latency dashboards by route, redacted failure payloads for n8n replays, concurrency caps aligned with provider limits, and staged rollouts—shadow, canary (カナリア), or cohort-based.',
      },
      {
        title: ja(
          'How do you satisfy security, residency, and vendor diligence?',
          'セキュリティ・データ所在地・ベンダーデューデリジェンス'
        ),
        description:
          'Data-flow maps across CRM, tickets, warehouse, and model vendors; regional endpoints or self-hosted workflow/inference where policy requires it. Written controls for encryption, RBAC (ロールベースアクセス制御), audit logs, and non-use of customer content for training unless contractually allowed.',
      },
      {
        title: ja(
          'Do you build operator software on top of automations?',
          '自動化の上に運用者向けソフトウェアを構築しますか'
        ),
        description:
          'Yes—review queues (レビューキュー), approvals (承認), admin consoles (管理コンソール), and external portals so teams override, annotate, and replay runs without touching the canvas. Those surfaces often close the loop into eval labels and improved retrieval or prompt versions.',
      },
    ],
  },
  callout: {
    title:
      'Harden your AI and automation footprint—with evals, tracing, and release hygiene your platform org expects.',
    ctaDiscovery: 'Discuss your stack',
    ctaFaq: 'View FAQ',
  },
  solutions: {
    badge: 'SOLUTIONS',
    title: 'Production systems for agentic AI, retrieval, and workflow automation',
    description:
      'Solution lanes mapped to how teams buy and operate AI-led software—from product engineering through agentic workloads and workflow ops.',
    lanes: [
      {
        title: 'Web & product engineering',
        description:
          'Customer and internal web apps with performance, accessibility, and maintainable frontends aligned to your design system.',
        href: '/service/detail',
      },
      {
        title: 'Agentic AI & RAG',
        description:
          'Production assistants, retrieval pipelines, eval harnesses, tool schemas, and operator-grade copilots grounded in your data.',
        href: '/service/detail',
      },
      {
        title: 'n8n & workflow ops',
        description:
          'Queue-aware orchestration, sub-workflows, DLQ paths, credentials hygiene, and AI Agent nodes at production scale.',
        href: '/service/detail',
      },
    ],
    caseStudies: [
      {
        title: 'Agent review queue portal',
        description:
          'Operator UI for approvals, annotations, and replay on agentic workflows.',
      },
      {
        title: 'RAG knowledge ops pipeline',
        description:
          'Ingestion, hybrid retrieval, citations, and refresh jobs for support.',
      },
      {
        title: 'MCP integration fabric',
        description:
          'Typed tool surfaces connecting LLMs to CRM, tickets, and internal APIs.',
      },
      {
        title: 'Queue-aware n8n operations',
        description:
          'Sub-workflows, DLQ branches, and AI Agent nodes at production scale.',
      },
    ],
  },
}
