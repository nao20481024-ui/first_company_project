import Button from 'components/atoms/Button'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { ja, sohujiCopy } from 'constants/sohujiCopy'
import React from 'react'
import { FiMail } from 'react-icons/fi'

const { contact, brand } = sohujiCopy

const Contact = () => {
  return (
    <>
      <PageTemplate title={`${contact.badge} - ${brand.name}`}>
        <section className="grid grid-cols-1 place-items-center gap-10 lg:gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 gap-12 sm:place-items-center lg:w-full lg:place-items-start" data-aos="fade-up-right">
            <div className="sm:text-center lg:text-left">
              <PageSentence
                title={contact.title}
                description={contact.description}
                badge={contact.badge}
              />
            </div>
            <div className="space-y-6">
              <IconListItem
                label={contact.emailLabel}
                value="support@sohuji.com"
                icon={<FiMail />}
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label={contact.form.name} />
                <InputGroup label={contact.form.email} />
              </div>
              <InputGroup label={contact.form.subject} />
              <TextAreaGroup label={contact.form.message} />
              <Button value={contact.form.submit} />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
