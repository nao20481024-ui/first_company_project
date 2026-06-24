import LineDivider from 'components/atoms/LineDivider'
import FaqTabbar from 'components/molecules/FaqTabbar'
import PageSentence from 'components/molecules/PageSentence'
import FaqList from 'components/organisms/FaqList'
import PageTemplate from 'components/templates/PageTemplate'
import { sohujiCopy } from 'constants/sohujiCopy'
import React, { useEffect, useState } from 'react'
import getRandomItemsFromArray from 'utils/getRandomItemsFromArray'

const productionFaqs = [...sohujiCopy.faq.items]

const Faq = () => {
  const [randomFaqs, setRandomFaqs] = useState([
    productionFaqs,
    productionFaqs,
    productionFaqs,
    productionFaqs,
  ])
  const [activeFaq, setActiveFaq] = useState(productionFaqs)
  useEffect(() => {
    setRandomFaqs([
      productionFaqs,
      getRandomItemsFromArray(productionFaqs, 5),
      getRandomItemsFromArray(productionFaqs, 4),
      getRandomItemsFromArray(productionFaqs, 3),
    ])
  }, [])
  return (
    <PageTemplate title={`${sohujiCopy.faq.badge} - ${sohujiCopy.brand.name}`}>
      <section className="grid grid-cols-1 place-items-center">
        <div className="sm:w-10/12 md:8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence badge={sohujiCopy.faq.badge} title={sohujiCopy.faq.title} />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="basis-12/12 md:basis-4/12" data-aos="fade-up">
          <FaqTabbar
            tabs={[
              {
                name: 'Production',
                onClick: () => setActiveFaq(randomFaqs[0]),
              },
              {
                name: 'Agents',
                onClick: () => setActiveFaq(randomFaqs[1]),
              },
              {
                name: 'Workflows',
                onClick: () => setActiveFaq(randomFaqs[2]),
              },
              {
                name: 'Security',
                onClick: () => setActiveFaq(randomFaqs[3]),
              },
            ]}
          />
        </div>
        <div className="basis-12/12 md:basis-8/12">
          <FaqList faqs={activeFaq} />
        </div>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default Faq
