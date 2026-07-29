import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, sendResendEmail, text } from '@/lib/resend-email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = text(body.email);

    if (!email) {
      return NextResponse.json(
        { error: 'Please enter your email address.' },
        { status: 400 }
      );
    }

    const messageId = await sendResendEmail({
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

    return NextResponse.json({ success: true, messageId });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    return NextResponse.json(
      { error: 'Unable to register your email right now.' },
      { status: 500 }
    );
  }
}
