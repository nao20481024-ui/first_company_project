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
      badge: ja('SCOPE OF WORK', '作業範囲'),
      title: ja('Capabilities', '機能'),
      description:
        'Agentic AI (エージェント型AI), retrieval systems (検索システム), MCP-style integrations (MCP型統合), n8n orchestration (オーケストレーション), and operator-grade product surfaces (運用者向けプロダクト)—delivered as production systems (本番システム), not experiments (実験).',
      items: [
        {
          title: ja('Agentic AI & copilots', 'エージェント型AIと業務支援AI'),
          description:
            'Production assistants with tool/function calling (ツール／関数呼び出し), structured outputs (構造化出力), and HITL checkpoints (人による確認ポイント)—grounded in your tickets, docs, and CRM (顧客管理) data with offline evals (オフライン評価) and production telemetry (本番テレメトリ).',
        },
        {
          title: ja('MCP-style integration fabric', 'MCP型統合基盤'),
          description:
            'Typed tool surfaces and HTTP contracts (HTTP契約) that connect LLMs (大規模言語モデル) and workflows to warehouses, CRMs, support stacks, and internal APIs—governed access, least privilege (最小権限), and replay-friendly execution.',
        },
        {
          title: ja('n8n orchestration & AI nodes', 'n8nオーケストレーションとAIノード'),
          description:
            'Graphs built for scale: sub-workflows, explicit error and DLQ branches (デッドレターキュー), queue mode–friendly execution (キューモード向け実行), streaming (ストリーミング) where UX (ユーザー体験) needs it, and native AI Agent nodes.',
        },
        {
          title: ja('RAG & knowledge operations', 'RAGとナレッジ運用'),
          description:
            'Ingestion pipelines (取り込みパイプライン), chunking (チャンク分割) and metadata design, hybrid and vector retrieval (ベクトル検索), refresh jobs, citations (引用), scope limits, and redaction (マスキング).',
        },
        {
          title: ja('Observability, evals & safety', '可観測性・評価・安全性'),
          description:
            'End-to-end traces (分散トレース), prompt and graph versioning, token and latency SLOs (サービスレベル目標), PII handling (個人情報の取り扱い), and audit-ready logs (監査対応ログ).',
        },
        {
          title: ja('Product surfaces & internal tooling', 'プロダクト面と社内ツール'),
          description:
            'Next.js-grade operator UIs (運用者向けUI) on top of your automations: review queues (レビューキュー), approvals (承認), admin consoles (管理コンソール), and customer portals (顧客ポータル).',
        },
      ],
    },
    principlesSection: {
      badge: ja('OPERATING MODEL', '運用モデル'),
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
    badge: ja('OPERATING MODEL', '運用モデル'),
    title: ja(
      'Production bar for AI, workflows, and product',
      'AI・ワークフロー・プロダクトの本番基準',
    ),
    description:
      'SLO (サービスレベル目標)-minded delivery: KPI (重要業績評価指標)-linked scope, failure-mode–aware automation (障害モードを意識した自動化), traceable model and graph changes, and one squad accountable from UI through integration contracts (統合契約・インターフェース).',
    items: [
      {
        title: ja('KPI-anchored scope', 'KPIに紐づくスコープ'),
        description:
          'Engagements map to metrics you already instrument—MTTR (平均修復時間), lead velocity, cost-to-serve, cycle time—so agent and n8n work is justified by production signals (本番シグナル), not narrative alone.',
      },
      {
        title: ja('2026-shaped systems design', '2026年型システム設計'),
        description:
          'RAG (検索拡張生成) with eval harnesses (評価ハーネス), MCP-style tools (MCP型ツール), queue-aware n8n (キュー意識n8n), and versioned prompts/graphs (版管理): architectures your platform org can trace, diff, and operate under real concurrency and failure modes (障害モード).',
      },
      {
        title: ja('Failure-mode–first automation', '障害モード優先の自動化'),
        description:
          'Idempotency keys (冪等性キー), bounded retries (上限付き再試行), poison-message handling (毒メッセージ処理), and crisp boundaries between orchestration (オーケストレーション), domain services, and persistence—so graphs degrade predictably when load and edge cases spike.',
      },
      {
        title: ja('Single thread: UX ↔ integrations', 'UXと統合の一本化'),
        description:
          'One accountable squad ships operator UI (運用者向けUI) and the glue layer together—tighter feedback loops from first tool spec to a workflow your team runs daily without ping-pong across vendors.',
      },
    ],
  },
  capabilities: {
    badge: ja('SCOPE OF WORK', '作業範囲'),
    title: ja('Capabilities', '機能'),
    description:
      'Agentic AI (エージェント型AI), retrieval systems (検索システム), MCP-style integrations (MCP型統合), n8n orchestration (オーケストレーション), and operator-grade product surfaces (運用者向けプロダクト)—delivered as production systems (本番システム), not experiments (実験).',
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
    badge: ja('SOLUTIONS', 'ソリューション'),
    title: ja(
      'Production systems for agentic AI, retrieval, and workflow automation',
      'エージェント型AI・検索・ワークフロー自動化の本番システム',
    ),
    description:
      'Solution lanes (ソリューション領域) mapped to how teams buy and operate AI-led software (AI主導ソフトウェア)—from product engineering (プロダクトエンジニアリング) through agentic workloads (エージェント型ワークロード) and workflow ops (ワークフロー運用).',
    lanes: [
      {
        title: ja('Web & product engineering', 'Webとプロダクトエンジニアリング'),
        description:
          'Customer and internal web apps (顧客向け・社内Webアプリ) with performance (パフォーマンス), accessibility (アクセシビリティ), and maintainable frontends aligned to your design system (デザインシステム).',
        href: '/service/detail',
      },
      {
        title: ja('Agentic AI & RAG', 'エージェント型AIとRAG'),
        description:
          'Production assistants (本番アシスタント), retrieval pipelines (検索パイプライン), eval harnesses (評価ハーネス), tool schemas (ツールスキーマ), and operator-grade copilots (運用者向けコパイロット) grounded in your data.',
        href: '/service/detail',
      },
      {
        title: ja('n8n & workflow ops', 'n8nとワークフロー運用'),
        description:
          'Queue-aware orchestration (キュー意識オーケストレーション), sub-workflows (サブワークフロー), DLQ paths (デッドレターキュー), credentials hygiene (認証情報管理), and AI Agent nodes at production scale (本番スケール).',
        href: '/service/detail',
      },
    ],
    caseStudies: {
      badge: ja('CASE STUDIES', '事例'),
      title: ja('Production systems, not experiments', '実験ではない本番システム'),
    },
    caseStudyItems: [
      {
        title: ja('Agent review queue portal', 'エージェントレビューキューポータル'),
        description:
          'Operator UI (運用者向けUI) for approvals (承認), annotations (注釈), and replay on agentic workflows (エージェント型ワークフロー).',
      },
      {
        title: ja('RAG knowledge ops pipeline', 'RAGナレッジ運用パイプライン'),
        description:
          'Ingestion (取り込み), hybrid retrieval (ハイブリッド検索), citations (引用), and refresh jobs for support (サポート).',
      },
      {
        title: ja('MCP integration fabric', 'MCP統合基盤'),
        description:
          'Typed tool surfaces connecting LLMs to CRM, tickets, and internal APIs.',
      },
      {
        title: ja('Queue-aware n8n operations', 'キュー意識n8n運用'),
        description:
          'Sub-workflows (サブワークフロー), DLQ branches (デッドレターキュー), and AI Agent nodes at production scale (本番スケール).',
      },
    ],
    ctaDiscovery: ja('Book technical discovery', '技術ディスカバリーを予約'),
    learnMore: ja('Learn more', '詳しく見る'),
  },
}
