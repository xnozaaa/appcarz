import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, sendResendEmail } from '@/lib/resend-email';
import {
  cleanText,
  guardPublicPost,
  isValidEmail,
} from '@/lib/request-security';

export async function POST(request: NextRequest) {
  const blocked = guardPublicPost(request, {
    scope: 'newsletter',
    limit: 6,
    maxBodyBytes: 4_096,
  });
  if (blocked) {
    return NextResponse.json({ error: blocked.error }, { status: blocked.status });
  }

  try {
    const body = await request.json();
    const email = cleanText(body.email, 254).toLowerCase();

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter your email address.' },
        { status: 400 }
      );
    }

    await sendResendEmail({
      to:
        process.env.NEWSLETTER_TO_EMAIL?.trim() ||
        process.env.BOOKING_TO_EMAIL?.trim() ||
        'info@appcarz.co.uk',
      subject: 'New App Carz newsletter signup',
      html: `
        <h2>New newsletter signup</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p>This person requested updates and special offers through the App Carz website.</p>
      `,
      replyTo: email,
      fromName: 'App Carz Website',
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to register your email right now.' },
      { status: 500 }
    );
  }
}
