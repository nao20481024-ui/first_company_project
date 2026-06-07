import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import SelectGroup from 'components/molecules/FormGroup/SelectGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { ja, sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'

const { discovery, brand } = sohujiCopy

const Quote = () => {
  return (
    <>
      <PageTemplate title={`${discovery.badge} - ${brand.name}`}>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title={discovery.title}
                description={discovery.description}
                badge={discovery.badge}
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value={ja('Read FAQ', 'FAQを読む')}
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label={ja('Name', 'お名前')} />
                <InputGroup label={ja('Email', 'メール')} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label={ja('Company', '会社名')} />
                <SelectGroup
                  label={ja('Focus area', '重点領域')}
                  options={[
                    { label: ja('Agentic AI', 'エージェント型AI'), value: 'agentic' },
                    { label: ja('RAG & retrieval', 'RAG・検索'), value: 'rag' },
                    { label: ja('n8n & automation', 'n8n・自動化'), value: 'n8n' },
                    { label: ja('Operator UI', '運用者向けUI'), value: 'ui' },
                  ]}
                />
              </div>
              <TextAreaGroup label={ja('Describe your stack and goals', 'スタックと目標')} />
              <Button value={discovery.submit} />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote
