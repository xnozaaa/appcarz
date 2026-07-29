import { NextRequest, NextResponse } from 'next/server';
import { escapeHtml, sendResendEmail, text } from '@/lib/resend-email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = text(body.name);
    const email = text(body.email);
    const phone = text(body.phone);
    const pickupLocation = text(body.pickupLocation);
    const dropoffLocation = text(body.dropoffLocation);
    const passengers = text(body.passengers);
    const date = text(body.date);
    const time = text(body.time);
    const vehicleType = text(body.vehicleType || body.service);
    const additionalRequirements = text(
      body.additionalRequirements || body.specialRequests
    );

    if (
      !name ||
      !email ||
      !phone ||
      !pickupLocation ||
      !dropoffLocation ||
      !passengers ||
      !date ||
      !time
    ) {
      return NextResponse.json(
        { error: 'Please complete all required booking fields.' },
        { status: 400 }
      );
    }

    // Email content
    const emailContent = {
      subject: `New Booking Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B2838; border-bottom: 3px solid #FF6B6B; padding-bottom: 10px;">
            New Booking Request
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B2838; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          </div>

          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B2838; margin-top: 0;">Journey Details</h3>
            <p><strong>Pickup Location:</strong> ${escapeHtml(pickupLocation)}</p>
            <p><strong>Dropoff Location:</strong> ${escapeHtml(dropoffLocation)}</p>
            <p><strong>Date:</strong> ${escapeHtml(date)}</p>
            <p><strong>Time:</strong> ${escapeHtml(time)}</p>
            <p><strong>Number of Passengers:</strong> ${escapeHtml(passengers)}</p>
            <p><strong>Vehicle Type:</strong> ${escapeHtml(vehicleType || 'Not provided')}</p>
          </div>

          ${additionalRequirements ? `
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0B2838; margin-top: 0;">Additional Requirements</h3>
            <p>${escapeHtml(additionalRequirements)}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #686868; font-size: 12px;">
            <p>This booking request was submitted through the App Carz website.</p>
            <p>Please respond to the customer as soon as possible.</p>
          </div>
        </div>
      `,
    };

    await sendResendEmail({
      to: process.env.BOOKING_TO_EMAIL?.trim() || 'info@appcarz.co.uk',
      subject: emailContent.subject,
      html: emailContent.html,
      replyTo: email,
    });

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}
