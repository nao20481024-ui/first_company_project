import Button from 'components/atoms/Button'
import Text from 'components/atoms/Text'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import IconListItem from 'components/molecules/IconListItem'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import { sohujiCopy } from 'constants/sohujiCopy'
import React, { FormEvent, useState } from 'react'
import { FiCalendar, FiMail } from 'react-icons/fi'

const { contact, brand } = sohujiCopy

const bookingUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? contact.bookCall.url

async function submitViaFormSubmit(payload: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const response = await fetch(
    `https://formsubmit.co/ajax/${contact.emailAddress}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
        message: payload.message,
        _subject: `[Dokyoai Contact] ${payload.subject}`,
        _replyto: payload.email,
        _template: 'table',
      }),
    },
  )

  const data = (await response.json()) as {
    success?: string | boolean
    message?: string
  }

  if (data.success === 'true' || data.success === true) {
    return
  }

  throw new Error(data.message ?? contact.form.error)
}

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = event.currentTarget
    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { ok?: boolean; message?: string }

      if (response.ok && data.ok) {
        setStatus('success')
        form.reset()
        return
      }

      const needsFallback =
        response.status === 500 &&
        typeof data.message === 'string' &&
        data.message.includes('WEB3FORMS_ACCESS_KEY')

      if (needsFallback) {
        await submitViaFormSubmit(payload)
        setStatus('success')
        form.reset()
        return
      }

      throw new Error(data.message ?? contact.form.error)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : contact.form.error,
      )
    }
  }

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
                label={contact.bookCall.label}
                value={contact.bookCall.value}
                icon={<FiCalendar />}
                href={bookingUrl}
              />
              <IconListItem
                label={contact.emailLabel}
                value={contact.emailAddress}
                icon={<FiMail />}
                href={`mailto:${contact.emailAddress}`}
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-down-left">
            <form
              className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-2 gap-4">
                <InputGroup
                  label={contact.form.name}
                  name="name"
                  required
                />
                <InputGroup
                  label={contact.form.email}
                  name="email"
                  type="email"
                  required
                />
              </div>
              <InputGroup
                label={contact.form.subject}
                name="subject"
                required
              />
              <TextAreaGroup
                label={contact.form.message}
                name="message"
                required
              />
              {status === 'success' && (
                <Text
                  textStyle="SectionParagraph"
                  value={contact.form.success}
                />
              )}
              {status === 'error' && (
                <Text textStyle="SectionParagraph" value={errorMessage} />
              )}
              <Button
                type="submit"
                value={
                  status === 'sending'
                    ? contact.form.sending
                    : contact.form.submit
                }
                disabled={status === 'sending'}
              />
            </form>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Contact
