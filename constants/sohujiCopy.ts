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
    capabilities: 'Capabilities',
    delivery: 'Delivery',
    solutions: 'Solutions',
    about: 'About',
    discovery: 'Discovery',
  },
  home: {
    badge: 'LLM (大規模言語モデル) · AGENTS (エージェント) · EVALS (評価)',
    title:
      'Production LLM (本番向けLLM) and agentic systems (エージェント型システム)',
    description:
      'Tool use (ツール利用), structured outputs (構造化出力), offline evals (オフライン評価), and telemetry (テレメトリ) keep model behavior (モデル挙動) measurable and operable under production traffic (本番トラフィック).',
    ctaDiscovery: ja('Book technical discovery', '技術ディスカバリー'),
    ctaCapabilities: ja('View capabilities', '機能を見る'),
    features: [
      {
        title: ja('Agentic AI', 'エージェント型AI'),
        description:
          'Production assistants with tool/function calling (ツール／関数呼び出し), structured outputs (構造化出力), and HITL checkpoints (人による確認ポイント)—grounded in your tickets, docs, and CRM (顧客管理) data.',
      },
      {
        title: ja('MCP Integrations', 'MCP型統合'),
        description:
          'Typed tool surfaces and HTTP contracts (HTTP契約) connecting LLMs (大規模言語モデル) and workflows to warehouses, CRMs, and internal APIs—with governed access and least privilege (最小権限).',
      },
      {
        title: ja('n8n Orchestration', 'n8nオーケストレーション'),
        description:
          'Graphs built for scale: sub-workflows, error and DLQ branches (デッドレターキュー), queue mode–friendly execution (キューモード向け実行), and native AI Agent nodes.',
      },
    ],
    delivery: {
      badge: ja('DELIVERY', 'デリバリー'),
      title: ja('Discovery through operated systems', '運用システムまでのディスカバリー'),
      paragraph:
        'Structured phases—risk framing (リスクの枠組み), written contracts (契約・仕様の文書化), staged integration (段階的統合), and trace-driven iteration (トレース駆動の改善)—aligned with platform and security stakeholders.',
    },
    operatingModel: {
      badge: ja('OPERATING MODEL', '運用モデル'),
      title: ja(
        'Single thread: UX (ユーザー体験) ↔ integrations',
        'UIから統合契約まで一つのスレッド'
      ),
      paragraph:
        'One accountable squad ships operator UI (運用者向けUI) and the glue layer together—tighter feedback loops from first tool spec to a workflow your team runs daily.',
      cta: ja('Discuss your stack', 'スタックを相談する'),
    },
    solutions: {
      badge: ja('SOLUTIONS', 'ソリューション'),
      title: ja(
        'Production systems (本番システム), not experiments',
        '実験ではなく本番システム'
      ),
      items: [
        {
          title: ja('Agent review queue portal', 'エージェントレビューキュー'),
          description:
            'Operator UI (運用者向けUI) for approvals (承認), annotations (注釈), and replay (リプレイ) on agentic workflows (エージェント型ワークフロー).',
        },
        {
          title: ja('RAG knowledge ops pipeline', 'RAGナレッジ運用'),
          description:
            'Ingestion (取り込み), hybrid retrieval (ハイブリッド検索), citations (引用), and refresh jobs (更新ジョブ) for customer-facing support.',
        },
      ],
    },
    engagement: {
      badge: ja('GET STARTED', 'はじめる'),
      title: ja(
        'Engagements mapped to measurable outcomes, not slideware',
        'スライドではなく測定可能な成果に紐づく'
      ),
      phases: [
        {
          title: ja('Discovery', 'ディスカバリー'),
          features: [
            ja('Outcome alignment', '成果の整合'),
            ja('Data class review', 'データ分類レビュー'),
            ja('Risk framing', 'リスクの枠組み'),
            ja('Architecture sketch', 'アーキテクチャ概要'),
          ],
        },
        {
          title: ja('Build & Integrate', '構築・統合'),
          features: [
            ja('UIs & model routes', 'UIとモデルルート'),
            ja('n8n graphs & connectors', 'n8nグラフとコネクタ'),
            ja('Feature-flagged staging', 'フィーチャーフラグ付きステージング'),
            ja('Rollback paths', 'ロールバック経路'),
          ],
        },
        {
          title: ja('Operate & Iterate', '運用・改善'),
          features: [
            ja('Dashboards & alerts', 'ダッシュボードとアラート'),
            ja('Eval-driven improvements', '評価駆動の改善'),
            ja('Trace correlation', 'トレース相関'),
            ja('Runbook handoff', '運用手順書の引き渡し'),
          ],
        },
      ],
    },
    reference: {
      badge: ja('REFERENCE', '参考'),
      title: ja(
        'Production bar for AI, workflows, and product',
        'AI・ワークフロー・プロダクトの本番基準'
      ),
    },
  },
  about: {
    badge: ja('ABOUT', '概要'),
    title: ja(
      'Product and platform engineering (プラットフォームエンジニアリング) for AI-led operations',
      'AI主導の運用のためのプロダクト・プラットフォームエンジニアリング'
    ),
    description:
      'Sohuji (ソウフジ) is a Japan-based practice shipping full-stack software, production LLM (大規模言語モデル) systems, and n8n-backed automation (自動化)—with observability (可観測性), contracts (契約・インターフェース定義), and release discipline (リリース規律) expected of core infrastructure.',
    principles: {
      badge: ja('PRINCIPLES', '原則'),
      title:
        'SLO (サービスレベル目標)-minded delivery with KPI (重要業績評価指標)-linked scope and failure-mode–aware automation (障害モードを意識した自動化)',
    },
    capabilities: {
      badge: ja('CAPABILITIES', '機能'),
      title:
        'Agentic AI (エージェント型AI), retrieval systems (検索システム), MCP-style integrations (MCP型統合), and operator-grade product surfaces (運用者向けプロダクト)',
    },
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
      'Harden your AI and automation footprint (AI・自動化の本番耐性)—with evals (評価), tracing (トレース), and release hygiene (リリース衛生) your platform org expects.',
    ctaDiscovery: ja('Book technical discovery', '技術ディスカバリー'),
    ctaFaq: ja('View FAQ', 'FAQを見る'),
  },
}
