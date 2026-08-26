interface SendEmailInput {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  fromName?: string;
}

interface ResendResponse {
  id?: string;
  name?: string;
  message?: string;
}

export async function sendResendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
  fromName,
}: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const senderName =
    fromName ||
    process.env.RESEND_FROM_NAME?.trim() ||
    'App Carz Booking System';
  const senderEmail =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    'forms@send.shongoshomithi.co.uk';

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${senderName} <${senderEmail}>`,
      to: [to],
      subject,
      html,
      text,
      reply_to: replyTo,
    }),
  });

  const result = (await response.json()) as ResendResponse;
  if (!response.ok) {
    console.error(`Resend delivery failed with status ${response.status}`);
    throw new Error('Email delivery failed');
  }

  return result.id;
}

export function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
