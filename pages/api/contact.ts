import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type ContactResponse = {
  ok: boolean
  message?: string
}

type ContactFields = {
  name: string
  email: string
  subject: string
  message: string
}

const CONTACT_TO = process.env.CONTACT_EMAIL_TO ?? 'nao20481024@gmail.com'

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function sendViaSmtp(fields: ContactFields): Promise<void> {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpUser || !smtpPass) {
    throw new Error('SMTP not configured')
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  const summary = [
    'New contact form submission from the Dokyoai website',
    '',
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Subject: ${fields.subject}`,
    '',
    'Message:',
    fields.message,
  ].join('\n')

  await transporter.sendMail({
    from: `"Dokyoai Contact" <${smtpUser}>`,
    to: CONTACT_TO,
    replyTo: fields.email,
    subject: `[Dokyoai Contact] ${fields.subject}`,
    text: summary,
  })
}

async function sendViaWeb3Forms(fields: ContactFields): Promise<void> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!accessKey) {
    throw new Error('WEB3FORMS_ACCESS_KEY is not configured')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      name: fields.name,
      email: fields.email,
      subject: `[Dokyoai Contact] ${fields.subject}`,
      message: fields.message,
      from_name: 'Dokyoai Website',
      replyto: fields.email,
    }),
  })

  const data = (await response.json()) as {
    success?: boolean
    message?: string
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? 'Failed to send message')
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, message: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body ?? {}

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({ ok: false, message: 'Invalid request body' })
  }

  const fields: ContactFields = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  }

  if (!fields.name || !fields.email || !fields.subject || !fields.message) {
    return res.status(400).json({ ok: false, message: 'All fields are required' })
  }

  if (!isValidEmail(fields.email)) {
    return res.status(400).json({ ok: false, message: 'Invalid email address' })
  }

  if (fields.message.length > 10000) {
    return res.status(400).json({ ok: false, message: 'Message is too long' })
  }

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await sendViaSmtp(fields)
    } else {
      await sendViaWeb3Forms(fields)
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form send failed:', error)
    const message =
      error instanceof Error ? error.message : 'Failed to send message'
    return res.status(500).json({
      ok: false,
      message,
    })
  }
}
