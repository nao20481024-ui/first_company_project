import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import Text from 'components/atoms/Text'
import { ja, sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'

const { brand, nav } = sohujiCopy

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand variant="footer" />
            <div className="max-w-sm">
              <Text value={brand.tagline} textStyle="SectionParagraph" />
              <Text value={brand.footerLine} textStyle="SectionParagraph" />
              <Text
                value={brand.copyright(new Date().getFullYear())}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value={ja('SOLUTIONS', 'ソリューション')} textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value={ja('Agentic AI & RAG', 'エージェント型AIとRAG')}
                  href="/service/detail"
                />
                <NavLink
                  value={ja('MCP Integrations', 'MCP型統合')}
                  href="/service/detail"
                />
                <NavLink
                  value={ja('n8n Orchestration', 'n8nオーケストレーション')}
                  href="/service/detail"
                />
                <NavLink
                  value={ja('Observability & Evals', '可観測性と評価')}
                  href="/service/detail"
                />
                <NavLink
                  value={ja('Operator UIs', '運用者向けUI')}
                  href="/service/detail"
                />
                <NavLink value={ja('Engagement', 'エンゲージメント')} href="/pricing" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value={ja('COMPANY', '会社')} textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value={nav.principles} href="/principles" />
                <NavLink value={nav.delivery} href="/how-we-work" />
                <NavLink value={nav.contact} href="/contact" />
                <NavLink value={nav.solutions} href="/solutions" />
                <NavLink value={nav.discovery} href="/quote" />
                <NavLink value={ja('Privacy Policy', 'プライバシーポリシー')} href="/privacy-policy" />
                <NavLink value={ja('Term of Service', '利用規約')} href="/term-of-service" />
                <NavLink value={ja('Jobs', '採用')} href="/jobs" />
                <NavLink value={ja('Blogs', 'ブログ')} href="/blog" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value={ja('RESOURCES', 'リソース')} textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value={ja('Support', 'サポート')} href="/support" />
                <NavLink value={ja('Documentation', 'ドキュメント')} href="/documentation" />
                <NavLink value={ja('License', 'ライセンス')} href="/license" />
                <NavLink value={ja('Sitemap', 'サイトマップ')} href="/sitemap" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
