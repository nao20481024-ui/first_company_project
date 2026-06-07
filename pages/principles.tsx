import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'
import { FiBarChart2, FiCpu, FiLink, FiShield } from 'react-icons/fi'

const { principles, brand } = sohujiCopy
const principleIcons = [
  <FiBarChart2 key="kpi" />,
  <FiCpu key="systems" />,
  <FiShield key="failure" />,
  <FiLink key="thread" />,
]

const Principles = () => {
  return (
    <PageTemplate title={`${principles.badge} - ${brand.name}`}>
      <section className="grid place-items-center">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge={principles.badge}
            title={principles.title}
            description={principles.description}
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {principles.items.map((item, index) => (
          <div key={item.title} data-aos="fade-up">
            <FeatureCard
              title={item.title}
              description={item.description}
              icon={principleIcons[index]}
            />
          </div>
        ))}
      </section>
    </PageTemplate>
  )
}

export default Principles
